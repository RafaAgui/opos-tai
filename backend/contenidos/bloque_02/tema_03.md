# Tema 3. Sistemas operativos

**Oposición:** Cuerpo de Técnicos Auxiliares de Informática de la Administración del Estado (TAI), C1  
**Bloque II:** Tecnología básica  
**Referencia:** Anexo V de la Resolución de 18 de diciembre de 2025 (BOE-A-2025-26262).

> **Enunciado oficial:** Sistemas operativos. Características técnicas y elementos constitutivos. Sistemas Windows. Sistemas Unix y Linux. Sistemas operativos para dispositivos móviles.

---

## 1. Concepto y finalidad de un sistema operativo

Un **sistema operativo (SO)** es el software básico que gestiona los recursos de un equipo y proporciona servicios a los programas de aplicación. Actúa como intermediario entre el hardware, las aplicaciones y las personas usuarias.

Sin sistema operativo, cada aplicación tendría que gestionar directamente el procesador, la memoria, los dispositivos y el almacenamiento. El sistema operativo ofrece una abstracción común y coordina el uso de esos recursos.

### 1.1. Objetivos principales

- **Comodidad:** facilita el uso del equipo y la ejecución de aplicaciones.
- **Eficiencia:** aprovecha los recursos disponibles.
- **Gestión:** distribuye y controla CPU, memoria, almacenamiento y dispositivos.
- **Protección:** aísla procesos y controla el acceso a recursos.
- **Evolución:** permite incorporar hardware y servicios nuevos sin que cada aplicación tenga que conocer todos sus detalles.

### 1.2. Funciones esenciales

| Función | Descripción |
|---|---|
| Gestión de procesos | Crea, planifica, ejecuta y finaliza procesos. |
| Gestión de memoria | Asigna y libera memoria; proporciona memoria virtual y protección. |
| Sistema de archivos | Organiza archivos y directorios y controla permisos. |
| Entrada/salida | Coordina la comunicación con periféricos mediante controladores. |
| Seguridad | Gestiona usuarios, autenticación, permisos y auditoría. |
| Interfaz | Permite la interacción mediante interfaz gráfica o línea de comandos. |
| Red | Ofrece servicios para la comunicación entre equipos. |
| Errores y rendimiento | Detecta errores, registra sucesos y supervisa recursos. |

---

## 2. Características técnicas y clasificación

Los sistemas operativos pueden clasificarse atendiendo a distintos criterios. No son categorías excluyentes: un mismo sistema puede pertenecer a varias.

### 2.1. Según el número de usuarios

- **Monousuario:** diseñado para que un usuario utilice el sistema en un momento dado. Algunos sistemas de escritorio actuales permiten varias cuentas, por lo que la distinción histórica no siempre describe bien su funcionamiento.
- **Multiusuario:** permite que varias personas utilicen los recursos del sistema, simultáneamente o mediante sesiones independientes. Unix y Linux son ejemplos característicos.

### 2.2. Según el número de tareas

- **Monotarea:** solo ejecuta una tarea principal cada vez.
- **Multitarea:** permite que varios procesos progresen de forma concurrente, alternando el uso de la CPU o ejecutándose en distintos núcleos.

La multitarea puede ser:
- **Cooperativa:** el proceso cede voluntariamente el control.
- **Preventiva o apropiativa:** el sistema operativo puede interrumpir un proceso y asignar la CPU a otro.

Los sistemas modernos de escritorio y móviles emplean planificación preventiva.

### 2.3. Según el número de procesadores

- **Monoprocesador:** el sistema dispone de un único procesador lógico de ejecución, aunque pueda tener varios núcleos según la terminología utilizada.
- **Multiprocesador:** el sistema operativo gestiona varios procesadores o núcleos.
- **Sistemas multinúcleo:** varios núcleos de ejecución se integran en un mismo chip.

Un sistema operativo multiprocesador debe coordinar la planificación, la memoria compartida, la sincronización y el acceso concurrente a dispositivos.

### 2.4. Según el ámbito de uso

- **Escritorio:** Windows, macOS y distribuciones Linux.
- **Servidor:** Windows Server y distintas distribuciones Linux o sistemas Unix.
- **Móvil:** Android e iOS.
- **Empotrado:** integrado en dispositivos con funciones específicas, como equipos industriales, routers o sistemas de control.
- **Tiempo real:** ofrece respuestas dentro de plazos temporales definidos. Puede ser de tiempo real duro (incumplir el plazo se considera un fallo) o blando (el incumplimiento degrada el servicio).

### 2.5. Otras características técnicas

- **Portabilidad:** facilidad para adaptar el sistema a distintas arquitecturas.
- **Escalabilidad:** capacidad para crecer en recursos o carga.
- **Fiabilidad:** capacidad para funcionar correctamente durante periodos prolongados.
- **Seguridad:** mecanismos de autenticación, autorización, aislamiento y auditoría.
- **Compatibilidad:** soporte de aplicaciones, formatos y dispositivos.
- **Rendimiento:** uso eficiente de CPU, memoria y entrada/salida.

---

## 3. Elementos constitutivos y arquitectura

Un sistema operativo suele organizarse en componentes especializados que colaboran entre sí.

### 3.1. Núcleo o kernel

El **núcleo** es la parte central del sistema operativo. Se ejecuta con privilegios elevados y gestiona los recursos fundamentales.

