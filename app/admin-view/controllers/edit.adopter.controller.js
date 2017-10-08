'use strict';

app.controller('EditAdopter', function(
  $scope,
  $location,
  horseFactory,
  adminEditFactory,
  authFactory,
  $routeParams,
  getUserInfo
) {
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
      uid: '',
  };

  const showEditAdopter = function() {
    horseFactory.getSingleAdopter($routeParams.itemId).then(data => {
      $scope.adopter = data.data;
    });
  };
  showEditAdopter();
  
  $scope.updateAdopter = function () {
      console.log("Update Adopter: ", $scope.adopter)
      horseFactory.updateSingleAdopter($routeParams.itemId, $scope.adopter)
          .then(data => {
      })
  }  

  $scope.submitNewEvent = function() {
    adminEditFactory.updateEventAdmin($scope.event);
    // .then((data)=>{
    //     //$location allows to change URL path
    //     // $location.path("#!/admin/groupsevents");
    // });
  };
});
