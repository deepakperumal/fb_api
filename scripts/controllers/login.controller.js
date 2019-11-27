app.controller('authController', [
  '$scope',
  'redirectService',
  function(scope, redirectService) {
    console.log(redirectService.res);
    scope.fbLogin = function() {
      redirectService.login();
    };
  }
]);
