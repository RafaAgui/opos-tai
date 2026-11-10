# Bloque II. Tecnología básica

## Tema 2. Periféricos: conectividad y administración. Elementos de impresión. Elementos de almacenamiento. Elementos de visualización y digitalización

**TAI – Cuerpo de Técnicos Auxiliares de Informática – AGE – C1**

---

## 1. Introducción: los periféricos informáticos

Un periférico es un dispositivo que se conecta a un ordenador o sistema informático para ampliar sus capacidades de entrada, salida, almacenamiento o comunicación.

A diferencia de los componentes internos estudiados en el Tema 1 —como la CPU, la memoria RAM o la placa base—, los periféricos permiten la interacción del ordenador con el exterior.

Sus funciones principales son:

- Introducir información en el sistema.
- Mostrar o reproducir información procesada.
- Almacenar información de forma temporal o permanente.
- Comunicar el ordenador con otros dispositivos y redes.

### 1.1. Clasificación de los periféricos

| Tipo | Función | Ejemplos |
|---|---|---|
| Entrada | Introducir datos | Teclado, ratón, escáner, micrófono |
| Salida | Mostrar resultados | Monitor, impresora, altavoces |
| Entrada/salida | Intercambiar información | Pantalla táctil, tarjeta de red |
| Almacenamiento | Guardar información | Disco SSD, memoria USB |
| Comunicación | Transmitir datos | Módem, adaptador Wi-Fi |

Un mismo dispositivo puede pertenecer a varias categorías. Por ejemplo, una pantalla táctil es un periférico de salida porque muestra información y de entrada porque detecta las pulsaciones.

## 2. Conectividad de periféricos

La conectividad comprende los mecanismos físicos y lógicos que permiten conectar dispositivos informáticos y transmitir información entre ellos.

Podemos distinguir dos grandes categorías:

- Conexiones cableadas.
- Conexiones inalámbricas.

### 2.1. Conexiones cableadas

Las conexiones cableadas utilizan un medio físico para transportar señales.

#### USB (Universal Serial Bus)

Es uno de los estándares más utilizados para conectar periféricos. Permite conectar teclados, ratones, impresoras, cámaras, memorias externas y otros dispositivos.

Características:

- Transmisión de datos.
- Alimentación eléctrica de determinados dispositivos.
- Detección y configuración de dispositivos.
- Conexión y desconexión en caliente (*hot-plug*), cuando el dispositivo y el sistema lo permiten.
- Arquitectura basada en un controlador y una estructura de conexión mediante concentradores (*hubs*).

Versiones relevantes:

| Estándar | Velocidad teórica máxima habitual |
|---|---:|
| USB 2.0 | 480 Mbit/s |
| USB 3.2 Gen 1 | 5 Gbit/s |
| USB 3.2 Gen 2 | 10 Gbit/s |
| USB 3.2 Gen 2x2 | 20 Gbit/s |
| USB4 | Hasta 40 Gbit/s en su versión inicial |

Las prestaciones reales dependen de los dispositivos, el cable, el controlador y la implementación.

**Importante:** USB-C es un tipo de conector, no una versión de USB. Un conector USB-C puede admitir distintas velocidades y capacidades según el dispositivo.

#### SATA (Serial ATA)

Es una interfaz utilizada principalmente para conectar dispositivos de almacenamiento internos, como discos duros HDD y unidades SSD SATA.

Características:

- Transmisión de datos en serie.
- Conexión mediante cables de datos y alimentación independientes.
- Uso extendido en ordenadores personales.
- SATA III alcanza una velocidad de enlace de 6 Gbit/s.

#### PCI Express (PCIe)

Es un estándar de conexión de alta velocidad utilizado principalmente dentro del ordenador.

Permite conectar:

- Tarjetas gráficas.
- Tarjetas de red.
- Controladoras de almacenamiento.
- Unidades SSD NVMe mediante ranuras o adaptadores compatibles.

Utiliza enlaces denominados *lanes* (x1, x4, x8 y x16, entre otros). La capacidad aumenta con el número de líneas y la generación PCIe.

#### HDMI (High-Definition Multimedia Interface)

Interfaz digital que transmite audio y vídeo mediante un único cable. Se utiliza para conectar ordenadores, monitores, televisores y proyectores.

#### DisplayPort

Interfaz digital de audio y vídeo utilizada especialmente en entornos informáticos. Ofrece soporte para resoluciones elevadas, altas frecuencias de actualización y configuraciones con varios monitores, dependiendo de la versión.

#### Ethernet