Entre sus responsabilidades se encuentran:
- Planificación de procesos e hilos.
- Gestión de memoria.
- Comunicación entre procesos.
- Gestión de interrupciones y excepciones.
- Coordinación de entrada/salida.
- Aplicación de mecanismos básicos de protección.

El kernel ofrece servicios a los programas mediante **llamadas al sistema** (*system calls*).

### 3.2. Modo usuario y modo núcleo

Los procesadores modernos ofrecen distintos niveles de privilegio.

- **Modo usuario:** las aplicaciones tienen permisos limitados y no pueden ejecutar directamente instrucciones privilegiadas ni acceder libremente al hardware.
- **Modo núcleo:** el kernel puede ejecutar operaciones privilegiadas y gestionar los recursos del sistema.

Cuando una aplicación necesita un servicio protegido, realiza una llamada al sistema. El procesador transfiere el control al kernel, que valida la petición y devuelve el resultado.

**Idea clave:** esta separación limita los daños que puede causar un fallo de una aplicación y constituye una base de la protección del sistema.

### 3.3. Tipos de arquitectura del kernel

| Arquitectura | Características | Ventajas y limitaciones |
|---|---|---|
| Monolítica | Muchos servicios del SO se ejecutan dentro del espacio del núcleo. | Buen rendimiento potencial; un fallo en un componente privilegiado puede afectar al sistema. |
| Microkernel | Mantiene en el núcleo las funciones esenciales y desplaza otros servicios a procesos separados. | Mayor modularidad y aislamiento; puede introducir costes de comunicación. |
| Híbrida | Combina decisiones de ambos enfoques. | Busca equilibrar rendimiento y modularidad. |

Ejemplos orientativos:
- Linux utiliza un kernel monolítico con módulos cargables.
- Windows NT se suele describir como una arquitectura híbrida.
- MINIX 3 es un ejemplo conocido de diseño microkernel.

No debe confundirse **modularidad** con microkernel: un kernel monolítico puede admitir módulos.

### 3.4. Shell e interfaz de usuario

La **shell** es el intérprete que permite ejecutar órdenes y utilizar servicios del sistema. Puede ser:
- De línea de comandos: Bash, Zsh, PowerShell o CMD.
- Gráfica: entorno de escritorio, ventanas, menús y explorador de archivos.

La shell no es el núcleo. Es una interfaz que solicita servicios al sistema operativo.

### 3.5. Controladores de dispositivos

Un **controlador** (*driver*) permite al sistema operativo comunicarse con un dispositivo concreto. Traduce operaciones generales —por ejemplo, imprimir o leer datos— a instrucciones que entiende el hardware.

Funciones:
- Inicializar y configurar el dispositivo.
- Gestionar peticiones de entrada/salida.
- Atender interrupciones.
- Comunicar errores y estados.

Un dispositivo puede no funcionar correctamente si falta el controlador adecuado o existe una incompatibilidad.

### 3.6. Otros componentes

- **Gestor de procesos:** administra procesos e hilos.
- **Gestor de memoria:** controla memoria física y virtual.
- **Sistema de archivos:** organiza datos persistentes.
- **Subsistema de entrada/salida:** coordina dispositivos y operaciones.
- **Servicios o demonios:** procesos en segundo plano que ofrecen funciones del sistema.
- **Utilidades:** herramientas de configuración, diagnóstico y mantenimiento.

---

## 4. Procesos, hilos y planificación

### 4.1. Programa, proceso e hilo

- **Programa:** conjunto de instrucciones almacenadas en un archivo.
- **Proceso:** programa en ejecución, con su espacio de direcciones y recursos asociados.
- **Hilo (thread):** unidad de ejecución dentro de un proceso. Los hilos de un mismo proceso comparten gran parte de sus recursos y memoria.

Un programa puede originar varios procesos y un proceso puede contener varios hilos.

### 4.2. Estados de un proceso

Modelo simplificado:

1. **Nuevo:** se está creando.
2. **Preparado:** puede ejecutarse, pero espera CPU.
3. **En ejecución:** está utilizando CPU.
4. **Bloqueado o en espera:** espera un evento, como una operación de entrada/salida.
5. **Terminado:** ha finalizado.

El planificador decide qué proceso preparado recibe tiempo de CPU.

### 4.3. Algoritmos de planificación

| Algoritmo | Funcionamiento | Característica |
|---|---|---|
| FCFS/FIFO | Atiende por orden de llegada. | Sencillo, pero puede perjudicar a procesos cortos. |
| SJF | Selecciona el trabajo más corto. | Puede reducir la espera media; necesita estimar la duración. |
| Round Robin | Asigna a cada proceso un intervalo o quantum. | Adecuado para sistemas interactivos. |
| Prioridades | Ejecuta según prioridad. | Puede producir inanición de prioridades bajas. |
| Colas multinivel | Mantiene distintas colas con políticas diferentes. | Permite tratar de forma diferenciada tipos de procesos. |

**Inanición:** un proceso puede esperar indefinidamente si otros con mayor prioridad ocupan continuamente la CPU. Una solución posible es el *envejecimiento* (*aging*), que aumenta gradualmente su prioridad.

### 4.4. Interrupciones y cambio de contexto

Una **interrupción** es una señal que requiere atención del procesador. Puede proceder de hardware —por ejemplo, un dispositivo— o de mecanismos internos del procesador.

El **cambio de contexto** consiste en guardar el estado de ejecución de un proceso o hilo y restaurar el de otro. Permite alternar la ejecución, aunque tiene un coste.

---

## 5. Gestión de memoria

