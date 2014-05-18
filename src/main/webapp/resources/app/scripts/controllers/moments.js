'use strict';

clientApp.controller('MomentsCtrl', function($scope, $http, $dialog) {
	$scope.path = '/plus/moments/list';
	
	$scope.showNewMomentModal = function() {
		$scope.newMomentModal = true;
	};
	
	$scope.insertMoment = function() {
		$http.post('/plus/moments/insert', $scope.moment).success(function(result) {
			$scope.newMomentModal = false;
			$scope.$broadcast('insertItem', result);
		});
	};
	
	$scope.deleteMoment = function(moment) {
		
		$dialog.messageBox(null, 'Delete this moment?', [{result:true, label: 'Yes', cssClass: 'btn-danger'}, {label: 'No'}])
		.open()
		.then(function(result){
			if(result) {
				$http.post('/plus/moments/delete', moment.id).success(function() {
					$scope.$broadcast('deleteItem', moment);
				});
			}
		});
	};
});