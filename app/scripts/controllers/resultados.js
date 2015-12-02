'use strict';

angular.module('rdnApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('resultados', {
        url: '/resultados',
        templateUrl: 'views/resultados.html',
        controller: 'ResultadosCtrl',
        controllerAs: 'resultados',
        params: {idCategoria: null}
      });
  });

/**
 * @ngdoc function
 * @name rdnApp.controller:ResultadosCtrl
 * @description
 * # ResultadosCtrl
 * Controller of the rdnApp
 */
angular.module('rdnApp')
  .controller('ResultadosCtrl', function ($scope, $state, $stateParams) {
  	$scope.idCategoria = $stateParams.idCategoria;

  	if(!$scope.idCategoria) {
  		$state.go('main');
  	}

  	
  });
