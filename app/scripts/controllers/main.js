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
  .controller('MainCtrl', function ($scope, ImageService, $uibModal) {

    $scope.limit = 9;

    $scope.maisFotos = function() {
      $scope.limit = $scope.limit + 3;
    };

    $scope.images = [];

    $scope.recordes = [];

    ImageService.getRecordes().then(function(payload) {
      $scope.recordes = payload.data;
    });

    ImageService.getImagesGallery().then(function(payload) {
      $scope.images = payload.data;
    });

    $scope.open = function (image) {
        $uibModal.open({
          animation: true,
          templateUrl: 'views/galleryModalContent.html',
          controller: 'GalleryCtrl',
          size: 'lg',
          resolve: {
            image: function () {
              return image;
            }
          }
        });      
    };

    $scope.openRecord = function (record) {
        $uibModal.open({
          animation: true,
          templateUrl: 'views/recordModalContent.html',
          controller: 'RecordsCtrl',
          size: 'lg',
          resolve: {
            record: function () {
              return record;
            }
          }
        });      
    };
  });

angular.module('rdnApp').controller('GalleryCtrl', function ($scope, $uibModalInstance, image) {

  $scope.image = image;

  $scope.ok = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

angular.module('rdnApp').controller('RecordsCtrl', function ($scope, $uibModalInstance, record) {

  $scope.record = record;

  $scope.ok = function () {
    $uibModalInstance.dismiss('cancel');
  };
});