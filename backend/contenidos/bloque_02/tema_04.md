## 1. Concepto y finalidad de un sistema operativo

Un **sistema operativo (SO)** es el conjunto de programas que gestiona los recursos físicos y lógicos de un equipo y proporciona servicios a los programas de aplicación. Actúa como intermediario entre el hardware, las aplicaciones y los usuarios.

Sus objetivos principales son:

- **Facilidad de uso:** ofrecer interfaces y servicios que permitan utilizar el equipo sin tener que controlar directamente el hardware.
- **Eficiencia:** aprovechar adecuadamente el procesador, la memoria, el almacenamiento y los dispositivos de entrada y salida.
- **Gestión y protección:** controlar el acceso a los recursos y aislar los procesos para evitar interferencias.
- **Evolución y extensibilidad:** permitir incorporar nuevos dispositivos, servicios y aplicaciones.

### 1.1. Funciones principales

1. **Gestión de procesos:** creación, planificación, ejecución, suspensión y finalización de procesos e hilos.
2. **Gestión de memoria:** asignación y liberación de memoria, protección entre procesos y memoria virtual.
3. **Gestión de archivos:** organización de la información en archivos y directorios; control de permisos y operaciones.
4. **Gestión de entrada/salida:** coordinación del acceso a periféricos mediante controladores o *drivers*.
5. **Gestión del almacenamiento:** administración de particiones, volúmenes y sistemas de archivos.
6. **Seguridad y protección:** autenticación, autorización, aislamiento, auditoría y aplicación de políticas.
7. **Interfaz de usuario:** proporciona interfaces gráficas (GUI) y de línea de comandos (CLI).
8. **Comunicación y redes:** ofrece servicios para la comunicación entre procesos y equipos.
9. **Detección y tratamiento de errores:** identifica fallos y facilita su recuperación o notificación.

### 1.2. Sistema operativo, núcleo y programas de sistema

Conviene distinguir:

- **Sistema operativo:** conjunto de componentes que proporciona la plataforma de ejecución y administra el equipo.
- **Núcleo o kernel:** parte central que opera con privilegios elevados y gestiona recursos esenciales, como procesos, memoria e interrupciones.
- **Programas de sistema:** utilidades que acompañan al sistema operativo, por ejemplo, herramientas de administración, terminales, servicios y utilidades de archivos.
- **Aplicaciones:** programas destinados a tareas del usuario que utilizan los servicios del sistema operativo.

No todas las utilidades que se distribuyen con un sistema forman parte del núcleo.

---

## 2. Características y elementos constitutivos

### 2.1. Modos de ejecución y protección

Los procesadores ofrecen distintos niveles de privilegio. En los sistemas de propósito general se suele distinguir:

- **Modo usuario:** las aplicaciones ejecutan instrucciones no privilegiadas y acceden a los recursos mediante servicios controlados.
- **Modo núcleo o supervisor:** el kernel ejecuta operaciones privilegiadas, administra hardware y atiende determinadas excepciones e interrupciones.

Cuando una aplicación necesita un servicio protegido —por ejemplo, leer un archivo— realiza una **llamada al sistema** (*system call*). El procesador transfiere el control al núcleo, que valida la petición y la atiende.

Esta separación ayuda a impedir que una aplicación ordinaria modifique libremente la memoria de otra o controle directamente dispositivos.

### 2.2. Componentes habituales

| Componente | Función |
|---|---|
| Núcleo (kernel) | Gestiona recursos fundamentales y ofrece servicios básicos. |
| Planificador | Decide qué proceso o hilo utiliza la CPU y durante cuánto tiempo. |
| Gestor de memoria | Administra memoria física y virtual. |
| Sistema de archivos | Organiza archivos, directorios, metadatos y permisos. |
| Controladores (drivers) | Permiten al SO comunicarse con dispositivos concretos. |
| Subsistema de entrada/salida | Coordina operaciones con periféricos y almacenamiento. |
| Servicios y demonios | Ejecutan tareas del sistema, a menudo en segundo plano. |
| Bibliotecas del sistema | Proporcionan funciones reutilizables a las aplicaciones. |
| Intérprete de comandos o shell | Permite interactuar mediante órdenes. |
| Interfaz gráfica | Facilita la interacción mediante ventanas, iconos, menús y controles. |

### 2.3. Interrupciones, excepciones y llamadas al sistema

- **Interrupción:** señal, normalmente procedente de un dispositivo o del temporizador, que requiere atención del procesador.
- **Excepción:** evento detectado durante la ejecución de una instrucción, como una operación no válida o un fallo de página.
- **Llamada al sistema:** mecanismo controlado por el que un programa solicita un servicio del núcleo.

El sistema operativo guarda el contexto necesario, ejecuta la rutina correspondiente y devuelve el control cuando procede.

### 2.4. Tipos de sistemas operativos

Las clasificaciones no son excluyentes: un mismo sistema puede pertenecer a varias categorías.

| Criterio | Tipos | Característica |
|---|---|---|
| Número de usuarios | Monousuario / multiusuario | Atiende a uno o varios usuarios con separación de recursos y permisos. |
| Tareas | Monotarea / multitarea | Ejecuta una tarea o permite mantener varias tareas activas. |
| Procesadores | Monoprocesador / multiprocesador | Utiliza uno o varios procesadores o núcleos. |
| Organización | Centralizado / distribuido | Gestiona un equipo o coordina recursos de varios equipos. |
| Respuesta | Tiempo compartido / tiempo real | Reparte CPU o responde dentro de plazos temporales definidos. |
| Interfaz | CLI / GUI | Interacción mediante comandos o interfaz gráfica. |
| Uso | General / servidor / embebido / móvil | Se orienta a distintos entornos y restricciones. |

