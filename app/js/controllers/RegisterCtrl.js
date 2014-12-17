angular.module('tasks-webapp')
	.controller('RegisterCtrl', ['$scope', 'AuthService', 'AUTH_EVENTS', '$rootScope', function ($scope, AuthService, AUTH_EVENTS, $rootScope) {

        $scope.setRegisterSuccessfull(false);

        $scope.submit = function(user) {
            $scope.setFormSubmiting(true);
            $scope.form.$setPristine();
            delete user.password_confirmation;
            AuthService.register(user)
                .success(function(data, status) {
                    $rootScope.$broadcast(AUTH_EVENTS.registerSuccess, data);
                })
                .error(function(data, status) {
                    $rootScope.$broadcast(AUTH_EVENTS.registerFailed, data);
                });
        };

		$scope.showErrorMessage = function(form) {
            return (form.email.$dirty && form.email.$invalid) ||
                   (form.username.$dirty && form.username.$invalid) || 
                   (form.password.$dirty && form.password.$invalid) ||
                   (form.password_confirmation.$dirty && !$scope.isPasswordConfirmationValid($scope.user)) ||
                   !!$scope.serverErrorData;
        };

        $scope.isPasswordConfirmationValid = function(user) {
            return user.password == user.password_confirmation;
        };
	}]);
