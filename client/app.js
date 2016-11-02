angular.module('Resume',['ngResource', 'ngRoute'])

.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: "views/welcome.html",
            controller: 'welcomeController'
        })
}]);
