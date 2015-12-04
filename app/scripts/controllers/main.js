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
    }

    $scope.images = [];

    ImageService.getImagesGallery().then(function(payload) {
      $scope.images = payload.data;
    })

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
  });

angular.module('rdnApp').controller('GalleryCtrl', function ($scope, $uibModalInstance, image) {

  $scope.image = image;

  $scope.ok = function () {
    $uibModalInstance.dismiss('cancel');
  };
});