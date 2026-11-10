# Bloque II. Tecnología básica

## Tema 1. Informática básica. Representación y comunicación de la información: elementos constitutivos de un sistema de información. Características y funciones. Arquitectura de ordenadores. Componentes internos de los equipos microinformáticos.

Tema 1 · Desarrollo de estudio

## 1. Informática básica

### 1.1. Concepto de informática

La informática es la ciencia y técnica que estudia el tratamiento automático de la información mediante sistemas computacionales.

El término procede de la unión de dos palabras:

- Información: conjunto de datos que adquieren significado.
- Automática: procesamiento realizado mediante máquinas sin intervención humana continua.

La informática permite almacenar, procesar, transmitir y recuperar información.

Un sistema informático está formado por elementos físicos, lógicos y humanos que trabajan conjuntamente para tratar información.

### 1.2. Datos e información

Es importante distinguir ambos conceptos:

- Dato: representación de un hecho, valor o característica sin interpretar necesariamente.
- Información: resultado de procesar y contextualizar los datos, de forma que adquieren significado.

Ejemplo:

| Datos          | Información                                  |
| -------------- | -------------------------------------------- |
| 18, 20, 22, 24 | La temperatura ha aumentado progresivamente. |
| 150, 200, 250  | Las ventas están creciendo.                  |
| 8, 6, 9        | Resultados de un examen.                     |

Los datos son la materia prima y la información es el resultado de su procesamiento.

### 1.3. Funciones básicas de un sistema informático

Podemos identificar cinco operaciones fundamentales:

1. Entrada: recepción de datos.
2. Procesamiento: transformación de los datos.
3. Almacenamiento: conservación de los datos y resultados.
4. Salida: presentación de la información.
5. Comunicación: intercambio de datos con otros sistemas.

