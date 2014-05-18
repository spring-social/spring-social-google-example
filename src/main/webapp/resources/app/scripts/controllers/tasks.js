'use strict';

clientApp.controller('TasksCtrl', function($scope, $routeParams) {
	$scope.taskListId = $routeParams.taskListId;
	$scope.path = '/tasks/' + $routeParams.taskListId + '/tasks';
});