El sistema operativo administra la memoria principal y proporciona a los procesos un espacio de direcciones protegido.

### 5.1. Memoria física y memoria virtual

- **Memoria física:** RAM instalada en el equipo.
- **Memoria virtual:** mecanismo que ofrece a cada proceso un espacio de direcciones virtual, que el sistema traduce a memoria física o, cuando procede, a almacenamiento secundario.

La memoria virtual facilita el aislamiento, la protección y la ejecución de programas cuyo espacio de direcciones no tiene que coincidir directamente con la RAM física.

### 5.2. Paginación

La paginación divide:
- El espacio virtual en **páginas**.
- La memoria física en **marcos** o *frames*.

Las tablas de páginas permiten traducir direcciones virtuales a físicas. La **TLB** (*Translation Lookaside Buffer*) es una caché que acelera esas traducciones.

Cuando una página necesaria no está en RAM se produce un **fallo de página**. El sistema debe resolverlo; puede requerir leer datos del almacenamiento secundario.

### 5.3. Intercambio y archivo de paginación

- En Linux se utiliza habitualmente una partición o archivo de **swap**.
- En Windows se utiliza un **archivo de paginación** (*pagefile*).

No equivalen a ampliar físicamente la RAM: el almacenamiento secundario es mucho más lento que la memoria principal.

### 5.4. Fragmentación

- **Fragmentación interna:** se desperdicia espacio dentro de una unidad asignada.
- **Fragmentación externa:** existen huecos libres dispersos que dificultan asignar un bloque contiguo.

La paginación evita la necesidad de asignar a cada proceso una región física contigua, aunque tiene otros costes.

---

## 6. Sistemas de archivos

Un sistema de archivos define cómo se organizan, nombran, almacenan y recuperan los datos.

### 6.1. Conceptos básicos

- **Archivo:** unidad lógica de información.
- **Directorio o carpeta:** estructura que agrupa archivos y otros directorios.
- **Ruta:** ubicación de un elemento dentro del sistema de archivos.
- **Metadatos:** información sobre el archivo, como tamaño, fechas, propietario y permisos.
- **Permisos:** reglas que determinan quién puede leer, modificar o ejecutar un elemento.

### 6.2. Sistemas de archivos habituales

| Sistema | Entorno habitual | Características generales |
|---|---|---|
| FAT32 | Medios extraíbles y compatibilidad amplia. | Muy compatible; limita el tamaño máximo de un archivo a 4 GiB menos 1 byte. |
| exFAT | Memorias flash y discos externos. | Diseñado para almacenamiento extraíble y archivos grandes. |
| NTFS | Windows. | Permisos, diario (*journaling*), cuotas y otras funciones. |
| ext4 | Linux. | Sistema de archivos con diario, ampliamente utilizado. |
| XFS | Linux y servidores. | Adecuado para sistemas de archivos y ficheros grandes. |
| APFS | Sistemas Apple actuales. | Diseñado para almacenamiento moderno, con funciones como snapshots y cifrado. |

**Journaling:** registro de operaciones o metadatos que ayuda a recuperar la coherencia del sistema de archivos tras determinados fallos. No sustituye a las copias de seguridad.

### 6.3. Rutas en Windows y Unix/Linux

Windows suele utilizar letras de unidad y barra inversa:

```text
C:\Usuarios\Ana\Documentos\informe.txt
```

Unix y Linux utilizan una única jerarquía que parte de `/`:

```text
/home/ana/documentos/informe.txt
```

En Unix/Linux:
- `/` es la raíz.
- `/home` suele contener directorios personales.
- `/etc` contiene configuración del sistema.
- `/var` almacena datos variables, como registros.
- `/tmp` se utiliza para archivos temporales.
- `/usr` contiene gran parte de programas y recursos del sistema.

La organización concreta puede variar entre distribuciones.

---

## 7. Usuarios, permisos y seguridad

### 7.1. Identificación, autenticación y autorización

- **Identificación:** declarar quién se es.
- **Autenticación:** demostrar esa identidad.
- **Autorización:** determinar qué acciones puede realizar esa identidad.

Ejemplo: una persona introduce su nombre de usuario (identificación), acredita su identidad (autenticación) y el sistema comprueba si puede modificar un archivo (autorización).

### 7.2. Principio de mínimo privilegio

Cada usuario, proceso o servicio debe disponer únicamente de los permisos necesarios para realizar su función. Reduce el impacto de errores y compromisos de seguridad.

### 7.3. Permisos Unix/Linux

Los permisos tradicionales se agrupan para:
- **u:** propietario (*user*).
- **g:** grupo.
- **o:** otros.

Permisos:
- **r:** lectura.
- **w:** escritura.
- **x:** ejecución.

Ejemplo:

```text
-rwxr-x---
```

Interpretación:
- Propietario: lectura, escritura y ejecución.
- Grupo: lectura y ejecución.
- Otros: ningún permiso.

Los permisos pueden expresarse en octal:
- `r = 4`
- `w = 2`
- `x = 1`

Por tanto, `chmod 750 archivo` asigna:
- Propietario: `7` = rwx.
- Grupo: `5` = r-x.
- Otros: `0` = ---.

### 7.4. Seguridad del sistema operativo

Medidas habituales:
- Actualizaciones y correcciones de seguridad.
- Contraseñas robustas y autenticación multifactor cuando esté disponible.
- Cuentas sin privilegios administrativos para el uso cotidiano.
- Cortafuegos y control de servicios.
- Cifrado de almacenamiento.
- Registro y supervisión de eventos.
- Copias de seguridad verificadas.
- Protección frente a malware.
- Bloqueo de sesión y políticas de acceso.

