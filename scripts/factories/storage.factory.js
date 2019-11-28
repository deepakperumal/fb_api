app.factory('storageFactory', [
  function() {
    var obj = {};

    obj.storeValue = function(key, value) {
      localStorage.setItem(key, value);
    };

    obj.retrieveValue = function(key) {
      localStorage.getItem(key);
    };

    obj.removeValue = function(key) {
      localStorage.removeItem(key);
    };

    return obj;
  }
]);
