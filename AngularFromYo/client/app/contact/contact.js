'use strict';

angular.module('angularFromYoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        template: '<contact></contact>'
      });
  });
