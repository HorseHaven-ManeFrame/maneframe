"use strict";

app.factory("authFactory", function ($q, $http, FBCreds, $window, $location) {
    var currentUser = null;
    let currentUserName = null;

    const isAuthenticated = function () {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    currentUser = user.uid;
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    };

    const logIn = function (userObj) {
        return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password).then((data) => {
                var currentUser = data.uid;
                $window.location.href = "#!/admin";
            }).catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message;
            });
    };

    const getCurrentUser = function () {
        return currentUser;
    };

    const logOut = function () {
        return firebase.auth().signOut();
    };

    return {
        getCurrentUser,
        logIn,
        logOut,
        isAuthenticated
    };
});