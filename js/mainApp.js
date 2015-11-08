/**
 * Created by Home on 11/8/2015.
 */

var app = angular.module('MainApp', ['ngMaterial']);

app.controller('MainAppCtrl', function($scope) {
    $scope.hello = 'Hello World';


    $scope.onSwipeLeft = function(ev) {
        alert('You swiped left!!');
    };
    $scope.onSwipeRight = function(ev) {
        alert('You swiped right!!');
    };
})
