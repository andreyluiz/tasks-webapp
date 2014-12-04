angular.module('tasks-webapp')
    .service('Session', [function () {
        this.create = function(session) {
            this.id = session.id;
            this.creation = session.creation;
            this.expiration = session.expiration;
            this.user = session.user;
        };
        this.destroy = function() {
            this.id = null;
            this.creation = null;
            this.expiration = null;
            this.user = null;
        };
        this.hasExpired = function() {
            return this.creation > this.expiration;
        };
    }]);
