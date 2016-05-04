app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })
    .state('tab.status', {
        url: '/status',
        views: {
            'tab-status': {
                // url: '/status',
                templateUrl: 'templates/tab-status.html',
                controller: 'StatusCtrl'
            }
            ,
            'tab-camera': {
                // url: '/camera',
                templateUrl: 'templates/tab-camera.html',
                controller: 'CameraCtrl'
            },
            'tab-barcode': {
                // url: '/barcode',
                templateUrl: 'templates/tab-barcode.html',
                controller: 'BarcodeCtrl'
            },
            'tab-motion': {
                // url: '/motion',
                templateUrl: 'templates/tab-motion.html',
                controller: 'MotionCtrl'
            }
        }
    });
    // .state('tab.camera', {
    //     url: '/camera',
    //     views: {
    //         'tab-camera': {
    //             templateUrl: 'templates/tab-camera.html',
    //             controller: 'CameraCtrl'
    //         }
    //     }
    // })
    // .state('tab.barcode', {
    //     url: '/barcode',
    //     views: {
    //         'tab-barcode': {
    //             templateUrl: 'templates/tab-barcode.html',
    //             controller: 'BarcodeCtrl'
    //         }
    //     }
    // })
    // .state('tab.motion', {
    //     url: '/motion',
    //     views: {
    //         'tab-motion': {
    //             templateUrl: 'templates/tab-motion.html',
    //             controller: 'MotionCtrl'
    //         }
    //     }
    // })

    //console.log($stateProvider);

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/status');

});
