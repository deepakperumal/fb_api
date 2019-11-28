(function() {
  app.directive('feed', function() {
    return {
      restrict: 'AE',
      controller: 'feedController',
      templateUrl: './scripts/partials/templates/feed.component.html'
    };
  });
})();
