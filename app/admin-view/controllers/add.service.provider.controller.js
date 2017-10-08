"use strict";

app.controller("AddServiceProvider", function ($scope, $location, horseFactory, authFactory) {
    
        $scope.newEventTitle = "Add Service Provider";
        $scope.submitButtonText = "Submit";
    
        $scope.provider = {
            address: "",
            city: "",
            email: "",
            name: "",
            phone: "",
            provider_type: "",
            service_provider_id: "",
            state: "",
            zipcode: ""
        };
    
        $scope.submitNewProvider = function () {
            horseFactory.submitNewProvider($scope.provider)
                .then((data) => {
                    $location.url("/admin/service-providers");
                });
        };

});


    