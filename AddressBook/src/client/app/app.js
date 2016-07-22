(function () {
    'use strict';

    var app = angular.module('app', [
        'ngRoute',
        'contact.controllers.contact-add',
        'contact.controllers.contact-list'
    ]);

    app.config(function($routeProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: '/app/contact/views/contact-list.html',
            controller: 'ContactListCtrl'
        });

        $routeProvider.when('/ajouter', {
            templateUrl: '/app/contact/views/contact-add.html',
            controller: 'ContactAddCtrl'
        });

        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    });


}());