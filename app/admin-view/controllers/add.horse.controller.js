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

app.controller("AddHorseServicesController", function ($scope, $location, AddHorseFactory, authFactory, $routeParams, $window) {

    
    
        $scope.newTitle = "Add a Service";
        $scope.submitButtonText = "Submit Service";
    
        $scope.addService = {
            date: "",
            amount: "",
            description: "",
            horse_id: $routeParams.itemId,
            service_provider_id:"",
            type: ""
        };
    
        $scope.submitNewService = function () {
            AddHorseFactory.addNewService($scope.addService)
                .then((response) => {
                    // console.log("RESPONSE", response.data.name);
                    let pushUgly = {
                        service_id: response.data.name
                    };
                    AddHorseFactory.updateService(pushUgly, response.data.name);
                    console.log("$routeParams", $routeParams.itemId);
                    console.log("#!/admin/addHorse/{{$routeParams.itemId}}");
                    $window.location.href = `#!/admin/addHorse/${$routeParams.itemId}`;
                });
        };
    
    });