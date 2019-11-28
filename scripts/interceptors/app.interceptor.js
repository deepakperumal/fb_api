app.factory('appInterceptor', [
  '$state',
  'storageFactory',
  function appInterceptor(state, storageFactory) {
    return {
      request: function(config) {
        config.params = config.params || {};
        config.params.access_token = storageFactory.retrieveValue(
          'access_token'
        );
        return config;
      },

      requestError: function(config) {
        return config;
      },

      response: function(res) {
        if (res.status === 401) {
          state.go('login');
        }
        return res;
      },

      responseError: function(res) {
        if (res.status === 404) {
          state.go('login');
        }
        return res;
      }
    };
  }
]);
