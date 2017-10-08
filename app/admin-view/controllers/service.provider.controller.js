"use strict";

app.controller("ServiceProviderController", function ($scope, $route, horseFactory) {


    $scope.showAllServiceProviders = () =>{
        horseFactory.getAllServiceProviders()
        .then((data)=>{
            // 
            $scope.allServiceProviderData = data;
            console.log ("data", data);

        });
    };

    $scope.deleteSingleProvider = function (id) {
        horseFactory.deleteSingleProvider(id)
            .then(() => {
                $scope.showAllServiceProviders();
            });
    };

$scope.showAllServiceProviders();

});