app.controller('BarcodeCtrl', function($scope, $ionicPlatform, $cordovaBarcodeScanner) {

	$scope.data = undefined;

	$scope.scan = function(){
		$cordovaBarcodeScanner
		.scan()
		.then(function(data) {
			// console.log(JSON.stringify(data));
			$scope.data = data;
		}, function(error) {
			// console.log(JSON.stringify(error));
			$scope.data = error;
		});
	};

});
