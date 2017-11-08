'use strict';

app.controller('AddAdopterController', function($scope, $location, horseFactory) {
  $scope.newEventTitle = 'Add an Adopter';
  $scope.submitButtonText = 'Submit';

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

  $scope.consoleToLog = function() {
    console.log("WORKING");
  };

  $scope.submitNewAdopter = function() {
    horseFactory.submitNewAdopter($scope.adopter).then(data => {
      $location.url('/admin/adopters');
    });
  };

 function consoleNow() {
    console.log("HERERERERRER");
  }
  consoleNow();
});
