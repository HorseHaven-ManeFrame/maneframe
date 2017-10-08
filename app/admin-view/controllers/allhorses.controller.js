"use strict";

app.controller("allHorsesView", function($scope, horseFactory, adminPullFactory, FBCreds, groupingPointsFactory, authFactory, getUserInfo){



    $scope.showAllHorses = () =>{
        horseFactory.getAllHorses()
        .then((data)=>{
            // 
            $scope.allHorsesData = data;
            console.log ("data", data);

        });
    };


/***************** the below is the logic to figure out when horse will be available for ownership **************************************************/
  //   let availableForOwnership = new Date();
  //   let adoptDate = new Date();
  //   availableForOwnership.setDate(availableForOwnership.getDate() + 365);

  //   function ownershipEligibleChecker(availableForOwnership, adoptDate) {
	 //    // Get 1 day in milliseconds
	 //    console.log ("availableForOwnership", availableForOwnership);
	 //    console.log ("adoptDate", adoptDate);
	 //  	let todayDate_ms = availableForOwnership.getTime();
	 //  	let adoptDate_ms = adoptDate.getTime();
  //   	let difference_ms = todayDate_ms - adoptDate_ms;

		// console.log ("days until eligible", daysUntilOwnershipEligible(adoptDate_ms, difference_ms));
  //   }

  //   function daysUntilOwnershipEligible(adoptDate_ms, difference_ms) {
	 //  	let one_day=1000*60*60*24;
  //   	return Math.round((difference_ms - adoptDate_ms)/one_day);
  //   }

  // 	ownershipEligibleChecker(availableForOwnership, adoptDate);

/*******************************************************************/








//     let currentUser = authFactory.getCurrentUser();

//     $scope.isAdmin = ()=>{
//         getUserInfo.getUserDetails(currentUser)
//             .then((getUser) => {
//                 let key = Object.keys(getUser);
//                $scope.isTeacher = getUser[key].isTeacher;
//             //    console.log("$scope.isTeacher", $scope.isTeacher);
//             });

    
//     };
//     $scope.isAdmin();

//     $scope.findCurrentUser = ()=>{
//         let userAdmin = [];
//         getUserInfo.getUserDetails(currentUser)
//         .then((results)=>{
//             let key = Object.keys(results);
//             $scope.userName = results[key].first_name;
//             key.forEach((item)=>{
//                 userAdmin.push(results[item]);
//             });
//             // console.log("results.data", userAdmin);
//         });
//     };

//     $scope.findCurrentUser();

//     $scope.showAllUserExercise = ()=>{
//         adminPullFactory.getAllUserExercises()
//         .then((data)=>{
//             // console.log("BIGGGGG data",data);
//             $scope.allUserExercises = data;
//         });
//     };

//     $scope.showCohortMembers = (cohort)=>{
//        groupingPointsFactory.leaderboardCohortCall(cohort)
//        .then((results)=>{
//         $scope.allUsers = results;
//         // console.log("$scope.cohortMemberList", results);
//        });
        
//     };
        

//     $scope.showAllUserEvents = ()=>{
//         adminPullFactory.getAllUserEvents()
//         .then((data)=>{
//             // console.log("BIGGGGG data",data);
//             $scope.allUserEvents = data;
//         });
//     };


//     $scope.showAllGroupings = () =>{
//         adminPullFactory.getAllUserGroups()
//         .then((data)=>{
//             $scope.allGroupUsers = data;
//             // console.log("BIGGGGG GROUP data", data);

//         });
//     };
    
// $scope.showAllUserExercise();
$scope.showAllHorses();
// $scope.showAllUserEvents();
// $scope.showAllGroupings();
});