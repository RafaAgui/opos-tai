**Bloque II. Tecnología básica — Cuerpo de Técnicos Auxiliares de Informática (TAI), Administración General del Estado**

> **Denominación oficial:** Sistemas de gestión de bases de datos relacionales, orientados a objetos y NoSQL: características y componentes.

---

## 1. Conceptos fundamentales de bases de datos

### 1.1. Dato, información y base de datos

- **Dato:** representación de un hecho, valor o característica. Por sí solo puede carecer de contexto.
- **Información:** datos organizados e interpretados de forma que adquieren significado.
- **Base de datos (BD):** conjunto organizado de datos relacionados, almacenados de forma estructurada para facilitar su consulta, actualización y administración.
- **Sistema gestor de bases de datos (SGBD o DBMS):** software que permite definir, crear, consultar, actualizar, administrar y controlar el acceso a una base de datos.

Una base de datos no es lo mismo que un SGBD: la primera contiene los datos; el segundo proporciona los mecanismos para gestionarlos.

### 1.2. Objetivos de un SGBD

Los SGBD se diseñan para:

- Facilitar el almacenamiento, consulta y modificación de datos.
- Reducir la redundancia y evitar inconsistencias.
- Permitir el acceso concurrente de varios usuarios o aplicaciones.
- Mantener la integridad de los datos.
- Controlar la seguridad y los permisos.
- Proporcionar mecanismos de recuperación ante fallos.
- Separar, en la medida de lo posible, las aplicaciones de la organización física de los datos.

### 1.3. Sistemas de ficheros frente a SGBD

En un enfoque basado exclusivamente en ficheros, cada aplicación puede mantener sus propios archivos y lógica de acceso. Esto puede provocar duplicidad, dependencia entre programas y dificultades de mantenimiento.

Un SGBD centraliza servicios de gestión y ofrece:

| Aspecto | Sistema de ficheros tradicional | SGBD |
|---|---|---|
| Redundancia | Puede ser elevada | Se controla mediante diseño y restricciones |
| Consistencia | Depende de cada aplicación | Puede imponerse mediante reglas de integridad |
| Acceso concurrente | Debe resolverse en cada aplicación | Incluye mecanismos de concurrencia |
| Seguridad | Frecuentemente ligada al sistema de archivos | Permisos y controles propios del gestor |
| Consultas | Requieren programación específica | Lenguajes y herramientas de consulta |
| Recuperación | Depende de cada aplicación | Registro de operaciones y mecanismos de recuperación |
| Independencia | Mayor dependencia entre datos y programas | Separación lógica y física de los datos |

---

## 2. Arquitectura y componentes de un SGBD

### 2.1. Componentes principales

Un SGBD suele incluir los siguientes elementos:

| Componente | Función |
|---|---|
| Motor de almacenamiento | Gestiona cómo se guardan y recuperan los datos. |
| Procesador de consultas | Analiza, valida y transforma las consultas. |
| Optimizador de consultas | Selecciona un plan de ejecución eficiente. |
| Gestor de transacciones | Coordina las transacciones y sus propiedades. |
| Gestor de concurrencia | Controla el acceso simultáneo a los datos. |
| Gestor de recuperación | Permite recuperar un estado consistente tras un fallo. |
| Gestor de memoria y búferes | Administra datos y páginas almacenados temporalmente en memoria. |
| Catálogo o diccionario de datos | Almacena metadatos sobre tablas, columnas, índices, restricciones y usuarios. |
| Gestor de seguridad | Administra autenticación, autorización y privilegios. |
| Interfaces y herramientas | Permiten administrar el sistema y conectarlo con aplicaciones. |

No todos los productos implementan estos componentes de la misma manera ni los presentan como módulos separados.

### 2.2. Arquitectura de tres esquemas

El modelo clásico de arquitectura ANSI/SPARC distingue tres niveles:

1. **Nivel externo:** vistas particulares de los usuarios o aplicaciones. Cada vista muestra solo la parte de la base de datos que necesita.
2. **Nivel conceptual:** descripción lógica global de la base de datos, con entidades, relaciones y restricciones.
3. **Nivel interno:** organización física de los datos, como archivos, páginas, índices y métodos de acceso.

<AsyncImage query="ANSI SPARC three schema database architecture external conceptual internal levels diagram" aspectRatio="16:9" fit="contain"/>

Esta arquitectura busca proporcionar independencia de datos:

- **Independencia física:** cambios en la organización física no deberían obligar a modificar el esquema conceptual ni las aplicaciones.
- **Independencia lógica:** cambios en el esquema conceptual deberían afectar lo mínimo posible a las vistas externas y aplicaciones.

### 2.3. Modelos de datos

Un modelo de datos define cómo se representan los datos, sus relaciones, restricciones y operaciones.

- **Jerárquico:** organiza los datos como un árbol de relaciones padre-hijo.
- **En red:** permite relaciones más complejas entre registros.
- **Relacional:** representa los datos mediante relaciones (tablas).
- **Orientado a objetos:** representa objetos con identidad, estado y comportamiento.
- **NoSQL:** agrupa modelos no relacionales, como clave-valor, documentos, columnas y grafos.