**Tiempo real:** un sistema de tiempo real se diseña para responder dentro de límites temporales. No significa simplemente que sea rápido. En tiempo real estricto, incumplir un plazo puede considerarse un fallo del sistema; en tiempo real no estricto, el incumplimiento degrada el servicio, pero no necesariamente lo invalida.

### 2.5. Arranque del sistema

En un arranque típico de un ordenador:

1. El firmware **BIOS o UEFI** realiza comprobaciones e inicializa componentes.
2. Selecciona un dispositivo o entrada de arranque.
3. Ejecuta el cargador de arranque.
4. El cargador prepara y carga el núcleo.
5. El núcleo inicializa memoria, controladores y subsistemas.
6. Se inicia el proceso o gestor de servicios inicial.
7. Se activan servicios y, finalmente, la sesión de usuario o el entorno previsto.

**BIOS** es el firmware tradicional; **UEFI** es su sucesor moderno, con capacidades como arranque desde discos GPT y Secure Boot, según la configuración.

---

## 3. Gestión de procesos, memoria y concurrencia

### 3.1. Proceso e hilo

- **Programa:** conjunto de instrucciones almacenadas, todavía no necesariamente en ejecución.
- **Proceso:** instancia de un programa en ejecución, con recursos y espacio de direcciones propios.
- **Hilo (thread):** unidad de ejecución dentro de un proceso. Los hilos de un mismo proceso comparten, en general, su espacio de memoria y recursos, aunque cada hilo tiene su propio contexto de ejecución y pila.

Un proceso puede contener uno o varios hilos.

### 3.2. Estados de un proceso

Un modelo básico contempla:

- **Nuevo:** se está creando.
- **Preparado:** puede ejecutarse, pero espera turno de CPU.
- **En ejecución:** está utilizando la CPU.
- **Bloqueado o en espera:** espera un evento, como una operación de entrada/salida.
- **Terminado:** ha finalizado.

El sistema operativo realiza cambios de estado mediante el planificador y los mecanismos de sincronización.

### 3.3. Planificación de CPU

El **planificador** (*scheduler*) selecciona el proceso o hilo que obtiene la CPU.

Algoritmos habituales:

- **FCFS/FIFO:** se atiende en orden de llegada. Es sencillo, pero puede producir esperas largas.
- **SJF:** elige el trabajo más corto; requiere conocer o estimar su duración.
- **Prioridades:** selecciona según una prioridad asignada; puede producir inanición de tareas de baja prioridad.
- **Round Robin:** asigna un intervalo o *quantum* a cada proceso y rota entre ellos. Es habitual en sistemas de tiempo compartido.
- **Colas multinivel:** separan procesos por clases o prioridades.
- **Colas multinivel con realimentación:** permiten cambiar procesos de cola según su comportamiento.

**Conceptos de examen:**

- *Quantum:* intervalo máximo de CPU asignado a un proceso en una ronda de Round Robin.
- **Inanición:** espera indefinida o excesiva de un proceso porque otros reciben continuamente el recurso.
- **Inversión de prioridad:** una tarea de alta prioridad queda indirectamente retrasada por otra de menor prioridad que retiene un recurso.

### 3.4. Concurrencia y sincronización

La concurrencia aparece cuando varias tareas progresan durante periodos solapados. En un equipo multinúcleo pueden ejecutarse realmente en paralelo.

Problemas y mecanismos:

- **Condición de carrera:** el resultado depende del orden o momento en que se ejecutan operaciones concurrentes.
- **Sección crítica:** parte del programa que accede a un recurso compartido y debe protegerse.
- **Mutex:** mecanismo de exclusión mutua; permite que un hilo a la vez entre en una sección protegida.
- **Semáforo:** mecanismo de sincronización basado en un contador y operaciones atómicas.
- **Monitor:** abstracción que agrupa datos compartidos y operaciones sincronizadas.
- **Interbloqueo (*deadlock*):** varios procesos quedan bloqueados esperando recursos retenidos entre sí.

Las cuatro condiciones clásicas necesarias para que pueda producirse un interbloqueo son: exclusión mutua, retención y espera, ausencia de expropiación y espera circular.

### 3.5. Gestión de memoria

El sistema operativo administra la memoria física y ofrece a los procesos un espacio de direcciones virtual.

- **Memoria física:** RAM instalada en el equipo.
- **Memoria virtual:** abstracción que proporciona a cada proceso un espacio de direcciones independiente; se apoya en mecanismos de traducción de direcciones y, cuando procede, en almacenamiento secundario.
- **Paginación:** divide la memoria virtual en páginas y la memoria física en marcos de página.
- **Segmentación:** organiza el espacio en regiones lógicas de tamaño variable; puede combinarse con paginación.
- **Intercambio (*swapping*):** traslado de páginas o, en ciertos sistemas, de procesos entre memoria principal y almacenamiento secundario.
- **Fallo de página:** ocurre cuando se accede a una página que no está disponible en memoria física y debe resolverse mediante el gestor de memoria.

La memoria virtual no equivale simplemente a «usar el disco como RAM»: es un mecanismo de abstracción, aislamiento y gestión de direcciones.

---

## 4. Sistemas de archivos y almacenamiento

Un **sistema de archivos** define cómo se organizan, nombran, almacenan y recuperan los datos en un dispositivo o volumen.

