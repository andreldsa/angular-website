'use strict';

/**
 * @ngdoc service
 * @name rdnApp.ResultadoService
 * @description
 * # ResultadoService
 * Service in the rdnApp.
 */
angular.module('rdnApp')
  .service('ResultadoService', function ($http, $q) {
  	var RESULTADOS_URL = 'http://racingdaynordeste.com.br/wp-json/api/v1/resultado/categoria/';
    var RESULTADOS_PILOTO_URL = 'http://racingdaynordeste.com.br/wp-json/api/v1/resultado/piloto/';

    var NOMES_CATEGORIAS = [
      '1000 SBK Pro',
      '1000 STK',
      '600 SS PRO',
      '600 STK',
      'Copa Ninja 300cc',
      '250/300 STK',
      '250/300 PRO'
    ];

    function get(url) {
      var deferred = $q.defer();
      $http.get(url).then(function(data) {
        deferred.resolve(data);
      }, function(msg) {
        deferred.reject(msg);
      });
      return deferred.promise;
    }

  	function getPorCategoria(ano, id) {
  		var url = RESULTADOS_URL + ano + '/' + id;
  		return get(url);
  	}

    function getResultadoPiloto(ano, id) {
      var url = RESULTADOS_PILOTO_URL + ano + '/' + id;
      return get(url);
    }

    function getNomeCategoria(id) {
      return NOMES_CATEGORIAS[id-1];
    }

    return {
      getPorCategoria: getPorCategoria,
      getResultadoPiloto: getResultadoPiloto,
      getNomeCategoria: getNomeCategoria
    };
});