---

## 8. Sistemas Windows

### 8.1. Evolución y familias

Windows es una familia de sistemas operativos desarrollada por Microsoft. En el ámbito de escritorio, las versiones modernas se basan en la arquitectura Windows NT.

Algunos hitos históricos:
- Windows 3.x: entorno gráfico sobre MS-DOS.
- Windows 95: gran difusión del escritorio Windows de 32 bits.
- Windows NT: nueva arquitectura con enfoque profesional, seguridad y portabilidad.
- Windows 2000 y XP: consolidación de la línea NT en escritorio y empresa.
- Windows 7, 8, 10 y 11: evolución de la familia moderna.

**Windows Server** es la línea orientada a servicios de servidor, administración centralizada y entornos empresariales.

### 8.2. Características generales

- Interfaz gráfica y línea de comandos.
- Multitarea y multiproceso.
- Gestión de usuarios, grupos y permisos.
- Sistema de archivos NTFS, además de soporte para otros formatos.
- Plug and Play y controladores.
- Redes y servicios de directorio en entornos compatibles.
- Registro de Windows.
- Herramientas administrativas y de diagnóstico.

### 8.3. Arquitectura Windows NT

De forma simplificada, se distinguen:

- **Modo usuario:** aplicaciones, subsistemas y servicios que se ejecutan con privilegios limitados.
- **Modo núcleo:** componentes privilegiados que gestionan recursos y operaciones fundamentales.

Elementos importantes:
- **HAL (Hardware Abstraction Layer):** capa de abstracción del hardware.
- **Kernel:** funciones esenciales de bajo nivel, como planificación y sincronización.
- **Executive:** conjunto de gestores del sistema, como procesos, memoria, entrada/salida y seguridad.
- **Controladores:** permiten operar con dispositivos.
- **Servicios:** procesos que ofrecen funcionalidades en segundo plano.
- **Subsistema gráfico:** gestiona ventanas, entrada y representación gráfica.

### 8.4. Registro de Windows

El **Registro de Windows** es una base de datos jerárquica que almacena configuración del sistema operativo, hardware, usuarios y aplicaciones.

Claves raíz conocidas:
- `HKEY_LOCAL_MACHINE (HKLM)`: configuración del equipo.
- `HKEY_CURRENT_USER (HKCU)`: configuración del usuario actual.
- `HKEY_CLASSES_ROOT (HKCR)`: información de asociaciones y clases.
- `HKEY_USERS (HKU)`: perfiles de usuarios.
- `HKEY_CURRENT_CONFIG (HKCC)`: perfil de hardware actual.

La edición incorrecta del registro puede provocar fallos. Debe modificarse con cautela y siguiendo procedimientos documentados.

### 8.5. Herramientas de administración y diagnóstico

| Herramienta | Función |
|---|---|
| Administrador de tareas | Procesos, rendimiento, aplicaciones de inicio y usuarios. |
| Administrador de dispositivos | Hardware y controladores. |
| Administración de discos | Particiones y volúmenes. |
| Visor de eventos | Registros de sistema, seguridad y aplicaciones. |
| Servicios | Gestión de servicios de Windows. |
| Monitor de recursos | Uso detallado de CPU, memoria, disco y red. |
| Configuración / Panel de control | Configuración del sistema. |
| PowerShell | Administración y automatización mediante comandos y scripts. |
| CMD | Intérprete de comandos tradicional. |

Comandos habituales:

```powershell
ipconfig
```
Muestra la configuración IP.

```powershell
Get-Process
```
Lista procesos mediante PowerShell.

```powershell
Get-Service
```
Muestra servicios.

```powershell
Get-ComputerInfo
```
Obtiene información del equipo.

```cmd
chkdsk
```
Comprueba el sistema de archivos y el estado lógico del volumen, con opciones adicionales.

```cmd
sfc /scannow
```
Comprueba archivos protegidos del sistema y trata de reparar problemas.

### 8.6. Dominio y Active Directory

En entornos empresariales, Windows puede integrarse en un **dominio** administrado centralmente.

**Active Directory Domain Services (AD DS)** es un servicio de directorio que permite administrar de forma centralizada:
- Usuarios y grupos.
- Equipos.
- Autenticación y políticas.
- Recursos de red.

Conceptos:
- **Dominio:** conjunto lógico de objetos administrados.
- **Controlador de dominio:** servidor que ejecuta AD DS y participa en la autenticación.
- **Directiva de grupo (GPO):** conjunto de configuraciones aplicables a usuarios y equipos.
- **LDAP:** protocolo utilizado para acceder a servicios de directorio.
- **Kerberos:** protocolo de autenticación utilizado habitualmente en dominios Windows.

No debe confundirse Active Directory con el sistema de archivos NTFS: cumplen funciones diferentes.

---

## 9. Sistemas Unix y Linux

### 9.1. Unix

Unix es una familia histórica de sistemas operativos multiusuario y multitarea, desarrollada inicialmente en los laboratorios Bell en la década de 1970.

Principios tradicionalmente asociados a Unix:
- Herramientas pequeñas que realizan tareas concretas.
- Composición de herramientas mediante tuberías.
- Uso de archivos y flujos para representar información y dispositivos.
- Entorno multiusuario y multitarea.
- Interfaces de texto y herramientas de automatización.

