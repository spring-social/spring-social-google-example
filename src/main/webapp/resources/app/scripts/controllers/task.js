'use strict';

clientApp.controller('TaskCtrl', function($scope, $http, $resource, $routeParams, $location, $dialog) {
	
	$scope.taskListId = $routeParams.taskListId;
	
	if($routeParams.taskId) {
		$scope.task = $resource('/tasks/' + $routeParams.taskListId + '/tasks/' + $routeParams.taskId + '/view').get();
	}
	
	$scope.saveTask = function() {
		$http.post('/tasks/' + $scope.taskListId + '/tasks/save', $scope.task).success(function() {
			$location.path('/tasks/list/' + $scope.taskListId);
		});
	};
	
	$scope.deleteTask = function() {
		
		$dialog.messageBox(null, 'Delete this task?', [{result:true, label: 'Yes', cssClass: 'btn-danger'}, {label: 'No'}])
		.open()
		.then(function(result){
			if(result) {
				$http.post('/tasks/' + $scope.taskListId + '/tasks/' + $routeParams.taskId + '/delete').success(function() {
					$location.path('/tasks/list/' + $scope.taskListId);
				});
			}
		});
	};
	
});