"use strict";

app.controller("HorseController", function ($scope, $location, AddHorseFactory, authFactory) {

    $scope.newTitle = "Add a Horse";
    $scope.submitButtonText = "Submit New Horse";

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
        horse_id: "",
        name: "",
        status: ""
    };

    $scope.submitNewHorse = function () {
        AddHorseFactory.addNewHorse($scope.addHorse)
            .then((response) => {
                // console.log("RESPONSE", response.data.name);
                let pushUgly = {
                    horse_id: response.data.name
                };
                AddHorseFactory.updateHorse(pushUgly, response.data.name);
                $location.url("/admin/horses");
            });
    };

});