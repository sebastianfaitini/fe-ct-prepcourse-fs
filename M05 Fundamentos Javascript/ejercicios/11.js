function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  
  let fechaNac = new Date(fechaNacimiento);

    // Obtener el año actual
    let fechaActual = new Date();
    let añoActual = fechaActual.getFullYear();

    // Calcular la edad
    let edad = añoActual - fechaNac.getFullYear();

    // Comprobar si la persona ha cumplido años este año
    if (fechaActual.getMonth() < fechaNac.getMonth() ||
        (fechaActual.getMonth() == fechaNac.getMonth() && fechaActual.getDate() < fechaNac.getDate())) {
        edad--;
    }

    // Devolver true si la edad es 18 o más, false en caso contrario
    return edad >= 18;
}


module.exports = esMayorDeEdad;