---

## 3. Bases de datos relacionales

### 3.1. Modelo relacional

El modelo relacional fue formulado por Edgar F. Codd. Representa los datos mediante **relaciones**, que en la práctica se implementan habitualmente como tablas.

Conceptos fundamentales:

- **Relación:** estructura lógica de datos formada por atributos y tuplas.
- **Tupla:** fila o registro de una relación.
- **Atributo:** columna o propiedad.
- **Dominio:** conjunto de valores permitidos para un atributo.
- **Grado:** número de atributos de una relación.
- **Cardinalidad:** número de tuplas de una relación.
- **Clave:** atributo o conjunto de atributos que permite identificar tuplas.
- **Esquema:** definición de la estructura de la base de datos.
- **Instancia:** contenido de la base de datos en un momento determinado.

En el modelo relacional formal, una relación es un conjunto de tuplas y no tiene orden inherente de filas ni de columnas. En SQL, sin embargo, el orden de los resultados solo está garantizado cuando se solicita expresamente mediante `ORDER BY`.

### 3.2. Claves

- **Superclave:** conjunto de atributos que identifica de forma única cada fila.
- **Clave candidata:** superclave mínima; no contiene atributos innecesarios.
- **Clave primaria (PRIMARY KEY):** clave candidata elegida para identificar las filas.
- **Clave alternativa:** clave candidata no elegida como primaria.
- **Clave foránea (FOREIGN KEY):** atributo o conjunto de atributos que referencia una clave de otra tabla —o de la misma— y permite establecer relaciones.
- **Clave compuesta:** clave formada por varios atributos.

Ejemplo:

```sql
CREATE TABLE departamento (
    id_departamento INTEGER PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE empleado (
    id_empleado INTEGER PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_departamento INTEGER,
    FOREIGN KEY (id_departamento)
        REFERENCES departamento(id_departamento)
);
```

La clave primaria identifica cada departamento o empleado. La clave foránea de `empleado` relaciona cada empleado con un departamento.

### 3.3. Integridad de los datos

Las restricciones de integridad evitan que se almacenen datos que incumplan las reglas definidas.

- **Integridad de entidad:** la clave primaria debe identificar inequívocamente cada fila y no puede contener valores nulos.
- **Integridad referencial:** una clave foránea debe referenciar una fila existente o admitir `NULL` si la definición lo permite.
- **Integridad de dominio:** los valores deben pertenecer al dominio definido para el atributo.
- **Restricciones de negocio:** reglas adicionales propias de la aplicación.

Restricciones SQL frecuentes:

- `PRIMARY KEY`: clave primaria.
- `FOREIGN KEY`: clave foránea.
- `NOT NULL`: impide valores nulos.
- `UNIQUE`: exige unicidad.
- `CHECK`: verifica una condición.
- `DEFAULT`: establece un valor predeterminado.

### 3.4. Relaciones entre tablas

Las relaciones habituales son:

- **Uno a uno (1:1):** una fila de A se relaciona con, como máximo, una de B, y viceversa.
- **Uno a muchos (1:N):** una fila de A puede relacionarse con varias de B; cada fila de B se asocia con una de A.
- **Muchos a muchos (N:M):** varias filas de A se relacionan con varias de B. Suele implementarse mediante una tabla intermedia.

Ejemplo N:M: estudiantes y asignaturas. Una tabla `matricula` puede relacionar `estudiante` y `asignatura` mediante dos claves foráneas.

### 3.5. Normalización

La normalización es un proceso de diseño que organiza las tablas para reducir redundancias y anomalías de inserción, actualización y borrado.

**Dependencia funcional:** existe una dependencia funcional \(X \rightarrow Y\) cuando el valor de X determina un único valor de Y.

Formas normales principales:

- **Primera forma normal (1FN):** cada atributo contiene valores atómicos en el contexto del modelo; no se representan grupos repetidos ni listas de valores en una misma celda.
- **Segunda forma normal (2FN):** está en 1FN y todo atributo no primo depende funcionalmente de la clave candidata completa, no solo de una parte de una clave compuesta.
- **Tercera forma normal (3FN):** está en 2FN y no presenta dependencias transitivas inadecuadas de atributos no clave respecto de claves candidatas. En su formulación formal, para toda dependencia funcional no trivial \(X \rightarrow A\), X es superclave o A es atributo primo.
- **Forma normal de Boyce-Codd (FNBC/BCNF):** para toda dependencia funcional no trivial \(X \rightarrow Y\), X debe ser una superclave.

La normalización reduce anomalías, aunque en determinados escenarios se puede aplicar desnormalización de forma controlada para mejorar el rendimiento.

### 3.6. Álgebra relacional

El álgebra relacional es un lenguaje formal de operaciones sobre relaciones. Entre sus operaciones básicas:

