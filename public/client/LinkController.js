angular.module('shortlyApp')
.controller('LinkController', function($scope, $http, $routeParams) {
  $scope.params = $routeParams;
  $http({
    method: 'GET',
    url: '/clicks'
  })
  .success(function(data){
    $scope.clicks = data;
  });
});