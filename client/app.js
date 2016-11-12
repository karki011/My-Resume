angular.module('Resume',['ngResource', 'ngRoute', 'Resume.controllers', 'Resume.services'])

.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: "views/welcome.html",
            controller: 'WelcomeController'
        })
        .when('/contact' , {
            templateUrl: "views/contact.html",
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
