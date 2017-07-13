app.service('mantenedor_total' , ['$http',function ($http) {
  
    this.obtener_datos = function (url) {
       var k = $http.get(url);
       return k;
    };
    this.actualizar_datos = function (url ,id , datos) {
        var c = $http.post(url + id , datos);
        return c;
    };
    this.borrar_datos = function (url , id) {
        var b = $http.post(url + id);
        return b;
    };
    this.agregar_datos = function (url , datos) {
        var a= $http.post(url , datos);
        return a;
    };

  
}]);