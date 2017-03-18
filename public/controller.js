var myApp = angular.module('myApp',[]);


myApp.controller('AppCtrl',function ($scope,$http){    

var refesh = function(){
        $http.get('/contactList').then(function (response) {
             console.log('response : ',response.data);          
             $scope.contactList = response.data;
        }, function (response) {
            console.log(response);
        });
     };

    refesh(); 

var clerContact = function(){
         $scope.contact = '';
    }

$scope.addContact =  function(){
     console.log($scope.contact);
      $http.post('/contactList',$scope.contact).then(function(response){
         console.log(response);
         refesh(); 
        
      }),function(response){
        console.log(response);
      }
   }

$scope.editContact =  function(id){
      console.log(id);
      $http.get('/contactList/'+id).then(function(response){
         console.log(response);
         $scope.contact = response.data;
        
      }),function(response){
        console.log(response);
      }
   }

$scope.updateContact = function(){
    console.log($scope.contact._id);
    $http.put('/contactList/'+$scope.contact._id,$scope.contact).then(function(response){
      console.log(response);refesh();
    })

   }

$scope.removeContact = function(id){
        console.log(id);
        $http.delete('/contactList/'+id).then(function(response){console.log(response);refesh(); },
            function(response){console.log(response); refesh();});
    }
});