Existen sistemas Unix comerciales y sistemas de tipo Unix (*Unix-like*).

### 9.2. Linux

Linux es un kernel creado por Linus Torvalds en 1991. En el uso habitual, se llama Linux a sistemas completos que combinan el kernel Linux con herramientas, bibliotecas y aplicaciones, muchas de ellas procedentes del proyecto GNU y de otros proyectos.

Una **distribución** integra esos componentes y ofrece un sistema instalable y administrable.

Ejemplos:
- Ubuntu.
- Debian.
- Fedora.
- Red Hat Enterprise Linux.
- SUSE Linux Enterprise.
- Linux Mint.
- Arch Linux.

### 9.3. Características de Linux

- Multiusuario y multitarea.
- Soporte multiprocesador y multinúcleo.
- Código abierto en sus componentes principales.
- Amplia variedad de distribuciones.
- Sistema de permisos y usuarios.
- Potentes herramientas de línea de comandos.
- Uso extendido en servidores, supercomputación, nube y sistemas empotrados.
- Soporte de múltiples sistemas de archivos.

### 9.4. Estructura general

- **Kernel Linux:** núcleo del sistema.
- **Bibliotecas:** ofrecen funciones reutilizables a las aplicaciones.
- **Shell:** interpreta órdenes.
- **Utilidades:** herramientas de administración y uso.
- **Sistema de inicio:** arranca y supervisa servicios. En muchas distribuciones se utiliza systemd.
- **Entorno gráfico:** puede incluir GNOME, KDE Plasma u otros.

### 9.5. Comandos básicos

| Comando | Función |
|---|---|
| `pwd` | Muestra el directorio actual. |
| `ls` | Lista archivos y directorios. |
| `cd` | Cambia de directorio. |
| `mkdir` | Crea un directorio. |
| `rmdir` | Elimina un directorio vacío. |
| `cp` | Copia archivos o directorios. |
| `mv` | Mueve o renombra. |
| `rm` | Elimina archivos o directorios. |
| `cat` | Muestra o concatena archivos. |
| `less` | Consulta archivos página a página. |
| `grep` | Busca patrones de texto. |
| `find` | Busca archivos y directorios. |
| `chmod` | Cambia permisos. |
| `chown` | Cambia propietario y grupo. |
| `ps` | Muestra procesos. |
| `top` | Muestra procesos y uso de recursos en tiempo real. |
| `kill` | Envía una señal a un proceso. |
| `df` | Muestra espacio de sistemas de archivos. |
| `du` | Estima el espacio ocupado por archivos y directorios. |
| `free` | Muestra información de memoria. |
| `ip` | Consulta y configura interfaces y rutas de red. |
| `systemctl` | Administra servicios y unidades en sistemas con systemd. |
| `journalctl` | Consulta el diario de systemd. |
| `sudo` | Ejecuta una orden con privilegios autorizados. |

Ejemplos:

```bash
pwd
ls -la
ps aux
df -h
free -h
systemctl status ssh
```

### 9.6. Usuarios y permisos

Linux distingue entre usuarios normales y el usuario administrador `root`.

- `root` tiene privilegios administrativos amplios.
- `sudo` permite ejecutar órdenes con privilegios elevados según la configuración.
- Los grupos permiten asignar permisos compartidos.
- Los permisos clásicos son lectura, escritura y ejecución.

Es recomendable utilizar una cuenta ordinaria y elevar privilegios solo cuando sea necesario.

### 9.7. Gestores de paquetes

Las distribuciones utilizan gestores de paquetes para instalar, actualizar y eliminar software y resolver dependencias.

| Familia / distribución | Herramienta habitual |
|---|---|
| Debian, Ubuntu | `apt` |
| Fedora y sistemas relacionados | `dnf` |
| Sistemas tradicionales basados en Red Hat | `rpm` (gestión de paquetes RPM; normalmente se combina con un gestor de alto nivel) |
| Arch Linux | `pacman` |
| SUSE | `zypper` |

Ejemplos:

```bash
sudo apt update
sudo apt upgrade
```

`apt update` actualiza la información de paquetes; `apt upgrade` instala las actualizaciones disponibles.

### 9.8. Unix frente a Linux

| Aspecto | Unix | Linux |
|---|---|---|
| Origen | Sistema desarrollado en Bell Labs. | Kernel iniciado por Linus Torvalds. |
| Licencia | Depende del sistema Unix concreto; existen versiones comerciales y libres. | Kernel con licencia GPLv2, junto con componentes con distintas licencias. |
| Distribución | Sistemas concretos, a menudo ligados a fabricantes. | Numerosas distribuciones. |
| Ejemplos | AIX, HP-UX, Solaris (según certificación y versión). | Debian, Ubuntu, Fedora, RHEL. |
| Relación | Familia histórica de sistemas. | Sistema de tipo Unix; no todo Linux es Unix certificado. |

**Importante:** Linux es de tipo Unix, pero no debe afirmarse que todas las distribuciones Linux sean Unix certificados.

---

## 10. Sistemas operativos para dispositivos móviles

Los sistemas operativos móviles están diseñados para teléfonos, tabletas y otros dispositivos portátiles. Deben gestionar recursos limitados, sensores, conectividad inalámbrica, pantallas táctiles y consumo energético.

### 10.1. Características específicas

