(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope){

  $scope.checkItems = function(){
    console.log($scope.lunchItems);

    if($scope.lunchItems == null || $scope.lunchItems == ""){
      console.log("empty");
      $scope.message="Please enter data first";
    }
    else{
      var lunchItemsArray = $scope.lunchItems.split(",");

      if(lunchItemsArray.length<4){
        console.log("Enjoy");
        $scope.message="Enjoy!";
      }
      else{
        console.log("You are going to get fat!");
        $scope.message="Too much!";
      }
    }

  };
}

})();
