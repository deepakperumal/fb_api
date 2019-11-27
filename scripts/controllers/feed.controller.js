app.controller('feedController', [
  '$scope',
  'feedService',
  '$state',
  'loginService',
  function(scope, feedService, state, redirectService) {
    if (!localStorage.getItem('access_token')) state.go('login');
    feedService.beginGetFeeds.then(function(result) {
      scope.res = result.data.data;
    });
    scope.logout = function() {
      redirectService.logout();
    };
  }
]);
