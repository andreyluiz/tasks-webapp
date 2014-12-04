angular.module('tasks-webapp')
    .controller('LoginCtrl', ['$scope', '$rootScope', 'AuthService', 'HashService', 'AUTH_EVENTS', function ($scope, $rootScope, AuthService, HashService, AUTH_EVENTS) {
        $scope.submit = function(loginInfo) {
            $scope.setFormSubmiting(true);
            $scope.form.$setPristine();
            if (loginInfo) {
                loginInfo = HashService.createHash(loginInfo);
                AuthService.login(loginInfo)
                    .success(function(data, status) {
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, data);
                    })
                    .error(function(data, status) {
                        $scope.form.$setPristine();
                        $rootScope.$broadcast(AUTH_EVENTS.loginFailed, data);
                    });
            };
        };
    }]);
