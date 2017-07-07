app.service('mantenedor_total' , ['$http',function ($http) {
  
    this.obtener_datos = function (url) {
       var k = $http.get(url);
       return k;
    };
  
}]);