'use strict';

/**
 * @ngdoc function
 * @name elicngApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the elicngApp
 */
angular.module('elicngApp')
    .controller('TodoCtrl', function ($scope, localStorageService) {
        var todosInStore = localStorageService.get('todos');
        console.log(todosInStore);
        $scope.todos = todosInStore ? todosInStore : [];
        console.log($scope.todos);
        $scope.$watch('todos', function () {
            localStorageService.set('todos', angular.toJson($scope.todos));
        }, true);

        $scope.addTodo = function () {

            if ($scope.newTodo) {
                $scope.todos.push({name: $scope.newTodo, completed:false});
                $scope.newTodo = '';
            }
        };

        $scope.clearCompleted = function () {
            var oldList = $scope.todos;
            $scope.todos = [];

            angular.forEach(oldList, function(x) {
                if (!x.completed) {
                    $scope.todos.push(x);
                }
            });
        };

        $scope.getTodosCount = function () {
            return $scope.todos.length;
        };
        $scope.clearLocalStorage = function () {
            localStorageService.clearAll();
        };
    });
