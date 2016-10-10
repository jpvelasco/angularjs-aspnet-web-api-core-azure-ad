(function () {

    'use strict';

    angular.module('contactApp')
        .factory('contactDataService', contactDataService);

    contactDataService.$inject = ['$http'];

    function contactDataService($http) {

        var apiEndpoint = "https://localhost:44306/"; // TODO: Update to use the root location of your Web API

        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];

        return {
            getContacts: function () {
                return $http.get(apiEndpoint + 'api/contacts')
                    .then(function success(response) {
                        return (response.data);
                    }, function error(response) {
                        return (response.data.message);
                    });
            },

            getContact: function (id) {
                return $http.get(apiEndpoint + 'api/contacts/' + id)
                    .then(function success(response) {
                        return (response.data);
                    }, function error(response) {
                        return (response.data.message);
                    });
            },

            createContact: function (item) {
                var request =
                    {
                        Id: item.id,
                        FirstName: item.firstName,
                        MiddleName: item.middleName,
                        LastName: item.lastName,
                        Email: item.email,
                        PhoneNumber: item.phoneNumber
                    };

                return $http.post(apiEndpoint + 'api/contacts/', request)
                    .then(function success(response) {
                        return (response.data);
                    }, function error(response) {
                        return (response.data.message);
                    });
            },

            updateContact: function (item) {
                var request =
                    {
                        Id: item.id,
                        FirstName: item.firstName,
                        MiddleName: item.middleName,
                        LastName: item.lastName,
                        Email: item.email,
                        PhoneNumber: item.phoneNumber
                    };

                return $http.put(apiEndpoint + 'api/contacts/', request)
                    .then(function success(response) {
                        return (response.data);
                    }, function error(response) {
                        return (response.data.message);
                    });
            },

            deleteContact: function (id) {
                return $http({
                    method: 'DELETE',
                    url: apiEndpoint + 'api/contacts/' + id,
                }).then(
                    function success(response) {
                        return (response.data);
                    }, function error(response) {
                        return (response.data.message);
                    });
            }
        };
    }

})();