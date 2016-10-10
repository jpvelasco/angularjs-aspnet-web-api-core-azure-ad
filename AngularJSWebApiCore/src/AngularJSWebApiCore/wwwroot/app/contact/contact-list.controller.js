(function () {

    'use strict';

    angular
        .module('contactApp')
        .controller('ContactListController', ContactListController);

    ContactListController.$inject = ['$scope', '$state', 'popupService', '$window', 'contactDataService'];

    function ContactListController($scope, $state, popupService, $window, contactDataService) {

        contactDataService.getContacts().then(function (data) {
            $scope.contacts = data;
        });

        $scope.deleteContact = function (contact) {
            if (popupService.showPopup('Do you really want to delete this?')) {

                // Delete
                contactDataService.deleteContact(contact.id).then(function () {
                    $window.location.href = '';
                });
            }
        };
    }
})();