app.controller('MotionCtrl', function($scope, $ionicPlatform, $cordovaDeviceMotion, $interval) {
    var timer;

     $ionicPlatform.ready(function() {

     });

    $scope.start = function(){
        timer = $interval(function(){
            $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
              $scope.x = result.x;
              $scope.y = result.y;
              $scope.z = result.z;
              $scope.timeStamp = result.timestamp;

            }, function(err) {
              // An error occurred. Show a message to the user
            });
        }, 100);

    };

     $scope.stop = function(){
         $interval.cancel(timer);
     }
})
