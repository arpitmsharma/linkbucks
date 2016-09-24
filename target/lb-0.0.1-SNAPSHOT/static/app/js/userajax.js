function getMyLinks() {
	$.ajax({
		url : 'mylinks',
		type : 'GET',
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				var newRowContent = '<tr><td>' + (i + 1) + '</td><td>'
						+ convertDate(data[i].creationDate) + '</td><td>'
						+ data[i].linkUrl + '</td><td>' + data[i].noOfClicks
						+ '</td><td>' + data[i].days
						+ '</td><td class="text-center"><input id="linkid' + i
						+ '" type="hidden" name="mylink" value="'
						+ data[i].linkId
						+ '"><label class="switch"><input id="checklink' + i
						+ '" type="checkbox"><span></span></label></td></tr>'
				$("#myLinksTable tbody").append(newRowContent);
			}
			setChecked(data);
		},
		error : function(data) {
		}
	});
}

function editMyLinks() {
	var fd = new FormData();

	for (var i = 0; i < jQuery('[name="mylink"]').length; i++) {
		var checker = document.getElementById("checklink" + i);
		fd.append('linkid' + i, jQuery("#linkid" + i).val());
		if (checker.checked)
			fd.append('checklink' + i, "true");
		else
			fd.append('checklink' + i, "false");
	}

	$.ajax({
		url : 'editmylinks',
		data : fd,
		processData : false,
		contentType : false,
		type : 'POST',
		success : function(data) {
			$("#myLinksTable tbody tr").remove();
			getMyLinks();
		}
	});
}

function setChecked(data) {
	for (var i = 0; i < data.length; i++) {
		$("#checklink" + i).prop("checked", data[i].active);
	}
}
function getTopContributors() {
	$
			.ajax({
				url : 'topcontributors', // php script to retern json encoded
				// string
				type : 'GET', // set sending HTTP Request type
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) { // callback method for further
					// manipulations
					for (var i = 0; i < data.length; i++) {
						var texttoAppend = '<tr><td><div class="media"><a href="#" class="pull-left">'
								+ '<img src="static/app/img/user/'
								+ data[i].picName
								+ '" class="media-object img-responsive img-circle"></a><div class="media-body"><div class="pull-right badge baed-info">'
								+ data[i].level
								+ '</div><h3 class="media-heading">Username: '
								+ data[i].username
								+ '</h3><p><h4>Contribution: $'
								+ data[i].contribution
								+ '</h4></p><p><h4>Total Links Verified: '
								+ data[i].linksVerified
								+ '</h4></p><p><h4>Total Successful execution: '
								+ data[i].linksVerifyPercent
								+ '%</h4></p><p><h4>Appreciation Gained: '
								+ data[i].rating
								+ '<em class="fa fa-star fa-sm text-warning inbox-mail-starred"></em></h4></p></div></div></td></tr>';
						$("#topContributors tbody").append(texttoAppend);
					}
				},
				error : function(data) { // if error occured
				}
			});
}

function getAllContributors() {
	$
			.ajax({
				url : 'allcontributors', // php script to retern json encoded
				// string
				type : 'GET', // set sending HTTP Request type
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) { // callback method for further
					// manipulations
					for (var i = 0; i < data.length; i++) {
						var texttoAppend = '<tr><td><div class="media"><a href="#" class="pull-left">'
								+ '<img src="static/app/img/user/'
								+ data[i].picName
								+ '" class="media-object img-responsive img-circle"></a><div class="media-body"><div class="pull-right badge baed-info">'
								+ data[i].level
								+ '</div><h3 class="media-heading">Username: '
								+ data[i].username
								+ '</h3><p><h4>Contribution: $'
								+ data[i].contribution
								+ '</h4></p><p><h4>Total Links Verified: '
								+ data[i].linksVerified
								+ '%</h4></p><p><h4>Total Successful execution: '
								+ data[i].linksVerifyPercent
								+ '</h4></p><p><h4>Appreciation Gained: '
								+ data[i].rating
								+ '<em class="fa fa-star fa-sm text-warning inbox-mail-starred"></em></h4></p></div></div></td></tr>';
						$("#contributorsTable tbody").append(texttoAppend);
					}
				},
				error : function(data) { // if error occured
				}
			});
}

function getTopLinks() {
	$.ajax({
		url : 'gettoplinks', // php script to retern json encoded
		// string
		type : 'GET', // set sending HTTP Request type
		async : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) { // callback method for further
			// manipulations
			for (var i = 0; i < data.length; i++) {
				var texttoAppend = '<tr><td>' + (i + 1) + '</td><td>'
						+ convertDate(data[i].creationDate) + '</td><td>'
						+ data[i].username + '</td><td>' + data[i].linkUrl
						+ '</td><td>' + data[i].noOfClicks + '</td><td>'
						+ data[i].days
				$("#luvTable tbody").append(texttoAppend);
			}
		},
		error : function(data) { // if error occured
		}
	});
}

