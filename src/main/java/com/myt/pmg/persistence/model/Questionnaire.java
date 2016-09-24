package com.myt.pmg.persistence.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "quest")
public class Questionnaire extends BasicEntity {
	private String que;
	private String op1;
	private String op2;
	private String op3;
	private String op4;
	private String ans;

	public String getQue() {
		return que;	
	}

	public void setQue(String que) {
		this.que = que;
	}

	public String getOp1() {
		return op1;
	}

	public void setOp1(String op1) {
		this.op1 = op1;
	}

	public String getOp2() {
		return op2;
	}

	public void setOp2(String op2) {
		this.op2 = op2;
	}

	public String getOp3() {
		return op3;
	}

	public void setOp3(String op3) {
		this.op3 = op3;
	}

	public String getOp4() {
		return op4;
	}

	public void setOp4(String op4) {
		this.op4 = op4;
	}

	public String getAns() {
		return ans;
	}

	public void setAns(String ans) {
		this.ans = ans;
	}

}
