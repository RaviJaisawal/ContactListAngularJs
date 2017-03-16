var myApp = angular.module('myApp',[]);


    myApp.controller('AppCtrl',function ($scope,$http){    

    $http({method : "GET",url : "/contactList"})
    .then(function mySucces(response) {
        console.log('response : ',response.data);
        $scope.contactList = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statustext;
    }, function myError(response) {
        $scope.contactList = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statustext; 
    });
    });