### 4.1. Conceptos básicos

- **Archivo:** unidad lógica de información identificada por un nombre y asociada a metadatos.
- **Directorio o carpeta:** estructura que agrupa y organiza archivos y otros directorios.
- **Ruta:** ubicación de un elemento dentro de la jerarquía.
- **Metadatos:** información como tamaño, fechas, propietario, permisos y atributos.
- **Partición:** división lógica de un dispositivo de almacenamiento.
- **Volumen:** unidad lógica que puede contener un sistema de archivos.
- **Montaje:** incorporación de un sistema de archivos a la jerarquía de directorios.

### 4.2. Sistemas de archivos habituales

| Sistema de archivos | Entorno / características generales |
|---|---|
| FAT32 | Amplia compatibilidad; limita el tamaño máximo de un archivo a 4 GiB menos 1 byte. |
| exFAT | Diseñado para memorias flash y archivos grandes; frecuente en unidades extraíbles. |
| NTFS | Sistema habitual de Windows; admite permisos ACL, diario (*journaling*), compresión y otras funciones. |
| ext4 | Sistema muy extendido en Linux; utiliza *journaling* y admite grandes volúmenes y archivos. |
| XFS | Sistema de archivos de alto rendimiento, utilizado en entornos Linux. |
| Btrfs | Linux; incorpora funciones como instantáneas y gestión avanzada de volúmenes. |
| APFS | Sistema de archivos de Apple para sus plataformas modernas; optimizado para almacenamiento flash. |
| ISO 9660 | Estándar de sistema de archivos para soportes ópticos, como CD-ROM. |

No debe confundirse un sistema de archivos con una tabla de particiones. **MBR** y **GPT** describen esquemas de particionado; NTFS, FAT32 o ext4 son sistemas de archivos.

### 4.3. Permisos y control de acceso

Los permisos determinan qué operaciones puede realizar cada identidad sobre un recurso.

En Unix/Linux, el modelo tradicional distingue:

- **r (read):** lectura.
- **w (write):** escritura.
- **x (execute):** ejecución en archivos; en directorios, permite atravesarlos/acceder a sus entradas, sujeto a los demás permisos.

Se aplican a tres clases: propietario, grupo y otros.

En Windows, NTFS utiliza **listas de control de acceso (ACL)** para conceder o denegar permisos a usuarios y grupos. Los permisos efectivos pueden depender de la combinación de permisos explícitos, heredados y pertenencia a grupos.

---

## 5. Sistemas Windows

### 5.1. Características generales

**Microsoft Windows** es una familia de sistemas operativos desarrollada por Microsoft. Las versiones modernas de escritorio se basan en la arquitectura Windows NT.

Características generales:

- Interfaz gráfica integrada y herramientas de línea de comandos.
- Soporte multitarea, multiusuario y multiprocesador.
- Gestión de memoria virtual y protección entre procesos.
- Amplio ecosistema de controladores y aplicaciones.
- Integración con redes y servicios empresariales.
- Gestión de usuarios, grupos, permisos y políticas de seguridad.
- Compatibilidad con distintos sistemas de archivos y tecnologías de almacenamiento.

### 5.2. Arquitectura Windows NT

De forma simplificada, la arquitectura NT se organiza en dos grandes modos:

**Modo usuario**
- Aplicaciones.
- Servicios de Windows.
- Subsistemas y bibliotecas de usuario.
- Entornos de ejecución y componentes que solicitan servicios al sistema.

**Modo núcleo**
- **Executive:** reúne gestores y servicios del sistema, como gestión de objetos, procesos, memoria, seguridad y entrada/salida.
- **Kernel:** gestiona aspectos de bajo nivel, planificación, interrupciones y sincronización.
- **HAL (Hardware Abstraction Layer):** capa de abstracción del hardware.
- **Controladores:** módulos que permiten operar con dispositivos y otros componentes.

El aislamiento entre modo usuario y modo núcleo mejora la protección del sistema.

### 5.3. Elementos y herramientas de Windows

| Elemento | Función |
|---|---|
| Explorador de archivos | Administrar archivos, carpetas y unidades. |
| Administrador de tareas | Consultar procesos, rendimiento, usuarios y aplicaciones de inicio. |
| Administrador de dispositivos | Consultar y administrar dispositivos y controladores. |
| Administración de discos | Crear y gestionar particiones y volúmenes. |
| Visor de eventos | Consultar registros de aplicaciones, seguridad y sistema. |
| Servicios | Administrar servicios que se ejecutan en segundo plano. |
| Programador de tareas | Programar la ejecución de tareas. |
| Editor del Registro | Consultar y modificar la configuración almacenada en el Registro. |
| Firewall de Microsoft Defender | Filtrar tráfico de red según reglas. |
| Windows Update | Distribuir e instalar actualizaciones. |
| PowerShell | Automatización y administración mediante comandos y scripts. |
| Símbolo del sistema (cmd) | Intérprete de comandos tradicional de Windows. |

### 5.4. Usuarios, grupos y seguridad

- Las cuentas pueden ser locales o estar administradas por servicios de identidad de una organización.
- Los **grupos** permiten asignar permisos a conjuntos de usuarios.
- El **Control de cuentas de usuario (UAC)** solicita elevación o confirmación para determinadas operaciones administrativas.
- **Windows Defender / Microsoft Defender Antivirus** proporciona protección antimalware, según edición y configuración.
- **BitLocker** permite cifrar unidades compatibles.
- **NTFS ACL** define permisos sobre archivos y carpetas.
- **Directiva de grupo (Group Policy)** permite aplicar configuraciones a usuarios y equipos, especialmente en entornos administrados.

