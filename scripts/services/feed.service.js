app.service('feedService', [
  '$http',
  '$q',
  function($http, $q) {
    var def = $q.defer();
    this.beginGetFeeds = function() {
      $http({
        method: 'GET',
        url:
          'https://graph.facebook.com/v5.0/me/feed?fields=event,icon,full_picture,from,place,picture,likes{name,username,picture},story,type,comments,source,status_type,updated_time,message&limit=10'
      })
        .then(function(response) {
          def.resolve(response.data);
        })
        .catch(function(data) {
          def.reject('Error');
        });

      return def.promise;
    };
  }
]);
