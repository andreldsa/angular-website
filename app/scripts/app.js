'use strict';

/**
 * @ngdoc overview
 * @name rdnApp
 * @description
 * # rdnApp
 *
 * Main module of the application.
 */
angular
  .module('rdnApp', [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
  });

angular.module('rdnApp').run(['$state', '$stateParams',
    function($state, $stateParams) {
        //this solves page refresh and getting back to state
}]);
