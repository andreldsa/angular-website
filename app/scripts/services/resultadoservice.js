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
  	var RESULTADOS_URL = 'http://api.racingdaynordeste.com.br/wp-json/api/v1/resultado/categoria/';
    var RESULTADOS_PILOTO_URL = 'http://api.racingdaynordeste.com.br/wp-json/api/v1/resultado/piloto/';
    var RESULTADOS_ETAPA_CATEGORIA = 'http://api.racingdaynordeste.com.br/wp-json/api/v1/etapa/';
    var GET_ETAPAS = 'http://api.racingdaynordeste.com.br/wp-json/api/v1/etapas/';

    var NOMES_CATEGORIAS = [
      '1000 SBK Pro',
      '1000 STK',
      '600 SS PRO',
      '600 STK',
      'Copa Ninja 300cc',
      '250/300 STK',
      '250/300 PRO',
      '321cc R3'
    ];

    function get(url, data) {
      var deferred = $q.defer();
      $http.get(url, data).then(function(data) {
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

    function getEtapaCategoria(ano, etapa, id) {
      var url = RESULTADOS_ETAPA_CATEGORIA + ano + '/' + etapa + '/categoria/' + id;
      return get(url);
    }

    function getEtapas(ano) {
      var url = GET_ETAPAS + ano;
      return get(url);
    }

    return {
      getPorCategoria: getPorCategoria,
      getResultadoPiloto: getResultadoPiloto,
      getNomeCategoria: getNomeCategoria,
      getEtapaCategoria: getEtapaCategoria,
      getEtapas: getEtapas
    };
});