- **Selección (\(\sigma\)):** obtiene las filas que cumplen una condición.
- **Proyección (\(\pi\)):** obtiene determinadas columnas.
- **Unión (\(\cup\)):** combina tuplas de relaciones compatibles.
- **Diferencia (\(-\)):** obtiene las tuplas de una relación que no están en otra.
- **Producto cartesiano (\(\times\)):** combina cada tupla de una relación con cada tupla de otra.
- **Renombramiento (\(\rho\)):** cambia nombres de relaciones o atributos.

Otras operaciones derivadas o habituales son la intersección, la combinación (*join*) y la división.

### 3.7. SQL: lenguaje de bases de datos relacionales

**SQL (Structured Query Language)** es el lenguaje estándar de referencia para definir, consultar y manipular bases de datos relacionales. Los productos pueden incorporar extensiones y diferencias de sintaxis.

Se suelen distinguir estos grupos:

| Grupo | Finalidad | Ejemplos |
|---|---|---|
| DDL (Data Definition Language) | Definir estructuras | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` |
| DML (Data Manipulation Language) | Consultar y modificar datos | `SELECT`, `INSERT`, `UPDATE`, `DELETE` |
| DCL (Data Control Language) | Gestionar permisos | `GRANT`, `REVOKE` |
| TCL (Transaction Control Language) | Controlar transacciones | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |

Ejemplo de consulta:

```sql
SELECT nombre, id_departamento
FROM empleado
WHERE id_departamento = 10
ORDER BY nombre;
```

Ejemplo de modificación:

```sql
UPDATE empleado
SET id_departamento = 20
WHERE id_empleado = 100;
```

**JOIN** permite combinar filas de varias tablas:

```sql
SELECT e.nombre, d.nombre AS departamento
FROM empleado e
INNER JOIN departamento d
    ON e.id_departamento = d.id_departamento;
```

Tipos habituales de combinación:

- `INNER JOIN`: devuelve las filas que encuentran correspondencia en ambas tablas.
- `LEFT JOIN`: devuelve todas las filas de la tabla izquierda y las coincidencias de la derecha; si no hay coincidencia, las columnas derechas toman valor `NULL`.
- `RIGHT JOIN`: equivalente en sentido inverso.
- `FULL OUTER JOIN`: conserva filas coincidentes y no coincidentes de ambos lados, cuando el SGBD lo soporta.

### 3.8. Índices y vistas

- **Índice:** estructura auxiliar que acelera determinadas búsquedas y ordenaciones, a cambio de ocupar espacio y añadir coste a las operaciones de modificación.
- **Índice único:** impide duplicados en las columnas indexadas.
- **Vista:** consulta almacenada que se presenta como una tabla virtual.
- **Vista materializada:** almacena físicamente el resultado de una consulta y requiere mecanismos de actualización o refresco.

Los índices no sustituyen a las claves ni garantizan por sí solos la integridad referencial.

---

## 4. Transacciones y propiedades ACID

Una **transacción** es una unidad lógica de trabajo formada por una o varias operaciones que deben tratarse como una unidad.

Las propiedades ACID son:

- **Atomicidad (Atomicity):** la transacción se ejecuta completamente o no se aplica.
- **Consistencia (Consistency):** una transacción válida lleva la base de datos de un estado consistente a otro estado consistente.
- **Aislamiento (Isolation):** las transacciones concurrentes no deben interferir de forma incorrecta; el nivel concreto depende del aislamiento configurado.
- **Durabilidad (Durability):** una vez confirmada, la transacción debe persistir incluso ante determinados fallos.

Ejemplo:

```sql
BEGIN;

UPDATE cuenta
SET saldo = saldo - 100
WHERE id_cuenta = 1;

UPDATE cuenta
SET saldo = saldo + 100
WHERE id_cuenta = 2;

