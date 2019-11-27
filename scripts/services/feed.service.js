app.service('feedService', function($http) {
  this.res = $http({
    method: 'GET',
    url:
      'https://graph.facebook.com/v5.0/me/feed?fields=event,icon,full_picture,from,place,picture,likes{name,username,picture},story,type,comments,source,status_type,updated_time,message&limit=10&access_token=' +
      localStorage.getItem('access_token')
  });
});