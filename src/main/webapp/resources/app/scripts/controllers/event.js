'use strict';

clientApp.controller('EventDetailCtrl', function($scope, $http, $resource, $routeParams, $location, $dialog) {

	if ($routeParams.calendarId && $routeParams.eventId) {
		$scope.event = $resource('calendar/' + encodeURIComponent( $routeParams.calendarId ) + '/events/' + encodeURIComponent( $routeParams.eventId ) + '/view').get();
		$scope.calendarId = $routeParams.calendarId;
		$scope.eventId = $routeParams.eventId;
	}

	$scope.deleteEvent = function() {
		$dialog.messageBox(null, 'Delete this event?', [{result:true, label: 'Yes', cssClass: 'btn-danger'}, {label: 'No'}])
		.open()
		.then(function(result){
			if(result) {
				$http.post('calendar/' + encodeURIComponent( $scope.calendarId ) + '/events/' + encodeURIComponent( $scope.eventId ) + '/delete').success(function() {
					var today = new Date();
					if ($scope.event.start.date) {
						today = new Date($scope.event.start.date);
					} else if ($scope.event.start.dateTime) {
						today = new Date($scope.event.start.dateTime);
					}
					var month = today.getMonth() + 1;
					var year = today.getFullYear();
					$location.path('/calendars/list/' + $scope.calendarId + "/" + year + "/" + month);
				});
			}
		});
	};

	$scope.backToEvents = function() {
		var today = new Date();
		if ($scope.event.start.date) {
			today = new Date($scope.event.start.date);
		} else if ($scope.event.start.dateTime) {
			today = new Date($scope.event.start.dateTime);
		}
		var month = today.getMonth() + 1;
		var year = today.getFullYear();
		$location.path('/calendars/list/' + $scope.calendarId + "/" + year + "/" + month);
	};

});