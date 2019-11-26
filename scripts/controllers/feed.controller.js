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

app.controller('loginController',['$scope','$state',function(scope,state){

    scope.fbLogin = function()
    {
      FB.login(function(response) {
        if (response.authResponse) {
         console.log('Welcome!  Fetching your information.... ');
         FB.api('/me', function(response) {
           console.log('Good to see you, ' + response.name + '.');
           state.go('state2');
         });
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
    });
    }



}])