'use strict';

app.controller('addCaseController', function($scope, $window, $routeParams, horseFactory, FBCreds, authFactory) {
  $scope.newCaseTitle = 'Add New Case';
  $scope.submitButtonText = 'Submit New Case';

  $scope.case = {
    court_case_id: '',
    description: '',
    case_name: ''
  };

  $scope.submitNewCase = () => {
    horseFactory.submitNewCase($scope.case).then(data => {
      let caseKey = data.data.name;
      $scope.case.case_id = caseKey;
      horseFactory.submitUpdatedCase(caseKey, $scope.case).then(data => {
        $window.location.href = `#!/cases`;
      });
    });
  };
});
