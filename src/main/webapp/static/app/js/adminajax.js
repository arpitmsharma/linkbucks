function getAllMembersData() {
	$.ajax({
		url : 'allmembers',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ data[i].username + '</td><td>' + data[i].email
						+ '</td><td>' + data[i].registeredIp + '</td><td>'
						+ data[i].lastAccessIp + '</td><td>' + data[i].country
						+ '</td><td>' + data[i].linkBroadcastCap + '</td><td>'
						+ data[i].level + '</td><td>' + data[i].verifiedClicks
						+ '</td></tr>'
				$("#allUsersTable tbody").append(newRowContent);
			}
		},
		error : function(data) {
			alert("Error in sending request");
		}
	});
}
function getTopTwentyMembersBolt() {
	$.ajax({
		url : 'toptwentybolt',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ data[i].username + '</td><td>' + data[i].email
						+ '</td><td>' + data[i].registeredIp + '</td><td>'
						+ data[i].lastAccessIp + '</td><td>' + data[i].country
						+ '</td><td>' + data[i].linkBroadcastCap + '</td><td>'
						+ data[i].level + '</td><td>' + data[i].verifiedClicks
						+ '</td></tr>'
				$("#boltTopTwentyUsersTable tbody").append(newRowContent);
			}
		},
		error : function(data) {
			alert("Error in sending request");
		}
	});
}

function getTopTwentyMembersRabbit() {
	$.ajax({
		url : 'toptwentyrabbit',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ data[i].username + '</td><td>' + data[i].email
						+ '</td><td>' + data[i].registeredIp + '</td><td>'
						+ data[i].lastAccessIp + '</td><td>' + data[i].country
						+ '</td><td>' + data[i].linkBroadcastCap + '</td><td>'
						+ data[i].level + '</td><td>' + data[i].verifiedClicks
						+ '</td></tr>'
				$("#rabbitTopTwentyUsersTable tbody").append(newRowContent);
			}
		},
		error : function(data) {
			alert("Error in sending request");
		}
	});
}

function getTopTwentyMembersTurtle() {
	$.ajax({
		url : 'toptwentyturtle',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ data[i].username + '</td><td>' + data[i].email
						+ '</td><td>' + data[i].registeredIp + '</td><td>'
						+ data[i].lastAccessIp + '</td><td>' + data[i].country
						+ '</td><td>' + data[i].linkBroadcastCap + '</td><td>'
						+ data[i].level + '</td><td>' + data[i].verifiedClicks
						+ '</td></tr>'
				$("#turtleTopTwentyUsersTable tbody").append(newRowContent);
			}
		},
		error : function(data) {
			alert("Error in sending request");
		}
	});
}

function getTopTwentyMembersSnail() {
	$.ajax({
		url : 'toptwentysnail',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ data[i].username + '</td><td>' + data[i].email
						+ '</td><td>' + data[i].registeredIp + '</td><td>'
						+ data[i].lastAccessIp + '</td><td>' + data[i].country
						+ '</td><td>' + data[i].linkBroadcastCap + '</td><td>'
						+ data[i].level + '</td><td>' + data[i].verifiedClicks
						+ '</td></tr>'
				$("#snailTopTwentyUsersTable tbody").append(newRowContent);
			}
		},
		error : function(data) {
			alert("Error in sending request");
		}
	});
}

function getOnlineMembers() {
	$.ajax({
		url : 'onlinemembers',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ data[i].username + '</td><td>' + data[i].email
						+ '</td><td>' + data[i].registeredIp + '</td><td>'
						+ data[i].lastAccessIp + '</td><td>' + data[i].country
						+ '</td><td>' + data[i].linkBroadcastCap + '</td><td>'
						+ data[i].level + '</td><td>' + data[i].verifiedClicks
						+ '</td></tr>'
				$("#onlineUsersTable tbody").append(newRowContent);
			}
		},
		error : function(data) {
			alert("Error in sending request");
		}
	});
}
function getUsersRegisteredToday() {
	$.ajax({
		url : 'registeredtoday',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ data[i].username + '</td><td>' + data[i].email
						+ '</td><td>' + data[i].registeredIp + '</td><td>'
						+ data[i].lastAccessIp + '</td><td>' + data[i].country
						+ '</td><td>' + data[i].linkBroadcastCap + '</td><td>'
						+ data[i].level + '</td><td>' + data[i].verifiedClicks
						+ '</td></tr>'
				$("#registeredTodayUsersTable tbody").append(newRowContent);
			}
		},
		error : function(data) {
			alert("Error in sending request");
		}
	});
}

