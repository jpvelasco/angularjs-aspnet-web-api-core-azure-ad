(function () {

    'use strict';

    angular.module('contactApp')
        .service('popupService', popupService)

    popupService.$inject = ['$window'];

    function popupService($window) {

        this.showPopup = function (message) {
            return $window.confirm(message);
        }

    }
})();