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
  .controller('ResultadosCtrl', function ($scope, $state, $stateParams, ResultadoService, $uibModal) {
  	$scope.idCategoria = $stateParams.idCategoria;

  	if(!$scope.idCategoria) {
  		$state.go('main');
  	}

    $scope.resultadosPiloto = {};
  	$scope.resultados = {};
    $scope.nomeCategoria = ResultadoService.getNomeCategoria($scope.idCategoria);

  	ResultadoService.getPorCategoria('2015', $scope.idCategoria).then(function(payload) {
  		$scope.resultados = payload.data;
  	}, function(error) {
  		console.log(error);
  	});

    $scope.animationsEnabled = true;

    function abrirModal() {
        $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'views/pilotoModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: 'lg',
          resolve: {
            items: function () {
              return $scope.resultadosPiloto;
            }
          }
        });
    }

    $scope.open = function (id) {
      ResultadoService.getResultadoPiloto('2015', id).then(function(payload) {
        $scope.resultadosPiloto = payload.data;
        abrirModal();
      }, function(error) {
        console.log(error);
      });
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };
  });

angular.module('rdnApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.items = items;

  $scope.nomePiloto = items[0].nomePiloto;

  $scope.calculaPontos = function (resultado) {
    var pontos1 = parseInt(resultado.pontos1);
    var pontos2 = parseInt(resultado.pontos2);
    return pontos1 + pontos2;
  };

  $scope.ok = function () {
    $uibModalInstance.dismiss('cancel');
  };
});