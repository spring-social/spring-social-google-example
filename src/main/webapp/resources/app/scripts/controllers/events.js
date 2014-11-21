'use strict';

clientApp.controller('EventsCtrl', function($scope, $http, $resource, $routeParams, $location) {

	var fullMonths = new Array("January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December");
	var shortMonths = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
	
	// $routeParams.month as passed in is 1 based, unlike arrays and Date() which are 0 based.
	var thisMonthMonthNumber = Number($routeParams.month ? $routeParams.month : 7);
	var thisMonthYearNumber = Number($routeParams.year ? $routeParams.year : 2014);
	
	var lastMonthMonthNumber = (thisMonthMonthNumber == 1 ? 12 : thisMonthMonthNumber - 1);
	var lastMonthYearNumber = (thisMonthMonthNumber == 1 ? thisMonthYearNumber - 1 : thisMonthYearNumber);

	var nextMonthMonthNumber = (thisMonthMonthNumber == 12 ? 1 : thisMonthMonthNumber + 1);
	var nextMonthYearNumber = (thisMonthMonthNumber == 12 ? thisMonthYearNumber + 1 : thisMonthYearNumber);

	$scope.calendarId = $routeParams.calendarId;
	$scope.thisMonthText = fullMonths[thisMonthMonthNumber - 1] + " " + thisMonthYearNumber;
	$scope.lastMonthText = shortMonths[lastMonthMonthNumber - 1];
	$scope.nextMonthText = shortMonths[nextMonthMonthNumber - 1];
	$scope.lastMonthPathParts = lastMonthYearNumber + "/" + lastMonthMonthNumber;
	$scope.nextMonthPathParts = nextMonthYearNumber + "/" + nextMonthMonthNumber;

	var startDate = new Date(thisMonthYearNumber, thisMonthMonthNumber - 1, 1);
	var endDate = new Date(nextMonthYearNumber, nextMonthMonthNumber - 1, 1);
	if ($routeParams.calendarId) {
		$scope.page = $resource('calendar/' + encodeURIComponent( $routeParams.calendarId ) + '/events?timeMin=' + startDate.getTime() + '&timeMax=' + endDate.getTime()).get();
	}

	$scope.backToCalendars = function() {
		$location.path('/calendars');
	};

	$scope.showNewEventModal = function() {
		$scope.event = {"specification": "Meeting at Work on Dec 3rd 10am-10:25am"};
		$scope.newEventModal = true;
	};
	
	$scope.insertEvent = function() {
		$http.get('calendar/' + encodeURIComponent( $routeParams.calendarId ) + '/events/create', {
			params: { specification: $scope.event.specification }
		}).success(function(result) {
			$scope.newEventModal = false;
			$location.path('/calendars/' + ( $routeParams.calendarId ) + '/events/' + ( result.id ));
		});
	};

})
.filter('encodeUri', function ($window) {
	return $window.encodeURIComponent;
})
.filter('formatEventDate', function ($window) {
	var shortMonths = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

	return function formatEventDate(event) {
		if (!event || !event.start || !event.end) {
			return "";
		}
		var startDate;
		if (event.start.date && event.end.date) {
			startDate = new Date(event.start.date);
			return startDate.getDate() + " " + shortMonths[startDate.getMonth()];
		} else if (event.start.dateTime && event.end.dateTime) {
			startDate = new Date(event.start.dateTime);
			return startDate.getDate() + " " + shortMonths[startDate.getMonth()] + (startDate.getHours() < 10 ? " 0" : " ") + startDate.getHours() + (startDate.getMinutes() < 10 ? ":0" : ":") + startDate.getMinutes();
		} else {
			return "** Mixed date & dateTime **";
		}
	}
}).filter('formatEventDuration', function ($window) {
	var ONE_MINUTE = 1000 * 60;
	var ONE_HOUR = ONE_MINUTE * 60;
	var ONE_DAY = ONE_HOUR * 24;

	return function formatEventDuration(event) {
		if (event.start.date && event.end.date) {
			var startDate = new Date(event.start.date);
			var endDate = new Date(event.end.date);
			var duration = endDate.getTime() - startDate.getTime();
			if (duration == ONE_DAY) {
				return "all day event";
			} else {
				return (duration / ONE_DAY) + " day event";
			}
		} else if (event.start.dateTime && event.end.dateTime) {
			var startDateTime = new Date(event.start.dateTime);
			var endDateTime = new Date(event.end.dateTime);
			var duration = endDateTime.getTime() - startDateTime.getTime();
			var result = "";
			var days = Math.floor(duration / ONE_DAY);
			if (days > 0) {
				result += " " + days + (days == 1 ? " day" : " days");
			}
			var remainder = duration % ONE_DAY;
			var hours = Math.floor(remainder / ONE_HOUR);
			if (hours > 0) {
				result += " " + hours + (hours == 1 ? " hour" : " hours");
			}
			remainder = remainder % ONE_HOUR;
			var minutes = Math.floor(remainder / ONE_MINUTE);
			if (minutes > 0) {
				result += " " + minutes + (minutes== 1 ? " min" : " mins");
			}
			return result;
		} else {
			return "** Mixed date & dateTime **";
		}
	}
});