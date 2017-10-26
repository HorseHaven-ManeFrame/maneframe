'use strict';

app.controller('ViewAdoptersController', function($scope, $route, $routeParams, horseFactory) {
  
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
      horseFactory.getSingleAdopterHorses($routeParams.itemId);
    };
  
    $scope.showAllHorses();
  $scope.showAllAdopters();

});
