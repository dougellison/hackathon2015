/**
 * Created by Home on 11/8/2015.
 */

var app = angular.module('MainApp', ['ngMaterial', 'ngRoute']);

app.controller('MainAppCtrl', function($scope) {
    $scope.hello = 'Hello World';
    $scope.viewURL = '';
})
    .controller('QueueCtrl', function($scope) {


        $scope.queueMessage = "The Queue";
        $scope.usingQueue = false;
        $scope.selected = '';

        $scope.queue = [];
        $scope.queue.push('Song 1');
        $scope.queue.push('Song 2');
        $scope.queue.push('Song 3');
        $scope.queue.push('Song 4');
        $scope.queue.push('Song 5');

        $scope.proceedToQueue = function() {
            $scope.usingQueue = true;
            $scope.selected = $scope.queue[0];
            $scope.count = 0;
        }

        $scope.likeIt = function() {
            $scope.count++;
            $scope.selected = $scope.queue[$scope.count];
        }
        $scope.hateIt = $scope.likeIt;
})
    .controller('SearchCtrl', function($scope) {
        $scope.searchMessage = "Search"
})
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/queue', {
                templateUrl: 'queue.html',
                controller: 'QueueCtrl'
            })
            .when('/search', {
                templateUrl: 'search.html',
                controller: 'SearchCtrl'
            });
    });


