app.controller('authController', [
  '$scope',
  'loginService',
  function(scope, loginService) {
    console.log(loginService.res);
    scope.fbLogin = function() {
      loginService.login();
    };
  }
]);