[PPT - TEMA1. El ordenador y sus componentes PowerPoint Presentation, free download - ID:6455143](https://images.openai.com/static-rsc-4/LToaxa3bdFirZ58edMsC4GpLDA98CTtrFko4GRl8uaASOUT4rOghnYDXLXkdaUFKayXr384QGDnKNPkViGCXt2vO3Azbr8L7mbU6kjD9UE80sBrXiTIIPdLXQwjCnrGdTIAdwJdVh9kQpI5I9UCOyIW6n3ZIdhnkjiHq7xjzQFc?purpose=inline)

[slideserve.com](https://www.slideserve.com/todd-perkins/tema1-el-ordenador-y-sus-componentes-powerpoint-ppt-presentation?utm_source=chatgpt.com)

Ejemplo práctico: cuando introducimos una factura en una aplicación de gestión:

- Entrada: introducimos los datos de la factura.
- Procesamiento: se calculan impuestos y totales.
- Almacenamiento: se guarda en la base de datos.
- Salida: se genera la factura.
- Comunicación: se envía al sistema contable o al cliente.

## 2. Representación de la información

Los ordenadores trabajan internamente con información codificada mediante señales binarias.

### 2.1. Sistema binario

El sistema binario es un sistema de numeración en base 2 que utiliza únicamente dos símbolos:

- 0
- 1

Cada uno de estos símbolos representa un bit (binary digit).

Los circuitos electrónicos digitales utilizan dos estados diferenciados que pueden asociarse a esos valores binarios.

Por ejemplo, el número decimal 13 se representa en binario como:

\\[ 13\_{10}=1101_2 \\]

La conversión se obtiene descomponiendo el número en potencias de dos:

\\[ 1101_2 = 1(8)+1(4)+0(2)+1(1)=13 \\]

### 2.2. Unidades de información

Las unidades más importantes son:

| Unidad        | Equivalencia |
| ------------- | ------------ |
| Bit (b)       | 0 o 1        |
| Byte (B)      | 8 bits       |
| Kilobyte (KB) | 1.000 bytes  |
| Megabyte (MB) | 1.000 KB     |
| Gigabyte (GB) | 1.000 MB     |
| Terabyte (TB) | 1.000 GB     |

Hay que distinguir entre las unidades decimales y las binarias:

| Unidad binaria | Equivalencia |
| -------------- | ------------ |
| KiB            | 1.024 bytes  |
| MiB            | 1.024 KiB    |
| GiB            | 1.024 MiB    |
| TiB            | 1.024 GiB    |

Importante para el examen: KB y KiB no son exactamente lo mismo. En el Sistema Internacional, kilo significa 1.000; en las unidades binarias se utiliza kibi, que significa 1.024.

### 2.3. Sistemas de numeración

Además del binario, los sistemas más habituales son:

| Sistema     | Base | Dígitos       |
| ----------- | ---- | ------------- |
| Binario     | 2    | 0 y 1         |
| Octal       | 8    | 0 a 7         |
| Decimal     | 10   | 0 a 9         |
| Hexadecimal | 16   | 0 a 9 y A a F |

El hexadecimal se utiliza mucho en informática porque permite representar de forma compacta valores binarios.

Por ejemplo:

\\[ 11111111_2 = FF\_{16}=255\_{10} \\]

### 2.4. Representación de caracteres

Los ordenadores necesitan representar letras, números, símbolos y caracteres especiales mediante códigos numéricos.

Los principales sistemas son:

- ASCII: código histórico de 7 bits, con 128 caracteres.
- ASCII extendido: denominación utilizada para distintas codificaciones de 8 bits, no una única norma universal.
- Unicode: estándar que asigna puntos de código a los caracteres de numerosos sistemas de escritura.
- UTF-8: codificación de Unicode de longitud variable, entre 1 y 4 bytes por punto de código.

[Number Systems: Binary, Octal, Hex | UPSSSC AGTA](https://images.openai.com/static-rsc-4/J7-Ete5SvlRYP3Rewg2gOdXNFWAduCOvTosl2BJoQox3NELRWoUOyouYqzFyFQFxsTZMe4nNZoQJu2wJSoVUyb0qb4_3380oo7w84YZn80IfXItK6Vdvmlv72tCVUoZjkljk4Q6YhzARs3OiGbGxd7u71NZ4FaRdTib7dJEPBtE?purpose=inline)

[agridots.com](https://agridots.com/courses/exam-upsssc-agta/computer-and-it/04-03-number-systems?utm_source=chatgpt.com)

Por ejemplo, la letra A tiene el punto de código Unicode U+0041 y su representación UTF-8 es el byte hexadecimal `41`.

Diferencia fundamental: Unicode define los caracteres y sus puntos de código; UTF-8 define cómo se codifican esos puntos de código en bytes.

## 3. Comunicación de la información

La comunicación de la información consiste en transmitir datos entre dispositivos o sistemas informáticos.

Para que exista una comunicación deben intervenir varios elementos.

### 3.1. Elementos de la comunicación

Los elementos fundamentales son:

1. Emisor: dispositivo que envía la información.
2. Receptor: dispositivo que recibe la información.
3. Mensaje: información que se transmite.
4. Canal: medio por el que circula la información.
5. Protocolo: conjunto de reglas que regulan la comunicación.
6. Código: sistema de representación utilizado para interpretar el mensaje.

Ejemplo: cuando enviamos un correo electrónico:

- Emisor: nuestro ordenador o móvil.
- Receptor: servidor de correo destinatario.
- Mensaje: contenido del correo.
- Canal: red de comunicaciones.
- Protocolo: SMTP para el envío.
- Código: representación de los caracteres mediante una codificación como UTF-8.

### 3.2. Tipos de transmisión

Podemos clasificar la transmisión de información de diferentes maneras.

Según el sentido de la comunicación:

| Tipo        | Características                                      | Ejemplo                      |
| ----------- | ---------------------------------------------------- | ---------------------------- |
| Simplex     | Solo transmite en un sentido                         | Emisión de radio tradicional |
| Half-duplex | Transmite en ambos sentidos, pero no simultáneamente | Walkie-talkie                |
| Full-duplex | Transmite en ambos sentidos simultáneamente          | Conversación telefónica      |

Según la forma de transmisión:

- Serie: los bits se transmiten secuencialmente por un canal o conjunto de canales de datos.
- Paralelo: varios bits se transmiten simultáneamente por diferentes líneas.

Actualmente predominan las comunicaciones serie en numerosas interfaces internas y externas, como USB, SATA y PCI Express.

Según la sincronización:

- Síncrona: emisor y receptor utilizan una referencia temporal compartida para coordinar la transmisión.
- Asíncrona: la transmisión no depende de un reloj compartido continuo; utiliza mecanismos como bits de inicio y parada o delimitadores.

### 3.3. Modos de transmisión de datos

También podemos distinguir entre:

- Banda base: la señal digital se transmite directamente por el medio.
- Banda ancha: se utilizan técnicas de modulación para transportar información mediante diferentes frecuencias o canales.

### 3.4. Parámetros de comunicación

Hay varios conceptos que conviene distinguir:

| Concepto                 | Significado                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| Ancho de banda           | Capacidad de un canal para transportar información, expresada según el contexto en Hz o bit/s |
| Velocidad de transmisión | Cantidad de bits transmitidos por segundo                                                     |
| Latencia                 | Tiempo que tarda un dato en llegar a su destino                                               |
| Jitter                   | Variación de la latencia                                                                      |
| Tasa de errores          | Proporción de bits transmitidos incorrectamente                                               |

Ejemplo: una conexión puede tener una velocidad de 1 Gbit/s y, sin embargo, experimentar una latencia elevada. La velocidad y la latencia miden características diferentes.

## 4. Elementos constitutivos de un sistema de información

Un sistema de información es un conjunto organizado de recursos que permite recopilar, procesar, almacenar y distribuir información para apoyar las actividades de una organización.

No debemos confundir un sistema de información con un sistema informático: el segundo es una parte tecnológica del primero.

### 4.1. Componentes de un sistema de información

Podemos distinguir cinco grandes componentes:

[What Are The Five Main Components Of An Information System - Design Talk](https://images.openai.com/static-rsc-4/hqKcD2hH4edEzt9nmdpUlOISOTS6pITK3fmdfXqA6CEvFlHOALUjrjOXYis8le1hne6AZYYi2utzgU3xsG6dLzLG3aOfvASuaPpZgKUNyZYedd7MKI3uJetPXBNb9wR_Oz07iIe1410YjtA3D_qTTt-6r0rMrqJFSiiXH2I4f-o?purpose=inline)

[design.udlvirtual.edu.pe](https://design.udlvirtual.edu.pe/en/what-are-the-five-main-components-of-an-information-system.html?utm_source=chatgpt.com)

1\. Hardware

Conjunto de componentes físicos:

- Ordenadores.
- Servidores.
- Discos de almacenamiento.
- Impresoras.
- Dispositivos de red.

2\. Software

Conjunto de programas que permiten realizar tareas.

Se divide principalmente en:

- Software de sistema: sistemas operativos, controladores y utilidades.
- Software de aplicación: programas de gestión, navegadores, procesadores de texto, etc.
- Software de desarrollo: compiladores, intérpretes y entornos de programación.

3\. Datos

Son los elementos que se recopilan, almacenan y procesan.

Pueden ser:

- Datos personales.
- Datos económicos.
- Documentos.
- Registros de actividad.
- Información estructurada y no estructurada.

4\. Personas

Son los usuarios y profesionales que interactúan con el sistema:

- Usuarios finales.
- Administradores.
- Técnicos informáticos.
- Analistas.
- Desarrolladores.
- Responsables de gestión.

5\. Procedimientos

Son las normas, instrucciones y procesos que establecen cómo debe utilizarse y mantenerse el sistema.

Por ejemplo, el procedimiento para realizar copias de seguridad, gestionar usuarios o recuperar información.

### 4.2. Características de un sistema de información

Un buen sistema de información debe ofrecer:

- Disponibilidad: la información y los servicios deben estar accesibles cuando se necesitan.
- Integridad: los datos deben mantenerse completos y sin modificaciones no autorizadas.
- Confidencialidad: solo las personas autorizadas deben acceder a la información.
- Autenticidad: debe poder verificarse la identidad de usuarios y sistemas y el origen de la información.
- Fiabilidad: el sistema debe funcionar de manera correcta y consistente.
- Eficiencia: debe aprovechar adecuadamente los recursos.
- Escalabilidad: debe poder crecer para atender nuevas necesidades.
- Mantenibilidad: debe facilitar su modificación y actualización.

### 4.3. Funciones de un sistema de información

Las principales funciones son:

1. Captura de datos.
2. Validación de los datos.
3. Procesamiento.
4. Almacenamiento.
5. Recuperación.
6. Distribución de información.
7. Control y protección de los datos.

Ejemplo en la Administración pública:

Un sistema de gestión de expedientes administrativos recibe solicitudes, comprueba sus datos, almacena documentación, permite consultar el estado de los expedientes y genera resoluciones.

## 5. Arquitectura de ordenadores

La arquitectura de ordenadores estudia la organización y el funcionamiento de los componentes de un sistema informático.

Describe cómo se estructura el ordenador y cómo interactúan sus elementos para ejecutar instrucciones y procesar información.

### 5.1. Arquitectura de Von Neumann

Es uno de los modelos fundamentales de arquitectura de computadores.

Se caracteriza por utilizar una memoria común para almacenar instrucciones y datos.

Sus elementos principales son:

1. Unidad Central de Procesamiento (CPU).
2. Memoria principal.
3. Dispositivos de entrada.
4. Dispositivos de salida.
5. Sistema de interconexión o buses.

[OCR GCSE Computer Science Revision | Smash Your Exams](https://images.openai.com/static-rsc-4/zhWpKG3mzHuyLSqH3kbOEk4Gx3m4EUaPMF9q218Fy2vnrUwtm5MYwEoc97I__-Jh29KLeQjdGqcqkRQ4NNauIE6x-6suNeODhJqatelHw90u0SmfSL6QB0U2QHljWeku1vaL59cxw4Clb8vp2NRst-Qsl4GaL2TyeM0xW-Rq7MM?purpose=inline)

[revision.smashyourexams.com](https://revision.smashyourexams.com/computer-systems/systems-architecture/common-cpu-components-and-their-function?utm_source=chatgpt.com)

Funcionamiento general:

- Las instrucciones y los datos se almacenan en memoria.
- La CPU obtiene las instrucciones.
- Las interpreta.
- Las ejecuta.
- Guarda los resultados cuando corresponde.

Este funcionamiento se conoce como ciclo de instrucción.

### 5.2. Ciclo de instrucción

El ciclo básico de ejecución de una instrucción comprende tres fases:

| Fase    | Operación                                         |
| ------- | ------------------------------------------------- |
| Fetch   | Búsqueda de la instrucción en memoria             |
| Decode  | Decodificación e interpretación de la instrucción |
| Execute | Ejecución de la instrucción                       |

En español también se conoce como ciclo de búsqueda, decodificación y ejecución.

La CPU repite este proceso continuamente mientras ejecuta programas.

### 5.3. Arquitectura Harvard

A diferencia de Von Neumann, la arquitectura Harvard utiliza memorias separadas para instrucciones y datos.

Esto permite acceder a ambos de forma independiente.

| Von Neumann                                   | Harvard                                                   |
| --------------------------------------------- | --------------------------------------------------------- |
| Memoria común para datos e instrucciones      | Memorias separadas                                        |
| Comparte vías de acceso                       | Puede disponer de vías independientes                     |
| Arquitectura tradicional de propósito general | Frecuente en microcontroladores y procesadores de señales |

Existe también la arquitectura Harvard modificada, que combina características de ambos modelos.

### 5.4. El modelo de arquitectura en capas

Los ordenadores pueden analizarse también mediante distintos niveles:

- Nivel físico: circuitos electrónicos y componentes.
- Nivel lógico: operaciones y estructuras digitales.
- Nivel de arquitectura: instrucciones, registros y funcionamiento del procesador.
- Nivel de sistema operativo: gestión de recursos.
- Nivel de aplicación: programas que utiliza el usuario.

## 6. Componentes internos de los equipos microinformáticos

Un equipo microinformático es un sistema basado normalmente en un microprocesador, diseñado para realizar tareas de procesamiento de información.

Sus componentes internos principales son los siguientes.

### 6.1. Placa base (Motherboard)

[Gaming Motherboard Buying Guide – Intel](https://images.openai.com/static-rsc-4/MLWsnvUQmkcAohBksSiytrVS0gIvy4MjLlldlIyZVXAS6XHFwC16VdPcNLqQ7YZnXVdRal5s6zIVVnYQxKgnnLZPef0AypLQVRykrrLW5I2yP6EfFWLvzq5YTerJuWOSV_u5mmSOmNPZTcc1wV2UlwuStBs5rjVzsw84seCzbN0?purpose=inline)

[intel.com](https://intel.com/content/www/us/en/gaming/resources/how-to-choose-a-motherboard.html?utm_source=chatgpt.com)

Es la placa de circuito impreso principal del ordenador.

Permite conectar y comunicar los diferentes componentes.

Contiene, entre otros elementos:

- Zócalo del procesador.
- Ranuras de memoria RAM.
- Ranuras de expansión.
- Conectores de almacenamiento.
- Chipset, cuando la plataforma dispone de uno diferenciado.
- Conectores de alimentación.
- Firmware UEFI/BIOS.

La placa base determina buena parte de la compatibilidad entre los componentes.

### 6.2. Microprocesador (CPU)

[Installing central processor unit into motherboard](https://images.openai.com/static-rsc-4/d9-ieTn83nW2zlZPr4eut9IrhqJ371u_ntxOAQYGORWVRh2aeHx36H9JiCfWe0gAVG87nDGTo2lOe3dyRgko3DmpXHj9Xqueo-CQEWPGO3G0KYEfXtYuMfaYPBgh1pEy6nDqEPqmqd3SOak2nokwDHaNVm2FMUmdCUtTIHrmEvDlB6gW0XWN1vTzX3JkAL6e?purpose=inline)

La CPU es el componente encargado de ejecutar las instrucciones de los programas.

Sus elementos principales son:

Unidad de control (UC)

- Dirige la ejecución de instrucciones.
- Coordina las operaciones internas.
- Controla el flujo de datos.
- Genera señales de control.

Unidad aritmético-lógica (ALU)

Realiza operaciones:

- Aritméticas: suma, resta, multiplicación, división.
- Lógicas: AND, OR, NOT.
- Comparaciones.

Registros

Son pequeñas unidades de almacenamiento de muy alta velocidad situadas dentro del procesador.

Almacenan temporalmente datos, direcciones e instrucciones.

Algunos registros importantes:

| Registro                  | Función                                                                          |
| ------------------------- | -------------------------------------------------------------------------------- |
| PC (Program Counter)      | Contiene la dirección de la siguiente instrucción que debe buscarse              |
| IR (Instruction Register) | Almacena la instrucción que se está procesando                                   |
| MAR                       | Contiene la dirección de memoria a la que se accede                              |
| MDR                       | Contiene los datos que se leen de memoria o se escriben en ella                  |
| Acumulador                | Almacena resultados intermedios de operaciones, en arquitecturas que lo utilizan |

Núcleos e hilos

- Núcleo: unidad de procesamiento capaz de ejecutar instrucciones.
- Hilo: secuencia de ejecución gestionada por el procesador y el sistema operativo.

Un procesador multinúcleo permite realizar varias tareas de procesamiento en paralelo.

Frecuencia de reloj

Se expresa habitualmente en GHz y representa la frecuencia de funcionamiento del reloj del procesador.

No debe confundirse con el rendimiento total: también influyen el número de núcleos, la arquitectura, la memoria caché y otros factores.

### 6.3. Memoria principal

La memoria principal permite almacenar temporalmente la información que utiliza la CPU.

Se divide fundamentalmente en RAM y ROM.

Memoria RAM (Random Access Memory)

[How to Install RAM in a PC | Tom's Hardware](https://images.openai.com/static-rsc-4/WeeraYiFV7xiq0xddhxEwGsx6DER9IbfN6xiKn2rryJX75-fVHsk6SgjMioX5GRL6OIYwclXS385WPxesRQGl7kFjkRvUtd-1heZsMt2UPLYHU_dnGBoE5S6ydwo6SoyrMoQjYGXPyWMwYJRoQirJmZHtCPcUW41So-wJKhxZuE?purpose=inline)

[tomshardware.com](https://www.tomshardware.com/how-to/install-ram-in-a-pc?utm_source=chatgpt.com)

Características:

- Permite leer y escribir información.
- Es de acceso aleatorio.
- Almacena temporalmente programas y datos en ejecución.
- Es volátil: pierde su contenido al interrumpirse la alimentación eléctrica.

Tipos principales:

- DRAM: utilizada habitualmente como memoria principal.
- SRAM: más rápida y costosa, utilizada principalmente en memorias caché.

Memoria ROM (Read Only Memory)

Es una memoria no volátil, utilizada para almacenar información que debe conservarse sin alimentación eléctrica.

En los equipos actuales se emplean memorias flash para almacenar el firmware del sistema.

Conviene recordar que la denominación ROM se utiliza tradicionalmente, aunque muchas implementaciones modernas permiten actualizar su contenido.

### 6.4. Memoria caché

[The Two-Faced CPU: The Hybrid Harvard & Von Neumann Soul of Your Processor | by Dinesh | Medium](https://images.openai.com/static-rsc-4/i5-C6weFWjEmzAXnNHn4QTFMiqHJcUCJel9fIMkHBE5b5ltXevbhANUc_DbhnTl18lFCHJWljGt6_0f_EeLn0-UJvnUWpw71cvyt4BmisAWzBIa6FkdFIiOoJ_uzbB5EMGERqFloDbDtUEOeazAHrfvejZeeHZX_dh2fnOzfwCg?purpose=inline)

[medium.com](https://medium.com/%40humble_bee/the-two-faced-cpu-the-hybrid-harvard-von-neumann-soul-of-your-processor-0397912b97f0?utm_source=chatgpt.com)

Es una memoria de alta velocidad que almacena datos e instrucciones utilizados frecuentemente por la CPU.

Su objetivo es reducir el tiempo necesario para acceder a la información.

Se organiza normalmente en varios niveles:

| Nivel | Características                                              |
| ----- | ------------------------------------------------------------ |
| L1    | Muy rápida y pequeña. Normalmente integrada en cada núcleo   |
| L2    | Mayor capacidad que L1, generalmente más lenta               |
| L3    | Mayor capacidad, normalmente compartida entre varios núcleos |

Regla general:

- L1: menor capacidad y menor latencia.
- L2: capacidad intermedia.
- L3: mayor capacidad y latencia normalmente superior.

### 6.5. Memoria secundaria y almacenamiento

[Seagate 500Gb HDD 3.5" SATA Internal Hard Drive Toldan və Pərakəndə](https://images.openai.com/static-rsc-4/k0MRMxzGiVtXxpSv7X6oQnkdLj9MriqdWX_ZR2cf6hJn9zZXTFocqIpT8ymlUb3t5PrLRlVFY2q2lPmeM-Cb43gp6CuKVgmlvQeEZlBSMZjYRfGMcT353dqT1oTyRuAEhOx4GuwkAD8bFbUUkOspccLG9xghBpv5ZbLTc1eTB7E?purpose=inline)

[Goldenfir SSD 2.5inch Solid state drive hard drive...  –  Vicedeal](https://images.openai.com/static-rsc-4/HGd08sPeXtFmBhefhg1jDgHK6dGlasyEelIgKAmB1GKIMup9zkD8exlYWSXAfe0jfBD7ZpVOk8EDv4_CgN6mGr6mXzv_fdyKtwB0IlBGsI8HdscfIHARSa6Zbyw9HW6xApWO0FCgmCA6VknFTwzL_ezqp-dP8quYL045Xt93nbY?purpose=inline)

[Crucial P2 M.2 NVMe SSD Review: Beating SATA dollar for dollar | Tom's Hardware](https://images.openai.com/static-rsc-4/RT8LlqIipPOtGC8jPz6MbKG-MACpxHrXOuSFwkU5BqLxSf5RkeL36602UlncCHhU9nmbvNrL_-fLrltUhuohQKaFI3DfC7jQNXgsnEspS01pwu7W-zyYZ-1T_jDJJDHYaUSIq1gvecE2EllQJ4Hlgx6X1apKike-sV-GlzjSaEc?purpose=inline)

Permite almacenar información de manera persistente.

Los dispositivos más habituales son:

Disco duro HDD

- Utiliza platos magnéticos giratorios.
- Tiene partes mecánicas.
- Suele ofrecer una buena relación capacidad/precio.
- Es más lento que los SSD en muchas operaciones.

Unidad SSD

- Utiliza memoria flash.
- No contiene partes móviles.
- Ofrece mayor velocidad de acceso.
- Consume generalmente menos energía que un HDD.

Interfaces de almacenamiento:

- SATA: interfaz habitual para discos duros y SSD SATA.
- NVMe: protocolo de acceso a almacenamiento no volátil.
- PCI Express: interfaz de conexión utilizada por muchos SSD NVMe.

Importante: M.2 es un formato físico de conexión. Una unidad M.2 puede utilizar SATA o PCIe/NVMe, según el modelo.

### 6.6. Buses del sistema

Los buses son vías de comunicación que permiten intercambiar información entre los componentes del ordenador.

Tradicionalmente se clasifican en:

| Bus                | Función                                         |
| ------------------ | ----------------------------------------------- |
| Bus de datos       | Transporta datos                                |
| Bus de direcciones | Identifica posiciones de memoria o dispositivos |
| Bus de control     | Transporta señales de control y sincronización  |

[How do different components of the computer communicate with each other?](https://images.openai.com/static-rsc-4/-JVACoJUyQT8JEMP-09tWiwzUKGU1Ay4h61nBpAG3DHAbHixY8sqJmzR8y-OeweOp4V5PjT5BB1nkAWB-0WDA_vjIyKyZSEyqMFPGZ0NWR8fK_4KmburI0d4IFPPQK-vVFS8TpLFS-oxsmFAmkWI7EAwgz7acoSO_MfYQwbJ1ls?purpose=inline)

[englishchatterbox.com](https://www.englishchatterbox.com/chatterbot-ai/question/how-do-different-components-of-the-computer-communicate-with-each-other?utm_source=chatgpt.com)

La anchura del bus de datos influye en la cantidad de información que puede transferirse simultáneamente.

Por ejemplo, un bus de datos de 64 bits puede transportar 64 bits en cada transferencia de esa anchura.

En los sistemas modernos muchas comunicaciones utilizan enlaces punto a punto, como PCI Express, en lugar de los buses compartidos tradicionales.

### 6.7. Chipset

El chipset es un conjunto de circuitos que gestiona determinadas comunicaciones entre los componentes del ordenador.

En arquitecturas tradicionales se distinguían:

- Puente norte: comunicaba la CPU con la memoria y determinados dispositivos de alta velocidad.
- Puente sur: gestionaba dispositivos de entrada/salida y conexiones de menor velocidad.

En las arquitecturas modernas muchas funciones del antiguo puente norte se han integrado en el procesador. Por eso, el diseño del chipset actual es diferente.

### 6.8. Tarjetas de expansión

Son tarjetas que se conectan a la placa base para añadir funcionalidades.

Las más habituales son:

- Tarjeta gráfica.
- Tarjeta de sonido.
- Tarjeta de red.
- Tarjetas de captura.
- Controladoras de almacenamiento.

Normalmente se conectan mediante ranuras PCI Express.

GPU (Graphics Processing Unit)

Es el procesador especializado en realizar operaciones gráficas y otros cálculos paralelos.

Puede estar integrada en el procesador o instalarse como tarjeta gráfica independiente.

### 6.9. Fuente de alimentación

[File:ATX PS open PS.jpg - Wikimedia Commons](https://images.openai.com/static-rsc-4/kLNF7NEqE5UvplpnZAdZj60Gj8--iGVh-xlEY9Z29kRsrepa9j-RbKzzMbB1YjCc1e_XghY56oGyDw8HBRx1ng0qx6sTlTBETeA8RHpE_HFEMZKyFYktO-QVmGnES3utMfwaXr9rIOOd-hMo_l5MQ3vhaVR8grl7G9HQIZO-AdM?purpose=inline)

[commons.wikimedia.org](https://commons.wikimedia.org/wiki/File%3AATX_PS_open_PS.jpg?utm_source=chatgpt.com)

Convierte la corriente alterna de la red eléctrica en corriente continua con los niveles necesarios para los componentes del ordenador.

Sus funciones principales son:

- Proporcionar energía a los componentes.
- Regular las tensiones de salida.
- Incorporar protecciones eléctricas.
- Distribuir la alimentación mediante conectores.

Las fuentes ATX son habituales en ordenadores de sobremesa.

### 6.10. Sistema de refrigeración

Los componentes electrónicos generan calor durante su funcionamiento.

Para evitar temperaturas excesivas se utilizan:

- Disipadores.
- Ventiladores.
- Sistemas de refrigeración líquida.
- Pasta térmica.

La refrigeración permite mantener temperaturas adecuadas y evitar la pérdida de rendimiento o daños en los componentes.

### 6.11. Firmware: BIOS y UEFI

El firmware es el software de bajo nivel que permite controlar determinados componentes del hardware.

BIOS (Basic Input/Output System)

Es el firmware tradicional de los ordenadores personales.

Entre sus funciones se encuentran:

- Inicializar componentes.
- Realizar comprobaciones durante el arranque.
- Identificar dispositivos.
- Iniciar el proceso de carga del sistema operativo.

UEFI (Unified Extensible Firmware Interface)

Es la interfaz de firmware moderna que ha sustituido progresivamente a la BIOS tradicional.

Entre sus características:

- Interfaz más avanzada.
- Compatibilidad con discos y particiones GPT.
- Soporte para Secure Boot.
- Posibilidad de utilizar controladores y aplicaciones del entorno de firmware.

No debemos confundir UEFI con el sistema operativo: UEFI se ejecuta antes de que se cargue este.

# 7. Esquema general para memorizar

[Parts of a Computer and Their Functions (With Visual Diagram)](https://images.openai.com/static-rsc-4/O6OXAeb7GHl-9oJfHUZIQyMWFD1dOK2ICB3nCWWwCo5L5R4tg3c5ixmq7IsuebtlA9oZyH2ybTn3xiORjft-4ZYfXMNicKYTByATldmExa-FG-aTQfiYcY0saCvGhheZXkkIvTv4b5iNNJ2R_sK9g5l4NxDEQEgGU7SJ33ASoxk?purpose=inline)

[computer-info-bits.com](https://computer-info-bits.com/learn/parts-of-a-computer-and-their-functions?utm_source=chatgpt.com)

| Componente             | Función principal                               |
| ---------------------- | ----------------------------------------------- |
| CPU                    | Ejecutar instrucciones                          |
| UC                     | Controlar y coordinar operaciones               |
| ALU                    | Operaciones aritméticas y lógicas               |
| Registros              | Almacenamiento interno muy rápido               |
| RAM                    | Almacenar temporalmente programas y datos       |
| ROM / Flash            | Conservar firmware                              |
| Caché                  | Acelerar el acceso a datos frecuentes           |
| HDD / SSD              | Almacenamiento persistente                      |
| Placa base             | Conectar componentes                            |
| Chipset                | Gestionar determinadas comunicaciones           |
| GPU                    | Procesamiento gráfico y paralelo                |
| Fuente de alimentación | Suministrar energía                             |
| Disipador              | Evacuar calor                                   |
| UEFI                   | Inicializar el hardware y facilitar el arranque |

# 8. Conceptos especialmente importantes para el examen

Estos son algunos de los contrastes que conviene dominar:

| Concepto A  | Concepto B  | Diferencia                                                          |
| ----------- | ----------- | ------------------------------------------------------------------- |
| RAM         | ROM         | Volátil frente a no volátil                                         |
| HDD         | SSD         | Magnético mecánico frente a memoria flash                           |
| CPU         | GPU         | Procesamiento general frente a procesamiento paralelo especializado |
| Von Neumann | Harvard     | Memoria común frente a memorias separadas                           |
| UC          | ALU         | Control frente a operaciones                                        |
| ASCII       | Unicode     | Codificación histórica frente a estándar universal de caracteres    |
| Unicode     | UTF-8       | Conjunto de caracteres frente a codificación                        |
| Caché       | RAM         | Memoria más rápida y pequeña frente a memoria principal             |
| Simplex     | Full-duplex | Un sentido frente a ambos sentidos simultáneos                      |
| M.2         | NVMe        | Formato físico frente a protocolo                                   |

# 9. Resumen del tema

1. La informática estudia el tratamiento automático de la información.
2. Los datos son la materia prima; la información es el resultado de procesarlos y contextualizarlos.
3. El ordenador utiliza el sistema binario para representar internamente la información.
4. Un byte equivale a 8 bits.
5. ASCII, Unicode y UTF-8 son conceptos diferentes relacionados con la representación de caracteres.
6. La comunicación requiere emisor, receptor, mensaje, canal, código y protocolo.
7. Un sistema de información está formado por hardware, software, datos, personas y procedimientos.
8. La arquitectura Von Neumann utiliza memoria común para datos e instrucciones.
9. La CPU ejecuta instrucciones mediante la unidad de control, la ALU y los registros.
10. La RAM es volátil y la memoria secundaria conserva los datos.
11. La caché reduce el tiempo de acceso a la información.
12. La placa base conecta los componentes y permite su comunicación.
13. Los buses transportan datos, direcciones y señales de control.
14. El SSD utiliza memoria flash, mientras que el HDD utiliza almacenamiento magnético mecánico.
15. UEFI es el firmware moderno utilizado para inicializar el hardware y facilitar el arranque.

# 10. Test de autoevaluación

Te propongo 15 preguntas de dificultad progresiva. Cada pregunta tiene cuatro opciones y una sola respuesta correcta.

Test Tema 1

0 / 15 respondidas

1\. ¿Cuántos bits contiene un byte?

A. 4

B. 8

C. 16

D. 32

2\. ¿Cuál es la base del sistema hexadecimal?

A. 2

B. 8

C. 10

D. 16

3\. ¿Qué codificación Unicode utiliza entre 1 y 4 bytes por punto de código?

A. ASCII

B. UTF-8

C. BCD

D. EBCDIC

4\. ¿Qué arquitectura utiliza una memoria común para datos e instrucciones?

A. Harvard

B. Von Neumann

C. Cliente-servidor

D. Distribuida

5\. ¿Qué componente realiza las operaciones aritméticas y lógicas?

A. Unidad de control

B. ALU

C. RAM

D. Chipset

6\. ¿Cuál de estas memorias es volátil?

A. ROM

B. SSD

C. RAM

D. Flash

7\. ¿Cuál es la función principal de la memoria caché?

A. Almacenar copias de seguridad

B. Acelerar el acceso a datos e instrucciones frecuentes

C. Sustituir al disco duro

D. Alimentar la CPU

8\. ¿Qué registro contiene la dirección de la siguiente instrucción?

A. IR

B. PC

C. MDR

D. Acumulador

9\. ¿Qué elemento transporta las direcciones de memoria?

A. Bus de datos

B. Bus de control

C. Bus de direcciones

D. Bus de alimentación

10\. ¿Qué caracteriza a una transmisión full-duplex?

A. Solo transmite en un sentido

B. Transmite en ambos sentidos, pero alternativamente

C. Transmite simultáneamente en ambos sentidos

D. No necesita canal

11\. ¿Cuál de los siguientes es un protocolo de almacenamiento?

A. NVMe

B. UTF-8

C. SMTP

D. HTML

12\. ¿Qué afirmación sobre M.2 es correcta?

A. Siempre utiliza NVMe

B. Es un formato físico de conexión

C. Es una memoria volátil

D. Es un sistema operativo

13\. ¿Qué elemento inicializa el hardware antes de cargar el sistema operativo?

A. UEFI

B. Procesador de textos

C. Servidor web

D. Controlador de impresión

14\. ¿Cuáles son los cinco componentes habituales de un sistema de información?

A. CPU, RAM, ROM, GPU y SSD

B. Hardware, software, datos, personas y procedimientos

C. Emisor, receptor, canal, señal y antena

D. Entrada, salida, CPU, pantalla y teclado

15\. ¿Qué diferencia fundamental existe entre RAM y almacenamiento SSD?

A. Ambos son volátiles

B. La RAM es normalmente volátil y el SSD conserva los datos sin alimentación

C. El SSD es una memoria caché

D. La RAM es un dispositivo mecánico

Corregir test

## 11. Referencias para ampliar el estudio

Te recomiendo utilizar documentación técnica en español y fuentes oficiales:

- [INCIBE](https://www.incibe.es/?utm_source=chatgpt.com): conceptos de seguridad informática.
- [IBM Think](https://www.ibm.com/es-es/think/topics?utm_source=chatgpt.com): arquitectura, hardware y sistemas informáticos.
- [Unicode Standard](https://www.unicode.org/standard/standard.html?utm_source=chatgpt.com): estándar de representación de caracteres.
- [ETSI](https://www.etsi.org/?utm_source=chatgpt.com): estándares de comunicaciones y telecomunicaciones.
