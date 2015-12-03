'use strict';

/**
 * @ngdoc directive
 * @name rdnApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('rdnApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'E',
      scope: {},
      link: function (scope, element) {
        element.addClass('navbar');
      }
   };
});