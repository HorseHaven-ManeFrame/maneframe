'use strict';

app.controller('CasesController', function($scope, horseFactory, FBCreds, authFactory, $location, $window) {
 
  $scope.showAllCases = () => {
    horseFactory.getAllCases().then(data => {
      $scope.allCases = data.data;
      $scope.totalCases = Object.keys($scope.allCases);
    });
  };


  $scope.deleteSingleCase = function (id) {
        horseFactory.deleteSingleCase(id)
          .then(() => {
                $scope.showAllCases();
            });
    };





  $scope.showAllCases();

});