let app = angular.module('app', []);

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
//https://developers.facebook.com/tools/explorer/?method=GET&path=me%2Ffeed%3Ffields%3Devent%2Cicon%2Cfull_picture%2Cfrom%2Cplace%2Cpicture%2Clikes%7Bname%2Cusername%2Cpicture%7D%2Cstory%2Ctype%2Ccomments%2Csource%2Cstatus_type%2Cupdated_time%2Cmessage%26limit%3D10&version=v5.0


app.factory('accessToken',function(){

   
    return {apiKey:'EAADA3kz1NQgBALQIyE6gXwBk6w8uwhDXIR7qz5zWVpAaNSyccQUzzFtR65iQNKIddLw9LaZALQDhPN1tbIEZAPZBhAbVasRPeCBpYTsycE27mXZCSR6xDmDhhTMLFn4ulmZCZB0e5rLuw5ZAFuqxR5L6PrvSoqqKG9AorsiuVsnxPRLnba5YON3xwyTZATH17JQsKhuupV78uwZDZD'

    }
    
    
    


})

app.service('feedService', function($http,accessToken) {
 
  this.res = $http({
    method: 'GET',
    url:
      'https://graph.facebook.com/v5.0/me/feed?fields=event,icon,full_picture,from,place,picture,likes{name,username,picture},story,type,comments,source,status_type,updated_time,message&limit=10&access_token='+accessToken.apiKey
  });
});
