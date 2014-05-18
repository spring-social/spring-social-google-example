'use strict';

clientApp.controller('ActivitiesFormCtrl', function($scope, $location, $routeParams, $http) {

	$scope.getActivity = function(id) {
		if(id) {
			$location.path('/plus/activities/' + id).search('query', null);
		}
	};
	
	$scope.listActivities = function(profileId) {
		$location.path('/plus/activities/list/' + (profileId || 'me')).search('query', null);
	};
	
	$scope.searchActivities = function(query) {
		if(query) {
			$location.path('/plus/activities').search('query', query);
		}
	};
	
	$scope.profileId = $routeParams.profileId;
	$scope.query = $routeParams.query;
	$scope.activityId = $routeParams.activityId;
	
});