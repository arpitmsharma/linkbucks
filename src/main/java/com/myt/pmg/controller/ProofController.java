package com.myt.pmg.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Date;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.myt.pmg.common.UtilFunction;
import com.myt.pmg.helper.DownloadHandler;
import com.myt.pmg.persistence.model.Proof;
import com.myt.pmg.persistence.model.User;
import com.myt.pmg.persistence.model.UserLink;
import com.myt.pmg.service.ProofService;
import com.myt.pmg.service.UserLinkService;

@Controller
public class ProofController {

	private ProofService proofService;

	public void setProofService(ProofService proofService) {
		this.proofService = proofService;
	}

	private UserLinkService userlinkService;

	public void setUserlinkService(UserLinkService userlinkService) {
		this.userlinkService = userlinkService;
	}

	private DownloadHandler downloadHandler;

	public void setDownloadHandler(DownloadHandler downloadHandler) {
		this.downloadHandler = downloadHandler;
	}

	@RequestMapping(value = "/linkverifier", method = RequestMethod.GET)
	public String showCreateProof(Model model, HttpSession session) {
		User user = UtilFunction.getCurrentUser(session);
		if (user == null) {
			session.invalidate();
		}
		model.addAttribute("user", user);
		return "linkverifier";
	}

	@RequestMapping(value = "/linkverifier", method = RequestMethod.POST)
	@ResponseBody
	public String createProof(HttpServletRequest request, HttpSession session)
			throws IllegalStateException, IOException {
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		ResourceBundleMessageSource bean = new ResourceBundleMessageSource();
		bean.setBasename("paths");
		String saveDirectory = bean.getMessage("File.proof.savepath", null,
				Locale.getDefault());
		int i = 0;
		Map<?, ?> map = multipartRequest.getFileMap();
		MultipartFile mfile = null;
		for (Iterator<?> iter = map.values().iterator(); iter.hasNext();) {
			mfile = (MultipartFile) iter.next();
			Proof proof = new Proof();
			String fileName = mfile.getOriginalFilename();
			long hash = (new Date()).getTime();
			fileName = hash + fileName;
			if (!"".equalsIgnoreCase(fileName)) {
				UserLink ul = userlinkService.findByLinkId(request
						.getParameter("linkIds" + i));
				if (ul != null) {
					mfile.transferTo(new File(saveDirectory + fileName));
					System.out.println(saveDirectory + fileName);
					proof.setLinkId(request.getParameter("linkIds" + i));
					proof.setFileName(fileName);
					proof.setUserId(UtilFunction.getCurrentUser(session)
							.getId());
					proof.setSubmissionDate(new Date());
					proofService.createProof(proof);
					ul.setClicked(true);
					// ul.setProofId(proofId);
					userlinkService.update(ul);
					i++;
				}
			}
		}
		return "dashboard";
	}

	@RequestMapping(value = "/downloadproof.do", method = RequestMethod.POST, produces = {
			"application/octet-stream", "application/x-please-download-me" })
	public void downloadProof(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam("fileName") String fileName) {
		// downloadHandler.doDownload(request, response, fileName);
		int BUFFER_SIZE = 4096;
		ResourceBundleMessageSource bean = new ResourceBundleMessageSource();
		bean.setBasename("paths");
		String fullPath = bean.getMessage("File.proof.savepath", null,
				Locale.getDefault())
				+ fileName;
		File downloadFile = new File(fullPath);
		System.out.println(fullPath);
		FileInputStream inputStream = null;
		try {
			inputStream = new FileInputStream(downloadFile);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}

		// get MIME type of the file
		// String mimeType = context.getMimeType(fullPath);
		String mimeType = null;
		if (mimeType == null) {
			// set to binary type if MIME mapping not found
			mimeType = "application/x-please-download-me";
		}
		System.out.println("MIME type: " + mimeType);

		// set content attributes for the response
		response.setContentType(mimeType);
		response.setContentLength((int) downloadFile.length());

		// set headers for the response
		String headerKey = "Content-Disposition";
		String headerValue = String.format("attachment; filename=\"%s\"",
				downloadFile.getName());
		response.setHeader(headerKey, headerValue);

		byte[] buffer = new byte[BUFFER_SIZE];
		int bytesRead = -1;
		// get output stream of the response
		OutputStream outStream;
		try {
			outStream = response.getOutputStream();
			// write bytes read from the input stream into the output stream
			while ((bytesRead = inputStream.read(buffer)) != -1) {
				outStream.write(buffer, 0, bytesRead);
			}

			inputStream.close();
			outStream.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
