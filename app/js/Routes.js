angular.module('tasks-webapp')    
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl'
            })
            .when('/register', {
                templateUrl: 'partials/register.html',
                controller: 'RegisterCtrl'
            })
            .when('/tasks', {
                templateUrl: 'partials/tasks.html',
                controller: 'TasksCtrl'
            })
            .when('/users', {
                templateUrl: 'partials/list-users.html',
                controller: 'UsersCtrl'
            })
            .otherwise({ redirectTo: '/login' });
    }]);
