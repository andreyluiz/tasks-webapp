angular.module('tasks-webapp')
    .controller('UsersCtrl', ['$scope', 'UsersService', function ($scope, UsersService) {
        $scope.users = [];
        UsersService.getAll()
            .success(function(data) {
                $scope.users = data;
            });
    }]);
