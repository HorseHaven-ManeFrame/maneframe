"use strict";

app.controller("allHorsesView", function($scope, horseFactory, FBCreds, authFactory){

    $scope.showAllHorses = () =>{
        horseFactory.getAllHorses()
        .then((data)=>{
            $scope.allHorsesData = data;
            $scope.allHorseDataLength = data.length;
        });
    };

$scope.showAllHorses();
});