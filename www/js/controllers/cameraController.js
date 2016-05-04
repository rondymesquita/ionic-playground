app.controller('CameraCtrl', function($scope, $cordovaCamera, $ionicPlatform) {

var options = {
        quality: 85,
        destinationType: 0,
        sourceType: 1,
        allowEdit: false,
        encodingType: 0,
        targetWidth: 300,
        targetHeight: 300,
        saveToPhotoAlbum: false
    };


  $scope.takePicture = function(){

      $ionicPlatform.ready(function() {
          $cordovaCamera.getPicture(options).then(function(imageData) {

            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;

          }, function(err) {
            // console.log(JSON.stringify(err));
          });
      });

  };


});
