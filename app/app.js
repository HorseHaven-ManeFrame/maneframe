"use strict";
// console.log("App, yo!");

const app = angular.module("HorseHaven", ["ngRoute"]);

let isAuth = (authFactory) => new Promise((resolve, reject) => {
    authFactory.isAuthenticated()
        .then((userExists) => {
            if (userExists) {
                resolve();
            } else {
                reject();
            }
        });
});

app.config(($routeProvider) => {
    $routeProvider
        .when('/login', {
            templateUrl: 'app/login-view/loginForm.html',
            controller: 'userCtrl'
        })
        .when('/admin/event/:itemId', {
            templateUrl: 'app/admin-view/adminEventScoring.html',
            controller: 'userEventSubmission',
            resolve: {isAuth}
        })
        .when('/admin/groups/:itemId', {
            templateUrl: 'app/admin-view/adminGroupScoring.html',
            controller: 'userGroupSubmission',
            resolve: {isAuth}
        })
        .when('/admin/addHorse', {
            templateUrl: 'app/admin-view/forms/addHorseForm.html',
            controller: 'AddHorseController',
            resolve: {isAuth}
        })
        .when('/admin/addHorse/:itemId', {
            templateUrl: 'app/admin-view/forms/addHorseForm.html',
            controller: 'EditHorse',
            resolve: {isAuth}
        })
        .when('/admin/addAdopter', {
            templateUrl: 'app/admin-view/forms/addAdopterForm.html',
            controller: 'AddAdopterController',
            resolve: {isAuth}
        })
        .when('/admin/addAdopter/:itemId', {
            templateUrl: 'app/admin-view/forms/addAdopterForm.html',
            controller: 'EditAdopter',
            resolve: {isAuth}
        })
        .when('/admin/addServiceProvider', {
            templateUrl: 'app/admin-view/forms/addServiceProvider.html',
            controller: 'AddServiceProvider',
            resolve: {isAuth}
        })
        .when('/admin/addServiceProvider/:itemId', {
            templateUrl: 'app/admin-view/forms/addServiceProvider.html',
            controller: 'EditAdopter',
            resolve: {isAuth}
        })
        .when('/admin/service-providers', {
            templateUrl: 'app/admin-view/serviceProvidersView.html',
            controller: 'ServiceProviderController',
            resolve: {isAuth}
        })
        .when('/admin/horses', {
            templateUrl: 'app/admin-view/allHorsesView.html',
            controller: 'allHorsesView',
            resolve: {isAuth}
        })
        .when('/admin', {
            templateUrl: 'app/admin-view/adminDashboard.html',
            controller: 'allHorsesView',
            resolve: {isAuth}
        })
        .when('/admin/adopters', {
            templateUrl: 'app/admin-view/adopterView.html',
            controller: 'ViewAdoptersController',
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