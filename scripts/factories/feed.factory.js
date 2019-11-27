
app.factory('facebookService', function($q) {
  return {
      getMyLastName: function() {
          var deferred = $q.defer();
          FB.api('/me', {
              fields: 'last_name'
          }, function(response) {
            
              if (!response || response.error) {
                  deferred.reject('Error occurred');
              } else {
                  deferred.resolve(response);
              }
          });
          return deferred.promise;
      }
  }
});