### 5.5. Sistemas de archivos y arranque

- **NTFS** es el sistema de archivos principal en instalaciones modernas de Windows.
- **FAT32** y **exFAT** se utilizan también en medios extraíbles y para interoperabilidad.
- El firmware UEFI puede utilizar una partición del sistema EFI para localizar cargadores de arranque.
- **BCD (Boot Configuration Data)** almacena información de configuración de arranque en Windows.

### 5.6. Herramientas de línea de comandos

Algunos comandos habituales:

| Comando | Uso general |
|---|---|
| `dir` | Lista archivos y directorios. |
| `cd` | Cambia el directorio actual. |
| `copy` | Copia archivos. |
| `move` | Mueve archivos. |
| `ipconfig` | Muestra configuración IP. |
| `ping` | Comprueba conectividad IP mediante mensajes ICMP. |
| `tracert` | Muestra la ruta hacia un destino. |
| `tasklist` | Lista procesos. |
| `taskkill` | Finaliza procesos según sus opciones y permisos. |
| `chkdsk` | Comprueba un volumen y, según opciones, intenta corregir errores. |
| `sfc` | Comprueba archivos protegidos del sistema. |
| `DISM` | Administra y repara imágenes de Windows. |
| `systeminfo` | Muestra información del sistema. |
| `Get-Process` | En PowerShell, consulta procesos. |
| `Get-Service` | En PowerShell, consulta servicios. |

Los comandos y sus opciones pueden variar entre versiones. Para tareas administrativas deben utilizarse con los permisos adecuados.

---

## 6. Sistemas Unix y Linux

### 6.1. Unix: origen y características

**Unix** es una familia histórica de sistemas operativos cuyo desarrollo comenzó en los Laboratorios Bell. Influyó decisivamente en el diseño de numerosos sistemas posteriores.

Características tradicionales:

- Multiusuario y multitarea.
- Sistema de archivos jerárquico.
- Uso de archivos y flujos para representar numerosos recursos.
- Herramientas pequeñas que pueden combinarse.
- Intérpretes de comandos y automatización mediante scripts.
- Interfaces de programación y utilidades ampliamente reutilizadas.

Existen sistemas Unix y sistemas **tipo Unix** (*Unix-like*). No todos los sistemas que se parecen a Unix están certificados como UNIX.

### 6.2. Linux: concepto y distribuciones

**Linux** es, en sentido estricto, el núcleo (*kernel*) libre de tipo Unix iniciado por Linus Torvalds. Un sistema completo suele combinar el núcleo Linux con herramientas, bibliotecas, instaladores y aplicaciones del proyecto GNU y de otros proyectos.

Una **distribución Linux** integra y mantiene esos componentes para ofrecer un sistema instalable y utilizable.

Distribuciones conocidas:

- Debian.
- Ubuntu.
- Fedora.
- Red Hat Enterprise Linux.
- openSUSE.
- Arch Linux.
- Linux Mint.

Las distribuciones pueden diferir en su gestor de paquetes, ciclo de versiones, herramientas de administración y orientación.

### 6.3. Arquitectura general de Linux

De forma simplificada:

1. **Hardware:** procesador, memoria, discos y periféricos.
2. **Núcleo Linux:** planificación, memoria, controladores, redes, sistema de archivos y llamadas al sistema.
3. **Bibliotecas:** facilitan el acceso de los programas a los servicios del sistema.
4. **Servicios y demonios:** procesos en segundo plano.
5. **Shell y utilidades:** herramientas de administración e interacción.
6. **Entorno gráfico y aplicaciones:** escritorio, ventanas y programas de usuario.

Linux es un núcleo monolítico modular: buena parte de sus servicios centrales se ejecutan en espacio de núcleo, y puede incorporar módulos cargables.

### 6.4. Estructura del sistema de archivos

Linux presenta una jerarquía única que parte de `/` (raíz). Los dispositivos y sistemas de archivos se incorporan mediante puntos de montaje.

Directorios frecuentes:

| Directorio | Contenido habitual |
|---|---|
| `/` | Raíz de la jerarquía. |
| `/bin` | Comandos esenciales; en muchas distribuciones está integrado con `/usr/bin`. |
| `/sbin` | Herramientas administrativas; puede integrarse con `/usr/sbin`. |
| `/etc` | Archivos de configuración del sistema. |
| `/home` | Directorios personales de usuarios. |
| `/root` | Directorio personal del administrador root. |
| `/usr` | Programas, bibliotecas y datos compartidos de usuario. |
| `/var` | Datos variables, como registros y colas. |
| `/tmp` | Archivos temporales. |
| `/dev` | Archivos de dispositivo. |
| `/proc` | Sistema de archivos virtual con información de procesos y del núcleo. |
| `/sys` | Información y configuración de dispositivos y del núcleo. |
| `/boot` | Archivos necesarios para el arranque. |
| `/mnt` y `/media` | Puntos de montaje habituales. |
| `/opt` | Software adicional, según la distribución. |

La organización exacta puede variar; algunas distribuciones utilizan enlaces simbólicos entre directorios tradicionales y `/usr`.

### 6.5. Usuarios, grupos y permisos

Linux distingue normalmente entre:

- **root:** cuenta administrativa con privilegios amplios.
- **Usuarios ordinarios:** cuentas con permisos limitados.
- **Grupos:** conjuntos de usuarios a los que se pueden asignar permisos.

