'use strict';

app.controller('AddAdopterController', function($scope, $location, horseFactory, AddHorseFactory) {

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
    adopter_id: ''
  };


  $scope.submitNewAdopter = function() {
    horseFactory.submitNewAdopter($scope.adopter)
    .then((response) => {
      console.log("RESPONSE", response.data.name);
      let pushUgly = {
        adopter_id: response.data.name
    };
    AddHorseFactory.updateHorse(response.data.name, pushUgly);
      $location.url('/admin/adopters');
    });
  };

});
