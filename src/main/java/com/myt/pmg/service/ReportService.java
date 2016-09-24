package com.myt.pmg.service;

import java.util.List;

import com.myt.pmg.persistence.dao.ReportDao;
import com.myt.pmg.persistence.model.Report;

public class ReportService {
	private ReportDao reportDao;

	public void setReportDao(ReportDao reportDao) {
		this.reportDao = reportDao;
	}

	public void createReport(Report report) {
		reportDao.add(report);
	}

	public List<Report> findOpenReports() {
		return reportDao.findOpenReports();
	}

	public List<Report> findClosedReports() {
		return reportDao.findClosedReports();
	}

	public long countClosedReports() {
		return reportDao.countClosedReports();
	}

	public long countOpenReports() {
		return reportDao.countOpenReports();
	}
}
