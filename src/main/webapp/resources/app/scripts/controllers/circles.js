'use strict';

clientApp.controller('CirclesCtrl', function($scope, $routeParams) {
	$scope.path = '/plus/people/' + $routeParams.userId + '/circles';
});