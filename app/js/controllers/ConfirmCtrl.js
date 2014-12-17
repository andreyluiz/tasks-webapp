angular.module('tasks-webapp')
    .controller('ConfirmCtrl', ['$scope', '$rootScope', '$routeParams', 'AuthService', 'AUTH_EVENTS', function ($scope, $rootScope, $routeParams, AuthService, AUTH_EVENTS) {
        var confirmation = {
            "username": $routeParams.u,
            "key": $routeParams.a,
            "expiration": $routeParams.e
        };
        AuthService.confirm(confirmation)
            .success(function(data, status) {
                $rootScope.$broadcast(AUTH_EVENTS.confirmSuccess, data);
            })
            .error(function(data, status) {
                $rootScope.$broadcast(AUTH_EVENTS.confirmFailed, data);
            });
    }]);
