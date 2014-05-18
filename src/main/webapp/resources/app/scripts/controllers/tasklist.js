'use strict';

clientApp.controller('TaskListCtrl', function($scope, $http, $resource, $routeParams, $location, $dialog) {
	
	if($routeParams.taskListId) {
		$scope.taskList = $resource('/tasks/' + $routeParams.taskListId + '/view').get();
	}
	
	$scope.saveTaskList = function() {
		$http.post('/tasks/save', $scope.taskList).success(function() {
			$location.path('/tasks');
		});
	};
	
	$scope.deleteTaskList = function() {
		
		$dialog.messageBox(null, 'Delete this task list?', [{result:true, label: 'Yes', cssClass: 'btn-danger'}, {label: 'No'}])
		.open()
		.then(function(result){
			if(result) {
				$http.post('/tasks/' + $routeParams.taskListId + '/delete').success(function() {
					$location.path('/tasks');
				});
			}
		});
	};
});