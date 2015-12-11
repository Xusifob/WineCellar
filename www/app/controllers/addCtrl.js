(function() {
    'use strict';

    app.controller('addCtrl', addCtrl);

    addCtrl.$inject = ['$scope','wineService','$filter','$location'];

    function addCtrl($scope,wineService,$filter,$location) {

        var $this = this;

        $this.wineService = wineService;

        $this.date = parseInt($filter('date')(new Date, 'yyyy'));

        $this.wineService.emptyWine();

        $this.button = "Ajouter";

        $this.addWine = addWine;


        function addWine(){
            for(var key in $this.wine){
                if($this.wine.hasOwnProperty(key)) {
                    if ($this.wine[key] == '' || $this.wine[key] == undefined)
                        return key;
                }
            }

            $this.wineService.addWine();
            $location.path('/');
        }

    }
}).call(this);
