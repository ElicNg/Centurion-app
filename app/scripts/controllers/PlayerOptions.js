'use strict';

/**
 * @ngdoc function
 * @name centurionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the centurionApp
 */
angular.module('centurionApp')
  .controller('PlayerOptionsCtrl', function ($scope) {
      console.log($scope.selectedPlayer);
      $scope.selectedPlayer.playing = false;
  });
