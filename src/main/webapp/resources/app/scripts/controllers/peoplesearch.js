'use strict';

clientApp.controller('PeopleSearchCtrl', function($scope, $location) {
	if($location.search().query) {
		$scope.path = '/plus/people?query=' + $location.search().query;
	}
});