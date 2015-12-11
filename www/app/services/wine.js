(function() {
    'use strict';

    app.factory('wineService',wineService);

    function wineService() {

        var $this = this;

        //
        $this.wine = {};
        $this.wines = [];

        $this.addWine = addWine;
        $this.removeWine = removeWine;

        $this.getWine = getWine;
        $this.getWines = getWines;

        $this.saveWines = saveWines;
        $this.updateWine = updateWine;

        $this.getId = getId;
        $this.emptyWine = emptyWine;

        /**
         * Get an array from localstorage
         *
         * @param index
         * @returns {Array}
         */
        function getLocalStorageArray(index){
            var $array = localStorage.getItem(index);

            return JSON.parse($array) == null ? [] : JSON.parse($array) ;

        }

        /**
         *
         * Set an array into localStorage
         *
         * @param index
         * @param array
         */
        function setLocalStorageArray(index,array){
            var string = JSON.stringify(array);
            localStorage.setItem(index,string);
        }

        function getWine(id){

            getWines();

            var update = false;

            for(var i = 0;i<$this.wines.length;i++){
                if(id == $this.wines[i].id) {
                    $this.wine = $this.wines[i];
                    update = true;
                }
            }
            return update;
        }

        function updateWine(){
            getWines();
            for(var i = 0;i<$this.wines.length;i++){
                if($this.wine.id === $this.wines[i].id) {
                    $this.wines[i] = $this.wine;
                    break;
                }
            }
            saveWines();
        }

        function saveWines(){
            setLocalStorageArray('wine',$this.wines);
        }

        function getWines(){
            $this.wines  = getLocalStorageArray('wine');
        }



        function removeWine(index){
            var array = getLocalStorageArray('wine');

            array.splice(index,1);

            $this.wines = array;

            setLocalStorageArray('wine',array);
        }

        function addWine(){

            var array = getLocalStorageArray('wine');

            array.push($this.wine);

            $this.wines = array;

            setLocalStorageArray('wine',array);

        }

        function getId(){
            getWines();

            return ($this.wines.length == 0) ? 1 :  ($this.wines[$this.wines.length-1].id)+1;
        }


        function emptyWine(){
            $this.wine = {
                id : getId(),
                name : '',
                description : '',
                year : ''
            }
        }


        getWines();

        return this;
    }

}).call(this);