(function () {

    'use strict';

    angular
        .module('contactApp')
        .controller('ContactCreateController', ContactCreateController);

    ContactCreateController.$inject = ['$scope', '$state', '$stateParams', 'contactDataService'];

    function ContactCreateController($scope, $state, $stateParams, contactDataService) {

        $scope.contact = { firstName: "", middleName: "", lastName: "", email: "", phoneNumber: "" };

        $scope.addContact = function () {

            contactDataService.createContact($scope.contact).then(function () {
                $state.go('contacts');
            });
        }
    }

})();