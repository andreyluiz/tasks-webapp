angular.module('tasks-webapp')
    .directive('loadingSpinner', ['$rootScope', function ($rootScope) {
        return function($scope, element, attrs) {
            $scope.$on("showLoading", function() {
                return element.fadeIn();
            });
            return $scope.$on("hideLoading", function() {
                return element.fadeOut();
            });
        };
    }])
