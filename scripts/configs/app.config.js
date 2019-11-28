app.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

  //$httpProvider.interceptors.push( interceptHttp );



  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'pages/login.html',
      controller: 'authController'
    })

    .state('feed', {
      url: '/feed',
      templateUrl: 'pages/feed.html',
      controller: 'feedController',
      resolve: {
        security: [
          '$q',
          'authService',
          function($q, authService) {
            if (!authService.isAuthorized()) {
              return $q.reject('Not Authorized');
            }
          }
        ]
      }
    });
  $urlRouterProvider.otherwise('/');
});
