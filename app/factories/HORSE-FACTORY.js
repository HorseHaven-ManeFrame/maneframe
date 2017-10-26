'use strict';

app.factory('horseFactory', function($q, $http, FBCreds) {
  
  /**
   * Gets all Singe Adopter horses.
   *
   * @return     {promise}  All Singe Adopter horses.
   */
  const getSingleAdopterHorses = (adopterId) => {
    let horsesArray = [];

    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/horse.json?orderBy="adopter_id"&equalTo="${adopterId}"`).then(results => {
        console.log('all horses data:', results.data);

        let horseCollection = results.data;
        Object.keys(horseCollection).forEach(key => {
          horseCollection[key].id = key;
          horsesArray.push(horseCollection[key]);
        });
        resolve(horsesArray);
      });
    });
  };


  /**
   * Gets all horses.
   *
   * @return     {promise}  All horses.
   */
  const getAllHorses = () => {
    let horsesArray = [];

    return $q((resolve, reject) => {
      $http.get(`https://horse-haven-tn.firebaseio.com/horse.json`).then(results => {
        console.log('all horses data:', results.data);

        let horseCollection = results.data;
        Object.keys(horseCollection).forEach(key => {
          horseCollection[key].id = key;
          horsesArray.push(horseCollection[key]);
        });
        resolve(horsesArray);
      });
    });
  };


  /**
   * Gets all service providers.
   *
   * @return     {promise}  All service providers.
   */
  const getAllServiceProviders = () => {
    let servicesArray = [];

    return $q((resolve, reject) => {
      $http.get(`https://horse-haven-tn.firebaseio.com/service_provider.json`).then(results => {
        console.log('all horses data:', results.data);

        let serviceCollection = results.data;
        Object.keys(serviceCollection).forEach(key => {
          serviceCollection[key].id = key;
          servicesArray.push(serviceCollection[key]);
        });
        resolve(servicesArray);
      });
    });
  };


  /**
   * Gets all adopters.
   *
   * @return     {promise}  All adopters.
   */
  const getAllAdopters = () => {
    let adoptersArray = [];

    return $q((resolve, reject) => {
      $http.get(`https://horse-haven-tn.firebaseio.com/adopter.json`).then(results => {
        console.log('all adopter data:', results.data);

        let adopterCollection = results.data;
        Object.keys(adopterCollection).forEach(key => {
          adopterCollection[key].id = key;
          adoptersArray.push(adopterCollection[key]);
        });
        resolve(adoptersArray);
      });
    });
  };


  /**
   * Gets the single adopter.
   *
   * @param      {string}  id   The adopter identifier
   * @return     {promise}      The single adopter.
   */
  const getSingleAdopter = id => {
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/adopter/${id}.json`).then(data => {
        resolve(data);
      });
    });
  };


  /**
   * Updates a single adopter.
   *
   * @param      {string}  id             The adopter identifier
   * @param      {object}  adopterObject  The adopter object
   * @return     {promise}                The updated adopter
   */
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


  /**
   * Adds new adopter.
   *
   * @param      {object}  newAdopterObject  The new adopter object
   * @return     {promise}                   The new adopter
   */
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


  /**
   * Deletes a single adopter.
   *
   * @param      {string}  adopterFBID  The adopter identifier
   * @return     {promise}              The just deleted adopter.
   */
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


  /**
   * Deletes a single provider.
   *
   * @param      {string}  providerFBID  The provider identifier.
   * @return     {promise}               The just deleted provider.
   */
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

  /**
   * Gets the single provider.
   *
   * @param      {string}  providerFBID  The provider identifier
   * @return     {promise}               The single provider.
   */
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

  /**
   * Updates single provider.
   *
   * @param      {string}  providerFBID          The provider indentifier
   * @param      {object}  editedProviderObject  The edited provider object
   * @return     {promise}                       The just updated provider
   */
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

  /**
   * Adds a new provider.
   *
   * @param      {object}  newProviderObject  The new provider object
   * @return     {promise}                    The just added provider
   */
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

  /**
   * Gets all cases.
   *
   * @return     {promise}  All cases.
   */
  const getAllCases = function() {
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/cases.json`).then(data => {
        resolve(data);
      });
    });
  };

  /**
   * Gets the single case.
   *
   * @param      {string}  id    The case identifier
   * @return     {promise}       The single case.
   */
  const getSingleCase = id => {
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/cases/${id}.json`).then(data => {
        resolve(data);
      });
    });
  };

  /**
   * Updates a single case.
   *
   * @param      {string}  caseFBID          The case identifier
   * @param      {object}  editedCaseObject  The edited case object
   * @return     {promise}                   The just edited case
   */
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

  /**
   * Adds a new case.
   *
   * @param      {object}  newCase  The new case
   * @return     {promixe}          The just added case
   */
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
    getSingleAdopter,
    getAllAdopters,
    getSingleCase,
    submitNewCase,
    getAllHorses,
    getAllCases,
    getSingleAdopterHorses
  };
});
