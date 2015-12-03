'use strict';

describe('Service: ResultadoService', function () {

  // load the service's module
  beforeEach(module('rdnApp'));

  // instantiate service
  var ResultadoService;
  beforeEach(inject(function (_ResultadoService_) {
    ResultadoService = _ResultadoService_;
  }));

  it('should do something', function () {
    expect(!!ResultadoService).toBe(true);
  });

});
