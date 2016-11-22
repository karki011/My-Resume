angular.module('Resume',['ngRoute', 'ngResource', 'Resume.controllers', 'Resume.factories'])

.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: "views/welcome.html"

        })

        .otherwise({
            redirectTo: '/'
        });
}]);
