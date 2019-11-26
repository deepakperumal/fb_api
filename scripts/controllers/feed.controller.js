app.controller('feedController', [
  '$scope',
  'feedService',
  function(scope, feedService) {
    feedService.res.then(function(resp) {
      scope.res = resp.data.data;
      console.log(scope.res);
    });
  }
]);