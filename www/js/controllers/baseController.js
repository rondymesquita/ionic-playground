app.controller('BaseController', function($scope, $ionicPlatform, $ionicSlideBoxDelegate) {

	$scope.options = {
		loop: false,
		// effect: 'fade',
		speed: 200,
	};
	$scope.data = {};
	$scope.$watch('data.slider', function(nv, ov) {
		// console.log("changed");
		$scope.slider = $scope.data.slider;
		//console.log(nv);
	});

	$scope.slideChanged = function(index){
		console.log(index);
	}

	console.log($ionicSlideBoxDelegate);

	$scope.$on('slideBox.slideChanged', function (event, index) {
	    console.debug('Slide box has been changed, current index is ' + index);
	});

	$scope.left = function() {
		console.log("left");
	};

	$scope.right = function() {
		console.log("right");
	};

});
