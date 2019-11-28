app.service('loginService', [
  '$state',
  'storageFactory',
  function($state, storageFactory) {
    this.login = function() {
      FB.login(function(response) {
        if (response.authResponse) {
          storageFactory.storeValue(
            'access_token',
            FB.getAuthResponse()['accessToken']
          );
          FB.api('/me', function(response) {
            $state.go('feed');
          });
        }
      });
    };

    this.logout = function() {
      FB.logout(function(response) {});
      $state.go('login');
      storageFactory.removeValue('access_token');
    };
  }
]);
