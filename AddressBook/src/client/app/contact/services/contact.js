(function () {
    'use strict';

    var module = angular.module('contact.services.contact', ['ngResource']);

    module.factory('Contact', function($resource) {
        return $resource('/api/v1/contacts/:contactId', {contactId:'@_id'});
    });

}());