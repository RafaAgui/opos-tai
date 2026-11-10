# Tema 2. Lenguajes de programación. Representación de tipos de datos. Operadores. Instrucciones condicionales. Bucles y recursividad. Procedimientos, funciones y parámetros. Vectores y registros. Estructura de un programa.

## 1. Lenguajes de programación
Permiten expresar algoritmos mediante instrucciones. Por nivel: lenguaje máquina, ensamblador y alto nivel (C, Java, Python, JavaScript, C#). Por ejecución: compilados, interpretados e híbridos. En la práctica existen compilación JIT y máquinas virtuales.

## 2. Tipos y representación
Un tipo define valores y operaciones permitidas. Tipos frecuentes: enteros, reales, booleanos, caracteres, cadenas, enumerados, arrays, registros y objetos. Los reales suelen representarse mediante coma flotante IEEE 754, que incluye valores como infinito y NaN.

- **Tipado estático/dinámico:** momento en que se comprueban los tipos.
- **Tipado fuerte/débil:** restricciones sobre conversiones.
- **Conversión implícita:** automática.
- **Conversión explícita (casting):** solicitada por el programador.

## 3. Variables y operadores
Una variable asocia un identificador a un valor; una constante no debe cambiar durante la ejecución conforme a las reglas del lenguaje. Operadores:
- Aritméticos: suma, resta, multiplicación, división y módulo.
- Relacionales: igualdad, desigualdad y comparaciones.
- Lógicos: AND, OR, NOT.
- Asignación y asignación compuesta.
- Bit a bit, concatenación e incremento, según lenguaje.

La precedencia determina el orden de evaluación. Los paréntesis aclaran la intención. El cortocircuito evita evaluar el segundo operando cuando el primero ya determina el resultado lógico.

## 4. Condicionales
`if/else` ejecuta ramas según una condición. La selección múltiple (`switch`, `match`) permite elegir entre varias alternativas. Conviene contemplar casos límite y una opción por defecto.

## 5. Bucles
- `while`: comprueba la condición antes; puede ejecutarse cero veces.
- `do-while`: comprueba al final; se ejecuta al menos una vez.
- `for`: útil con contador o secuencia.
- `for-each`: recorre elementos de una colección.

Hay que asegurar una condición de terminación y evitar errores de límites o bucles infinitos.

## 6. Recursividad
Una función recursiva se llama a sí misma para resolver una versión menor del problema. Necesita **caso base** (terminación) y **caso recursivo** (reduce el problema). Utiliza la pila de llamadas; una profundidad excesiva puede desbordarla. A veces una solución iterativa es más eficiente.

## 7. Procedimientos, funciones y parámetros
Una función devuelve un resultado; un procedimiento representa una rutina de acción, aunque la distinción depende del lenguaje. Los parámetros pueden pasarse por valor o referencia. Los argumentos pueden ser posicionales, con nombre o tener valores por defecto. Conviene limitar efectos secundarios y validar entradas.

## 8. Vectores y registros
Un vector/array almacena elementos normalmente homogéneos y se accede por índice; puede ser multidimensional. Un registro/estructura agrupa campos que pueden tener tipos diferentes, por ejemplo `{id: entero, nombre: cadena, edad: entero}`.

## 9. Estructura del programa
Suele incluir módulos o paquetes, importaciones, tipos y constantes, variables, funciones/clases, punto de entrada y tratamiento de errores. La modularidad, nombres significativos, funciones cohesionadas y evitar duplicación mejoran el mantenimiento.

## Resumen
Los tipos determinan valores y operaciones; condicionales y bucles controlan el flujo; la recursividad divide problemas; funciones y procedimientos modularizan; vectores y registros organizan datos.

## Preguntas
1. ¿Qué diferencia hay entre compilación e interpretación?
2. ¿Qué dos elementos necesita la recursividad?
3. ¿Qué bucle se ejecuta al menos una vez?
4. ¿Qué diferencia hay entre vector y registro?
5. ¿Qué implica pasar por valor?

**Respuestas:** 1) Traducción previa frente a ejecución mediante intérprete, aunque existen modelos híbridos. 2) Caso base y recursivo. 3) do-while. 4) El vector agrupa elementos homogéneos; el registro, campos posiblemente heterogéneos. 5) Se pasa una copia del valor.
