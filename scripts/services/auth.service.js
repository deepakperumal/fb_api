app.service('authService', [
  'storageFactory',
  function(storageFactory) {
    this.isAuthorized = function() {
      return storageFactory.retrieveValue('access_token');
    };
  }
]);
