(function () {
    'use strict';

    var module = angular.module('contact.controllers.contact-add', ['contact.services.contact']);


    module.controller('ContactAddCtrl', function ($scope, $location, Contact) {
        $scope.ajouter = function() {
            var contact = new Contact($scope.contact);

            contact.$save(function() {
                $location.url('/');
            });
        };
    });


}());