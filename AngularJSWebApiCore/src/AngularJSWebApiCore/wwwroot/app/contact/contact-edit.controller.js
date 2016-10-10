(function () {

    'use strict';

    angular
        .module('contactApp')
        .controller('ContactEditController', ContactEditController);


    ContactEditController.$inject = ['$scope', '$state', '$stateParams', 'contactDataService'];


    function ContactEditController($scope, $state, $stateParams, contactDataService) {

        $scope.updateContact = function () {
            contactDataService.updateContact($scope.contact).then(function () {
                $state.go('contacts');
            });
        };

        $scope.loadContact = function () {
            contactDataService.getContact($stateParams.id).then(function (data) {
                $scope.contact = data;
            });

        };

        $scope.loadContact();
    }

})();