"use strict";

app.controller("EditHorse", function ($scope, $location, authFactory, $routeParams, HorseFactory) {
    
        $scope.newTitle = "Horse Details";
        $scope.submitButtonText = "Update Horse Details";
    
        $scope.addHorse = {
            adopter_id: "",
            adopter_name: "",
            age: "",
            arrive_date: "",
            breed: "",
            color: "",
            county: "",
            departure_date: "",
            eligible_for_ownership_date: "",
            gender: "",
            haven_id: "",
            name: "",
            status: ""
        };

        const showEditHorse = function () {
            HorseFactory.getSingleHorse($routeParams.itemId)
                .then((data) => {
                    console.log("data", data);
                    $scope.addHorse = data.data;
                    // $scope.addHorse.arrive_date = new Date(data.arrive_date);
                    // $scope.addHorse.departure_date = new Date(data.departure_date);
                    // $scope.addHorse.eligible_for_ownership_date = new Date(data.eligible_for_ownership_date);
                });
        };
        showEditHorse();

        $scope.submitNewHorse = function () {
            HorseFactory.updateHorse($scope.addHorse, $routeParams.itemId)
                .then((response) => {
                    $location.url("/admin/horses");
                });
        };
        


});