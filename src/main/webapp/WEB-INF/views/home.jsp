<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <title>Spring Social Google Examples</title>
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width"/>
        <link rel="stylesheet" href="resources/app/styles/bootstrap.min.css"/>
        <link rel="stylesheet" href="resources/app/styles/jquery-ui-1.10.0.custom.css"/>
        <link rel="stylesheet" href="resources/app/styles/main.css"/>

    </head>
    <body ng-app="clientApp">

        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
        <![endif]-->

		<div class="navbar navbar-fixed-top">
			<div class="navbar-inner">
				<div class="container">
					<ul class="nav">
						<li><a href="#/">User Info</a></li>
						<li><a href="#/plus/people">Google+</a></li>
						<li><a href="#/tasks">Tasks</a></li>
						<li><a href="drivefiles">Drive</a></li>
					</ul>
					
					<ul class="nav pull-right">
						<li><a href="signout">Sign Out</a></li>
					</ul>
				</div>
			</div>
		</div>

        <div class="container" ng-view></div>

		<script src="resources/app/scripts/vendor/jquery-1.9.1.min.js"></script>
		<script src="resources/app/scripts/vendor/jquery-ui-1.10.0.custom.min.js"></script>
        <script src="resources/app/scripts/vendor/angular.min.js"></script>
        <script src="resources/app/scripts/vendor/angular-resource.min.js"></script>
        <script src="resources/app/scripts/vendor/angular-ui-utils.min.js"></script>
        <script src="resources/app/scripts/vendor/ui-bootstrap-tpls-0.3.0.min.js"></script>
        <script src="resources/app/scripts/vendor/date.js"></script>

        <!-- build:js scripts/scripts.js -->
        <script src="resources/app/scripts/client.js"></script>
        <script src="resources/app/scripts/controllers/userinfo.js"></script>
        <script src="resources/app/scripts/controllers/peopleform.js"></script>
        <script src="resources/app/scripts/controllers/paginglist.js"></script>
        <script src="resources/app/scripts/controllers/peoplesearch.js"></script>
        <script src="resources/app/scripts/controllers/person.js"></script>
        <script src="resources/app/scripts/controllers/plusoners.js"></script>
        <script src="resources/app/scripts/controllers/resharers.js"></script>
        <script src="resources/app/scripts/controllers/circles.js"></script>
        <script src="resources/app/scripts/controllers/activitiesform.js"></script>
        <script src="resources/app/scripts/controllers/activitieslist.js"></script>
        <script src="resources/app/scripts/controllers/activitiessearch.js"></script>
        <script src="resources/app/scripts/controllers/activity.js"></script>
        <script src="resources/app/scripts/controllers/tasklists.js"></script>
        <script src="resources/app/scripts/controllers/tasklist.js"></script>
        <script src="resources/app/scripts/controllers/tasks.js"></script>
        <script src="resources/app/scripts/controllers/task.js"></script>
        <script src="resources/app/scripts/controllers/moments.js"></script>
        <!-- endbuild -->

    </body>
</html>
