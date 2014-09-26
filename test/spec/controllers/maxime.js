'use strict';

describe('Controller: MaximeCtrl', function () {

  // load the controller's module
  beforeEach(module('elicngApp'));

  var MaximeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaximeCtrl = $controller('MaximeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