El comando `sudo` permite ejecutar órdenes con privilegios elevados cuando la política del sistema lo autoriza.

Ejemplo de permisos:

```text
-rwxr-xr--
```

Interpretación:

- `-`: archivo ordinario.
- `rwx`: el propietario puede leer, escribir y ejecutar.
- `r--`: el grupo puede leer.
- `r--`: otros usuarios pueden leer.

Los permisos tradicionales se modifican, entre otros, con:

- `chmod`: cambia permisos.
- `chown`: cambia propietario.
- `chgrp`: cambia grupo.

Ejemplo conceptual: `chmod 754 archivo` asigna `rwx` al propietario, `r-x` al grupo y `r--` a otros.

Los sistemas Linux también pueden utilizar ACL y mecanismos adicionales de control de acceso.

### 6.6. Shell y comandos básicos

La **shell** es un intérprete de comandos. Entre las más conocidas están Bash, Zsh y Dash.

| Comando | Función |
|---|---|
| `pwd` | Muestra el directorio actual. |
| `ls` | Lista el contenido de un directorio. |
| `cd` | Cambia de directorio. |
| `mkdir` | Crea directorios. |
| `rmdir` | Elimina directorios vacíos. |
| `cp` | Copia archivos o directorios. |
| `mv` | Mueve o renombra elementos. |
| `rm` | Elimina archivos o directorios, según opciones. |
| `cat` | Muestra o concatena archivos. |
| `less` | Permite consultar texto página a página. |
| `grep` | Busca patrones en texto. |
| `find` | Busca archivos en una jerarquía. |
| `ps` | Muestra información de procesos. |
| `top` | Muestra procesos y uso de recursos de forma dinámica. |
| `kill` | Envía una señal a un proceso. |
| `df` | Muestra espacio de sistemas de archivos. |
| `du` | Estima el espacio ocupado por archivos y directorios. |
| `ip` | Consulta y administra interfaces y rutas de red. |
| `systemctl` | Administra unidades de systemd. |
| `journalctl` | Consulta registros de systemd-journald. |
| `man` | Muestra páginas del manual. |

### 6.7. Procesos y servicios en Linux

- `ps` muestra procesos.
- `top` y `htop` permiten observar procesos y recursos de manera interactiva.
- `kill` envía señales a procesos; no significa necesariamente «matar» de forma inmediata.
- `nice` y `renice` permiten influir en la prioridad de planificación.
- `systemd` es un sistema de inicio y gestor de servicios muy extendido, aunque no es el único existente.
- `systemctl` permite consultar, iniciar, detener o habilitar servicios gestionados por systemd.

### 6.8. Gestión de paquetes

Los gestores de paquetes automatizan la instalación, actualización y eliminación de software y resuelven dependencias.

| Familia / distribución | Herramienta habitual |
|---|---|
| Debian y Ubuntu | `apt` (con herramientas de bajo nivel como `dpkg`). |
| Fedora y RHEL | `dnf` (y `rpm` como formato/herramienta de bajo nivel). |
| openSUSE | `zypper` (paquetes RPM). |
| Arch Linux | `pacman`. |

No debe confundirse el gestor de paquetes con el formato del paquete: por ejemplo, APT administra repositorios y paquetes Debian, mientras que RPM es un formato y conjunto de herramientas utilizado por varias distribuciones.

### 6.9. Unix y Linux: semejanzas y diferencias

| Aspecto | Unix | Linux |
|---|---|---|
| Origen | Sistema histórico desarrollado en Bell Labs. | Núcleo iniciado por Linus Torvalds. |
| Naturaleza | Existen variantes comerciales, libres y certificadas. | Núcleo de código abierto, distribuido con licencias libres. |
| Distribución | Variantes como AIX, HP-UX y Solaris tienen historias propias. | Numerosas distribuciones integran el kernel con herramientas y aplicaciones. |
| Compatibilidad | Sigue principios e interfaces Unix; la certificación depende del producto. | Es tipo Unix y ofrece compatibilidad POSIX en gran medida, según componentes. |
| Uso | Servidores, sistemas empresariales y entornos especializados. | Servidores, escritorio, supercomputación, dispositivos embebidos y otros. |

---

## 7. Sistemas operativos para dispositivos móviles

### 7.1. Características de los sistemas móviles

Los sistemas operativos móviles se diseñan para teléfonos, tabletas y otros dispositivos con recursos, sensores y necesidades de interacción particulares.

Características habituales:

- Interfaz táctil y adaptación a distintos tamaños de pantalla.
- Gestión energética y optimización del consumo.
- Integración con sensores, cámara, GPS, conectividad móvil y otros componentes.
- Gestión del ciclo de vida de las aplicaciones.
- Modelo de permisos y aislamiento entre aplicaciones.
- Distribución e instalación de aplicaciones mediante tiendas o mecanismos controlados.
- Servicios de notificaciones, sincronización y conectividad.
- Medidas de protección de datos y autenticación.

### 7.2. Android

**Android** es una plataforma móvil impulsada por Google y basada en el núcleo Linux. El proyecto de código abierto principal es Android Open Source Project (AOSP); los dispositivos comerciales pueden incorporar componentes y servicios adicionales.

Capas simplificadas de Android:

1. **Kernel Linux:** gestión de procesos, memoria, seguridad, controladores y energía.
2. **Capa de abstracción de hardware (HAL):** interfaces para acceder a capacidades del hardware.
3. **Bibliotecas nativas y entorno de ejecución:** componentes del sistema y Android Runtime (ART).
4. **Framework de aplicaciones:** servicios y API para desarrollar aplicaciones.
5. **Aplicaciones:** aplicaciones del sistema y de terceros.

