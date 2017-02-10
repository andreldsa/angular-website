'use strict';

/**
 * @ngdoc service
 * @name rdnApp.ImageService
 * @description
 * # ImageService
 * Service in the rdnApp.
 */
angular.module('rdnApp')
  .service('ImageService', function ($http, $q) {

  	var GALLERY_URL = 'http://api.racingdaynordeste.com.br/wp-json/api/v1/media/gallery';
    var SLIDE_URL = 'http://api.racingdaynordeste.com.br/wp-json/api/v1/media/slide';
    var RECORDES_URL = 'http://api.racingdaynordeste.com.br/wp-json/wp/v2/record';

    function get(URL) {
      var deferred = $q.defer();
      $http.get(URL).then(function(data) {
        deferred.resolve(data);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }

  	function getImagesGallery() {
  		return get(GALLERY_URL);
  	}

    function getSlides() {
      return get(SLIDE_URL);
    }

    function getRecordes() {
      return get(RECORDES_URL);
    }

  	return {
  		getImagesGallery: getImagesGallery,
      getSlides: getSlides,
      getRecordes: getRecordes
  	};
  });