function getMemberStatsByCountry() {
	$.ajax({
		url : 'statsbycountry',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ data[i].code + '</td><td>' + data[i].country
						+ '</td><td>' + data[i].noOfUsers + '</td><td>'
				$("#statsByCountryTable tbody").append(newRowContent);
			}
		},
		error : function(data) {
			alert("Error in sending request");
		}
	});
}

function getBannedMembers() {
	$
			.ajax({
				url : 'bannedmembers',
				type : 'GET',
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) {
					for (var i = 0; i < data.length; i++) {
						var newRowContent = '<tr><td>'
								+ (i + 1)
								+ '</td><td>'
								+ data[i].username
								+ '<input type="hidden" id="username'
								+ i
								+ '"  value="'
								+ data[i].username
								+ '"</td><td>'
								+ data[i].email
								+ '</td><td>'
								+ data[i].registeredIp
								+ '</td><td>'
								+ data[i].lastAccessIp
								+ '</td><td>'
								+ data[i].country
								+ '</td><td>'
								+ data[i].linkBroadcastCap
								+ '</td><td>'
								+ data[i].level
								+ '</td><td>'
								+ data[i].verifiedClicks
								+ '</td><td><div class="checkbox c-checkbox"><label> <input name="unban" id="check'
								+ i
								+ '" type="checkbox"> <span class="fa fa-check"></span></label></div></td></tr>'
						$("#bannedUsersTable tbody").append(newRowContent);
					}
				},
				error : function(data) {
					alert("Error in sending request");
				}
			});
}

function unbanUsers() {
	var fd = new FormData();

	for (var i = 0; i < jQuery("[name='unban']").length; i++) {
		var checker = document.getElementById("check" + i);
		if (checker.checked) {
			fd.append('username' + i, jQuery("#username" + i).val());
		}
	}

	$.ajax({
		url : 'unbanusers',
		data : fd,
		processData : false,
		contentType : false,
		type : 'POST',
		success : function(data) {
			alert("Users unbanned");
			getBannedMembers();
		}
	});
}

function banUsers() {
	var fd = new FormData();

	for (var i = 0; i < jQuery("[name='ban']").length; i++) {
		var checker = document.getElementById("checkban" + i);
		if (checker.checked) {
			fd.append('username' + i, jQuery("#username" + i).val());
		}
	}

	$.ajax({
		url : 'banusers',
		data : fd,
		processData : false,
		contentType : false,
		type : 'POST',
		success : function(data) {
			alert("Users banned");
			getReportAbuseOpen();
			getBannedMembers();
		}
	});
}

function getMembersWithMultipleIp() {
	$.ajax({
		url : 'multipleip',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ data[i].username + '</td><td>' + data[i].email
						+ '</td><td>' + data[i].registeredIp + '</td><td>'
						+ data[i].lastAccessIp + '</td><td>' + data[i].country
						+ '</td><td>' + data[i].linkBroadcastCap + '</td><td>'
						+ data[i].level + '</td><td>' + data[i].verifiedClicks
						+ '</td></tr>'
				$("#multipleIpUsersTable tbody").append(newRowContent);
			}
		},
		error : function(data) {
			alert("Error in sending request");
		}
	});
}
function getReportAbuseOpen() {
	$
			.ajax({
				url : 'reportabuseopen',
				type : 'GET',
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) {
					for (var i = 0; i < data.length; i++) {
						var newRowContent = '<tr><td>'
								+ (i + 1)
								+ '</td><td>'
								+ data[i].pageUrl
								+ '</td><td>'
								+ data[i].reportAgainst
								+ '<input type="hidden" id="username'
								+ i
								+ '"  value="'
								+ data[i].reportAgainst
								+ '"</td><td>'
								+ data[i].reportedBy
								+ '</td><td>'
								+ data[i].reason
								+ '</td><td>'
								+ convertDate(data[i].reportDate)
								+ '</td><td>'
								+ data[i].evidencePath
								+ '</td><td><div class="checkbox c-checkbox"><label> <input name="ban" id="checkban'
								+ i
								+ '" type="checkbox"> <span class="fa fa-check"></span></label></div></td></tr>'
						$("#unresolvedReportsTable tbody")
								.append(newRowContent);
					}
				},
				error : function(data) {
					alert("Error in sending request");
				}
			});
}
function getReportAbuseClosed() {
	$.ajax({
		url : 'reportabuseclosed',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ data[i].pageUrl + '</td><td>' + data[i].reportAgainst
						+ '</td><td>' + data[i].reportedBy + '</td><td>'
						+ data[i].reason + '</td><td>'
						+ convertDate(data[i].reportDate) + '</td><td>'
						+ data[i].evidencePath + '</td><td>'
				$("#resolvedReportsTable tbody").append(newRowContent);
			}
		},
		error : function(data) {
			alert("Error in sending request");
		}
	});
}

