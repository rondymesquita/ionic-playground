app.controller('BaseController', function($scope, $ionicPlatform, $cordovaBarcodeScanner) {

	$scope.left = function(){
		console.log("left");
	};

	$scope.right = function(){
		console.log("right");
	};

});
