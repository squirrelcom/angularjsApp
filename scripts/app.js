
var Portfolio = angular.module('Portfolio', ['ngRoute', 'ModuleController']);

Portfolio.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/users', {
            templateUrl: 'user-list.html',
            controller: 'ListCtrl'
        }).
          when('/users/:userID', {
            templateUrl: 'user-detail.html',
            controller: 'ListCtrlDetail'
        }).
        otherwise({
            redirectTo: '/users'
        });
  }])