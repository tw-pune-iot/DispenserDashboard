'use strict';
angular.module('dispenser', [
  'ngRoute',
  'dispenser.statistics',
  'dispenser.version',
  'dispenser.home'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
