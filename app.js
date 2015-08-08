(function() {
var app = angular.module("SampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://pruebaadd.firebaseio.com/data");
  var sync = $firebase(ref);

  // download the data into a local object
  $scope.messages= sync.$asArray();
  $scope.addMessage = function(text){
    $scope.messages.$add({text:text});

  };
});

  
})();