angular.module('Resume.controller', [])
.controller('WelcomeController', ['SEOService', '$location', function(SEOService, $location){
    SEOService.setSEO ({
        title:"Subash Karki | Resume",
        descriptiom:" Come and take a look at me",
        image: 'http://' + $location.host() + '/images/blog.png',
        url: $location.absUrl()
    });
}])