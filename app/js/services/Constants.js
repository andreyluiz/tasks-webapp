angular.module('tasks-webapp')
    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed'
    })
    .constant('USER_ROLES', {
        all: '*',
        admin: 'admin',
        restrict: 'restrict'
    });
