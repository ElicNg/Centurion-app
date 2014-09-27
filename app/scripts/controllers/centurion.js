'use strict';

/**
 * @ngdoc function
 * @name elicngApp.controller:CenturionCtrl
 * @description
 * # CenturionCtrl
 * Controller of the elicngApp
 */
angular.module('elicngApp')
    .controller('CenturionCtrl', function ($scope, $timeout, centurionranks, localStorageService, ngDialog) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.ranks = centurionranks.getRanks();

        var timeout; // Keep the timeout in var

        $scope.onTimeout = function () {
            $scope.counter++;
            $scope.computeLogic();
            timeout = $timeout($scope.onTimeout, 1000);
        };

        $scope.computeLogic = function () {
            if ($scope.counter >= 60) {
                $scope.counter = 0;
                $scope.minutes++;
                angular.forEach($scope.players, function (p) {
                    if (p.playing) {
                        p.level++;
                    }
                });
            }
            $scope.seconds = $scope.counter;
        };

        $scope.start = function () {
            if (timeout === null) {
                timeout = $timeout($scope.onTimeout, 1000);
            }
        };

        $scope.stop = function () {
            $timeout.cancel(timeout);
            timeout = null;
        };

        $scope.reset = function () {
            $scope.stop();
            $scope.counter = 0;
            $scope.players = [];
            $scope.seconds = 0;
            $scope.minutes = 0;
            $scope.computeLogic();
        };

        $scope.addPlayer = function () {
            if ($scope.newPlayer) {
                $scope.players.push({ name: $scope.newPlayer, level: 0, playing: true });
                $scope.newPlayer = '';
            }
        };

        $scope.playerGiveUp = function (player) {
            player.playing = false;
        }

        $scope.debugPlus10 = function () {
            $scope.counter += 10;
            $scope.computeLogic();
        };

        $scope.init = function () {
            $scope.reset();
            $scope.max = 60;

            var minutesInStore = localStorageService.get('minutes');
            var counterInStore = localStorageService.get('counter');
            var playerInStore = localStorageService.get('players');

            if (playerInStore) {
                $scope.players = playerInStore;
            }

            if (counterInStore) {
                $scope.counter = parseInt(counterInStore);
            }

            if (minutesInStore) {
                $scope.minutes = parseInt(minutesInStore);
            }

            $scope.$watch('players', function () {
                localStorageService.set('players', angular.toJson($scope.players));
            }, true);

            $scope.$watch('counter', function () {
                localStorageService.set('counter', angular.toJson(parseInt($scope.counter)));
            }, true);

            $scope.$watch('minutes', function () {
                localStorageService.set('minutes', angular.toJson(parseInt($scope.minutes)));
            }, true);

            $scope.computeLogic();
        };

        $scope.openPlayerOptions = function (player) {
            $scope.selectedPlayer = player;
            $scope.playerOptionsNewName = player.name;
            ngDialog.open({
                template: 'playerOptions',
                controller: 'PlayerOptionsCtrl',
                scope: $scope
            });
        };

        $scope.playerSkip = function (player) {
            console.log('player Skip' + player.name);
        };

        $scope.playerGiveUp = function (player) {
            console.log('playerGiveUp' + player.name);
            player.playing = false;
        };

        $scope.updatePlayerName = function (player, newName) {
            player.name = newName;
        }

        $scope.init();
    });