'use strict';

/**
 * @ngdoc function
 * @name elicngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elicngApp
 */
angular.module('elicngApp')
  .controller('PlayerOptionsCtrl', function ($scope) {
      console.log($scope.selectedPlayer);
      $scope.selectedPlayer.playing = false;
  });
