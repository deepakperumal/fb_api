app.service('redirectService', function($state) {
  this.login = function() {
    FB.login(function(response) {
      if (response.authResponse) {
        localStorage.setItem(
          'access_token',
          FB.getAuthResponse()['accessToken']
        );
        FB.api('/me', function(response) {
          localStorage.setItem('access', 1);
          $state.go('feed');
        });
      }
    });
  };

  this.logout = function() {
    FB.logout(function(response) {});
    $state.go('home');
    localStorage.setItem('access_token', '');
  };
});
