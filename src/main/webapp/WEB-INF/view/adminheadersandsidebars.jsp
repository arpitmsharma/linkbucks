<!-- START Top Navbar-->
<nav role="navigation"
	class="navbar navbar-default navbar-top navbar-fixed-top">
	<!-- START navbar header-->
	<div class="navbar-header">
		<a href="#" class="navbar-brand">
			<div class="brand-logo">LinkBucks</div>
			<div class="brand-logo-collapsed">LB</div>
		</a>
	</div>
	<!-- END navbar header-->
	<!-- START Nav wrapper-->
	<div class="nav-wrapper">
		<!-- START Left navbar-->
		<ul class="nav navbar-nav">
			<li><a href="#" data-toggle="aside"> <em
					class="fa fa-align-left"></em>
			</a></li>
		</ul>
		<!-- END Left navbar-->
		<!-- START Right Navbar-->
		<ul class="nav navbar-nav navbar-right">
		<!-- START User menu-->
		<li class="dropdown"><a href="#" data-toggle="dropdown"
			data-play="bounceIn" class="dropdown-toggle"> <em
				class="fa fa-user"></em>
		</a> <!-- START Dropdown menu-->
			<ul class="dropdown-menu">
				<li><a href="${pageContext.request.contextPath}/profile">Profile</a></li>
				<li><a href="${pageContext.request.contextPath}/logout">Logout</a></li>
			</ul> <!-- END Dropdown menu--></li>
		<!-- END User menu-->
		</ul>
		<!-- END Right Navbar-->
	</div>
	<!-- END Nav wrapper-->
</nav>
<!-- END Top Navbar-->
<!-- START aside-->
<aside class="aside">
	<!-- START Sidebar (left)-->
	<nav class="sidebar">
		<ul class="nav">
			<!-- START user info-->
			<li>
				<div data-toggle="collapse-next" class="item user-block has-submenu">
					<!-- User picture-->
					<div class="user-block-picture">
						<img
							src="${pageContext.request.contextPath}/static/app/img/user/${user.picName}"
							alt="Avatar" width="60" height="60"
							class="img-thumbnail img-circle">
						<!-- Status when collapsed-->
						<div class="user-block-status">
							<div class="point point-success point-lg"></div>
						</div>
					</div>
					<!-- Name and Role-->
					<div class="user-block-info">
						<span class="user-block-name item-text">Welcome
							${user.firstname},</span> <span class="user-block-role">${user.level}</span>
					</div>
				</div> <!-- START User links collapse-->
			</li>
			<!-- END user info-->
			<!-- START Menu-->
			<li class="active"><a
				href="${pageContext.request.contextPath}/dashboard"
				title="Dashboard" class="no-submenu"> <em
					class="fa fa-dashboard"></em> <span class="item-text">Dashboard</span>
			</a></li>
			<li><a href="${pageContext.request.contextPath}/admin/createfaq" title="Create FAQ" data-toggle="collapse-next"
				class="has-submenu"> <em class="fa fa-money"></em> <span
					class="item-text">Create FAQ</span>
			</a> <!-- START SubMenu item-->
			<!-- END Menu-->
			<!-- Sidebar footer    -->
			<li class="nav-footer">
				<div class="nav-footer-divider"></div> <!-- START button group-->
				<div class="btn-group text-center">
					<a href="${pageContext.request.contextPath}/profile">
						<button type="button" data-toggle="tooltip" data-title="Profile"
							class="btn btn-link">
							<em class="fa fa-bug text-muted"></em>
						</button>
					</a> <a href="${pageContext.request.contextPath}/logout">
						<button type="button" data-toggle="tooltip" data-title="Logout"
							class="btn btn-link">
							<em class="fa fa-power-off text-muted"></em>
						</button>
					</a>
				</div> <!-- END button group-->
			</li>
		</ul>
	</nav>
	<!-- END Sidebar (left)-->
</aside>
<!-- End aside-->
<script
	src="${pageContext.request.contextPath}/static/app/js/userajax.js"></script>

<script type="text/javascript">
	var webSocket;
	var messages = document.getElementById("messages");

	function openSocket() {
		// Ensures only one connection is open at a time
		if (webSocket !== undefined
				&& webSocket.readyState !== WebSocket.CLOSED) {
			return;
		}
		// Create a new instance of the websocket
		webSocket = new WebSocket("ws://localhost:8080/pmg/echo");

		/**
		 * Binds functions to the listeners for the websocket.
		 */
		webSocket.onopen = function(event) {
			// For reasons I can't determine, onopen gets called twice
			// and the first time event.data is undefined.
			// Leave a comment if you know the answer.
			if (event.data === undefined)
				return;
			writeResponse(event.data);
		};

		webSocket.onmessage = function(event) {
			writeResponse(event.data);
		};

		webSocket.onclose = function(event) {
		};
	}

	/**
	 * Sends the value of the text input to the server
	 */
	function send() {
		var text = document.getElementById("messageinput").value;
		webSocket.send(text);
	}

	function closeSocket() {
		webSocket.close();
	}

	function writeResponse(text) {
		messages.innerHTML += "<br/>" + text;
	}
</script>