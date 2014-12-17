angular.module('tasks-webapp')
    .factory('AuthService', ['$http', 'endpoint', 'Session', function ($http, endpoint, Session) {
        var authService = {};

        authService.login = function(loginInfo) {
            return $http.post(endpoint + '/api/users/login', loginInfo);
        };

        authService.register = function(userInfo) {
            return $http.post(endpoint + '/api/users/register', userInfo);
        };

        authService.confirm = function(confirmation) {
            return $http.post(endpoint + '/api/users/confirm', confirmation);
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
