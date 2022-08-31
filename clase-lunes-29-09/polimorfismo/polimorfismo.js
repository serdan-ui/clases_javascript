/**
 *  es la capacidad de manejar múltiples tipos de datos de manera uniforme
    nos permite crear código más compacto,
 *  */


//x podría ser una cadena o un valor numérico

function countItems(x) {
    return x.toString().length;
  }
  
  countItems(3);
  countItems("Hola");
  
  function sum(x, y, z) {
    x = x ? x : 0;
    y = y ? y : 0;
    z = z ? z : 0;
    return x + y + z;
  }
  
  sum(1, 3, 6);
  sum(10, 20);
  sum(3);
  
  function sum2(x = 0, y = 0, z = 0) {
    return x + y + z;
  }
  
 