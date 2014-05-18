'use strict';

clientApp.controller('PeopleFormCtrl', function($scope, $location, $routeParams, $http) {

	$scope.getProfile = function(userId) {
		$location.path('/plus/people/' + (userId || 'me')).search('query', null);
	};
	
	$scope.getCircles = function(userId) {
		$location.path('/plus/people/' + (userId || 'me') + '/circles').search('query', null);
	};
	
	$scope.searchPeople = function(query) {
		if(query) {
			$location.path('/plus/people').search('query', query);
		}
	};
	
	$scope.getPlusOners = function(activityId) {
		if(activityId) {
			$location.path('/plus/people/plusoners/' + activityId).search('query', null);
		}
	};
	
	$scope.getResharers = function(activityId) {
		if(activityId) {
			$location.path('/plus/people/resharers/' + activityId).search('query', null);
		}
	};
	
	$scope.userId = $routeParams.userId;
	$scope.query = $routeParams.query;
	$scope.activityId = $routeParams.activityId;
	
});