Tecnología de redes cableadas que permite conectar ordenadores y otros dispositivos a una red local. Es habitual encontrar conexiones Ethernet mediante conectores RJ-45, aunque el conector físico y el estándar de comunicación no deben confundirse.

### 2.2. Conexiones inalámbricas

Permiten la comunicación sin necesidad de un cable físico entre los dispositivos.

| Tecnología | Características | Usos |
|---|---|---|
| Wi-Fi | Redes inalámbricas de área local | Ordenadores, móviles, impresoras |
| Bluetooth | Comunicación inalámbrica de corto alcance | Ratones, teclados, auriculares |
| NFC | Comunicación de muy corto alcance | Identificación e intercambio de datos |
| Infrarrojos | Comunicación óptica de corto alcance | Mandos y dispositivos específicos |

#### Wi-Fi

Tecnología basada en la familia de estándares IEEE 802.11. Permite conectar dispositivos a redes inalámbricas y acceder a recursos locales o a Internet.

Evolución destacada:

- Wi-Fi 4: IEEE 802.11n.
- Wi-Fi 5: IEEE 802.11ac.
- Wi-Fi 6: IEEE 802.11ax.
- Wi-Fi 6E: extensión de Wi-Fi 6 a la banda de 6 GHz.
- Wi-Fi 7: IEEE 802.11be.

#### Bluetooth

Tecnología de comunicación inalámbrica diseñada para distancias cortas y bajo consumo energético en muchas de sus aplicaciones. Se utiliza para conectar periféricos como teclados, ratones, auriculares y dispositivos de audio.

Bluetooth Low Energy (BLE) está orientado a comunicaciones de bajo consumo, especialmente en dispositivos IoT y sensores.

#### NFC (Near Field Communication)

Tecnología de comunicación inalámbrica de muy corto alcance, normalmente de unos pocos centímetros.

Se utiliza en:

- Lectura de etiquetas y tarjetas.
- Identificación de dispositivos.
- Sistemas de pago sin contacto.
- Intercambio de información entre dispositivos compatibles.

### 2.3. Comparación de conexiones

| Tecnología | Medio | Aplicación principal |
|---|---|---|
| USB | Cable | Periféricos generales |
| SATA | Cable | Almacenamiento interno |
| PCIe | Conexión interna | Componentes de alto rendimiento |
| HDMI | Cable | Audio y vídeo |
| DisplayPort | Cable | Audio y vídeo |
| Ethernet | Cable | Redes locales |
| Wi-Fi | Radio | Redes inalámbricas |
| Bluetooth | Radio | Periféricos cercanos |
| NFC | Radio | Comunicación de proximidad |

## 3. Administración de periféricos

La administración de periféricos consiste en gestionar los dispositivos conectados al sistema operativo para garantizar su correcto funcionamiento.

El sistema operativo actúa como intermediario entre las aplicaciones y el hardware.

### 3.1. Controladores o drivers

Un controlador (*driver*) es un componente de software que permite al sistema operativo comunicarse con un dispositivo hardware.

Sus funciones son:

- Identificar el dispositivo.
- Facilitar la comunicación entre el sistema operativo y el hardware.
- Traducir las peticiones del sistema a operaciones que el dispositivo pueda ejecutar.
- Gestionar determinadas funciones y características del dispositivo.

Por ejemplo, una impresora puede necesitar un controlador específico para utilizar todas sus funciones.

### 3.2. Plug and Play

Plug and Play (PnP) es la capacidad de detectar y configurar automáticamente dispositivos conectados al sistema.

El proceso habitual incluye:

1. Conexión del dispositivo.
2. Detección por parte del sistema operativo.
3. Identificación del hardware.
4. Localización o instalación del controlador adecuado.
5. Configuración y puesta en funcionamiento.

No todos los dispositivos pueden configurarse completamente sin intervención del usuario.

### 3.3. Administración en Windows

Windows incorpora herramientas para consultar y administrar dispositivos. La principal es el **Administrador de dispositivos**.

Permite:

- Consultar el hardware instalado.
- Comprobar el estado de los dispositivos.
- Actualizar o reinstalar controladores.
- Habilitar y deshabilitar dispositivos.
- Identificar errores de funcionamiento.
- Consultar las propiedades y los recursos utilizados.

También existen otras herramientas:

- Configuración de Windows: administración de dispositivos conectados.
- Administración de discos: gestión de unidades y particiones.
- Administrador de impresión: gestión de impresoras y trabajos.
- Administrador de tareas: consulta de actividad y recursos del sistema.

### 3.4. Administración en Linux

Linux dispone de diferentes herramientas para detectar y gestionar dispositivos.

