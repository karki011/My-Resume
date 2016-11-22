angular.module('Resume.factories', [])

.factory("Contact", ["$resource", function ($resource) {
        return $resource('/api/contact/:id');
}]);