function getUsersForCountry(code) {
	$.ajax({
		url : 'usersbycountry/{code}',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ data[i].username + '</td><td>' + data[i].email
						+ '</td><td>' + data[i].registeredIp + '</td><td>'
						+ data[i].lastAccessIp + '</td><td>' + data[i].country
						+ '</td><td>' + data[i].linkBroadcastCap + '</td><td>'
						+ data[i].level + '</td><td>' + data[i].verifiedClicks
						+ '</td></tr>'
				$("#countryusersTable tbody").append(newRowContent);
			}
		},
		error : function(data) {
			alert("Error in sending request");
		}
	});
}

function getFAQs() {
	$
			.ajax({
				url : 'geteditfaq',
				type : 'GET',
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) {
					for (var i = 0; i < data.length; i++) {
						var newRowContent = '<tr><td>'
								+ (i + 1)
								+ '</td><td>'
								+ data[i].question
								+ '<input type="hidden" id="faqid'
								+ i
								+ '"  value="'
								+ data[i].id
								+ '"</td><td>'
								+ data[i].answer
								+ '</td><td><div class="switch"><label> <input name="faq" id="checkfaq'
								+ i
								+ '" type="checkbox"> <span class="switch"></span></label></div></td></tr>'
						$("#faqTable tbody").append(newRowContent);
						setChecked(data);
					}
				},
				error : function(data) {
					alert("Error in sending request");
				}
			});
}

function setChecked(data) {
	for (var i = 0; i < data.length; i++) {
		$("#checkfaq" + i).prop("checked", data[i].active);
	}
}
function editFaq() {
	var fd = new FormData();

	for (var i = 0; i < jQuery("[name='faq']").length; i++) {
		var checker = document.getElementById("checkfaq" + i);
		fd.append('faqid' + i, jQuery("#faqid" + i).val());
		if (checker.checked)
			fd.append('checkfaq' + i, "true");
		else
			fd.append('checkfaq' + i, "false");
	}

	$.ajax({
		url : 'editfaq',
		data : fd,
		processData : false,
		contentType : false,
		type : 'POST',
		success : function(data) {
			$("#faqTable tbody tr").remove();
			getFAQs();
		}
	});
}

function getQues() {
	$
			.ajax({
				url : 'ques',
				type : 'GET',
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) {
					for (var i = 0; i < data.length; i++) {
						var newRowContent = '<tr><td>'
								+ (i + 1)
								+ '</td><td>'
								+ data[i].question
								+ '<input type="hidden" id="qid'
								+ i
								+ '"  value="'
								+ data[i].id
								+ '"</td><td>'
								+ data[i].op1
								+ '</td><td>'
								+ data[i].op2
								+ '</td><td>'
								+ data[i].op3
								+ '</td><td>'
								+ data[i].op4
								+ '</td><td>'
								+ data[i].ans
								+ '</td><td>'
								+ data[i].active
								+ '</td><td><div class="checkbox c-checkbox"><label> <input name="quesactive" id="checkques'
								+ i
								+ '" type="checkbox"> <span class="fa fa-check"></span></label></div></td></tr>'
						$("#quesTable tbody").append(newRowContent);
					}
				},
				error : function(data) {
					alert("Error in sending request");
				}
			});
}

function convertDate(date) {
	var d = new Date(date);
	var month = d.getMonth() + 1;
	var formattedDate = d.getDate() + "-" + month + "-" + d.getFullYear();
	var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
	var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
	var formattedTime = hours + ":" + minutes;
	formattedDate = formattedDate + " " + formattedTime;
	return formattedDate;
}
