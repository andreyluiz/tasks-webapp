angular.module('tasks-webapp')
    .factory('UsersService', ['$http', 'endpoint', function ($http, endpoint) {
        var usersService = {};
        usersService.getAll = function() {
            return $http.get(endpoint + '/api/users');
        };
        return usersService;
    }]);
