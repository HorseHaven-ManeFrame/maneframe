"use strict";

app.controller("EditHorse", function ($scope, $location, authFactory, $routeParams, AddHorseFactory, $route, $window) {
    
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
            AddHorseFactory.getSingleHorse($routeParams.itemId)
                .then((data) => {
                    console.log("data", data);
                    $scope.addHorse = data.data;
                    $scope.addHorse.arrive_date = new Date(data.data.arrive_date);
                    $scope.addHorse.departure_date = new Date(data.data.departure_date);
                    $scope.addHorse.eligible_for_ownership_date = new Date(data.data.eligible_for_ownership_date);
                });
        };
        showEditHorse();

        $scope.submitNewHorse = function () {
            AddHorseFactory.updateHorse($scope.addHorse, $routeParams.itemId);
            $window.location.href = "#!/admin/horses";
            };

        $scope.getServices = function () {
            console.log("$routeParams.itemId", $routeParams.itemId);
            AddHorseFactory.getServiceDetails($routeParams.itemId)
            .then((response)=>{
                let array = [];
                let keys = Object.keys(response);
                keys.forEach((item)=>{
                    array.push(response[item]);
                });
                $scope.horseServices = array;
                // console.log("$scope.horseServices", $scope.horseServices);
            });
        };

        $scope.getServices();

        $scope.serviceTitle = "Add a Service";
        $scope.submitButtonText = "Submit Service";
    
        $scope.addService = {
            horse_id: $routeParams.itemId,
            amount:"",
            date:"",
            description:"",
            type:""
            
        };


});