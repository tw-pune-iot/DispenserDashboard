'use strict';

angular.module('dispenser.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController', function ($scope, $http) {

            $scope.info = false;
            $scope.allData = null;

            $http.get('http://10.131.125.74:8083/api/users').then(function (data) {
                $scope.allData = data.data;
                $scope.showLeaderBoard();
            });

            $scope.getData = function () {
                $scope.date = new Date().toISOString().split('T')[0];
                $scope.consumptionAmount = 0;
                $http.get('http://10.131.125.74:8083/api/waterdispenser/consumption/empId/' + $scope.empId).success(function (response) {
                    $scope.consumptionAmount = response.length && response[0].consumption;
                    $scope.needToDrink = 3700 - $scope.consumptionAmount;
                    $scope.resultMessage = $scope.getResultMessage($scope.needToDrink);
                });
            };

            $scope.getEmpName = function () {
                var matchUser = null;
                $scope.allData.forEach(function (user) {
                    if (user.empId == $scope.empId) {
                        matchUser = user;
                    }
                });
                return matchUser.employeeName;
            };
            $scope.getResultMessage = function (water) {
                if (water > 0) {
                    return "You need to drink " + water + " ml water more!!!";
                }
                return "Great! You have covered daily limit of the day(3700 ml)";
            }

            $scope.showUserData = function () {
                $scope.info = true;
                $scope.getData();
                $scope.empName = $scope.getEmpName();
            };

            $scope.showLeaderBoard = function () {
                $http.get('http://10.131.125.74:8083/api/waterdispenser/topConsumers/').then(function (data) {
                    $scope.employeeArray = data.data;

                    $scope.resultArray = [];
                    var counter = 0;


                    $scope.employeeArray.forEach(function (employee) {
                        $scope.allData.forEach(function (user) {
                            if (user.empId == employee._id) {
                                $scope.resultArray[counter] = user;
                                $scope.resultArray[counter].consumptionAmount = $scope.employeeArray[counter].consumption;

                                counter++;
                            }
                        });
                    });
                    return ($scope.resultArray);

                });


            };

        }
    );
