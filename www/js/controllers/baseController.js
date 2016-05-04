app.controller('BaseController', function($scope, $ionicPlatform, $ionicSlideBoxDelegate) {

	$scope.options = {
		loop: false,
		effect: 'fade',
		speed: 500,
	};
	$scope.data = {};
	$scope.$watch('data.slider', function(nv, ov) {
		$scope.slider = $scope.data.slider;
	});

	$scope.left = function() {
		console.log("left");
	};

	$scope.right = function() {
		console.log("right");
	};

});
