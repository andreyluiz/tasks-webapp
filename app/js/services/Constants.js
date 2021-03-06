angular.module('tasks-webapp')
    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        registerSuccess: 'auth-register-success',
        registerFailed: 'auth-register-failed',
        confirmSuccess: 'auth-confirm-success',
        confirmFailed: 'auth-confirm-failed'
    })
    .constant('USER_ROLES', {
        all: '*',
        admin: 'admin',
        restrict: 'restrict'
    });
