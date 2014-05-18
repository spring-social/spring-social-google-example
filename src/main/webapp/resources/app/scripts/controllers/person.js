'use strict';

clientApp.controller('PersonCtrl', function($scope, $resource, $routeParams) {
	$scope.person = $resource('/plus/people/' + $routeParams.id).get();
});
