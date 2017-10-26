'use strict';

app.controller('ViewAdoptersController', function($scope, $route, $routeParams, horseFactory) {

  // $scope.title = "Adopter Horses Details";
  
  $scope.showAllAdopters = () => {
    horseFactory.getAllAdopters()
    .then(data => {
      $scope.allAdoptersData = data;
    });
  };


  
  $scope.deleteSingleAdopter = function (id) {
     horseFactory.deleteSingleAdopter(id)
       .then(() => {
                $scope.showAllAdopters();
            });
    };

    $scope.showAllHorses = () => {
    horseFactory.getSingleAdopterHorses($routeParams.itemId)
      .then((data) =>{
        $scope.allHorsesData =  data;
      });

    };

    $scope.showEditAdopter = function() {
      horseFactory.getSingleAdopter($routeParams.itemId)
      .then(data => {
        $scope.adopter = data.data;
        console.log("$scope.adopter", $scope.adopter);
        $scope.adopterName = data.data.name;
        $scope.adopterAddress = data.data.address;
        $scope.adopterCity = data.data.city;
        $scope.adopterEmail = data.data.email;
        $scope.adopterPhone = data.data.phone;
    
      });
    };
  
  $scope.showEditAdopter();
  $scope.showAllHorses();
  $scope.showAllAdopters();

});
