'use strict';

// console.log("navcontroller, yo!");

app.controller("navCtrl", function($scope, $window, $location, $routeParams, $route, authFactory, getUserInfo){

    $scope.isLoggedIn = false;
    
    $scope.logout = () => {
        authFactory.logOut();
        $window.location.reload();
      };
  
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          $scope.isLoggedIn = true;
          let uid = user.uid;
          $window.location.href = "#!/admin"
          $scope.$apply();
        } else {
          $scope.isLoggedIn = false;
          $window.location.href = "#!/login";
        }
      });
});