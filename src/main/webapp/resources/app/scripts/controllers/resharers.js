'use strict';

clientApp.controller('ResharersCtrl', function($scope, $routeParams) {
	$scope.path = '/plus/people/' + $routeParams.activityId + '/resharers';
});