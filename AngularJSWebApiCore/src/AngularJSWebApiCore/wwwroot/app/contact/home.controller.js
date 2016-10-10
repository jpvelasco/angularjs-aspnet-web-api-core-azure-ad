(function () {

    'use strict';

    angular
        .module('contactApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = [

        'adalAuthenticationService',
        '$scope', '$location', '$state', '$stateParams'];

    function HomeController (adalAuthenticationService, 
        $scope, $location, $state, $stateParams) {
    
        /**
        * login
        */
        $scope.login = function () {
            adalAuthenticationService.login();
        };
        /**
         * logOut
         */
        $scope.logOut = function () {
            adalAuthenticationService.logOut();
        };
        /**
         * isActive
         */
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }
})();