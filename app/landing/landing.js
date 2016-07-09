'use strict';

angular.module('dispenser.landing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/landing', {
    templateUrl: 'landing/landing.html',
    controller: 'LandingController'
  });
}])

.controller('LandingController', [function() {

}]);