| Comando | Función |
|---|---|
| `lsusb` | Muestra dispositivos USB |
| `lspci` | Muestra dispositivos conectados mediante PCI |
| `lsblk` | Muestra dispositivos de bloques |
| `lshw` | Presenta información del hardware |
| `dmesg` | Consulta mensajes del núcleo |
| `lpstat` | Consulta el estado del sistema de impresión CUPS |

En Linux, el núcleo incorpora controladores para numerosos dispositivos. Otros requieren módulos adicionales o software específico.

### 3.5. Gestión de impresión

Los sistemas operativos utilizan servicios de impresión para administrar los trabajos enviados a las impresoras.

En Windows se utiliza el servicio de cola de impresión (*Print Spooler*).

En Linux es habitual utilizar CUPS (Common UNIX Printing System).

La cola de impresión permite:

- Recibir trabajos de impresión.
- Almacenarlos temporalmente.
- Ordenarlos.
- Enviarlos a la impresora.
- Consultar su estado.
- Cancelar trabajos pendientes.

## 4. Elementos de impresión

Las impresoras son periféricos de salida que permiten obtener una representación física de la información digital.

Se pueden clasificar según su tecnología de impresión.

### 4.1. Impresoras de impacto

Forman los caracteres o imágenes mediante el impacto físico de elementos mecánicos sobre una cinta entintada y el papel.

Tipos principales:

- **Impresoras matriciales:** utilizan una matriz de agujas que golpean una cinta entintada.
- **Impresoras de margarita:** utilizan un elemento mecánico con caracteres que golpean la cinta.

Características:

- Funcionamiento mecánico.
- Ruido elevado.
- Calidad gráfica generalmente limitada.
- Posibilidad de imprimir formularios multicopia mediante papel autocopiativo.

Actualmente se utilizan en entornos específicos, como determinados sistemas administrativos o industriales.

### 4.2. Impresoras de inyección de tinta

Funcionan proyectando pequeñas gotas de tinta sobre el papel mediante un cabezal de impresión.

Características:

- Buena calidad de impresión en color.
- Adecuadas para fotografías e imágenes.
- Precio inicial generalmente reducido.
- Coste de consumibles que puede ser elevado.
- Necesidad de controlar el estado de los cartuchos y los cabezales.

### 4.3. Impresoras láser

Utilizan un proceso electrofotográfico para transferir tóner al papel.

Fases simplificadas:

1. Carga eléctrica del tambor fotosensible.
2. Exposición del tambor mediante un láser o sistema LED.
3. Formación de una imagen electrostática.
4. Adherencia del tóner a las zonas correspondientes.
5. Transferencia del tóner al papel.
6. Fijación mediante calor y presión en el fusor.

Componentes habituales:

- Tambor fotosensible.
- Tóner.
- Unidad de revelado.
- Sistema de transferencia.
- Fusor.
- Rodillos de alimentación.

Características:

- Alta velocidad de impresión.
- Buena calidad para documentos de texto.
- Coste por página competitivo en determinados volúmenes.
- Especialmente utilizadas en oficinas.

### 4.4. Impresoras térmicas

Utilizan calor para generar una impresión.

Existen dos modalidades principales:

- **Térmica directa:** el cabezal calienta un papel especialmente tratado que cambia de color.
- **Transferencia térmica:** el calor transfiere tinta desde una cinta o *ribbon* al soporte.

Aplicaciones:

- Tickets de compra.
- Recibos.
- Etiquetas.
- Identificación de productos.
- Sistemas logísticos.

### 4.5. Impresoras 3D

Permiten fabricar objetos físicos a partir de modelos digitales tridimensionales.

Una tecnología muy extendida es FDM (Fused Deposition Modeling), que deposita material fundido capa a capa.

Otras tecnologías utilizan resinas fotosensibles o procesos basados en polvo.

Aplicaciones:

- Prototipado.
- Fabricación de piezas.
- Educación.
- Medicina.
- Diseño industrial.

### 4.6. Parámetros de calidad de impresión

| Parámetro | Significado |
|---|---|
| DPI | Puntos por pulgada; resolución de impresión |
| PPM | Páginas por minuto |
| Ciclo de trabajo | Volumen de impresión previsto para un periodo |
| Dúplex | Impresión por ambas caras |
| Color | Capacidad de imprimir en color o monocromo |
| Bandejas | Capacidad y tipos de papel admitidos |

No debe confundirse DPI con PPI: DPI se utiliza habitualmente para puntos de impresión, mientras que PPI expresa píxeles por pulgada en imágenes y pantallas.

