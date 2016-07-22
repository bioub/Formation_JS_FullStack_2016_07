(function () {
    'use strict';

    var module = angular.module('contact.controllers.contact-list', ['contact.services.contact']);

    module.controller('ContactListCtrl', function ($scope, Contact) {
        $scope.contacts = Contact.query();

        $scope.supprimer = function(i) {
            $scope.contacts[i].$delete(function() {
                $scope.contacts.splice(i, 1);
            });

        };
    });
}());