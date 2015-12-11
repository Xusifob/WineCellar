var app = (function() {

    'use strict';
    angular.module('app', ['ionic','ui.bootstrap','ngMaterial','ngAria','ngMdIcons'])
        .run(run)
        .config(config)
    ;

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
                url: '/',
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl',
                controllerAs : 'Home'
            })
            .state('add', {
                url: '/add',
                templateUrl: 'partials/add.html',
                controller: 'addCtrl',
                controllerAs : 'Add'
            })
            .state('wine', {
                url: '/show/:id',
                templateUrl: 'partials/show.html',
                controller: 'showCtrl',
                controllerAs : 'Show',
                cache : false
            })
            .state('update', {
                url: '/update/:id',
                templateUrl: 'partials/add.html',
                controller: 'updateCtrl',
                controllerAs : 'Add',
                cache : false
            })
        ;

        $urlRouterProvider.otherwise('/');
    }


    function run($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });

    }
    return angular.module('app');

}).call(app);