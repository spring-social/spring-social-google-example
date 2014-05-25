'use strict';

// Declare app level module which depends on filters, and services
var clientApp = angular.module('clientApp',
		[ 'ngResource', 'ui.utils', 'ui.date', 'ui.bootstrap' ]).config(
		function($routeProvider, $dialogProvider) {
			$routeProvider.when('/plus/people', {
				templateUrl : 'resources/app/views/people.html',
				controller : 'PeopleSearchCtrl'
			}).when('/plus/people/:userId/circles', {
				templateUrl : 'resources/app/views/people.html',
				controller : 'CirclesCtrl'
			}).when('/plus/people/plusoners/:activityId', {
				templateUrl : 'resources/app/views/people.html',
				controller : 'PlusOnersCtrl'
			}).when('/plus/people/resharers/:activityId', {
				templateUrl : 'resources/app/views/people.html',
				controller : 'ResharersCtrl'
			}).when('/plus/people/:id', {
				templateUrl : 'resources/app/views/person.html',
				controller : 'PersonCtrl'
			}).when('/plus/activities', {
				templateUrl : 'resources/app/views/activities.html',
				controller : 'ActivitiesSearchCtrl'
			}).when('/plus/activities/list/:profileId', {
				templateUrl : 'resources/app/views/activities.html',
				controller : 'ListActivitiesCtrl'
			}).when('/plus/activities/:activityId', {
				templateUrl : 'resources/app/views/activity.html',
				controller : 'ActivityCtrl'
			}).when('/tasks', {
				templateUrl : 'resources/app/views/tasklists.html',
				controller : 'TaskListsCtrl'
			}).when('/tasks/edit/:taskListId', {
				templateUrl : 'resources/app/views/tasklist.html',
				controller : 'TaskListCtrl'
			}).when('/tasks/list/:taskListId', {
				templateUrl : 'resources/app/views/tasks.html',
				controller : 'TasksCtrl'
			}).when('/tasks/:taskListId/edit/:taskId', {
				templateUrl : 'resources/app/views/task.html',
				controller : 'TaskCtrl'
			}).when('/plus/moments', {
				templateUrl : 'resources/app/views/moments.html',
				controller : 'MomentsCtrl'
			}).otherwise({
				redirectTo : '/plus/people'
			});

			$dialogProvider.options({
				backdropFade : true,
				dialogFade : true
			});
		});
