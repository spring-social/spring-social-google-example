<?xml version="1.0" encoding="UTF-8" ?>
<jsp:root xmlns:jsp="http://java.sun.com/JSP/Page" version="2.0"
	xmlns:c="http://java.sun.com/jsp/jstl/core">
	<jsp:directive.page language="java"
		contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" />
	<jsp:text>
		<![CDATA[ <!DOCTYPE html> ]]>
	</jsp:text>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<title>Spring Social Google Example</title>
<link href="resources/css/bootstrap.min.css" rel="stylesheet"/>
<link href="resources/css/style.css" rel="stylesheet"/>
</head>

<body>
	<div class="container">
		<div class="row">
			<div class="span14 columns offset2">
				<h1>Spring Social Google Example Application</h1>
				<h5>Sources: <a href="https://github.com/GabiAxel/spring-social-google-example">https://github.com/GabiAxel/spring-social-google-example</a></h5>
				<form action="signin/google" method="POST">
				    <button type="submit" class="btn btn-large btn-primary">Sign in with Google</button>
				    <input type="hidden" name="scope" value="email https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/latitude.all.best" />
				    <input type="hidden" name="request_visible_actions" value="http://schemas.google.com/AddActivity http://schemas.google.com/BuyActivity http://schemas.google.com/CheckInActivity http://schemas.google.com/CommentActivity http://schemas.google.com/CreateActivity http://schemas.google.com/DiscoverActivity http://schemas.google.com/ListenActivity http://schemas.google.com/ReserveActivity http://schemas.google.com/ReviewActivity http://schemas.google.com/WantActivity"/>
				    <input type="hidden" name="access_type" value="offline"/>
				</form>
			</div>
		</div>
	</div>
</body>
</html>
</jsp:root>
