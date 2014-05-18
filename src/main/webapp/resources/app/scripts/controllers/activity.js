'use strict';

clientApp.controller('ActivityCtrl', function($scope, $resource, $routeParams) {
	
	$scope.activity = $resource('/plus/activities/' + $routeParams.activityId).get();

	$scope.loadComments = function() {
		$scope.page = $resource('/plus/activities/' + $routeParams.activityId + '/comments').get();
	};
});