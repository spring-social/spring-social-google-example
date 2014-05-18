'use strict';

clientApp.controller('PlusOnersCtrl', function($scope, $routeParams) {
	$scope.path = '/plus/people/' + $routeParams.activityId + '/plusoners';
});