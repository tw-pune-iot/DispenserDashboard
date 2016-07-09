'use strict';

angular.module('dispenser.statistics', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/statistics', {
            templateUrl: 'statistics/statistics.html',
            controller: 'StatisticsController'
        });
    }])

    .controller('StatisticsController', function($scope) {
        $scope.getWaterConsumption = function () {
           return 4.75;
        };

        $scope.initialWaterConsumptionTime = function (){
          return "12AM";
        };

        $scope.amountOfWaterLeftForConsumption = function () {
           return "4.0";
        };

        $scope.getWaterBottleMap = function () {
            var bottles = [];
            var consumption = $scope.getWaterConsumption();
            var numberOfTotalBottlesFinished = Math.floor(consumption);
            var remainingWater = consumption - numberOfTotalBottlesFinished;
            for(var index=0;index<numberOfTotalBottlesFinished;index++){
                bottles.push("../resources/1litrebottle.png");
            }
            if(remainingWater>=0.25 && remainingWater<0.5){
                bottles.push("../resources/quarterLitrebottle.png");
            }
            if(remainingWater>=0.5 && remainingWater<0.75){
                bottles.push("../resources/halfLitrebottle.png");
            }
            if(remainingWater>=0.75){
                bottles.push("../resources/threeQuarterLitrebottle.png");
            }
            console.log(bottles);
            return bottles;
        }
    });