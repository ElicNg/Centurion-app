'use strict';

/**
 * @ngdoc function
 * @name centurionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the centurionApp
 */
angular.module('centurionApp')
  .controller('AboutCtrl', function ($scope) {
      $scope.isActive = function (viewLocation) {
          var active = (viewLocation === $location.path());
          return active;
      };
});
