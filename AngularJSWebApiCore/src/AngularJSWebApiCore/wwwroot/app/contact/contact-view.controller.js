(function () {

    'use strict';

    angular
        .module('contactApp')
        .controller('ContactViewController', ContactViewController);

    ContactViewController.$inject = ['$scope', '$stateParams', 'contactDataService'];

    function ContactViewController($scope, $stateParams, contactDataService) {

        contactDataService.getContact($stateParams.id).then(function (data) {
            $scope.contact = data;
        });
    }
})();