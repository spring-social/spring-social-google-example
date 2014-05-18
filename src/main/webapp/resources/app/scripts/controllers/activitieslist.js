'use strict';

clientApp.controller('ListActivitiesCtrl', function($scope, $routeParams) {
	$scope.path = '/plus/activities/list/' + $routeParams.profileId;
});