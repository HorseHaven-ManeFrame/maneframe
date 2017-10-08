"use strict";

app.controller("ServiceProviderController", function ($scope, authFactory, $route, horseFactory) {


    $scope.showAllServiceProviders = () =>{
        horseFactory.getAllServiceProviders()
        .then((data)=>{
            // 
            $scope.allServiceProviderData = data;
            console.log ("data", data);

        });
    };

$scope.showAllServiceProviders();
});