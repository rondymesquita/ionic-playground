app.controller('BaseController', function($scope, $rootScope, $ionicPlatform, $ionicSlideBoxDelegate, $ionicTabsDelegate, $ionicNavBarDelegate) {

	$scope.platform = ionic.Platform.platform();
	$scope.isAndroid = true;
	$scope.title = "";

	$scope.currentTab = function(index, title){

		$ionicSlideBoxDelegate.select(index);
		$scope.title = title;
	};

	$scope.slideChanged = function(index){
		$ionicTabsDelegate.select(index);
	}


});
