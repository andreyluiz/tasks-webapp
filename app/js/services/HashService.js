angular.module('tasks-webapp')
    .factory('HashService', ['$http', 'md5', function ($http, md5) {
        return {
            createHash: function(loginInfo) {
                if (loginInfo) {
                    loginInfo.hash = md5.createHash(loginInfo.password);
                    delete loginInfo.password;
                }
                return loginInfo;
            }
        };
    }]);
