'use strict';

clientApp.controller('UserInfoCtrl', function($scope, $resource) {
  
	$scope.profile = $resource('profile').get();
});
