package com.myt.pmg.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.support.SessionStatus;

import com.myt.pmg.common.UtilFunction;
import com.myt.pmg.dto.LUV;
import com.myt.pmg.dto.LinkReciever;
import com.myt.pmg.dto.LinkStatus;
import com.myt.pmg.dto.LinkVerifier;
import com.myt.pmg.persistence.model.Feedback;
import com.myt.pmg.persistence.model.Link;
import com.myt.pmg.persistence.model.User;
import com.myt.pmg.persistence.model.UserLink;
import com.myt.pmg.service.FeedbackService;
import com.myt.pmg.service.LinkService;
import com.myt.pmg.service.UserLinkService;

@Controller
public class LinkController {
	static Logger logger = Logger.getLogger(LinkController.class);

	private LinkService linkService;

	public void setLinkService(LinkService linkService) {
		this.linkService = linkService;
	}

	private FeedbackService feedbackService;

	public void setFeedbackService(FeedbackService feedbackService) {
		this.feedbackService = feedbackService;
	}

	private UserLinkService userLinkService;

	public void setUserLinkService(UserLinkService userLinkService) {
		this.userLinkService = userLinkService;
	}

	@RequestMapping(value = "/linkbroadcaster", method = RequestMethod.GET)
	public String showlinkbroadcaster(Model model, HttpSession session) {
		User user = UtilFunction.getCurrentUser(session);
		model.addAttribute("user", user);
		model.addAttribute("link", new Link());
		return "linkbroadcaster";
	}

	@PreAuthorize(value = "hasRole('ROLE_USER')")
	@RequestMapping(value = "/linkbroadcaster", method = RequestMethod.POST)
	public @ResponseBody String createNewLink(@RequestParam("url") String urls,
			SessionStatus sessionStatus, HttpSession session) {
		User user = UtilFunction.getCurrentUser(session);
		if (null == user) {
			// Send User to same Page showing user is not logged in
			return "linkbroadcaster";
		}
		for (String url : urls.split(",")) {
			Link link = new Link();
			link.setUrl(url);
			linkService.submitLink(link, user);
		}
		return "dashboard";
	}

	@PreAuthorize(value = "hasRole('ROLE_USER')")
	@RequestMapping("/deletelink")
	public void deleteLink() {
	}

	@PreAuthorize(value = "hasRole('ROLE_USER')")
	@RequestMapping(value = "/linkverifierdata", produces = "application/json")
	@ResponseBody
	public List<LinkVerifier> linkVerifierData(HttpSession session,
			HttpServletResponse response) {

		User user = UtilFunction.getCurrentUser(session);
		String userid = user.getId();
		List<LinkVerifier> linklist = linkService
				.getLinksForVerfication(userid);
		if (linklist.isEmpty()) {
			logger.error("verification list empty");
		}
		return linklist;
	}

	@PreAuthorize(value = "hasRole('ROLE_USER')")
	@RequestMapping(value = "/linkrecieverdata", produces = "application/json")
	@ResponseBody
	public List<LinkReciever> linkReciever(HttpSession session,
			HttpServletResponse response) {
		// Here Add Logic to get top N Link and N will be coming from Requet
		// Parameter for eg N and Pass N to database so we will not be loading
		// all Link and thas has not upload proof
		User user = UtilFunction.getCurrentUser(session);
		if (user == null) {
			session.invalidate();
		}
		String userid = user.getId();
		List<LinkReciever> linklist = linkService.getLinksPostedToUser(userid);
		if (linklist.isEmpty()) {
			logger.error("list is empty");
		}
		return linklist;
	}

