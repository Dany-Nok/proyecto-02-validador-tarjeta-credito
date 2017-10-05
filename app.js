function isValidCard(preguntaNumeros) { // Crear una función para validar número de tarjeta de credito

  var preguntaNumeros = prompt("Ingrese el número de su tarjeta de crédito"); // Preguntar número de tarjeta de crédito con un mensaje
  var numInvertido = []; // Guarda numeros "de atrás para adelante" (en orden invertido)

    for (var i = preguntaNumeros.length - 1; i >= 0; i--) { // Itera con un for todos los números, ya invertidos
        numInvertido.push(parseInt(preguntaNumeros[i])); // Transforma los números invertidos en números enteros
  }
    for (var j = 1; j < numInvertido.length; j+=2) { // Itera el array con los numeros ya invertidos
        numPares = numInvertido[j]*2; // Multiplica *2 el número que esté en las posiciones pares

      } if (numPares >= 10){ // Si el número es mayor o igual a 10,
        var sumaDigitos = numPares - 9; // Va a sumar los dígitos mayores de 10
        numInvertido[j] = sumaDigitos; // Pasa el valor de suma al array (numInvertido) y lo devuelve

} else { // Si no...
  numInvertido[j] = numPares; // Ingresa los valores menores de 10 sin hacer la suma
}
  var resultado = 0; // Define nueva variable resultado,
    for (var i = 0; i < numInvertido.length; i++) { // Este for itera
      resultado += numInvertido[i]; // El resultado que va a entregar es
    }
    if (resultado % 10 === 0){ // Define condición de que si el resto (%) de 10 es equivalente a 0
      return alert("¡La tarjeta es válida!") // Enviará mensaje de que la tarjeta sí es válida
    } else { // Si la tarjeta no es válida, entonces...
      return alert("La tarjeta no es válida, ingrese número nuevamente") // Enviará mensaje de que la tarjeta no es válida
    }
}

isValidCard(); // Es el resultado final de si la tarjeta es válida o no
