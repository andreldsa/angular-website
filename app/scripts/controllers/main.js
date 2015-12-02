'use strict';

angular.module('rdnApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  });


/**
 * @ngdoc function
 * @name rdnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rdnApp
 */
angular.module('rdnApp')
  .controller('MainCtrl', function () {
    
  });
