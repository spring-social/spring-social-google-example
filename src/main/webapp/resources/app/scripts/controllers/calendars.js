'use strict';

clientApp.controller('CalendarsCtrl', function($scope, $routeParams) {
	$scope.path = 'calendar/list';
	var today = new Date();
	$scope.month = today.getMonth() + 1;
	$scope.year = today.getFullYear();
});