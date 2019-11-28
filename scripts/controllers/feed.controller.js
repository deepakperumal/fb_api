app.controller('feedController', [
  '$scope',
  'feedService',
  '$state',
  'loginService',
  function(scope, feedService, state, redirectService) {
    feedService.beginGetFeeds().then(function(result) {
      scope.res = result.data;
    });
    scope.logout = function() {
      redirectService.logout();
    };
  }
]);
