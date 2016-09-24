package com.myt.pmg.persistence.dao;

import java.util.List;

import com.myt.pmg.persistence.model.Questionnaire;

public class QuestionnaireDao extends BasicDaoImpl<Questionnaire> {

	public List<Questionnaire> getAllQuestions() {
		final String COLLECTION_NAME = getMongoTemplate().getCollectionName(
				Questionnaire.class);
		return (List<Questionnaire>) getMongoTemplate().findAll(
				Questionnaire.class, COLLECTION_NAME);
	}

	public String findAnswerForId(String id) {
		return super.findById(id, Questionnaire.class).getAns();
	}
}
