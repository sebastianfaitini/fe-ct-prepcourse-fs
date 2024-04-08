function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  str1 = str1.toLowerCase().replace(/ /g, '');
  str2 = str2.toLowerCase().replace(/ /g, '');

    // Ordenar los caracteres de las palabras
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    // Comparar las palabras ordenadas
    return str1 === str2;
}

module.exports = esAnagrama;
