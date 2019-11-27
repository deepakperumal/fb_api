app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/login.html',
      controller: 'authController'
    })

    .state('feed', {
      url: '/feed',
      templateUrl: 'pages/feed.html',
      controller: 'feedController'
    });
  $urlRouterProvider.otherwise('/');
});
