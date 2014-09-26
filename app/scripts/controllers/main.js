'use strict';

/**
 * @ngdoc function
 * @name elicngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elicngApp
 */
angular.module('elicngApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
