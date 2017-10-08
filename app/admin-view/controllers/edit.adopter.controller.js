'use strict';

app.controller('EditAdopter', function($scope, $location, horseFactory, authFactory, $routeParams) {
  $scope.newEventTitle = 'Edit Adopter';
  $scope.submitButtonText = 'Submit Edited Event';
  let user = authFactory.getCurrentUser();

  $scope.adopter = {
    address: '',
    zipcode: '',
    email: '',
    phone: '',
    state: '',
    name: '',
    city: '',
    uid: ''
  };

  const showEditAdopter = function() {
    horseFactory.getSingleAdopter($routeParams.itemId).then(data => {
      $scope.adopter = data.data;
    });
  };
  showEditAdopter();

  $scope.submitNewAdopter = function() {
    console.log('Update Adopter: ', $scope.adopter);
    horseFactory.updateSingleAdopter($routeParams.itemId, $scope.adopter).then(data => {});
  };
});
