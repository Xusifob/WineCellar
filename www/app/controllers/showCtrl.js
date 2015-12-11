(function() {
    'use strict';

    app.controller('showCtrl', showCtrl);

    showCtrl.$inject = ['$scope','wineService','$location','$stateParams'];

    function showCtrl($scope,wineService,$location,$stateParams) {

        var $this = this;

        $this.wineService = wineService;

        if(!$this.wineService.getWine($stateParams.id))
            $location.path('/');


    }
}).call(this);
