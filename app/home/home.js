'use strict';

angular.module('dispenser.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController', function($scope) {
        $scope.topTenList = [{'id':'1', 'consumption':'2L'},{'id':'6','consumption':'5L'},
                                {'id':'3','consumption':'2L'},{'id':'8','consumption':'4L'},
                                {'id':'4','consumption':'3L'},{'id':'9','consumption':'1L'},
                                {'id':'5','consumption':'4L'},{'id':'10','consumption':'1L'}];

    });
