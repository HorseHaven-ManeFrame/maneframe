"use strict";

app.controller("EditServiceProvider", function ($scope, $location, horseFactory, authFactory, $routeParams) {
    
        $scope.newEventTitle = "Edit Service Provider";
        $scope.submitButtonText = "Submit Edited Provider";
        let user = authFactory.getCurrentUser();
    
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

    const showEditProvider = function() {
        horseFactory.getSingleProvider($routeParams.itemId)
            .then((data) => {
                console.log ("DATA HERE!!!!", data);
                $scope.provider = data.data;
                $scope.provider.id = $routeParams.itemId;
            });
        };
            
    showEditProvider();


    $scope.submitNewProvider = function () {
        // console.log ("WHAT IS THIS", $scope.provider);
        horseFactory.submitUpdatedProvider($routeParams.itemId, $scope.provider)
        .then((data)=>{
        });
    };
        


});