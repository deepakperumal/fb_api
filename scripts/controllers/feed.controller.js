app.controller('feedController', [
  '$scope',
  'feedService',
  '$state',
  'redirectService',
  function(scope, feedService, state, redirectService) {
    if (!localStorage.getItem('access_token')) state.go('state1');
    feedService.res.then(function(resp) {
      scope.res = resp.data.data;
    });
    scope.logout = function() {
      redirectService.logout();
    };
  }
]);
