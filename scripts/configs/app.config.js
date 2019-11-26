
app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('state1', {
      url: "/",
      templateUrl: "pages/login.html",
      controller:'loginController'
 
      
    })
    
    .state('state2', {
      url: "/feed",
      templateUrl: "pages/feed.html",
      controller: 'feedController'
    });
    $urlRouterProvider.otherwise("/");
});