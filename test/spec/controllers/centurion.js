'use strict';

describe('Controller: CenturionCtrl', function () {

  // load the controller's module
  beforeEach(module('centurionApp'));

  var CenturionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CenturionCtrl = $controller('CenturionCtrl', {
      $scope: scope
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(scope.awesomeThings.length).toBe(3);
  //});
});
