'use strict';
// console.log("App, yo!");

const app = angular.module('HorseHaven', ['ngRoute', 'angular.filter']);

let isAuth = authFactory =>
  new Promise((resolve, reject) => {
    authFactory.isAuthenticated().then(userExists => {
      if (userExists) {
        resolve();
      } else {
        reject();
      }
    });
  });

app.config($routeProvider => {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/login-view/loginForm.html',
      controller: 'userCtrl'
    })
    .when('/admin/addService/:itemId', {
        templateUrl: 'app/admin-view/forms/addHorseServiceForm.html',
        controller: 'AddHorseServicesController',
        resolve: {isAuth}
    })
    .when('/admin/addWeight/:itemId', {
        templateUrl: 'app/admin-view/forms/addHorseWeightForm.html',
        controller: 'AddHorseWeightController',
        resolve: {isAuth}
    })
    .when('/admin/addHorse', {
      templateUrl: 'app/admin-view/forms/addHorseForm.html',
      controller: 'HorseController',
      resolve: { isAuth }
    })
    .when('/admin/addHorse/:itemId', {
      templateUrl: 'app/admin-view/oneHorseView.html',
      controller: 'EditHorse',
      resolve: { isAuth }
    })
    .when('/admin/addHorse/edit/:itemId', {
      templateUrl: 'app/admin-view/forms/addHorseForm.html',
      controller: 'EditHorse',
      resolve: { isAuth }
    })
    .when('/admin/addAdopter', {
      templateUrl: 'app/admin-view/forms/addAdopterForm.html',
      controller: 'AddAdopterController',
      resolve: { isAuth }
    })
    .when('/admin/addAdopter/:itemId', {
      templateUrl: 'app/admin-view/forms/addAdopterForm.html',
      controller: 'EditAdopter',
      resolve: { isAuth }
    })
    .when('/admin/addServiceProvider', {
      templateUrl: 'app/admin-view/forms/addServiceProvider.html',
      controller: 'AddServiceProvider',
      resolve: { isAuth }
    })
    .when('/admin/addServiceProvider/:itemId', {
      templateUrl: 'app/admin-view/forms/addServiceProvider.html',
      controller: 'EditServiceProvider',
      resolve: { isAuth }
    })
    .when('/admin/service-providers', {
      templateUrl: 'app/admin-view/serviceProvidersView.html',
      controller: 'ServiceProviderController',
      resolve: { isAuth }
    })
    .when('/admin/horses', {
      templateUrl: 'app/admin-view/allHorsesView.html',
      controller: 'allHorsesView',
      resolve: { isAuth }
    })
    .when('/admin', {
      templateUrl: 'app/admin-view/adminDashboard.html',
      controller: 'allHorsesView',
      resolve: { isAuth }
    })
    .when('/cases', {
      templateUrl: 'app/admin-view/allCasesView.html',
      controller: 'allHorsesView',
      resolve: { isAuth }
    })
    .when('/admin/addCase/:itemId', {
      templateUrl: 'app/admin-view/forms/addCase.html',
      controller: 'editCaseController',
      resolve: { isAuth }
    })
    .when('/admin/addCase', {
      templateUrl: 'app/admin-view/forms/addCase.html',
      controller: 'addCaseController',
      resolve: { isAuth }
    })
    .when('/admin/adopters', {
      templateUrl: 'app/admin-view/adopterView.html',
      controller: 'ViewAdoptersController',
      resolve: { isAuth }
    })
    .when('/admin/adopterInfo/:itemId', {
      templateUrl: 'app/admin-view/allHorsesView.html',
      controller: 'ViewAdoptersController',
      resolve: { isAuth }
    })
    .when('/admin/eligibility', {
            templateUrl: 'app/admin-view/allHorsesView.html',
            controller: 'ViewEligibleForOwnershipController',
            resolve: {isAuth}
            })
    .otherwise('/');

});

app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.apiKey,
    authDomain: creds.authDomain,
    databaseURL: creds.databaseURL
  };
  firebase.initializeApp(authConfig);
});
