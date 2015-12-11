(function() {
    'use strict';

    app.controller('updateCtrl', updateCtrl);

    updateCtrl.$inject = ['$scope','wineService','$filter','$location','$stateParams'];

    function updateCtrl($scope,wineService,$filter,$location,$stateParams) {

        var $this = this;

        $this.wineService = wineService;

        $this.button = "Modifier";

        $this.date = parseInt($filter('date')(new Date, 'yyyy'));

        if(!$this.wineService.getWine($stateParams.id))
            $location.path('/');

        $this.addWine = addWine;


        function addWine(){
            for(var key in $this.wine){
                if($this.wine.hasOwnProperty(key)) {
                    if ($this.wine[key] == '' || $this.wine[key] == undefined)
                        return key;
                }
            }

            $this.wineService.updateWine();
            $location.path('/');
        }

    }
}).call(this);
