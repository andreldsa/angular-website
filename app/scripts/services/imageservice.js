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

  	var GALLERY_URL = 'http://racingdaynordeste.com.br/wp-json/api/v1/media/gallery';

  	function getImagesGallery() {
  		var deferred = $q.defer();
  		$http.get(GALLERY_URL).then(function(data) {
  			deferred.resolve(data);
  		}, function(error) {
  			deferred.reject(error);
  		});
  		return deferred.promise;
  	}

  	return {
  		getImagesGallery: getImagesGallery
  	};
  });
