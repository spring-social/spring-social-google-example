'use strict';

clientApp.controller('ActivitiesSearchCtrl', function($scope, $location) {
	if($location.search().query) {
		$scope.path = '/plus/activities/search?query=' + $location.search().query;
	}
});