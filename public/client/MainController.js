angular.module('shortlyApp')
.controller('MainController', function($scope, $http) {
  $scope.order = '-visits';
  $http({
    method: 'GET',
    url: '/links'
  })
  .success(function(data){
    $scope.links = data;
  });
})