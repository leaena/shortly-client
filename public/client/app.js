angular.module('shortlyApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'MainController'
  })
  .when('/shorten', {
      controller: 'ShortenController',
      templateUrl: 'templates/shorten.html'
  })
  .when('/link/:link_id', {
    controller: 'LinkController',
    templateUrl: 'templates/links.html',
    controllerAs: 'link'
  })
  .otherwise({redirectTo: '/'});
});
