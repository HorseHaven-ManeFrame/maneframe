'use strict';

app.controller('editCaseController', function($scope, $routeParams, horseFactory, FBCreds, authFactory) {
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

  $scope.submitUpdatedCase = function() {
    console.log('Update Adopter: ', $scope.case);
    horseFactory.submitUpdatedCase($routeParams.itemId, $scope.case).then(data => {
      console.log('Just Updated Case: ', data.data);
    });
  };

  $scope.showSingleCase();
});
