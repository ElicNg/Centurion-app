'use strict';

describe('Service: centurionranks', function () {

  // load the service's module
  beforeEach(module('elicngApp'));

  // instantiate service
  var centurionranks;
  beforeEach(inject(function (_centurionranks_) {
    centurionranks = _centurionranks_;
  }));

  it('should do something', function () {
    expect(!!centurionranks).toBe(true);
  });

});
