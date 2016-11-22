
angular.module('Resume.controllers', [])
.controller('WelcomeController', ['$Scope','SEOService', '$location','Contact', function($Scope, SEOService, $location,Contact){

    SEOService.setSEO ({
        title:'Subash Karki | Resume',
        descriptiom:'Come and take a look at me',
        url: $location.absUrl()
    });

    $scope.sendMessage = function () {
        console.log('inside contact controller');
        var contactInfo = {
            fromEmail: $scope.fromEmail,
            subject: $scope.subject,
            content: $scope.content
        }
        var contact = new Contact(contactInfo);
        contact.$save(function () {
            console.log('Email send ok');
            $location.path('/');
        }, function (err) {
            console.log(err);

        })
    }

}])