	@RequestMapping(value = "/linkstatus", produces = "application/json")
	@ResponseBody
	public LinkStatus linkStatus(HttpSession session,
			HttpServletResponse response) {
		User user = UtilFunction.getCurrentUser(session);
		String userid = user.getId();
		LinkStatus ls = new LinkStatus();
		ls.setLinksClicked(userLinkService
				.countLinksPostedToUserAndClicked(userid)
				/ userLinkService.countLinksPostedToUser(userid));
		ls.setLinksVerified(userLinkService
				.countLinksPostedToUserAndVerified(userid)
				/ userLinkService.countLinksPostedToUserAndClicked(userid));
		ls.setLinksVerificationPending((userLinkService
				.countLinksPostedToUserAndClicked(userid) - userLinkService
				.countLinksPostedToUserAndVerified(userid))
				/ userLinkService.countLinksPostedToUserAndClicked(userid));
		ls.setLinksServed(userLinkService.countLinksServedByUser(userid));
		ls.setLinksApproved(userLinkService
				.countLinksServedByUserAndApproved(userid)
				/ userLinkService.countLinksServedByUser(userid));
		ls.setLinksDisapproved(userLinkService
				.countLinksServedByUserAndDisapproved(userid)
				/ userLinkService.countLinksServedByUser(userid));
		System.out.println(ls);
		return ls;
	}

	@RequestMapping(value = "/gettoplinks", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<LUV> getTopLinks(HttpSession session) {
		List<LUV> luvList = linkService.findTopLinks(5);
		return luvList;
	}

	@PreAuthorize(value = "hasRole('ROLE_USER')")
	@RequestMapping("/linkreciever")
	public String linkRecieverPage(HttpSession session, Model model) {
		User user = UtilFunction.getCurrentUser(session);
		if (user == null) {
			session.invalidate();
		}
		model.addAttribute("user", user);
		return "linkreciever";
	}

	@PreAuthorize(value = "hasRole('ROLE_USER')")
	@RequestMapping(value = "/proofresult", method = RequestMethod.POST)
	@ResponseBody
	public String showLinkVerifier(HttpServletRequest request,
			HttpSession session) {
		User user = UtilFunction.getCurrentUser(session);
		if (user == null) {
			session.invalidate();
		}
		int i = 0;
		while (request.getParameter("linkId" + i) != null) {
			UserLink userlink = userLinkService.findByLinkId(request
					.getParameter("linkId" + i));
			if (userlink != null) {
				int rating = Integer.parseInt(request
						.getParameter("rating" + i));
				if (rating == -99) {
					// proofService.delete(userlink.getProofId());
					userlink.setVerified(false);
				} else {
					userlink.setVerified(true);
					Feedback fb = new Feedback();
					fb.setUserId(userlink.getUserId());
					fb.setRating(rating);
					feedbackService.create(fb);
				}
				userLinkService.update(userlink);
				i++;
			}
		}
		return "dashboard";
	}

	@PreAuthorize(value = "hasRole('ROLE_USER')")
	@RequestMapping("/mylinks")
	@ResponseBody
	public List<LUV> getMyLinks(HttpSession session) {
		User user = UtilFunction.getCurrentUser(session);
		if (user == null)
			session.invalidate();
		List<Link> linkList = linkService.getLinksPostedByUser(user.getId());
		List<LUV> luvList = new ArrayList<LUV>();
		for (Link link : linkList) {
			long days = (new Date().getTime() - (link.getCreationTime())
					.getTime()) / (24 * 3600 * 1000l);
			luvList.add(new LUV(link.getCreationTime(), link.getId(), null,
					link.getUrl(), userLinkService.countClicksOnLink(link
							.getId()), days, link.isActive()));
		}
		return luvList;
	}

	@RequestMapping(value = "/editmylinks", method = RequestMethod.POST)
	@ResponseBody
	public String showEditFaq(HttpServletRequest request) {
		User user = UtilFunction.getCurrentUser(request.getSession());
		if (user == null) {
			request.getSession().invalidate();
		}
		int i = 0;
		while (request.getParameter("linkid" + i) != null) {
			Link link = linkService
					.findById(request.getParameter("linkid" + i));
			if (link != null) {
				if (request.getParameter("checklink" + i).equalsIgnoreCase(
						"true")) {
					link.setActive(true);
				} else
					link.setActive(false);
				linkService.update(link);
			}
			i++;
		}
		return "success";
	}

	@PreAuthorize(value = "hasRole('ROLE_USER')")
	@RequestMapping("/contributors")
	public String contributors(HttpSession session, Model model) {
		User user = UtilFunction.getCurrentUser(session);
		if (user == null)
			session.invalidate();
		model.addAttribute("user", user);
		return "contributors";
	}

}
