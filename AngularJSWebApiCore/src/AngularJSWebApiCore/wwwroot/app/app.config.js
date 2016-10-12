angular
    .module('contactApp')
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, adalAuthenticationServiceProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');

        $urlRouterProvider.otherwise("/");

        $stateProvider
              .state('home', {
                  url: '/',
                  templateUrl: 'app/contact/home.html',
                  controller: 'HomeController'
              })
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'app/contact/contact-list.html',
                controller: 'ContactListController',
                requiredADLogin: true,
            })
            .state('viewContact', {
                url: '/contacts/:id/view',
                templateUrl: 'app/contact/contact-view.html',
                controller: 'ContactViewController',
                requiredADLogin: true,
            }).state('newContact', {
                url: '/contacts/new',
                templateUrl: 'app/contact/contact-create.html',
                controller: 'ContactCreateController',
                requiredADLogin: true,
            }).state('editContact', {
                url: '/contacts/:id/edit',
                templateUrl: 'app/contact/contact-edit.html',
                controller: 'ContactEditController',
                requiredADLogin: true,
            });

        adalAuthenticationServiceProvider.init(
            {
                instance: 'https://login.microsoftonline.com/',
                tenant: 'This is your Azure AD tenant, e.g. sampleapps.onmicrosoft.com',
                clientId: 'This is your client id from Azure AD, e.g. d1d425ce-28f4-4181-a351-982e2c3f41b2',
                extraQueryParameter: 'nux=1',
            },
            $httpProvider
            );

    }).run(function ($state) {
        $state.go('home');
    });