function getTopUsers() {
	$
			.ajax({
				url : 'topusers', // php script to retern json encoded string
				type : 'GET', // set sending HTTP Request type
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) { // callback method for further
					// manipulations
					for (var i = 0; i < data.length; i++) {
						var texttoAppend = '<li><!-- START User status--> <a href="#" class="media p mt0"><span class="pull-right"> <span class="point point-success point-lg"></span></span> <span class="pull-left"> <!-- Contact avatar--> <img src="static/app/img/user/'
								+ data[i].picName
								+ '" style="width: 40px; height: 40px" alt="Image" class="media-object img-circle"></span> <!-- Contact info--> <span class="media-body"> <span class="media-heading"> <strong class="text-white">'
								+ data[i].firstname
								+ ' '
								+ data[i].lastname
								+ '</strong> <br> <small class="text-muted">'
								+ data[i].username
								+ '</small></span></span></a> <!-- END User status--></li>';
						$("#topPlayers").append(texttoAppend);
					}
					var texttoAppend = '<li><!-- Optional link to list more users--> <a href="#" title="See more contacts" class="p"> <strong> <small class="text-muted">&hellip;</small></strong></a></li>'
					$("#topPlayers").append(texttoAppend);
				},
				error : function(data) { // if error occured
				}
			});
}

function getAllNotificationText() {

	$
			.ajax({
				url : 'notificationmessage', // php script to retern json
				// encoded string
				type : 'GET', // set sending HTTP Request type
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) { // callback method for further
					// manipulations
					$('.list-group-item').remove();
					for (var i = 0; i < data.length; i++) {
						var texttoAppend = '<a href="#" onclick="changeNotificationStatus(\''
								+ data[i].id
								+ '\')" class="list-group-item"><div class="media" ><div class="pull-left"><em class="fa fa-envelope-o fa-2x text-success"></em></div><div class="media-body clearfix"><div class="media-heading">New Message</div><p class="m0"><small>'
								+ data[i].message
								+ '</small></p>'
								+ convertDate(data[i].date)
								+ '</div></div></a>'
						$("#notificationText").append(texttoAppend);
					}
				},
				error : function(data) { // if error occured
				}
			});

}

function changeNotificationStatus(id) {
	var fd = new FormData();
	fd.append("id", id);
	$.ajax({
		url : 'changenotificationstatus',
		data : fd,
		processData : false,
		contentType : false,
		type : 'POST',
		success : function(data) {
			getNoOfNotification();
		}
	});
}

function getNoOfNotification() {
	// To Do This function need to be merged with linkverifier Page
	$
			.ajax({
				url : 'noofNotification', // php script to retern json encoded
				// string
				type : 'GET', // set sending HTTP Request type
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) { // callback method for further
					// manipulations
					document.getElementById("notificationbellheader").innerHTML = data;
					document.getElementById("notificationbellsidebar").innerHTML = data;
				},
				error : function(data) { // if error occured
				}
			});
}

function getLinkStatus() {
	$
			.ajax({
				url : 'linkstatus', // php script to retern json encoded string
				type : 'GET', // set sending HTTP Request type
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) { // callback method for further
					// manipulations
					document.getElementById("pb-1").style["width"] = data.linksClicked
							+ "%";
					document.getElementById("pb-2").style["width"] = data.linksVerificationPending
							+ "%";
					document.getElementById("pb-3").style["width"] = data.linksVerified
							+ "%";
					document.getElementById("pb-4").style["width"] = data.linksServed
							+ "%";
					document.getElementById("pb-5").style["width"] = data.linksApproved
							+ "%";
					document.getElementById("pb-6").style["width"] = data.linksDisapproved
							+ "%";
					if (document.getElementById("pb-01") != null) {
						document.getElementById("pb-01").style["width"] = data.linksClicked
								+ "%";
						document.getElementById("pb-02").style["width"] = data.linksVerificationPending
								+ "%";
						document.getElementById("pb-03").style["width"] = data.linksVerified
								+ "%";
						document.getElementById("pb-04").style["width"] = data.linksServed
								+ "%";
						document.getElementById("pb-05").style["width"] = data.linksApproved
								+ "%";
						document.getElementById("pb-06").style["width"] = data.linksDisapproved
								+ "%";
					}
				},
				error : function(data) { // if error occured
				}
			});
}

function addRows() {
	// To Do This function need to be merged with linkverifier Page
	$
			.ajax({
				url : 'linkrecieverdata', // php script to retern json encoded
				// string
				type : 'GET', // set sending HTTP Request type
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) { // callback method for further
					// manipulations
					for (var i = 0; i < data.length; i++) {
						var newRowContent = '<tr><td>'
								+ (i + 1)
								+ '</td><td>'
								+ data[i].userName
								+ '</td><td>'
								+ data[i].linkUrl
								+ '</td><td div class="form-group"><div class="col-sm-12"><input type="text"  name="addUrls" class="form-control"></div></td></div><td class="text-center"><div data-label="300s"class="radial-bar radial-bar-55 radial-bar-xs"></div></td><td><div class="form-group"><div class="col-sm-10"><input type="hidden" id="linkIds'
								+ i
								+ '" name="linkIds'
								+ i
								+ '" value="'
								+ data[i].linkId
								+ '"/><div id="upload-drop"class="box-placeholder text-center"><input type="file" name="files" id="files'
								+ i
								+ '" ><p><em class="fa fa-cloud-upload fa-2x"></em></p></div></div></div></td><td><div class="checkbox c-checkbox"><label> <input id="checker'
								+ i
								+ '" type="checkbox"> <span class="fa fa-check"></span></label></div></td></tr>';
						$("#proofTable tbody").append(newRowContent);
					}
				},
				error : function(data) { // if error occured
				}
			});

}

