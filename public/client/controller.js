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
.controller('ShortenController', function($scope, $http) {
  $scope.update = false;
  $scope.links = '';
  $scope.$watch('links', function(newValue, oldValue) {
    if (newValue === oldValue) { return; }
    $scope.updated = true;
  });
  $scope.createLink = function(){
    $http({
      method: 'POST',
      url: '/links',
      data: $scope.link 
    })
    .success(function(data){
      $scope.links = data;
      $scope.updated = false;
    });
  };
})
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