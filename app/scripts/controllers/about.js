'use strict';

/**
 * @ngdoc function
 * @name elicngApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the elicngApp
 */
angular.module('elicngApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
