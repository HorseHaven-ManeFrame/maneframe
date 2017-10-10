"use strict";
app.controller("userCtrl", function ($scope, $window, authFactory, $location, $http, FBCreds) {

    $scope.account = {
        email: "",
        password: ""
    };

    $scope.logIn = () => {
        authFactory.logIn($scope.account);
    };
});