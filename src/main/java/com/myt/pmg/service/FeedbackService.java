package com.myt.pmg.service;

import java.util.List;

import com.myt.pmg.persistence.dao.FeedbackDao;
import com.myt.pmg.persistence.model.Feedback;

public class FeedbackService {
	private FeedbackDao feedbackDao;

	public void setFeedbackDao(FeedbackDao feedbackDao) {
		this.feedbackDao = feedbackDao;
	}

	public long getRatingForUser(String userid) {
		long rating = 0;
		List<Feedback> ratingList = findAllForUser(userid);
		for (Feedback feedback : ratingList) {
			rating += feedback.getRating();
		}
		return rating;
	}
	
	public void create(Feedback feedback){
		feedbackDao.create(feedback);
	}

	public List<Feedback> findAllForUser(String userid) {
		return feedbackDao.findAllForUser(userid);
	}
}
