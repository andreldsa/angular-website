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
  .controller('MainCtrl', function ($scope, ImageService, $anchorScroll, $location) {

    $scope.limit = 9;

    $scope.maisFotos = function() {
      $scope.limit = $scope.limit + 3;
      $location.hash('mais-fotos');
      $anchorScroll();
    }

    $scope.images = [];

    ImageService.getImagesGallery().then(function(payload) {
      $scope.images = payload.data;
    })
  });