function sendProof(formName) {
	var fd = new FormData();

	for (var i = 0; i < jQuery("[name='files']").length; i++) {
		var checker = document.getElementById("checker" + i);
		if (checker.checked) {
			if (jQuery("#files" + i).get(0) != null) {
				fd.append('linkIds' + i, jQuery("#linkIds" + i).val());
				fd.append('files' + i, jQuery("#files" + i).get(0).files[0]);
			}
		}
	}

	$.ajax({
		url : 'linkverifier',
		data : fd,
		async : false,
		processData : false,
		contentType : false,
		type : 'POST',
		success : function(data) {
			window.location = data;
		}
	});
}

function sendLink(formName) {

	var data = $('#' + formName).serialize(); // serialize all the data in the
	// form
	$
			.ajax({
				url : 'linkbroadcaster', //   script to retern json encoded
				// string
				data : data, // serialized data to send on serve
				type : 'POST', // set sending HTTP Request type
				async : false,
				success : function(data) { // callback method for further
					// manipulations
					alert("Thanks for posting new links. PMG will share the links after verifying their authenticity");
					window.location = data;
				},
				error : function(data) { // if error occured
					alert("Error");
				}
			});
}

function loadProof(fileName) {
	$("#jquery_jplayer_1").jPlayer("setMedia", {
		m4v : "static/app/img/proofs/" + fileName
	}).jPlayer("play");
}

function addRowsToTableVerifier() {
	// To Do This function need to be merged with linkverifier Page
	$
			.ajax({
				url : 'linkverifierdata', // php script to retern json encoded
				// string
				type : 'GET', // set sending HTTP Request type
				async : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) { // callback method for further
					// manipulations
					for (var i = 0; i < data.length; i++) {
						var newRowContent = '<tr><td>'
								+ (i + 1)
								+ '</td><td>'
								+ data[i].userName
								+ '</td><td>'
								+ data[i].url
								+ '</td><td>'
								+ data[i].adUrl
								+ '</td><td>'
								+ convertDate(data[i].submissionDate)
								+ '</td><td class="text-center">'
								+ '<a href="#" type="button" onclick="javascript:loadProof(\''
								+ data[i].proofFileName
								+ '\');"><div data-label="25%" class="fa fa-play fa-2x"></div></a></td><td class="text-center">'
								+ '<a href="#" type="button" onclick="javascript:downloadProof(\''
								+ data[i].proofFileName
								+ '\');"><div data-label="25%" class="fa fa-play fa-2x"></div></a></td><td class="text-center"><div class="rating-f"><select id="rating'
								+ i
								+ '"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div> </td><td><div class="checkbox c-checkbox">'
								+ '<label><input type="hidden" name="linkIds" id="linkId'
								+ i
								+ '" value="'
								+ data[i].linkId
								+ '"><input id="checkbox'
								+ i
								+ '" name="checkbox" type="checkbox"><span class = "fa fa-check"></span></label></div></td></tr>';
						$("#proofverification tbody").append(newRowContent);
					}
				},
				error : function(data) { // if error occured
					alert("Error in sending request");
				}
			});

}

function sendProofResult(buttonId) {
	var fd = new FormData();
	for (var i = 0; i < jQuery("[name='linkIds']").length; i++) {
		var checker = document.getElementById("checkbox" + i);
		if (checker.checked && buttonId == "approve") {
			fd.append('linkId' + i, jQuery("#linkId" + i).val());
			fd.append('rating' + i, jQuery("#rating" + i).val())
		} else if (checker.checked && buttonId == "disapprove") {
			fd.append('linkId' + i, jQuery("#linkId" + i).val());
			fd.append('rating' + i, -99)
		}

	}

	$.ajax({
		url : 'proofresult',
		data : fd,
		processData : false,
		contentType : false,
		type : 'POST',
		success : function(data) {
			window.location = data;
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

function downloadProof(fileName) {
//	 var fd = new FormData();
//	 fd.append("fileName", fileName);
//	var iframe = document.createElement('iframe' + fileName);
//	iframe.style.display = "none";
//	iframe.src = "static/app/img/proofs/" + fileName;
//	document.body.appendChild(iframe);
	window.open(
			'localhost:8080/pmg/static/app/img/proofs/' + fileName,
			  '_blank' // <- This is what makes it open in a new window.
			);
//	 $.ajax({
//		url : 'downloadproof.do',
//		data : fd,
//		async : false,
//		processData : false,
//		contentType : "application/x-download",
//		type : 'POST',
//		success : function(data) {
//			alert("Download Started");
//		}
//	});
}