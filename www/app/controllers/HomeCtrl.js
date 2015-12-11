(function() {
    'use strict';

    app.controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope','wineService'];

    function HomeCtrl($scope,wineService) {

        var $this = this;

        $this.wineService = wineService;



    }
}).call(this);
