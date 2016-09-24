package com.myt.pmg.service;

import java.util.List;

import com.myt.pmg.persistence.dao.QuestionnaireDao;
import com.myt.pmg.persistence.model.Questionnaire;

public class QuestionnaireService {
	private QuestionnaireDao questionnaireDao;

	public void setQuestionnaireDao(QuestionnaireDao questionnaireDao) {
		this.questionnaireDao = questionnaireDao;
	}

	public List<Questionnaire> getQueList() {
		return questionnaireDao.getAllQuestions();
	}

	public String getAnswerForId(String id) {
		return questionnaireDao.findAnswerForId(id);
	}
}
