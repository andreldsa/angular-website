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
      }, 
      controller: function($scope, $location, $anchorScroll, $uibModal) {
      		$scope.goTo = function(div) {
      			$location.hash(div);
      			$anchorScroll();
      		};

          $scope.open = function (url) {
            var image = {'guid':url};
            $uibModal.open({
              animation: true,
              templateUrl: 'views/slideModalContent.html',
              controller: 'SlideModalCtrl',
              size: 'lg',
              resolve: {
                image: function () {
                  return image;
                }
              }
            });      
          };
      }
   };
});

angular.module('rdnApp').controller('SlideModalCtrl', function ($scope, $uibModalInstance, image) {

  $scope.image = image;

  $scope.ok = function () {
    $uibModalInstance.dismiss('cancel');
  };
});