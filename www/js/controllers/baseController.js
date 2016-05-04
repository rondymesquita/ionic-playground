app.controller('BaseController', function($scope, $ionicPlatform, $ionicSlideBoxDelegate, $ionicTabsDelegate) {

	$scope.platform = ionic.Platform.platform();

	// $scope.options = {
	// 	loop: false,
	// 	// effect: 'fade',
	// 	speed: 200
	// };
	// $scope.data = {};
	// $scope.$watch('data.slider.activeIndex', function(nv, ov) {
	// 	$scope.slider = $scope.data.slider;
	// 	//console.log("eita");
	// });
	//
	// $scope.$on('data.slider.slideChanged', function (event, index) {
	//     console.debug('Slide box has been changed, current index is ' + index);
	// });

	$scope.slidePage = function(index){

		// if($scope.data.slider){
		// 	$scope.data.slider.slideTo(index, $scope.options.speed);
		// }

		$ionicSlideBoxDelegate.select(index);
		console.log($ionicSlideBoxDelegate);
	};

	$scope.slideChanged = function(index){
		$ionicTabsDelegate.select(index);
		console.log($ionicTabsDelegate);
	}


});
