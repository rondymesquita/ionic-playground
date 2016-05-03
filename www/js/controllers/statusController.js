app.controller('StatusCtrl', function($scope, $ionicModal, $cordovaLocalNotification) {

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
});