### 4.7. Impresoras multifunción

Integran varias funciones en un mismo dispositivo:

- Impresión.
- Escaneado.
- Fotocopiado.
- Envío y recepción de fax en algunos modelos.

Son habituales en oficinas porque permiten centralizar diferentes tareas documentales.

## 5. Elementos de almacenamiento

Los dispositivos de almacenamiento permiten conservar información digital para utilizarla posteriormente.

Podemos distinguir entre almacenamiento primario y secundario:

- **Primario:** memoria utilizada directamente por el procesador durante la ejecución, como la RAM.
- **Secundario:** almacenamiento persistente, como discos duros, SSD y memorias flash.

### 5.1. Discos duros HDD

Los discos duros magnéticos (*Hard Disk Drive*) almacenan información mediante la magnetización de una superficie formada por platos giratorios.

Componentes:

- Platos magnéticos.
- Cabezal de lectura y escritura.
- Brazo actuador.
- Motor de giro.
- Controladora electrónica.
- Carcasa protectora.

Características:

- Almacenamiento magnético.
- Partes mecánicas móviles.
- Gran capacidad de almacenamiento.
- Coste por gigabyte generalmente reducido.
- Mayor latencia que los SSD.
- Sensibilidad a golpes y vibraciones durante su funcionamiento.

### 5.2. Unidades SSD

Las unidades de estado sólido (*Solid State Drive*) almacenan información en memoria flash NAND. No utilizan platos giratorios ni cabezales mecánicos.

Características:

- Alta velocidad de acceso.
- Baja latencia.
- Menor consumo energético en muchos escenarios.
- Ausencia de partes móviles.
- Mayor resistencia a golpes que los HDD.
- Coste por gigabyte generalmente superior al de los HDD.

#### Tipos de SSD

| Tipo | Interfaz | Características |
|---|---|---|
| SSD SATA | SATA | Compatible con conexiones SATA |
| SSD NVMe | PCIe | Protocolo optimizado para memoria no volátil |
| M.2 SATA | SATA | Formato físico M.2 |
| M.2 NVMe | PCIe | Formato M.2 y protocolo NVMe |

Es importante diferenciar tres conceptos:

- **M.2:** formato físico y tipo de conexión.
- **SATA:** interfaz de conexión.
- **NVMe:** protocolo de acceso a almacenamiento no volátil.

Una unidad M.2 no tiene por qué ser NVMe: también existen unidades M.2 SATA.

### 5.3. Memorias flash

La memoria flash es un tipo de memoria no volátil que conserva la información sin alimentación eléctrica.

Se utiliza en:

- Memorias USB.
- Tarjetas SD y microSD.
- Unidades SSD.
- Dispositivos móviles.
- Sistemas embebidos.

Las memorias USB son dispositivos portátiles que utilizan memoria flash y una interfaz USB.

Las tarjetas SD se utilizan habitualmente en cámaras, dispositivos móviles y otros equipos electrónicos.

### 5.4. Almacenamiento óptico

Utiliza tecnología láser para leer o escribir información sobre discos ópticos.

Principales formatos:

| Formato | Capacidad habitual |
|---|---:|
| CD | 700 MB |
| DVD | 4,7 GB en una capa |
| Blu-ray | 25 GB en una capa |

Características:

- Almacenamiento mediante tecnología óptica.
- Soportes extraíbles.
- Utilización para distribución de software y contenidos multimedia.
- Menor velocidad y capacidad que muchos sistemas de almacenamiento actuales.

Existen discos de solo lectura, grabables una vez y regrabables.

### 5.5. Almacenamiento en red: NAS y SAN

El almacenamiento puede centralizarse y compartirse mediante redes.

#### NAS (Network Attached Storage)

Es un dispositivo de almacenamiento conectado a una red que ofrece acceso a archivos a diferentes usuarios y equipos.

Características:

- Almacenamiento centralizado.
- Compartición de carpetas y archivos.
- Acceso mediante protocolos como SMB o NFS.
- Administración de usuarios y permisos.
- Posibilidad de incorporar redundancia mediante RAID.

#### SAN (Storage Area Network)

Es una red especializada que proporciona acceso a almacenamiento a nivel de bloque a servidores.

Características:

- Orientada a entornos empresariales.
- Alto rendimiento y disponibilidad.
- Separación lógica del tráfico de almacenamiento.
- Uso habitual en centros de procesamiento de datos.

