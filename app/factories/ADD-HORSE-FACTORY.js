"use strict";

app.factory("HorseFactory", function($q, $http, FBCreds){
    
    const addNewHorse = function (obj) {
        let newObj = JSON.stringify(obj);
        return $http.post(`${FBCreds.databaseURL}/horse.json`, newObj)
            .then((data) => {
                return data;
            }, (error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
            });
    };

    const updateHorse = (obj, horseID)=>{
        console.log("PUSHING OBJECT", obj);
        let newObj = JSON.stringify(obj);
        $http.patch(`${FBCreds.databaseURL}/horse/${horseID}.json`, newObj)
        .then((data) => {
            console.log("data", data);
            return data;
        }, (error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
        });
    };

    const getSingleHorse = (horseID) => {
        return $q( (resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/horse/${horseID}.json`)  
            .then( (data) => {
                console.log("data", data);
                resolve(data);
            }, (error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("error", errorCode, errorMessage);
            });
        }); 
    }; 

return{addNewHorse, updateHorse, getSingleHorse};
});