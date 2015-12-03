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
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
  });