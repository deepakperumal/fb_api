app.factory('accessToken', function() {
  return {
    apiKey:
      'EAAKEWWl0yGMBANv7RbkMYR2EtxQtQFjsSsw9rUuUZACJL0OZAqbfZCD3Qi5H2wg5R3dhZBWMQKn7IbOOAbd09RU8lphHViOdfSkf516EbPbxnl7UZBLuIl376IagiDs3gskQ1RS9ZAJhb3HZBz7ZA6rFWzuiUHZBoELRe4wfimOJZAkXfS9ZAETS5mayPRWSi66bBOGhSJIvyjoobscHlbwoBu4'
  };
});


app.factory('facebookService', function($q) {
  return {
      getMyLastName: function() {
          var deferred = $q.defer();
          FB.api('/me', {
              fields: 'last_name'
          }, function(response) {
            
              if (!response || response.error) {
                  deferred.reject('Error occured');
              } else {
                  deferred.resolve(response);
              }
          });
          return deferred.promise;
      }
  }
});