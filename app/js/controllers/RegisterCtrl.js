angular.module('tasks-webapp')
	.controller('RegisterCtrl', ['$scope', function ($scope) {
        $scope.submit = function(user) {

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