Conceptos relevantes:

- **ART:** entorno de ejecución de aplicaciones Android.
- **APK:** formato tradicional de paquete de aplicación Android.
- **AAB (Android App Bundle):** formato de publicación que permite generar APK optimizados para distintas configuraciones.
- **Sandbox:** aislamiento de aplicaciones y sus datos.
- **Permisos:** controlan el acceso a funciones y datos protegidos, como ubicación, cámara o micrófono.
- **Intent:** mecanismo de comunicación y solicitud de acciones entre componentes.
- **Activity:** componente asociado a una pantalla o interacción de usuario.
- **Service:** componente destinado a operaciones que no requieren una interfaz propia, sujeto a las restricciones de ejecución en segundo plano.
- **Broadcast Receiver:** componente que responde a determinados mensajes o eventos.
- **Content Provider:** mecanismo para gestionar y compartir datos estructurados entre aplicaciones.

Android utiliza un modelo de permisos y aislamiento basado, entre otros elementos, en identidades de aplicación y controles del sistema. Los detalles cambian entre versiones.

### 7.3. iOS y iPadOS

**iOS** es el sistema operativo móvil de Apple para iPhone. **iPadOS** es la plataforma derivada orientada a iPad.

Características generales:

- Integración estrecha entre hardware y software.
- Distribución de aplicaciones principalmente mediante App Store y otros mecanismos permitidos según región y versión.
- Modelo de aislamiento de aplicaciones (*sandbox*).
- Firma de código y controles de integridad.
- Permisos para el acceso a datos y sensores.
- Gestión de energía y ciclo de vida de aplicaciones.
- Servicios del ecosistema Apple.

En el desarrollo de aplicaciones se utilizan tecnologías y frameworks propios de Apple, como Swift, SwiftUI y UIKit.

### 7.4. Comparación Android e iOS

| Aspecto | Android | iOS |
|---|---|---|
| Responsable principal | Google y ecosistema AOSP/fabricantes. | Apple. |
| Base tecnológica | Núcleo Linux y componentes Android. | Arquitectura de sistemas Apple, derivada de tecnologías Darwin/XNU. |
| Dispositivos | Numerosos fabricantes y modelos. | Dispositivos Apple. |
| Distribución | Google Play y otros canales, según dispositivo y configuración. | App Store y mecanismos adicionales según normativa y región. |
| Desarrollo | Principalmente Kotlin/Java y herramientas Android. | Principalmente Swift y herramientas Apple. |
| Personalización | Varía por fabricante y versión; generalmente amplia. | Más controlada por Apple. |
| Seguridad | Sandbox, permisos, actualizaciones y controles de plataforma. | Sandbox, firma de código, permisos y controles de plataforma. |

La seguridad real depende también de la versión, las actualizaciones, la configuración, las aplicaciones instaladas y el fabricante.

### 7.5. Otros sistemas móviles

- **HarmonyOS:** plataforma de Huawei, con arquitectura y evolución propias según dispositivo y versión.
- **KaiOS:** sistema orientado a determinados teléfonos de prestaciones limitadas.
- **Windows Phone / Windows 10 Mobile:** plataformas históricas de Microsoft cuyo soporte general terminó; pueden aparecer como referencias históricas, no como alternativas móviles actuales de uso general.

---

## 8. Seguridad, mantenimiento y administración del sistema operativo

### 8.1. Principios de seguridad

- **Mínimo privilegio:** conceder a cada usuario o proceso solo los permisos necesarios.
- **Autenticación:** comprobar la identidad de quien accede.
- **Autorización:** determinar qué acciones puede realizar una identidad.
- **Auditoría:** registrar eventos relevantes para su revisión.
- **Actualización:** corregir vulnerabilidades y errores mediante parches.
- **Cifrado:** proteger la confidencialidad de los datos.
- **Aislamiento:** limitar la interacción entre procesos y aplicaciones.
- **Copias de seguridad:** permitir recuperar datos ante pérdidas o fallos.

### 8.2. Actualizaciones y parches

Las actualizaciones pueden incorporar:

- Correcciones de seguridad.
- Correcciones de errores.
- Mejoras de estabilidad y rendimiento.
- Nuevas funciones y compatibilidad.

En equipos administrados, las actualizaciones deben planificarse y probarse de acuerdo con las políticas de la organización.

### 8.3. Registros y monitorización

Los sistemas operativos mantienen registros para diagnosticar problemas, investigar incidentes y supervisar el funcionamiento.

- Windows: Visor de eventos y registros de Windows.
- Linux con systemd: `journalctl` y registros del sistema; otras distribuciones pueden utilizar servicios de registro diferentes.
- Monitorización: CPU, memoria, almacenamiento, red, procesos y servicios.

### 8.4. Copias de seguridad y recuperación

Una estrategia de respaldo debe considerar:

- Qué datos y configuraciones se protegen.
- Frecuencia de las copias.
- Retención y ubicación.
- Protección frente a accesos no autorizados.
- Pruebas periódicas de restauración.

Una copia de seguridad que nunca se ha probado no garantiza que la recuperación vaya a funcionar.

---

## 9. Conceptos que conviene diferenciar en el examen

