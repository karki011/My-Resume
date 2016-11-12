angular.module('Resume.controllers', [])
.controller('WelcomeController', ['SEOService', '$location', function(SEOService, $location){
    SEOService.setSEO ({
        title:'Subash Karki | Resume',
        descriptiom:'Come and take a look at me',
        url: $location.absUrl()
    });
}]);