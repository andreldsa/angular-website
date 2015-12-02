'use strict';

/**
 * @ngdoc directive
 * @name rdnApp.directive:footer
 * @description
 * # footer
 */
angular.module('rdnApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E',
      link: function (scope, element) {
        element.addClass('footer');
      }
    };
  });
