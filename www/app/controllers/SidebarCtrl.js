(function() {
    'use strict';

    app.controller('SidebarCtrl', SidebarCtrl);

    function SidebarCtrl($scope,$timeout,$mdSidenav) {

        var $this = this;

        $this.toggleLeft = buildDelayedToggler('left');

        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function () {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
            return debounce(function () {
                $mdSidenav(navID)
                    .toggle()
            }, 200);
        }

    }
}).call(this);

app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log,$location) {
    $scope.close = function () {
        $mdSidenav('left').close()
    };

});