COMMIT;
```

Si ocurre un error antes de confirmar, puede utilizarse `ROLLBACK` para deshacer la transacción.

### 4.1. Problemas de concurrencia

En entornos con varias transacciones pueden aparecer:

- **Lectura sucia:** una transacción lee datos modificados por otra que todavía no ha confirmado.
- **Lectura no repetible:** una transacción lee una fila y, al repetir la lectura, obtiene un valor distinto porque otra transacción la ha modificado y confirmado.
- **Lectura fantasma:** al repetir una consulta por condición aparecen o desaparecen filas debido a cambios confirmados por otra transacción.
- **Actualización perdida:** una modificación sobrescribe otra de forma no controlada.

### 4.2. Niveles de aislamiento SQL

El estándar SQL define cuatro niveles clásicos:

1. **READ UNCOMMITTED:** permite las lecturas menos restringidas; puede admitir lecturas sucias.
2. **READ COMMITTED:** evita lecturas sucias, pero puede permitir lecturas no repetibles y fantasmas.
3. **REPEATABLE READ:** evita lecturas sucias y no repetibles; el tratamiento de fantasmas depende de la implementación y del estándar aplicado.
4. **SERIALIZABLE:** ofrece el aislamiento más estricto, buscando un resultado equivalente a la ejecución serial de las transacciones.

Los motores pueden implementar estos niveles mediante bloqueos, control de concurrencia multiversión (MVCC) u otras técnicas.

### 4.3. Bloqueos y recuperación

- **Bloqueo compartido:** permite lecturas concurrentes compatibles.
- **Bloqueo exclusivo:** restringe el acceso concurrente incompatible, especialmente para modificaciones.
- **Deadlock:** interbloqueo entre transacciones que esperan recursos retenidos por las otras.
- **Log o registro de transacciones:** permite reconstruir o deshacer operaciones durante la recuperación.
- **Checkpoint:** punto de control que reduce el trabajo necesario para recuperar la base de datos.

---

## 5. Bases de datos orientadas a objetos

### 5.1. Concepto

Una **base de datos orientada a objetos (BDOO)** almacena información mediante objetos, siguiendo conceptos propios del paradigma de programación orientada a objetos.

Los objetos combinan:

- **Identidad:** identificador propio del objeto, independiente de sus valores.
- **Estado:** valores de sus atributos.
- **Comportamiento:** operaciones o métodos asociados.
- **Encapsulación:** agrupación de datos y operaciones, ocultando detalles internos cuando corresponde.

### 5.2. Características principales

- **Identidad de objeto:** dos objetos pueden ser distintos aunque sus atributos tengan los mismos valores.
- **Clases:** definen la estructura y comportamiento de un conjunto de objetos.
- **Objetos:** instancias de clases.
- **Herencia:** permite definir clases a partir de otras, reutilizando o especializando características.
- **Encapsulación:** protege el estado interno y expone operaciones.
- **Polimorfismo:** permite utilizar una interfaz común con implementaciones diferentes.
- **Referencias entre objetos:** representan asociaciones y estructuras complejas.
- **Persistencia:** permite que los objetos sobrevivan a la ejecución del programa.

### 5.3. Ventajas y limitaciones

**Ventajas:**

- Representación natural de estructuras complejas.
- Correspondencia conceptual con aplicaciones orientadas a objetos.
- Gestión de objetos con identidad y referencias.
- Puede reducir la necesidad de transformar estructuras complejas al persistirlas.

**Limitaciones:**

- Menor estandarización y presencia en el mercado que el modelo relacional.
- Menor disponibilidad de herramientas y perfiles especializados en determinados entornos.
- Integración e intercambio de datos potencialmente más complejos.
- Consultas y optimización menos uniformes entre productos.

### 5.4. Persistencia de objetos y bases de datos objeto-relacionales

No deben confundirse:

- **SGBD orientado a objetos:** almacena objetos como entidades principales.
- **SGBD objeto-relacional:** mantiene el modelo relacional, incorporando extensiones para tipos complejos, tipos definidos por el usuario u otras capacidades orientadas a objetos.
- **Mapeo objeto-relacional (ORM):** técnica o herramienta que relaciona clases y objetos de una aplicación con tablas y filas de una base de datos relacional. Un ORM no convierte por sí mismo al SGBD en una base de datos orientada a objetos.

---

## 6. Bases de datos NoSQL

### 6.1. Concepto y motivación

**NoSQL** suele interpretarse como *Not Only SQL*. Designa una familia heterogénea de sistemas de bases de datos no relacionales, concebidos para distintos patrones de acceso, modelos de datos y necesidades de escalabilidad.

No significa que todos los sistemas NoSQL carezcan de consultas declarativas o de transacciones.

Motivaciones habituales:

- Manejo de grandes volúmenes de datos.
- Escalabilidad horizontal mediante distribución entre nodos.
- Flexibilidad del esquema.
- Alta disponibilidad y distribución geográfica.
- Adecuación a datos semiestructurados o relaciones específicas.
- Optimización para patrones de consulta concretos.

### 6.2. Tipos principales de bases de datos NoSQL

<AsyncImageGroup query={["NoSQL database key value data model diagram","document database JSON document collection diagram","wide column database column family data model diagram","graph database nodes edges properties diagram"]} aspectRatio="5:4" layout="carousel"/>

#### A. Clave-valor

Almacenan pares formados por una clave única y un valor.

- La clave identifica el elemento.
- El valor puede ser una cadena, estructura serializada u otro objeto admitido.
- Suelen ofrecer operaciones sencillas y rápidas de lectura y escritura por clave.

**Usos:** cachés, sesiones, preferencias y almacenamiento de acceso directo.

**Ejemplos:** Redis, Riak y Amazon DynamoDB (que ofrece un modelo clave-valor y documental).

#### B. Documentales

Almacenan documentos autocontenidos, normalmente en formatos como JSON, BSON o similares.

- Los documentos se agrupan en colecciones.
- Los documentos de una colección pueden tener estructuras diferentes, según el producto y las reglas configuradas.
- Permiten consultar campos y estructuras anidadas.
- Son adecuados para datos semiestructurados.

**Usos:** catálogos, perfiles, contenidos y aplicaciones web.

**Ejemplos:** MongoDB, CouchDB y Couchbase.

#### C. Orientadas a columnas o familias de columnas

Organizan los datos en filas identificadas por una clave y familias de columnas. No deben confundirse con el almacenamiento columnar analítico de algunos SGBD relacionales.

- Pueden admitir grandes volúmenes distribuidos.
- Permiten estructuras flexibles y distribución entre nodos.
- Se orientan a patrones de consulta y escritura específicos.

**Usos:** telemetría, registros de eventos y grandes conjuntos de datos distribuidos.

**Ejemplos:** Apache Cassandra, Apache HBase y ScyllaDB.

#### D. De grafos

Representan los datos mediante:

- **Nodos:** entidades.
- **Aristas o relaciones:** conexiones entre nodos.
- **Propiedades:** atributos asociados a nodos o relaciones.

Son adecuadas cuando las relaciones y los recorridos entre entidades tienen especial importancia.

**Usos:** redes sociales, recomendaciones, detección de fraude y análisis de dependencias.

**Ejemplos:** Neo4j, JanusGraph y Amazon Neptune.

### 6.3. Características generales de NoSQL

- **Esquema flexible:** permite evolucionar la estructura con menos rigidez que un esquema relacional tradicional, aunque puede haber validaciones y esquemas definidos.
- **Distribución:** muchos sistemas están diseñados para distribuir datos entre nodos.
- **Escalabilidad horizontal:** permite ampliar capacidad incorporando máquinas, según la arquitectura.
- **Replicación:** mantiene copias de datos en distintos nodos para disponibilidad o proximidad.
- **Particionado o sharding:** divide los datos entre nodos.
- **Consistencia configurable:** algunos sistemas permiten elegir compromisos entre consistencia, disponibilidad y latencia.
- **Consultas específicas:** el lenguaje y las capacidades dependen del producto y del modelo de datos.

### 6.4. Teorema CAP

El teorema CAP estudia el comportamiento de un sistema distribuido ante una partición de red. Sus propiedades son:

- **Consistencia (C):** las lecturas observan un estado coherente conforme al modelo de consistencia considerado.
- **Disponibilidad (A):** cada petición recibida por un nodo operativo obtiene una respuesta, aunque no necesariamente la más reciente.
- **Tolerancia a particiones (P):** el sistema continúa operando pese a una partición de comunicación entre nodos.

Cuando se produce una partición de red, el diseño debe priorizar consistencia o disponibilidad para las operaciones afectadas. No debe interpretarse CAP como que cualquier sistema solo puede tener dos de las tres propiedades en condiciones normales: la tensión se refiere al escenario de partición.

### 6.5. Consistencia eventual

Algunos sistemas distribuidos ofrecen **consistencia eventual**: si dejan de producirse actualizaciones y la comunicación se restablece, las réplicas convergerán finalmente al mismo valor.

Esto puede mejorar disponibilidad y rendimiento en ciertos escenarios, pero la lectura inmediatamente posterior a una escritura puede no reflejar todavía el último cambio en todos los nodos.

No todos los sistemas NoSQL utilizan consistencia eventual; existen distintos modelos y niveles de consistencia.

### 6.6. Ventajas y limitaciones de NoSQL

**Ventajas posibles:**

- Escalabilidad horizontal.
- Flexibilidad para datos cambiantes o semiestructurados.
- Buen rendimiento en patrones de acceso específicos.
- Distribución y replicación integradas en muchos productos.
- Modelos adecuados para documentos, grafos, claves o familias de columnas.

**Limitaciones posibles:**

- Menor uniformidad entre productos.
- Consultas y operaciones complejas diferentes de las del modelo relacional.
- Consistencia y transacciones que pueden variar según el motor.
- Diseño muy dependiente de los patrones de acceso.
- Riesgo de duplicación de datos o de lógica en la aplicación.

NoSQL no es automáticamente más rápido, más escalable o mejor que SQL. La elección depende de los requisitos y del diseño.

---

## 7. Comparación entre modelos relacional, orientado a objetos y NoSQL

| Criterio | Relacional | Orientado a objetos | NoSQL |
|---|---|---|---|
| Modelo | Tablas, filas y columnas | Objetos con identidad, estado y comportamiento | Clave-valor, documentos, columnas o grafos |
| Esquema | Definido habitualmente de forma explícita | Clases y tipos de objetos | Flexible o específico del producto |
| Relaciones | Claves y operaciones JOIN | Referencias y asociaciones entre objetos | Enlaces, documentos embebidos o relaciones propias del modelo |
| Lenguaje | SQL como referencia | Depende del producto | Depende del producto; algunos ofrecen consultas tipo SQL |
| Transacciones | ACID ampliamente soportadas | Depende del gestor | Depende del sistema; algunos ofrecen transacciones ACID |
| Escalabilidad | Vertical y también horizontal según producto y arquitectura | Depende del producto | Frecuentemente orientada a distribución horizontal |
| Casos típicos | Sistemas administrativos, financieros y transaccionales | Aplicaciones con objetos complejos y persistencia directa | Grandes sistemas distribuidos, contenido, caché, grafos y eventos |
| Ejemplos | PostgreSQL, Oracle Database, MySQL, SQL Server | ObjectDB, db4o (histórico), GemStone/S | MongoDB, Redis, Cassandra, Neo4j |

### 7.1. Ejemplos de SGBD relacionales

- **PostgreSQL:** SGBD objeto-relacional de código abierto, con SQL, transacciones y extensiones.
- **MySQL:** SGBD relacional ampliamente utilizado en aplicaciones web.
- **MariaDB:** SGBD relacional derivado históricamente de MySQL.
- **Oracle Database:** SGBD relacional comercial con capacidades avanzadas empresariales.
- **Microsoft SQL Server:** SGBD relacional de Microsoft.
- **SQLite:** motor relacional embebido, ligero y sin servidor independiente en su uso habitual.

### 7.2. Selección del modelo

Para seleccionar un modelo conviene valorar:

- Estructura y naturaleza de los datos.
- Tipos de consultas y operaciones.
- Necesidades de consistencia y transacciones.
- Volumen, crecimiento y distribución geográfica.
- Disponibilidad y tolerancia a fallos.
- Latencia y rendimiento.
- Seguridad, auditoría y requisitos normativos.
- Coste operativo, licencias y capacidades del equipo técnico.

---

## 8. Administración, seguridad y disponibilidad

### 8.1. Roles del administrador de bases de datos

El **administrador de bases de datos (DBA)** puede encargarse de:

- Instalación, configuración y actualización del SGBD.
- Creación de bases de datos, usuarios y roles.
- Gestión de permisos y políticas de seguridad.
- Supervisión del rendimiento y optimización de consultas.
- Diseño y mantenimiento de índices.
- Copias de seguridad y restauración.
- Planificación de capacidad.
- Alta disponibilidad y replicación.
- Auditoría y cumplimiento de políticas.

### 8.2. Seguridad

Medidas habituales:

- Autenticación robusta y, cuando proceda, autenticación multifactor.
- Autorización mediante roles y privilegios mínimos.
- Cifrado de comunicaciones y, cuando corresponda, de datos almacenados.
- Auditoría de accesos y operaciones.
- Actualizaciones y corrección de vulnerabilidades.
- Protección de credenciales y secretos.
- Separación de entornos y cuentas de administración.
- Prevención de inyección SQL mediante consultas parametrizadas y validación adecuada.

### 8.3. Copias de seguridad

Tipos habituales:

- **Completa:** copia todos los datos seleccionados.
- **Incremental:** copia los cambios desde la última copia realizada, sea completa o incremental.
- **Diferencial:** copia los cambios desde la última copia completa.

La recuperación puede requerir combinar una copia completa con copias incrementales o diferenciales y, en sistemas compatibles, registros de transacciones.

Es fundamental probar periódicamente las restauraciones. Una copia no verificada no garantiza la recuperación.

### 8.4. Alta disponibilidad y replicación

- **Replicación:** mantiene copias de los datos en otros nodos.
- **Primario-réplica:** un nodo principal recibe escrituras y las réplicas mantienen copias, con variaciones según producto.
- **Clúster:** conjunto de nodos que cooperan para ofrecer un servicio.
- **Failover:** conmutación a otro nodo cuando falla el principal.
- **Balanceo de carga:** distribuye peticiones entre varios nodos o servidores.

Replicación, copia de seguridad y alta disponibilidad no son sinónimos. Una réplica puede reproducir también un borrado accidental o una corrupción; por ello no sustituye a las copias de seguridad.

---

## 9. Conceptos que conviene diferenciar en el examen

| Conceptos | Diferencia |
|---|---|
| Base de datos / SGBD | La BD contiene los datos; el SGBD los gestiona. |
| Tabla / relación | La tabla es la representación práctica habitual de una relación; el modelo formal tiene propiedades matemáticas. |
| Fila / tupla | Una fila representa una tupla. |
| Columna / atributo | Una columna representa un atributo. |
| Clave primaria / foránea | La primaria identifica filas; la foránea referencia otra clave. |
| Clave candidata / primaria | Toda clave primaria es candidata, pero no toda candidata se elige como primaria. |
| Integridad de entidad / referencial | La primera protege la identificación de filas; la segunda, las referencias entre tablas. |
| DDL / DML | DDL define estructuras; DML consulta y modifica datos. |
| Índice / vista | El índice acelera accesos; la vista presenta una consulta como tabla virtual. |
| Normalización / desnormalización | La normalización reduce redundancias y anomalías; la desnormalización introduce redundancia controlada por motivos de rendimiento. |
| ACID / CAP | ACID describe propiedades de transacciones; CAP trata el compromiso en sistemas distribuidos ante particiones. |
| Relacional / objeto-relacional | El objeto-relacional conserva el modelo relacional e incorpora extensiones orientadas a objetos. |
| BDOO / ORM | La BDOO almacena objetos; un ORM mapea objetos de una aplicación a tablas relacionales. |
| NoSQL / ausencia de SQL | NoSQL significa habitualmente «Not Only SQL»; no implica que no pueda existir un lenguaje de consulta. |
| Clave-valor / documental | Clave-valor recupera valores por clave; documental permite consultar campos y estructuras de documentos. |
| Replicación / backup | La replicación mantiene copias operativas; el backup permite recuperar datos históricos o ante pérdidas. |

---

## 10. Resumen del tema

1. Una base de datos almacena datos organizados; el SGBD ofrece los servicios para definirlos, consultarlos, modificarlos y protegerlos.
2. Los SGBD reducen problemas de redundancia, concurrencia, integridad y seguridad frente a una gestión aislada mediante ficheros.
3. La arquitectura ANSI/SPARC distingue niveles externo, conceptual e interno, y busca independencia lógica y física.
4. El modelo relacional organiza los datos en relaciones, implementadas habitualmente como tablas.
5. Las claves primarias identifican filas; las foráneas establecen referencias entre tablas.
6. La integridad puede ser de entidad, referencial y de dominio.
7. La normalización organiza las tablas para reducir redundancias y anomalías. Las formas más conocidas son 1FN, 2FN, 3FN y FNBC.
8. SQL permite definir estructuras (DDL), manipular datos (DML), controlar permisos (DCL) y gestionar transacciones (TCL).
9. Las transacciones se describen mediante ACID: atomicidad, consistencia, aislamiento y durabilidad.
10. Las bases de datos orientadas a objetos almacenan objetos con identidad, estado y comportamiento.
11. NoSQL agrupa modelos clave-valor, documentales, familias de columnas y grafos.
12. CAP se refiere al compromiso entre consistencia y disponibilidad cuando existe una partición de red.
13. La elección de un SGBD depende de los datos, consultas, transacciones, distribución, disponibilidad, seguridad y coste.
14. El DBA administra, protege, supervisa, optimiza y planifica la recuperación de las bases de datos.

---

## 11. Glosario

- **ACID:** propiedades de atomicidad, consistencia, aislamiento y durabilidad de las transacciones.
- **Atributo:** propiedad o columna de una relación.
- **Backup:** copia de seguridad de datos.
- **BDOO:** base de datos orientada a objetos.
- **CAP:** teorema sobre consistencia, disponibilidad y tolerancia a particiones en sistemas distribuidos.
- **Cardinalidad:** número de tuplas de una relación; en otros contextos, número de elementos asociados en una relación.
- **Clúster:** conjunto de nodos que cooperan para ofrecer un servicio.
- **DBA:** administrador de bases de datos.
- **DDL:** lenguaje de definición de datos.
- **DML:** lenguaje de manipulación de datos.
- **DCL:** lenguaje de control de datos.
- **TCL:** lenguaje de control de transacciones.
- **Esquema:** definición de la estructura de una base de datos.
- **Índice:** estructura auxiliar para acelerar operaciones de acceso.
- **JOIN:** operación que combina filas de varias tablas.
- **Clave candidata:** superclave mínima.
- **Clave foránea:** atributo o conjunto de atributos que referencia una clave.
- **Clave primaria:** clave elegida para identificar las filas de una tabla.
- **NoSQL:** familia de sistemas de bases de datos no relacionales.
- **Normalización:** proceso de organización de relaciones para reducir redundancias y anomalías.
- **ORM:** mapeo objeto-relacional.
- **Replicación:** mantenimiento de copias de datos en varios nodos.
- **SGBD:** sistema gestor de bases de datos.
- **Sharding:** particionado horizontal de datos entre nodos.
- **Tupla:** fila de una relación.
- **Transacción:** unidad lógica de trabajo sobre una base de datos.
- **Vista:** representación lógica basada en una consulta.

---

## 12. Test de autoevaluación

**Instrucciones:** selecciona una respuesta por pregunta. Las soluciones razonadas aparecen al final.

### Preguntas

**1. ¿Qué diferencia existe entre una base de datos y un SGBD?**

A. Son dos nombres para el mismo concepto.  
B. La base de datos contiene los datos y el SGBD proporciona los mecanismos para gestionarlos.  
C. El SGBD contiene únicamente copias de seguridad.  
D. La base de datos es el programa que ejecuta SQL.

**2. ¿Qué nivel de la arquitectura ANSI/SPARC describe la organización física de los datos?**

A. Externo.  
B. Conceptual.  
C. Interno.  
D. De aplicación.

**3. ¿Qué es una clave foránea?**

A. Una clave que identifica necesariamente de forma única cada fila de su propia tabla.  
B. Un atributo o conjunto de atributos que referencia una clave de otra tabla o de la misma tabla.  
C. Una clave que solo se utiliza para ordenar resultados.  
D. Un índice que no puede contener valores nulos.

**4. ¿Qué restricción SQL impide que una columna admita valores nulos?**

A. `UNIQUE`.  
B. `DEFAULT`.  
C. `NOT NULL`.  
D. `CHECK`.

**5. ¿Cuál es el objetivo principal de la normalización?**

A. Aumentar siempre el número de tablas sin criterio.  
B. Reducir redundancias y anomalías de inserción, actualización y borrado.  
C. Eliminar todas las claves foráneas.  
D. Sustituir SQL por un lenguaje de programación.

**6. ¿Qué grupo de SQL incluye instrucciones como `CREATE` y `ALTER`?**

A. DDL.  
B. DML.  
C. DCL.  
D. TCL.

**7. ¿Qué propiedad ACID garantiza que una transacción se realiza por completo o no se aplica?**

A. Consistencia.  
B. Aislamiento.  
C. Durabilidad.  
D. Atomicidad.

**8. ¿Qué nivel de aislamiento SQL evita las lecturas sucias, pero puede permitir lecturas no repetibles?**

A. READ UNCOMMITTED.  
B. READ COMMITTED.  
C. SERIALIZABLE.  
D. Ninguno.

**9. ¿Qué caracteriza a una base de datos orientada a objetos?**

A. Almacena exclusivamente pares clave-valor.  
B. Representa objetos con identidad, estado y comportamiento.  
C. Solo admite tablas y claves foráneas.  
D. No permite relaciones entre datos.

**10. ¿Cuál de los siguientes es un modelo NoSQL documental?**

A. MongoDB.  
B. PostgreSQL.  
C. Oracle Database.  
D. SQLite.

**11. ¿Qué modelo NoSQL representa entidades mediante nodos y relaciones mediante aristas?**

A. Clave-valor.  
B. Documental.  
C. Grafo.  
D. Relacional tradicional.

**12. ¿Qué significa la P del teorema CAP?**

A. Persistencia.  
B. Partición de red o tolerancia a particiones.  
C. Procesamiento.  
D. Privacidad.

**13. ¿Qué es el sharding?**

A. Cifrar los datos almacenados.  
B. Dividir los datos entre varios nodos.  
C. Crear una copia de seguridad completa.  
D. Convertir tablas en objetos.

**14. ¿Cuál es la diferencia entre replicación y copia de seguridad?**

A. Son exactamente lo mismo.  
B. La replicación mantiene copias operativas; el backup permite recuperar datos ante pérdidas o cambios no deseados.  
C. El backup solo se utiliza en bases NoSQL.  
D. La replicación siempre conserva versiones históricas.

**15. ¿Qué sistema es un motor relacional embebido que habitualmente no necesita un servidor independiente?**

A. Cassandra.  
B. Neo4j.  
C. SQLite.  
D. Redis.

### Soluciones razonadas

| Pregunta | Respuesta | Explicación |
|---|---|---|
| 1 | **B** | La base de datos contiene los datos y el gestor proporciona herramientas y mecanismos para administrarlos. |
| 2 | **C** | El nivel interno describe la organización física del almacenamiento. |
| 3 | **B** | La clave foránea establece una referencia a una clave de otra tabla o de la misma tabla. |
| 4 | **C** | `NOT NULL` impide que la columna contenga valores nulos. |
| 5 | **B** | La normalización reduce duplicidades y anomalías de modificación. |
| 6 | **A** | DDL define o modifica estructuras de la base de datos. |
| 7 | **D** | Atomicidad significa todo o nada para la transacción. |
| 8 | **B** | READ COMMITTED evita lecturas sucias, aunque permite otros fenómenos según el motor. |
| 9 | **B** | El modelo orientado a objetos utiliza identidad, estado y comportamiento. |
| 10 | **A** | MongoDB es un SGBD documental. |
| 11 | **C** | Las bases de grafos utilizan nodos y aristas para representar entidades y relaciones. |
| 12 | **B** | P corresponde a tolerancia a particiones de red. |
| 13 | **B** | El sharding distribuye partes del conjunto de datos entre nodos. |
| 14 | **B** | Una réplica puede propagar errores o borrados; el backup permite recuperar estados anteriores. |
| 15 | **C** | SQLite es un motor relacional embebido y ligero. |

---

## 13. Orientación para estudiar

Para preparar este tema de cara al examen TAI, conviene dominar especialmente:

1. **Conceptos y arquitectura:** diferencia entre BD y SGBD, componentes y arquitectura ANSI/SPARC.
2. **Modelo relacional:** relaciones, atributos, tuplas, claves, restricciones e integridad referencial.
3. **Normalización:** 1FN, 2FN, 3FN y FNBC; saber explicar qué anomalías se intentan evitar.
4. **SQL:** grupos DDL, DML, DCL y TCL; consultas, `JOIN`, restricciones y transacciones.
5. **ACID y concurrencia:** propiedades, niveles de aislamiento, bloqueos y problemas de concurrencia.
6. **Orientación a objetos:** identidad, clases, objetos, encapsulación, herencia y polimorfismo.
7. **NoSQL:** distinguir clave-valor, documental, columnas y grafos, con ejemplos.
8. **CAP y distribución:** consistencia, disponibilidad, tolerancia a particiones, replicación y sharding.
9. **Administración:** roles, seguridad, índices, copias de seguridad, recuperación y alta disponibilidad.

### Propuesta de repaso

- **Primera vuelta:** estudia los conceptos de base de datos, SGBD y arquitectura.
- **Segunda vuelta:** trabaja el modelo relacional, las claves, las restricciones y la normalización.
- **Tercera vuelta:** practica SQL y repasa ACID y concurrencia.
- **Cuarta vuelta:** compara bases orientadas a objetos y los cuatro modelos NoSQL.
- **Cierre:** realiza el test sin consultar los apuntes y revisa las explicaciones de los errores.
