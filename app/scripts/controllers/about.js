'use strict';

angular.module('rdnApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  });

/**
 * @ngdoc function
 * @name rdnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rdnApp
 */
angular.module('rdnApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