| Característica | NAS | SAN |
|---|---|---|
| Acceso | Archivos | Bloques |
| Finalidad | Compartir archivos | Proporcionar almacenamiento a servidores |
| Protocolos habituales | SMB, NFS | Fibre Channel, iSCSI |
| Entorno | Hogar y empresa | Principalmente empresarial |

### 5.6. Almacenamiento en la nube

Consiste en almacenar información en infraestructuras remotas accesibles mediante redes, normalmente Internet.

Características:

- Acceso desde diferentes ubicaciones.
- Escalabilidad.
- Posibilidad de sincronización.
- Compartición de información.
- Dependencia de conectividad y del proveedor.
- Necesidad de controlar permisos, privacidad y disponibilidad.

No debe confundirse almacenamiento en la nube con almacenamiento local: en el primero, los datos se encuentran en infraestructuras remotas gestionadas por un proveedor o una organización.

### 5.7. RAID

RAID (*Redundant Array of Independent Disks*) agrupa varios discos físicos para proporcionar distintas combinaciones de rendimiento, capacidad y tolerancia a fallos.

Niveles más conocidos:

| Nivel | Funcionamiento | Característica |
|---|---|---|
| RAID 0 | Distribución de datos (*striping*) | Mejora rendimiento, sin redundancia |
| RAID 1 | Espejo (*mirroring*) | Duplica información |
| RAID 5 | Distribución con paridad | Tolera el fallo de un disco |
| RAID 6 | Distribución con doble paridad | Tolera el fallo de dos discos |
| RAID 10 | Combinación de espejo y distribución | Rendimiento y redundancia |

**Idea fundamental para examen:** RAID no sustituye a una copia de seguridad. Aunque determinados niveles permiten tolerar fallos de discos, no protegen necesariamente frente a borrados accidentales, malware, errores humanos o desastres físicos.

### 5.8. Copias de seguridad

Una copia de seguridad (*backup*) es una copia de los datos que permite recuperarlos en caso de pérdida o corrupción.

Tipos principales:

- **Completa:** copia todos los datos seleccionados.
- **Incremental:** copia los cambios desde la última copia realizada.
- **Diferencial:** copia los cambios desde la última copia completa.

| Tipo | Información copiada | Recuperación |
|---|---|---|
| Completa | Todos los datos | Más sencilla |
| Incremental | Cambios desde la última copia | Necesita la completa y los incrementales posteriores |
| Diferencial | Cambios desde la última completa | Necesita la completa y la última diferencial |

La regla 3-2-1 es una recomendación habitual:

- Mantener tres copias de los datos.
- Utilizar dos tipos de soporte diferentes.
- Conservar una copia fuera de la ubicación principal.

## 6. Elementos de visualización

Los dispositivos de visualización son periféricos de salida que permiten representar información mediante imágenes, texto y elementos gráficos.

El monitor es el dispositivo más habitual.

### 6.1. Tecnologías de pantalla

#### LCD (Liquid Crystal Display)

Las pantallas LCD utilizan cristales líquidos para controlar el paso de la luz. Normalmente requieren una fuente de iluminación posterior (*backlight*).

Características:

- Bajo consumo respecto a tecnologías CRT tradicionales.
- Diseño delgado.
- Uso extendido en monitores y portátiles.

#### LED

En el contexto comercial de pantallas, LED suele referirse a pantallas LCD cuya iluminación posterior utiliza diodos LED.

No debe confundirse con una pantalla LED autoemisiva: en una pantalla LCD con retroiluminación LED, los píxeles siguen utilizando cristales líquidos.

#### OLED (Organic Light-Emitting Diode)

Utiliza materiales orgánicos emisores de luz. Cada píxel puede generar su propia iluminación.

Características:

- Negros profundos.
- Alto contraste.
- Amplios ángulos de visión.
- Buena respuesta temporal.
- Posible degradación desigual de los píxeles con determinados patrones de uso prolongado.

### 6.2. Parámetros de visualización

| Parámetro | Definición |
|---|---|
| Resolución | Número de píxeles horizontales y verticales |
| Tamaño | Longitud diagonal de la pantalla |
| Frecuencia de actualización | Número de veces que se actualiza la imagen por segundo |
| Tiempo de respuesta | Tiempo que tarda un píxel en cambiar de estado |
| Brillo | Intensidad luminosa de la pantalla |
| Contraste | Relación entre las zonas más claras y oscuras |
| Ángulo de visión | Ángulo desde el que se observa correctamente la imagen |
| Densidad de píxeles | Cantidad de píxeles por unidad de longitud |

#### Resoluciones habituales

| Denominación | Resolución |
|---|---:|
| HD | 1280 × 720 |
| Full HD | 1920 × 1080 |
| QHD | 2560 × 1440 |
| UHD 4K | 3840 × 2160 |
| UHD 8K | 7680 × 4320 |