- Interfaz táctil y adaptación a diferentes tamaños de pantalla.
- Gestión de batería y consumo energético.
- Conectividad móvil, Wi-Fi, Bluetooth y NFC.
- Integración con GPS, cámara, micrófono y sensores.
- Gestión del ciclo de vida de las aplicaciones.
- Aislamiento de aplicaciones (*sandboxing*).
- Permisos para acceder a cámara, ubicación, contactos y otros recursos.
- Distribución y actualización de aplicaciones mediante tiendas y mecanismos del fabricante.

### 10.2. Android

Android es una plataforma móvil basada en el kernel Linux y desarrollada por Google y el ecosistema Android.

Arquitectura simplificada:
1. **Kernel Linux:** gestión de procesos, memoria, seguridad y controladores.
2. **Capa de abstracción de hardware (HAL):** interfaces para acceder a capacidades del hardware.
3. **Bibliotecas nativas y entorno de ejecución:** componentes del sistema y Android Runtime (ART).
4. **Framework de aplicaciones:** servicios y APIs que utilizan las aplicaciones.
5. **Aplicaciones:** aplicaciones del sistema y de terceros.

Conceptos:
- **APK:** formato tradicional de paquete de aplicación Android.
- **AAB:** formato de publicación utilizado por Google Play para generar APK adaptados.
- **ART:** entorno de ejecución de aplicaciones Android.
- **Sandbox:** aislamiento de aplicaciones.
- **Permisos:** controlan el acceso a recursos protegidos.
- **Google Play:** tienda de aplicaciones de Google; algunos dispositivos y versiones pueden utilizar otras tiendas.

Android está basado en Linux, pero no es simplemente una distribución de escritorio Linux: incorpora una arquitectura y un entorno de aplicaciones propios.

### 10.3. iOS

iOS es el sistema operativo móvil de Apple para iPhone. Se integra estrechamente con el hardware y los servicios de Apple.

Características generales:
- Interfaz táctil.
- Modelo de seguridad con aislamiento de aplicaciones.
- Firma y distribución controlada de aplicaciones.
- Gestión de permisos y privacidad.
- Integración con servicios y dispositivos del ecosistema Apple.
- Actualizaciones distribuidas por Apple.

iOS utiliza tecnologías derivadas de Darwin y componentes de la familia BSD/XNU; no está basado en el kernel Linux.

### 10.4. Comparación Android e iOS

| Característica | Android | iOS |
|---|---|---|
| Desarrollador principal | Google y ecosistema Android. | Apple. |
| Base del kernel | Linux. | XNU, derivado de tecnologías Mach y BSD. |
| Dispositivos | Numerosos fabricantes. | Hardware de Apple. |
| Distribución de aplicaciones | Google Play y otras vías, según dispositivo y configuración. | App Store y mecanismos autorizados por Apple. |
| Personalización | Amplia, variable por fabricante. | Más homogénea y controlada. |
| Fragmentación | Mayor diversidad de versiones y dispositivos. | Menor diversidad de hardware y control centralizado de actualizaciones. |
| Seguridad | Sandbox, permisos, actualizaciones y controles de plataforma. | Sandbox, firma de código, permisos y controles de plataforma. |

No conviene afirmar que un sistema es absolutamente seguro o inseguro: la seguridad depende de versiones, configuración, actualizaciones, aplicaciones y comportamiento de uso.

### 10.5. Otros sistemas móviles

- **HarmonyOS:** plataforma desarrollada por Huawei, con evolución y arquitectura que dependen de la versión y del mercado.
- **KaiOS:** sistema orientado a determinados teléfonos básicos con capacidades inteligentes.
- **Sistemas derivados o especializados:** existen plataformas para relojes, televisores, vehículos y dispositivos IoT.

Para el examen, Android e iOS son las referencias principales.

---

## 11. Virtualización y relación con los sistemas operativos

La virtualización permite ejecutar entornos aislados que presentan hardware virtual a sistemas operativos invitados.

- **Hipervisor de tipo 1:** se ejecuta directamente sobre el hardware.
- **Hipervisor de tipo 2:** se ejecuta sobre un sistema operativo anfitrión.

Conceptos:
- **Anfitrión (host):** sistema o plataforma que proporciona los recursos.
- **Invitado (guest):** sistema operativo que se ejecuta en la máquina virtual.
- **Máquina virtual:** entorno virtualizado que emula recursos de hardware.
- **Contenedor:** aislamiento de aplicaciones que comparte el kernel del sistema anfitrión; no equivale a una máquina virtual completa.

La virtualización facilita consolidación de servidores, pruebas, aislamiento y recuperación ante fallos.

---

## 12. Comparativa general: Windows, Linux y sistemas móviles

| Criterio | Windows | Linux | Android | iOS |
|---|---|---|---|---|
| Uso principal | Escritorio y servidor. | Servidor, escritorio, nube y empotrados. | Móviles y dispositivos conectados. | iPhone. |
| Kernel | Familia NT. | Kernel Linux. | Kernel Linux adaptado a Android. | XNU. |
| Interfaz | Gráfica y consola. | Gráfica y terminal. | Táctil. | Táctil. |
| Gestión de software | Instaladores, Microsoft Store y herramientas empresariales. | Gestores de paquetes según distribución. | Tiendas y paquetes de aplicaciones. | App Store y mecanismos de Apple. |
| Administración | GUI, CMD, PowerShell, directivas. | Terminal, herramientas gráficas y servicios. | Configuración, APIs y herramientas de desarrollo. | Configuración y herramientas de desarrollo Apple. |
| Sistemas de archivos habituales | NTFS, FAT/exFAT. | ext4, XFS, Btrfs y otros. | Sistemas adaptados al dispositivo, habitualmente ext4 o F2FS en almacenamiento interno. | APFS. |

