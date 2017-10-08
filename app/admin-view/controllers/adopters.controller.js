'use strict';

app.controller('ViewAdoptersController', function($scope, $route, horseFactory) {
  
  $scope.showAllAdopters = () => {
    horseFactory.getAllAdopters().then(data => {
      $scope.allAdoptersData = data;
    });
  };

  $scope.showAllAdopters();
});
