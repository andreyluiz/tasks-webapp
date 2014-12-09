angular.module('tasks-webapp')
    .factory('RegisterService', ['$http', 'endpoint', function ($http, endpoint) {
        var registerService = {};
        
        registerService.register = function(user) {

        };

        return registerService;
    }])