| Conceptos | Diferencia |
|---|---|
| Programa / proceso | El programa es código; el proceso es una instancia en ejecución. |
| Proceso / hilo | El proceso dispone de recursos y espacio de direcciones; los hilos son unidades de ejecución dentro de él. |
| Multitarea / multiprocesamiento | Multitarea permite gestionar varias tareas; multiprocesamiento utiliza varios procesadores o núcleos. |
| Concurrencia / paralelismo | Concurrencia es progreso solapado; paralelismo es ejecución simultánea. |
| Núcleo / shell | El núcleo gestiona recursos; la shell interpreta órdenes. |
| Modo usuario / modo núcleo | Distinguen niveles de privilegio y acceso a operaciones protegidas. |
| Interrupción / llamada al sistema | La interrupción señala un evento; la llamada al sistema es una petición controlada de servicio al kernel. |
| Memoria virtual / memoria física | La virtual es una abstracción de direcciones; la física es la RAM instalada. |
| Partición / sistema de archivos | La partición divide un dispositivo; el sistema de archivos organiza los datos dentro de un volumen. |
| MBR / GPT | Son esquemas de particionado, no sistemas de archivos. |
| Unix / Linux | Unix es una familia histórica; Linux es un núcleo que forma parte de distribuciones tipo Unix. |
| Android / Linux | Android utiliza el núcleo Linux, pero incorpora arquitectura y componentes propios. |
| Android / AOSP | Android comercial puede incluir componentes adicionales; AOSP es el proyecto abierto de referencia. |
| Autenticación / autorización | La primera verifica quién eres; la segunda determina qué puedes hacer. |

---

## 10. Resumen del tema

1. El sistema operativo administra los recursos del equipo y ofrece servicios a las aplicaciones.
2. El **kernel** es el núcleo; la shell, las utilidades y la interfaz gráfica son componentes distintos.
3. La separación entre **modo usuario** y **modo núcleo** protege los recursos del sistema.
4. Las funciones principales incluyen gestión de procesos, memoria, archivos, entrada/salida, seguridad y redes.
5. Un proceso es una instancia en ejecución; un hilo es una unidad de ejecución dentro de un proceso.
6. El planificador asigna CPU. Round Robin utiliza un *quantum*; las prioridades pueden ocasionar inanición.
7. La memoria virtual proporciona espacios de direcciones y se apoya en mecanismos como la paginación.
8. Un sistema de archivos organiza archivos y directorios. NTFS es habitual en Windows y ext4 en Linux.
9. Windows moderno se basa en la arquitectura NT y ofrece herramientas como Administrador de tareas, Visor de eventos y PowerShell.
10. Linux es un núcleo; una distribución combina el núcleo con herramientas, bibliotecas y aplicaciones.
11. En Linux, `/` es la raíz del sistema de archivos; `/etc` contiene configuración y `/home` directorios personales habituales.
12. Android está basado en Linux y utiliza componentes como ART, el framework de aplicaciones y un modelo de permisos.
13. iOS e iPadOS son plataformas de Apple con integración hardware-software, aislamiento y firma de código.
14. Seguridad y administración incluyen mínimo privilegio, actualizaciones, registros, copias de seguridad y recuperación.

---

## 11. Glosario

- **ACL:** lista de control de acceso que define permisos asociados a usuarios o grupos.
- **ART:** entorno de ejecución de aplicaciones Android.
- **BIOS/UEFI:** firmware que inicializa el equipo y participa en el proceso de arranque.
- **Daemon/demonio:** proceso que presta servicios en segundo plano, especialmente en sistemas Unix/Linux.
- **Driver:** controlador que permite al sistema operativo utilizar un dispositivo.
- **Firmware:** software de bajo nivel integrado en un dispositivo.
- **GUI:** interfaz gráfica de usuario.
- **HAL:** capa de abstracción de hardware.
- **Hilo:** unidad de ejecución dentro de un proceso.
- **Kernel:** núcleo del sistema operativo.
- **Llamada al sistema:** mecanismo para solicitar servicios al núcleo.
- **Proceso:** programa en ejecución con recursos y contexto propios.
- **Quantum:** intervalo de CPU asignado en algoritmos como Round Robin.
- **Sandbox:** mecanismo de aislamiento de aplicaciones.
- **Shell:** intérprete de comandos.
- **Swap:** espacio de almacenamiento utilizado como apoyo a la gestión de memoria.
- **UEFI Secure Boot:** mecanismo que verifica componentes del proceso de arranque mediante firmas y políticas de confianza.
- **Volumen:** unidad lógica de almacenamiento que puede contener un sistema de archivos.

---

## 12. Test de autoevaluación

**Instrucciones:** selecciona una respuesta por pregunta. Las soluciones razonadas aparecen al final del test.

### Preguntas

**1. ¿Cuál es la función principal de un sistema operativo?**

A. Sustituir al procesador en la ejecución de instrucciones.  
B. Gestionar los recursos del equipo y ofrecer servicios a las aplicaciones.  
C. Convertir todos los programas en código máquina.  
D. Almacenar exclusivamente los archivos del usuario.

**2. ¿Qué componente constituye el núcleo del sistema operativo?**

A. Shell.  
B. Explorador de archivos.  
C. Kernel.  
D. Interfaz gráfica.

**3. ¿Qué caracteriza al modo núcleo?**

A. Ejecuta únicamente aplicaciones de usuario.  
B. Permite ejecutar operaciones privilegiadas del sistema.  
C. Impide gestionar interrupciones.  
D. Solo se utiliza en sistemas monousuario.

**4. ¿Qué diferencia existe entre proceso e hilo?**