La resolución indica el número de píxeles, no el tamaño físico de la pantalla.

Por ejemplo, un monitor de 24 pulgadas y uno de 32 pulgadas pueden tener ambos resolución Full HD, aunque la densidad de píxeles será diferente.

### 6.3. Frecuencia de actualización

Se mide en hercios (Hz) y representa cuántas veces por segundo se actualiza la imagen.

Ejemplos:

- 60 Hz: 60 actualizaciones por segundo.
- 120 Hz: 120 actualizaciones por segundo.
- 144 Hz: 144 actualizaciones por segundo.

Una frecuencia mayor puede proporcionar una representación del movimiento más fluida, siempre que el equipo y el contenido puedan aprovecharla.

### 6.4. Tecnologías de conexión de pantallas

Las principales interfaces digitales son:

- HDMI.
- DisplayPort.
- USB-C con modo alternativo de vídeo compatible.
- Thunderbolt, según la versión y las capacidades del equipo.

VGA y DVI son interfaces más antiguas que todavía pueden encontrarse en determinados equipos.

VGA transmite señal analógica, mientras que HDMI y DisplayPort transmiten señal digital.

## 7. Elementos de digitalización

La digitalización consiste en transformar información analógica o física en información digital que pueda procesar un sistema informático.

Los dispositivos de digitalización permiten introducir documentos, imágenes, sonidos y otros datos en el ordenador.

### 7.1. Escáner

Es un periférico de entrada que captura imágenes de documentos u objetos y las convierte en archivos digitales.

Tipos principales:

- **Escáner plano:** el documento se coloca sobre una superficie de cristal.
- **Escáner con alimentador automático (ADF):** permite digitalizar varias hojas de forma consecutiva.
- **Escáner portátil:** diseñado para facilitar el transporte.
- **Escáner de tambor:** utilizado en entornos profesionales especializados.

### 7.2. Parámetros del escaneado

| Parámetro | Significado |
|---|---|
| DPI | Puntos por pulgada utilizados para expresar la resolución de captura |
| Profundidad de color | Número de bits utilizados para representar el color |
| Área de captura | Dimensiones máximas del documento |
| Velocidad | Número de páginas o imágenes por unidad de tiempo |
| Formato de salida | Tipo de archivo generado |

La profundidad de color influye en la cantidad de colores que pueden representarse.

Por ejemplo:

- 1 bit: 2 valores posibles.
- 8 bits en escala de grises: 256 niveles.
- 24 bits de color RGB: aproximadamente 16,7 millones de combinaciones.

### 7.3. OCR: reconocimiento óptico de caracteres

OCR (*Optical Character Recognition*) es una tecnología que permite reconocer texto presente en imágenes o documentos escaneados y transformarlo en texto digital editable o procesable.

Ejemplo: un documento en papel se escanea y se obtiene una imagen. Mediante OCR se reconocen las letras y palabras para producir un documento con texto seleccionable.

Aplicaciones:

- Digitalización de expedientes.
- Reconocimiento de facturas.
- Archivo documental.
- Búsqueda de texto en documentos.
- Automatización de procesos administrativos.

### 7.4. OMR: reconocimiento óptico de marcas

OMR (*Optical Mark Recognition*) permite detectar marcas realizadas en posiciones determinadas de un documento.

Se utiliza en:

- Hojas de respuestas de exámenes.
- Encuestas.
- Formularios.
- Cuestionarios.

La diferencia con OCR es importante: OMR detecta marcas o selecciones, mientras que OCR reconoce caracteres.

### 7.5. MICR: reconocimiento de caracteres mediante tinta magnética

MICR (*Magnetic Ink Character Recognition*) permite reconocer caracteres impresos con tinta magnética.

Se utiliza tradicionalmente en el procesamiento de documentos bancarios, especialmente cheques.

### 7.6. Otros dispositivos de digitalización

- **Cámaras digitales:** capturan imágenes y vídeos.
- **Micrófonos:** convierten sonido en señales eléctricas que pueden digitalizarse.
- **Lectores de códigos de barras:** interpretan códigos representados mediante barras.
- **Lectores QR:** capturan códigos bidimensionales.
- **Tabletas digitalizadoras:** permiten introducir trazos y dibujos.
- **Lectores biométricos:** capturan determinadas características físicas para procesos de identificación.

### 7.7. Digitalización de imágenes: conceptos básicos

Para comprender cómo se digitaliza una imagen conviene conocer tres conceptos:

- **Muestreo:** obtención de muestras de la señal o imagen.
- **Cuantificación:** asignación de valores discretos a las muestras.
- **Codificación:** representación de esos valores mediante información binaria.

En una imagen digital, la resolución espacial depende del número de píxeles y la profundidad de color determina cuántos valores pueden representarse por píxel.

## 8. Comparativa general: periféricos y dispositivos

| Dispositivo | Clasificación | Función |
|---|---|---|
| Teclado | Entrada | Introducir texto |
| Ratón | Entrada | Controlar el puntero |
| Escáner | Entrada | Digitalizar documentos |
| Micrófono | Entrada | Capturar sonido |
| Monitor | Salida | Mostrar información |
| Impresora | Salida | Imprimir documentos |
| Altavoces | Salida | Reproducir sonido |
| Pantalla táctil | Entrada/salida | Mostrar y recibir información |
| Disco SSD | Almacenamiento | Guardar datos |
| Tarjeta de red | Comunicación | Intercambiar datos en red |

## 9. Conceptos que conviene memorizar para el examen

| Conceptos | Diferencia fundamental |
|---|---|
| USB-C / USB 3.2 | Conector físico / estándar de transmisión |
| SATA / NVMe | Interfaz / protocolo |
| M.2 / PCIe | Formato físico / estándar de conexión |
| HDD / SSD | Almacenamiento magnético mecánico / memoria flash |
| NAS / SAN | Acceso a archivos / acceso a bloques |
| RAID 0 / RAID 1 | Distribución sin redundancia / espejo |
| OCR / OMR | Reconocimiento de caracteres / reconocimiento de marcas |
| LCD / OLED | Cristales líquidos con retroiluminación / píxeles autoemisivos |
| HDMI / VGA | Transmisión digital / transmisión analógica |
| DPI / PPM | Resolución de impresión / velocidad de impresión |

## 10. Resumen del tema

Los periféricos amplían las capacidades de los sistemas informáticos y permiten interactuar con el exterior.

Su clasificación principal distingue entre dispositivos de entrada, salida, entrada/salida, almacenamiento y comunicación.

La conectividad puede ser cableada, mediante tecnologías como USB, SATA, PCIe, HDMI, DisplayPort y Ethernet, o inalámbrica, mediante Wi-Fi, Bluetooth y NFC.

La administración de periféricos corresponde al sistema operativo, que utiliza controladores (*drivers*) para comunicarse con el hardware. Windows dispone del Administrador de dispositivos y Linux ofrece herramientas como `lsusb`, `lspci` y `lsblk`.

Las impresoras pueden ser de impacto, inyección de tinta, láser, térmicas o 3D. Las impresoras láser utilizan un proceso electrofotográfico y las de inyección proyectan gotas de tinta.

Los sistemas de almacenamiento incluyen discos HDD, unidades SSD, memorias flash, soportes ópticos y soluciones en red como NAS y SAN. RAID permite combinar discos para mejorar rendimiento o tolerancia a fallos, pero no sustituye a las copias de seguridad.

Los dispositivos de visualización muestran información mediante pantallas LCD, LED y OLED. Sus características principales incluyen resolución, frecuencia de actualización, tamaño, brillo y contraste.

Por último, los dispositivos de digitalización convierten información física o analógica en información digital. Entre ellos destacan los escáneres, lectores de códigos y cámaras. OCR reconoce caracteres, OMR detecta marcas y MICR reconoce caracteres mediante tinta magnética.

## 11. Preguntas de repaso

Estas preguntas son de elaboración propia para estudiar los conceptos del tema; no son preguntas oficiales del tribunal.

### Pregunta 1
¿Cuál de las siguientes tecnologías se utiliza principalmente para conectar discos duros y SSD SATA?

A. HDMI  
B. SATA  
C. Bluetooth  
D. NFC

**Respuesta correcta: B.** SATA es una interfaz de conexión utilizada para unidades de almacenamiento.

### Pregunta 2
¿Qué afirmación sobre USB-C es correcta?

A. Siempre ofrece 40 Gbit/s.  
B. Es un protocolo de almacenamiento.  
C. Es un tipo de conector físico.  
D. Solo transmite electricidad.

**Respuesta correcta: C.** USB-C describe el conector. Las capacidades dependen del estándar y del dispositivo.

### Pregunta 3
¿Qué tecnología permite reconocer texto en documentos escaneados?

A. OMR  
B. OCR  
C. MICR  
D. NFC

**Respuesta correcta: B.** OCR transforma caracteres presentes en imágenes en texto digital reconocible.