---

## 13. Conceptos que conviene distinguir en el examen

1. **Kernel no es shell:** el kernel gestiona recursos; la shell permite interactuar con el sistema.
2. **Programa no es proceso:** el programa está almacenado; el proceso es su ejecución.
3. **Proceso no es hilo:** un proceso puede contener varios hilos.
4. **Concurrencia no significa necesariamente paralelismo:** puede haber alternancia en una CPU o ejecución simultánea en varios núcleos.
5. **Memoria virtual no es memoria RAM adicional:** abstrae y administra espacios de direcciones; puede utilizar almacenamiento secundario.
6. **Controlador no es dispositivo:** el controlador es software que permite gestionar el hardware.
7. **Sistema de archivos no es sistema operativo:** es uno de los servicios que este administra.
8. **Unix y Linux no son sinónimos:** Linux es de tipo Unix, pero tiene origen y licenciamiento propios.
9. **Android utiliza el kernel Linux; iOS no:** iOS utiliza XNU.
10. **Máquina virtual y contenedor no son equivalentes:** una VM virtualiza un sistema completo; un contenedor comparte el kernel del anfitrión.
11. **Autenticación y autorización son diferentes:** demostrar quién eres no equivale a tener permiso para realizar cualquier acción.
12. **Multitarea y multiprocesamiento son conceptos distintos:** la primera gestiona varias tareas; el segundo utiliza varios procesadores o núcleos.

---

## 14. Resumen del tema

- El sistema operativo administra los recursos del equipo y proporciona servicios a las aplicaciones.
- Sus funciones principales son gestionar procesos, memoria, archivos, dispositivos, usuarios, seguridad y redes.
- El kernel es el núcleo; la shell es una interfaz de órdenes.
- La separación entre modo usuario y modo núcleo protege los recursos.
- Los procesos son programas en ejecución; los hilos son unidades de ejecución dentro de procesos.
- La planificación decide qué proceso utiliza la CPU.
- La memoria virtual proporciona espacios de direcciones y aislamiento.
- Los sistemas de archivos organizan datos, directorios, metadatos y permisos.
- Windows moderno pertenece a la familia NT; dispone de herramientas gráficas, CMD y PowerShell.
- Unix es una familia histórica; Linux es un kernel que forma la base de numerosas distribuciones.
- Android se basa en el kernel Linux; iOS utiliza XNU.
- La virtualización permite ejecutar máquinas virtuales; los contenedores comparten el kernel del anfitrión.

---

## 15. Test de repaso

**Estas preguntas son originales y sirven para autoevaluación; no son preguntas oficiales de examen.** Selecciona una respuesta por pregunta. Las soluciones razonadas aparecen al final.

### Pregunta 1
¿Cuál es la función principal del kernel?

A. Proporcionar exclusivamente una interfaz gráfica.  
B. Gestionar los recursos fundamentales del sistema.  
C. Almacenar los documentos personales.  
D. Sustituir a las aplicaciones.

### Pregunta 2
¿Qué diferencia existe entre un programa y un proceso?

A. No existe ninguna diferencia.  
B. Un proceso es un archivo comprimido.  
C. Un programa es un conjunto de instrucciones y un proceso es una instancia en ejecución.  
D. Un programa siempre contiene varios sistemas operativos.

### Pregunta 3
¿Qué caracteriza a la multitarea preventiva?

A. Los procesos deben ceder voluntariamente siempre la CPU.  
B. El sistema puede interrumpir un proceso y asignar la CPU a otro.  
C. Solo permite ejecutar un proceso.  
D. No necesita planificador.

### Pregunta 4
¿Qué es un hilo?

A. Un sistema de archivos.  
B. Una unidad de ejecución dentro de un proceso.  
C. Un dispositivo de almacenamiento.  
D. Una cuenta de usuario.

### Pregunta 5
¿Qué función cumple la memoria virtual?

A. Sustituye físicamente la RAM por la CPU.  
B. Proporciona espacios de direcciones virtuales y mecanismos de protección.  
C. Impide ejecutar más de una aplicación.  
D. Elimina la necesidad de almacenamiento secundario.

### Pregunta 6
¿Qué sistema de archivos es habitual en instalaciones modernas de Windows?

A. NTFS.  
B. ext4.  
C. APFS.  
D. XFS.

### Pregunta 7
¿Qué componente permite al sistema operativo comunicarse con un dispositivo concreto?

A. Shell.  
B. Controlador o driver.  
C. Editor de texto.  
D. Gestor de ventanas.

### Pregunta 8
¿Cuál de estas herramientas permite consultar procesos en PowerShell?

A. `Get-Process`  
B. `Get-Directory`  
C. `Show-Kernel`  
D. `List-Registry`

### Pregunta 9
¿Qué almacena el Registro de Windows?

A. Exclusivamente documentos del usuario.  
B. Configuración del sistema, hardware, usuarios y aplicaciones.  
C. Solo los archivos temporales de Internet.  
D. Únicamente las contraseñas en texto claro.

### Pregunta 10
¿Qué es Active Directory Domain Services?

A. Un sistema de archivos de Linux.  
B. Un servicio de directorio para administrar objetos y recursos de dominio.  
C. Un protocolo de impresión.  
D. Un entorno de ejecución de Java.

### Pregunta 11
¿Qué comando de Linux cambia permisos de archivos?

