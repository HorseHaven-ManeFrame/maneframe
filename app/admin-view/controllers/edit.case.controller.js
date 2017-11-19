'use strict';

app.controller('editCaseController', function($scope, $routeParams, horseFactory, FBCreds, authFactory, $window, $location, $route) {
  $scope.newCaseTitle = 'Case Details';
  $scope.submitButtonText = 'Submit Edited Case';

  $scope.case = {
    court_case_id: '',
    description: '',
    case_name: ''
  };

  $scope.showSingleCase = () => {
    horseFactory.getSingleCase($routeParams.itemId).then(data => {
      $scope.case = data.data;
    });
  };

  $scope.submitNewCase = function() {
    console.log('Update Adopter: ', $scope.case);
    horseFactory.submitUpdatedCase($routeParams.itemId, $scope.case)
      .then((response) => {
          $location.url("/cases");
      });
  };



    //   $scope.submitNewHorse = function () {
    //     AddHorseFactory.addNewHorse($scope.addHorse)
    //         .then((response) => {
    //             // console.log("RESPONSE", response.data.name);
    //             let pushUgly = {
    //                 horse_id: response.data.name
    //             };
    //             AddHorseFactory.updateHorse(pushUgly, response.data.name);
    //             $location.url("/admin/horses");
    //         });
    // };

  $scope.showSingleCase();
});
