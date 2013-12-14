angular.module('shortlyApp')
.controller('ShortenController', function($scope, $http) {
  $scope.update = false;
  $scope.links = '';
  $scope.$watch('links', function(newValue, oldValue) {
    if (newValue === oldValue) { return; }
    $scope.updated = true;
  });
  $scope.createLink = function(){
    $scope.errors = '';
    $http({
      method: 'POST',
      url: '/links',
      data: $scope.link 
    })
    .success(function(data){
      console.log(data);
      $scope.links = data;
      $scope.updated = false;
      $scope.link = '';
      if(data.created_at < new Date()){
        $scope.errors = true;
      }
    });
  };
});