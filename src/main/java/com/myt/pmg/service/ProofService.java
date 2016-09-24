package com.myt.pmg.service;

import java.util.List;

import com.myt.pmg.persistence.dao.ProofDao;
import com.myt.pmg.persistence.model.Proof;

public class ProofService {
	private ProofDao proofDao;

	public void setProofDao(ProofDao proofDao) {
		this.proofDao = proofDao;
	}

	public String createProof(Proof proof) {
		return proofDao.add(proof);
	}

	public long countClicksToday() {
		return proofDao.countClicksToday();
	}

	public long countClicksMonth() {
		return proofDao.countClicksMonth();
	}

	public List<Proof> findProofsForVerfication(String userid) {
		return proofDao.findProofsForVerification(userid);
	}

	public Proof findProofById(String proofid) {
		return proofDao.findProofById(proofid);
	}

	public List<Proof> getProofsForLinkId(String linkid) {
		return proofDao.findProofsForLinkId(linkid);
	}

	public void delete(String proofId) {
		proofDao.delete(findProofById(proofId));
	}

}