A. Un proceso es siempre una instrucción y un hilo un archivo.  
B. Un hilo tiene necesariamente un sistema de archivos propio.  
C. Un proceso es una instancia en ejecución y puede contener varios hilos.  
D. No existe ninguna diferencia.

**5. ¿Qué algoritmo de planificación utiliza un intervalo de tiempo o quantum?**

A. Round Robin.  
B. SJF.  
C. FCFS exclusivamente.  
D. Planificación por lotes sin desalojo.

**6. ¿Cuál de las siguientes opciones describe una condición de carrera?**

A. Un archivo tiene permisos de solo lectura.  
B. El resultado depende del orden temporal de operaciones concurrentes.  
C. El sistema se inicia desde UEFI.  
D. Un proceso ha terminado correctamente.

**7. ¿Qué afirmación sobre la memoria virtual es correcta?**

A. Es exactamente lo mismo que la memoria caché.  
B. Es una abstracción que proporciona espacios de direcciones a los procesos.  
C. Solo existe cuando no hay memoria RAM.  
D. Es un tipo de sistema de archivos.

**8. ¿Cuál es el sistema de archivos habitual de las instalaciones modernas de Windows?**

A. ext4.  
B. APFS.  
C. NTFS.  
D. ISO 9660.

**9. ¿Qué herramienta de Windows permite consultar procesos y consumo de recursos?**

A. Administrador de tareas.  
B. Bloc de notas.  
C. Explorador de archivos exclusivamente.  
D. Paint.

**10. ¿Qué es Linux en sentido estricto?**

A. Una distribución concreta.  
B. Un sistema de archivos.  
C. Un núcleo de sistema operativo.  
D. Un entorno gráfico.

**11. ¿Qué directorio de Linux contiene habitualmente archivos de configuración del sistema?**

A. `/home`.  
B. `/etc`.  
C. `/tmp`.  
D. `/media`.

**12. ¿Qué comando Linux se utiliza habitualmente para cambiar permisos?**

A. `chmod`.  
B. `chdir`.  
C. `ipconfig`.  
D. `format`.

**13. ¿Qué afirmación sobre Android es correcta?**

A. Está basado en el núcleo Linux.  
B. Es una distribución de Windows.  
C. No utiliza aislamiento entre aplicaciones.  
D. Solo puede ejecutar aplicaciones web.

**14. ¿Qué componente de Android es el entorno de ejecución de aplicaciones en las versiones modernas?**

A. NTFS.  
B. ART.  
C. UEFI.  
D. PowerShell.

**15. ¿Qué diferencia hay entre autenticación y autorización?**

A. Son sinónimos.  
B. La autenticación comprueba la identidad y la autorización determina los permisos.  
C. La autorización comprueba la identidad y la autenticación asigna permisos.  
D. Ambas se ocupan exclusivamente del cifrado.

### Soluciones razonadas

| Pregunta | Respuesta | Explicación |
|---|---|---|
| 1 | **B** | El SO administra recursos y proporciona servicios a los programas. |
| 2 | **C** | El kernel es el núcleo del sistema operativo. |
| 3 | **B** | El modo núcleo permite ejecutar operaciones privilegiadas y gestionar recursos protegidos. |
| 4 | **C** | Un proceso es una instancia en ejecución y puede incluir varios hilos. |
| 5 | **A** | Round Robin reparte la CPU en intervalos denominados quantum. |
| 6 | **B** | Una condición de carrera depende del orden o momento de ejecución de operaciones concurrentes. |
| 7 | **B** | La memoria virtual ofrece un espacio de direcciones abstracto e independiente a cada proceso. |
| 8 | **C** | NTFS es el sistema de archivos habitual en Windows moderno. |
| 9 | **A** | El Administrador de tareas muestra procesos y métricas de rendimiento. |
| 10 | **C** | Linux designa estrictamente al núcleo; las distribuciones añaden el resto de componentes. |
| 11 | **B** | `/etc` contiene archivos de configuración del sistema. |
| 12 | **A** | `chmod` cambia los permisos tradicionales de archivos y directorios. |
| 13 | **A** | Android utiliza el núcleo Linux junto con capas y componentes propios. |
| 14 | **B** | ART es el entorno de ejecución de Android. |
| 15 | **B** | Autenticación verifica quién eres; autorización establece qué puedes hacer. |

---

## 13. Orientación para estudiar

Para preparar este tema de cara al examen TAI, conviene dominar especialmente:

1. **Funciones y componentes del sistema operativo:** kernel, shell, drivers, servicios y llamadas al sistema.
2. **Procesos e hilos:** estados, planificación, Round Robin, sincronización e interbloqueos.
3. **Memoria:** memoria virtual, paginación y fallos de página.
4. **Sistemas de archivos:** NTFS, FAT32, exFAT y ext4; permisos y diferencias entre partición y sistema de archivos.
5. **Windows:** arquitectura NT, herramientas administrativas, Registro, servicios, PowerShell y seguridad.
6. **Unix/Linux:** estructura de directorios, permisos, comandos, procesos, servicios y gestores de paquetes.
7. **Móviles:** arquitectura Android, ART, componentes de aplicaciones, AOSP y diferencias generales con iOS.

### Propuesta de repaso

- **Primera vuelta:** comprende las funciones del SO y aprende el vocabulario básico.
- **Segunda vuelta:** compara Windows y Linux mediante tablas y practica la interpretación de permisos y comandos.
- **Tercera vuelta:** repasa procesos, memoria, sistemas de archivos y arquitectura móvil.
- **Cierre:** realiza el test sin consultar los apuntes y revisa las explicaciones de los errores.
