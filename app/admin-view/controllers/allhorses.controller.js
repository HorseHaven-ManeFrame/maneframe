'use strict';

app.controller('allHorsesView', function($scope, horseFactory, FBCreds, authFactory) {
  $scope.showAllHorses = () => {
    horseFactory.getAllHorses().then(data => {
      $scope.allHorsesData = data;
      $scope.allHorseDataLength = data.length;
    });
  };

  $scope.showAllCases = () => {
    horseFactory.getAllCases().then(data => {
      $scope.allCases = data.data;
      console.log('All Cases: ', $scope.allCases)
      $scope.totalCases = Object.keys($scope.allCases)
    });
  };

  $scope.showAllHorses();
  $scope.showAllCases();
});
