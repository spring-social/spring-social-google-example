'use strict';

clientApp.controller('PagingListCtrl', function($scope, $http) {

	$scope.loadMore = function() {
		$scope.loading = true;
		$http.get($scope.path, {params: {pageToken: $scope.page.nextPageToken}}).success(function(page) {
			$scope.page.items = $scope.page.items.concat(page.items);
			if($scope.page.nextPageToken == page.nextPageToken) {
				$scope.page.nextPageToken = null;
			} else {
				$scope.page.nextPageToken = page.nextPageToken;
			}
			$scope.loading = false;
		}).error(function() {
			$scope.loading = false;
		});
	};
	
	if($scope.path) {
		$http.get($scope.path).success(function(page) {
			$scope.page = page;
		});
	}
	
	$scope.$on('insertItem', function(event, item) {
		$scope.page.items.unshift(item);
	});
	
	$scope.$on('deleteItem', function(event, item) {
		var index = $scope.page.items.indexOf(item);
		$scope.page.items.splice(index, 1);
	});
});