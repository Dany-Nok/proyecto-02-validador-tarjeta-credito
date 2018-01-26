# Validador de Tarjetas de Crédito

### Requerido:

* Se debe crear una función para validar número de tarjeta de credito, con la Función `isValidCard` utilizando a su vez el ***Algoritmo de Luhn***.

* Por medio de un `prompt`, aparecerá un mensaje en pantalla donde solicite el número de tarjeta que debe ingresar el usuario.

* Se creará una variable `var numInvertido` para que almacene un array de los números ingresados en orden reverso.

* A continuación un ciclo `for` iterará (o "recorrerá") este nuevo array con los números ya invertidos.

* El método `push` irá agregando los números al nuevo array creado, y `parseInt` los transforma en números enteros.

* Nuevamente se crea otro ciclo `for` para que itere este nuevo array, en donde se multiplicarán por 2 los números que se encuentren en las posiciones pares.

* Se establece la condición Si el número resultante es mayor o igual a 10, la nueva variable creada y llamada `var sumaDigitos`, sumará los dígitos mayores e iguales a 10 (para que así queden en una sola cifra). En caso contrario, se "pasará" el número sin realizar la suma.

* Se vuelve a establecer otra condición si el total de la suma de los números con la operación de resto (%) de 10 es igual a 0, enviará un `alert` indicando que el número de tarjeta ingresado es válido.
  En caso contrario, enviará otro `alert` avisando que el número ingresado no es válido.
  
#### Esquema Diagrama de Flujo:
  
  ![Esquema Diagrama de Flujo](https://github.com/Dany-Nok/proyecto-02-validador-tarjeta-credito/blob/master/Proyecto_02_Laboratoria-Validacion-Tarjeta-Credito.jpg)