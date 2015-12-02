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
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
  });