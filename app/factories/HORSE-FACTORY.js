"use strict";

app.factory("horseFactory", function ($q, $http, FBCreds) {

    const getAllHorses = () => {
    	let horsesArray = [];

        return $q((resolve, reject) => {
            $http.get(`https://horse-haven-tn.firebaseio.com/horse.json`)
                .then((results) => {
                    console.log("all horses data:", results.data);

					let horseCollection = results.data;
                    // console.log("itemCollection", itemCollection);
                    Object.keys(horseCollection).forEach((key) => {
                        horseCollection[key].id = key;
                        horsesArray.push(horseCollection[key]);
                    });
                    resolve(horsesArray);
                }); 
        });
    };


    const getAllServiceProviders = () => {
    	let servicesArray = [];

        return $q((resolve, reject) => {
            $http.get(`https://horse-haven-tn.firebaseio.com/service_provider.json`)
                .then((results) => {
                    console.log("all horses data:", results.data);

					let serviceCollection = results.data;
                    // console.log("itemCollection", itemCollection);
                    Object.keys(serviceCollection).forEach((key) => {
                        serviceCollection[key].id = key;
                        servicesArray.push(serviceCollection[key]);
                    });
                    resolve(servicesArray);
                }); 
        });
    };

    const getAllAdopters = () => {
    	let adoptersArray = [];

        return $q((resolve, reject) => {
            $http.get(`https://horse-haven-tn.firebaseio.com/adopter.json`)
                .then((results) => {
                    console.log("all adopter data:", results.data);

					let adopterCollection = results.data;
                    // console.log("itemCollection", itemCollection);
                    Object.keys(adopterCollection).forEach((key) => {
                        adopterCollection[key].id = key;
                        adoptersArray.push(adopterCollection[key]);
                    });
                    resolve(adoptersArray);
                }); 
        });
    };


    getAllAdopters();

    return {
        getAllHorses, getAllServiceProviders, getAllAdopters
    };
});