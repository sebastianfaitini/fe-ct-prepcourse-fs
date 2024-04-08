function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  // for ( var i = texto.length ; i <= texto.length; i-- ){
  //   return texto[i];
  // }

  
    var textoInvertido = '';
    for (var i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }
    return textoInvertido;
  }
  
   


module.exports = invertirTexto;