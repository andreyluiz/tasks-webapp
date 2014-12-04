angular.module('tasks-webapp')
    .factory('AuthService', ['$http', 'endpoint', 'Session', function ($http, endpoint, Session) {
        var authService = {};

        authService.login = function(loginInfo) {
            return $http.post(endpoint + '/api/users/login', loginInfo);
        };

        authService.isAuthenticated = function() {
            return !!Session.user && !Session.hasExpired();
        }

        authService.isAuthorized = function(authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.user.role.name))
        };

        return authService;
    }]);
