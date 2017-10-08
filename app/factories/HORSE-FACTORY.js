'use strict';

app.factory('horseFactory', function($q, $http, FBCreds) {
  const getAllHorses = () => {
    let horsesArray = [];

    return $q((resolve, reject) => {
      $http.get(`https://horse-haven-tn.firebaseio.com/horse.json`).then(results => {
        console.log('all horses data:', results.data);

        let horseCollection = results.data;
        // console.log("itemCollection", itemCollection);
        Object.keys(horseCollection).forEach(key => {
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
      $http.get(`https://horse-haven-tn.firebaseio.com/service_provider.json`).then(results => {
        console.log('all horses data:', results.data);

        let serviceCollection = results.data;
        // console.log("itemCollection", itemCollection);
        Object.keys(serviceCollection).forEach(key => {
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
      $http.get(`https://horse-haven-tn.firebaseio.com/adopter.json`).then(results => {
        console.log('all adopter data:', results.data);

        let adopterCollection = results.data;
        // console.log("itemCollection", itemCollection);
        Object.keys(adopterCollection).forEach(key => {
          adopterCollection[key].id = key;
          adoptersArray.push(adopterCollection[key]);
        });
        resolve(adoptersArray);
      });
    });
  };

  const getSingleAdopter = id => {
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/adopter/${id}.json`).then(data => {
        resolve(data);
      });
    });
  };

  const updateSingleAdopter = (id, adopterObject) => {
    return $q((resolve, reject) => {
      let adopterJson = JSON.stringify(adopterObject);
      $http
        .patch(`${FBCreds.databaseURL}/adopter/${id}.json`, adopterJson)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  const submitNewAdopter = function(newAdopterObject) {
    return $q((resolve, reject) => {
      $http.post(`${FBCreds.databaseURL}/adopter.json`, newAdopterObject).then(
        data => {
          resolve(data);
        },
        error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log('error', errorCode, errorMessage);
        }
      );
    });
  };

  const deleteSingleAdopter = function(adopterFBID) {
    return $q((resolve, reject) => {
      $http
        .delete(`${FBCreds.databaseURL}/adopter/${adopterFBID}.json`)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  const deleteSingleProvider = function(providerFBID) {
    return $q((resolve, reject) => {
      $http
        .delete(`${FBCreds.databaseURL}/service_provider/${providerFBID}.json`)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  const getSingleProvider = function(providerFBID) {
    return $q((resolve, reject) => {
      $http.get(`https://horse-haven-tn.firebaseio.com/service_provider/${providerFBID}.json`).then(
        data => {
          resolve(data);
        },
        error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log('error', errorCode, errorMessage);
        }
      );
    });
  };

  const submitUpdatedProvider = function(providerFBID, editedProviderObject) {
    return $q((resolve, reject) => {
      let stringyObject = JSON.stringify(editedProviderObject);
      $http
        .patch(`${FBCreds.databaseURL}/service_provider/${providerFBID}.json`, stringyObject)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  const submitNewProvider = function(newProviderObject) {
    return $q((resolve, reject) => {
      $http.post(`${FBCreds.databaseURL}/service_provider.json`, newProviderObject).then(
        data => {
          resolve(data);
        },
        error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log('error', errorCode, errorMessage);
        }
      );
    });
  };

  const getAllCases = function() {
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/cases.json`).then(data => {
        resolve(data);
      });
    });
  };

  const getSingleCase = id => {
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/cases/${id}.json`).then(data => {
        resolve(data);
      });
    });
  };

  const submitUpdatedCase = function(caseFBID, editedCaseObject) {
    return $q((resolve, reject) => {
      let stringifyObject = JSON.stringify(editedCaseObject);
      $http
        .patch(`${FBCreds.databaseURL}/cases/${caseFBID}.json`, stringifyObject)
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  const submitNewCase = function(newCase) {
    return $q((resolve, reject) => {
      $http.post(`${FBCreds.databaseURL}/cases.json`, newCase).then(
        data => {
          resolve(data);
        },
        error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log('error', errorCode, errorMessage);
        }
      );
    });
  };

  return {
    getAllServiceProviders,
    submitUpdatedProvider,
    deleteSingleProvider,
    updateSingleAdopter,
    deleteSingleAdopter,
    submitNewProvider,
    getSingleProvider,
    submitUpdatedCase,
    submitNewAdopter,
    getSingleAdopter,
    getAllAdopters,
    getSingleCase,
    submitNewCase,
    getAllHorses,
    getAllCases
  };
});