### Pregunta 4
¿Qué sistema de impresión utiliza tóner y un tambor fotosensible?

A. Inyección de tinta  
B. Matricial  
C. Láser  
D. Térmica directa

**Respuesta correcta: C.** La impresión láser utiliza un proceso electrofotográfico con tóner.

### Pregunta 5
¿Cuál es una característica de un disco SSD?

A. Utiliza platos magnéticos giratorios.  
B. No tiene partes mecánicas móviles.  
C. Necesita un cabezal de lectura.  
D. Solo funciona mediante USB.

**Respuesta correcta: B.** Los SSD utilizan memoria flash y no necesitan elementos mecánicos móviles.

### Pregunta 6
¿Qué nivel RAID distribuye datos sin proporcionar redundancia?

A. RAID 1  
B. RAID 5  
C. RAID 6  
D. RAID 0

**Respuesta correcta: D.** RAID 0 utiliza distribución o *striping*, pero no tolera el fallo de un disco.

### Pregunta 7
¿Qué diferencia principal existe entre NAS y SAN?

A. NAS trabaja con archivos y SAN con bloques.  
B. NAS solo funciona por USB.  
C. SAN solo almacena imágenes.  
D. No existe diferencia.

**Respuesta correcta: A.** NAS proporciona acceso a archivos; SAN proporciona almacenamiento a nivel de bloque.

### Pregunta 8
¿Qué herramienta de Windows permite consultar los dispositivos instalados?

A. Bloc de notas  
B. Administrador de dispositivos  
C. Explorador de archivos  
D. Paint

**Respuesta correcta: B.** El Administrador de dispositivos permite consultar y gestionar el hardware.

### Pregunta 9
¿Qué tecnología se utiliza habitualmente para conectar un teclado inalámbrico?

A. SATA  
B. PCIe  
C. Bluetooth  
D. DisplayPort

**Respuesta correcta: C.** Bluetooth permite conectar periféricos inalámbricos de corto alcance.

### Pregunta 10
¿Qué tecnología de pantalla utiliza píxeles autoemisivos?

A. LCD convencional  
B. OLED  
C. VGA  
D. CRT

**Respuesta correcta: B.** En OLED cada píxel genera su propia luz.

### Pregunta 11
¿Qué significa PPM en las especificaciones de una impresora?

A. Píxeles por monitor  
B. Páginas por minuto  
C. Puntos por milímetro  
D. Potencia por memoria

**Respuesta correcta: B.** PPM expresa la velocidad de impresión en páginas por minuto.

### Pregunta 12
¿Qué dispositivo permite digitalizar automáticamente varias hojas mediante un alimentador?

A. Monitor OLED  
B. Escáner con ADF  
C. Impresora matricial  
D. Unidad NVMe

**Respuesta correcta: B.** ADF significa *Automatic Document Feeder*, o alimentador automático de documentos.

### Pregunta 13
¿Qué tecnología detecta marcas en posiciones predeterminadas de formularios?

A. OCR  
B. OMR  
C. MICR  
D. USB

**Respuesta correcta: B.** OMR reconoce marcas, por ejemplo las respuestas seleccionadas en una hoja de examen.

### Pregunta 14
¿Cuál es la función principal de un controlador o driver?

A. Aumentar la memoria RAM.  
B. Permitir la comunicación entre sistema operativo y hardware.  
C. Crear copias de seguridad.  
D. Comprimir documentos.

**Respuesta correcta: B.** El controlador permite al sistema operativo utilizar y gestionar un dispositivo.

### Pregunta 15
¿Cuál de las siguientes afirmaciones sobre RAID es correcta?

A. RAID sustituye siempre a las copias de seguridad.  
B. RAID 0 duplica los datos.  
C. RAID puede proporcionar tolerancia a fallos según su nivel.  
D. Todos los niveles RAID tienen redundancia.

**Respuesta correcta: C.** Algunos niveles RAID proporcionan redundancia, pero RAID no sustituye a un backup.

## 12. Recursos para profundizar

- [USB-IF – documentación y estándares USB](https://www.usb.org/documents).
- [Bluetooth SIG – especificaciones Bluetooth](https://www.bluetooth.com/specifications/).
- [Wi-Fi Alliance – tecnologías Wi-Fi](https://www.wi-fi.org/discover-wi-fi).
- [NVM Express – especificaciones NVMe](https://www.nvmexpress.org/).
- [CUPS – sistema de impresión](https://www.cups.org/).
- [Microsoft Learn – controladores de Windows](https://learn.microsoft.com/es-es/windows-hardware/drivers/).

---
