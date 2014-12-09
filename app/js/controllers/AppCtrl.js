angular.module('tasks-webapp')
    .controller('AppCtrl', ['$scope', 'AUTH_EVENTS', 'USER_ROLES', 'Session', 'AuthService', '$location', function ($scope, AUTH_EVENTS, USER_ROLES, Session, AuthService, $location) {

        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized;
        $scope.isAuthenticated = AuthService.isAuthenticated;

        $scope.setCurrentUser = function(user) {
            $scope.currentUser = user;
        };

        $scope.setServerError = function(serverErrorData) {
            $scope.serverErrorData = serverErrorData;
        };
        
        $scope.isFormSubmiting = function() {
            return $scope.isSubmiting;
        };

        $scope.setFormSubmiting = function(state) {
            $scope.isSubmiting = state;
        };

        $scope.$on(AUTH_EVENTS.loginSuccess, function(event, data) {
            $scope.setFormSubmiting(false);
            Session.create(data);
            $scope.setCurrentUser(data.user);
            $location.path('/tasks');
        });

        $scope.$on(AUTH_EVENTS.loginFailed, function(event, data) {
            $scope.setServerError(data);
            $scope.setFormSubmiting(false);
        });
    }]);
