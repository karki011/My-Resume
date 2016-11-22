angular.module('Resume',['ngRoute', 'ngResource'])

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
