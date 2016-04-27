angular.module('starter.controllers', [])

.controller('StatusCtrl', function($scope, $ionicModal, $cordovaLocalNotification) {

    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    //alert
    $scope.showAlert = function(){
        alert('Alert');
    };

    //modal
    $scope.showModal = function(){
        $scope.modal.show();
    };
    $scope.hideModal = function() {
        $scope.modal.hide();
    };

    //notification
    $scope.notify = function(){
        $cordovaLocalNotification.schedule([{
            id: 1,
            title: 'First Sample Notification',
            text: 'Luke, I am your father',
            data: {
              customProperty: 'custom value'
            }
        },
        {
            id: 2,
            title: 'Second Sample Notification',
            text: 'May the force be with you',
            data: {
              customProperty: 'custom value'
            }
        }]).then(function (result) {
            console.log(result);
          });
    };
})

.controller('CameraCtrl', function($scope, $cordovaCamera, $ionicPlatform) {

var options = {
        quality: 85,
        destinationType: 0,
        sourceType: 1,
        allowEdit: false,
        encodingType: 0,
        targetWidth: 300,
        targetHeight: 300,
        saveToPhotoAlbum: true
    };


  $scope.takePicture = function(){

      $ionicPlatform.ready(function() {
          console.log(window.Camera);
          $cordovaCamera.getPicture(options).then(function(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;

            // $scope.image = "data:image/jpeg;charset=utf-8;base64," + imageData;
            // $scope.image = imageData;
          }, function(err) {
            alert(err);
          });
      });

  };


})

.controller('MotionCtrl', function($scope, $ionicPlatform, $cordovaDeviceMotion, $interval) {
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

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