A. `chown`  
B. `chmod`  
C. `grep`  
D. `pwd`

### Pregunta 12
¿Qué representa el permiso `r` en Unix/Linux?

A. Renombrar.  
B. Ejecutar.  
C. Leer.  
D. Reiniciar.

### Pregunta 13
¿Cuál de las siguientes afirmaciones sobre Linux es correcta?

A. Linux es una distribución comercial de Microsoft.  
B. Linux es un kernel que forma parte de numerosas distribuciones.  
C. Linux solo funciona en teléfonos móviles.  
D. Linux y Unix son exactamente el mismo producto.

### Pregunta 14
¿Qué kernel utiliza Android?

A. XNU.  
B. Windows NT.  
C. Linux, adaptado a la plataforma Android.  
D. MS-DOS.

### Pregunta 15
¿Cuál es la diferencia esencial entre una máquina virtual y un contenedor?

A. No existe ninguna diferencia.  
B. Una máquina virtual ejecuta un sistema invitado sobre hardware virtual; un contenedor comparte el kernel del anfitrión.  
C. Un contenedor siempre necesita un kernel distinto.  
D. Una máquina virtual solo puede ejecutar Windows.

### Pregunta 16
¿Qué es una llamada al sistema (*system call*)?

A. Una petición de una aplicación al kernel para obtener un servicio.  
B. Una llamada telefónica al administrador.  
C. Una operación exclusiva de la interfaz gráfica.  
D. Un tipo de sistema de archivos.

### Pregunta 17
¿Qué algoritmo de planificación asigna turnos mediante un intervalo de tiempo o quantum?

A. FCFS.  
B. Round Robin.  
C. SJF.  
D. Orden alfabético.

### Pregunta 18
¿Qué significa el principio de mínimo privilegio?

A. Todos los usuarios deben ser administradores.  
B. Cada usuario o proceso debe disponer solo de los permisos necesarios.  
C. Se deben desactivar todos los controles de acceso.  
D. Los permisos no deben cambiar nunca.

### Pregunta 19
¿Qué sistema de archivos se asocia habitualmente a Linux?

A. ext4.  
B. NTFS exclusivamente.  
C. APFS exclusivamente.  
D. HFS exclusivamente.

### Pregunta 20
¿Cuál de estas afirmaciones sobre iOS es correcta?

A. Está basado en el kernel Linux.  
B. Utiliza el kernel XNU.  
C. Es una distribución de Ubuntu.  
D. Es el sistema operativo de todos los teléfonos Android.

---

## 16. Soluciones razonadas

| Nº | Respuesta | Explicación |
|---:|:---:|---|
| 1 | B | El kernel gestiona los recursos esenciales y ofrece servicios fundamentales. |
| 2 | C | El programa es código almacenado; el proceso es una ejecución concreta. |
| 3 | B | La planificación preventiva permite retirar la CPU a un proceso. |
| 4 | B | Los hilos son unidades de ejecución pertenecientes a un proceso. |
| 5 | B | La memoria virtual abstrae direcciones y contribuye al aislamiento. |
| 6 | A | NTFS es el sistema de archivos habitual de Windows. |
| 7 | B | El driver traduce las operaciones del sistema a las particularidades del dispositivo. |
| 8 | A | `Get-Process` muestra procesos en PowerShell. |
| 9 | B | El Registro contiene configuración jerárquica del sistema y aplicaciones. |
| 10 | B | AD DS permite administrar identidades, equipos y recursos de dominio. |
| 11 | B | `chmod` modifica permisos; `chown` modifica propietario y grupo. |
| 12 | C | `r` significa lectura (*read*). |
| 13 | B | Linux es el kernel utilizado por distintas distribuciones. |
| 14 | C | Android se basa en el kernel Linux con componentes propios. |
| 15 | B | La VM virtualiza un sistema completo; el contenedor comparte el kernel anfitrión. |
| 16 | A | Una llamada al sistema solicita al kernel una operación protegida. |
| 17 | B | Round Robin asigna un quantum a cada proceso. |
| 18 | B | El mínimo privilegio reduce accesos y permisos innecesarios. |
| 19 | A | ext4 es uno de los sistemas de archivos más extendidos en Linux. |
| 20 | B | iOS utiliza XNU, no el kernel Linux. |

---

## 17. Recursos para profundizar

### Documentación oficial y técnica

- **Microsoft Learn – Windows:** https://learn.microsoft.com/es-es/windows/
- **Microsoft Learn – PowerShell:** https://learn.microsoft.com/es-es/powershell/
- **Documentación del kernel Linux:** https://www.kernel.org/doc/html/latest/
- **The Linux man-pages project:** https://man7.org/linux/man-pages/
- **Ubuntu Documentation:** https://help.ubuntu.com/
- **Debian Administrator's Handbook:** https://debian-handbook.info/
- **Android Developers:** https://developer.android.com/guide
- **Apple Platform Security:** https://support.apple.com/guide/security/welcome/web

### Recomendación de estudio

Para dominar este tema, conviene poder explicar sin consultar apuntes:
1. Diferencias entre kernel, shell, proceso e hilo.
2. Estados de un proceso y algoritmos básicos de planificación.
3. Memoria física, virtual, paginación y fallo de página.
4. Diferencias entre NTFS, ext4 y APFS.
5. Arquitectura general de Windows NT.
6. Diferencias entre Unix, Linux, Android e iOS.
7. Diferencias entre máquina virtual y contenedor.

---

**Fin del Tema 3 – Sistemas operativos.**
