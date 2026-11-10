# Tema 1. Modelado de datos, metodologías y reglas. Entidades, atributos y relaciones. Diseño de bases de datos. Diseño lógico y físico. El modelo lógico relacional. Normalización.

## 1. Modelado de datos
El modelado representa la información de una organización y las relaciones entre sus elementos. Se desarrolla en tres niveles:
- **Conceptual:** describe el dominio sin depender de un SGBD; identifica entidades, atributos y relaciones.
- **Lógico:** transforma el modelo conceptual en estructuras del modelo elegido, normalmente tablas, columnas, claves y restricciones.
- **Físico:** concreta almacenamiento, tipos, índices, particiones y opciones del SGBD.

## 2. Entidades, atributos y relaciones
Una **entidad** representa un concepto identificable (Persona, Expediente). Un **atributo** describe una propiedad (nombre, fecha). Una **relación** asocia entidades.
- 1:1: una persona y un expediente único.
- 1:N: un departamento tiene varios empleados.
- N:M: un alumno cursa varias asignaturas y una asignatura tiene varios alumnos.

En el modelo relacional una relación N:M se implementa con una tabla intermedia, por ejemplo `Matricula(id_alumno, id_asignatura, fecha)`.

## 3. Claves e integridad
- **Superclave:** identifica inequívocamente una fila.
- **Clave candidata:** superclave mínima.
- **Clave primaria (PK):** candidata seleccionada para identificar cada fila.
- **Clave foránea (FK):** referencia una clave de otra tabla.
- **Integridad de entidad:** PK única y no nula.
- **Integridad referencial:** las referencias deben apuntar a filas existentes, salvo reglas de nulabilidad.
- **Restricciones de dominio:** limitan los valores válidos.

## 4. Modelo relacional
Organiza los datos en tablas; las filas representan tuplas y las columnas atributos. Ejemplo:

```sql
CREATE TABLE Departamento (
  id INTEGER PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE
);
CREATE TABLE Empleado (
  id INTEGER PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  departamento_id INTEGER,
  FOREIGN KEY (departamento_id) REFERENCES Departamento(id)
);
```

Las decisiones de diseño incluyen tipos, nulabilidad, claves, restricciones y reglas de actualización o borrado (`CASCADE`, `RESTRICT`, `SET NULL`, según el SGBD).

## 5. Normalización
Busca reducir redundancia y anomalías:
- **Inserción:** no se puede añadir un dato sin otro no relacionado.
- **Actualización:** el mismo dato repetido debe cambiarse en muchas filas.
- **Borrado:** eliminar una fila provoca perder información adicional.

Formas normales:
1. **1FN:** atributos con valores atómicos; no listas repetidas dentro de una celda.
2. **2FN:** 1FN y ausencia de dependencias parciales de atributos no clave respecto de una clave candidata compuesta.
3. **3FN:** 2FN y ausencia de dependencias transitivas inadecuadas de atributos no clave respecto de claves candidatas.
4. **FNBC:** en toda dependencia funcional no trivial X → Y, X es superclave.

La desnormalización puede mejorar ciertas consultas, pero debe ser deliberada y mantener consistencia.

## 6. Proceso de diseño
1. Recoger requisitos y reglas del negocio.
2. Identificar entidades, atributos y relaciones.
3. Definir identificadores y cardinalidades.
4. Crear el modelo conceptual (por ejemplo, entidad-relación).
5. Transformarlo al modelo relacional.
6. Revisar claves, restricciones y normalización.
7. Diseñar índices y almacenamiento físico.
8. Validar con usuarios y consultas representativas.

## Resumen
El modelo conceptual describe el dominio; el lógico define estructuras; el físico concreta el almacenamiento. PK identifica filas y FK mantiene referencias. La normalización reduce duplicidades y anomalías.

## Preguntas
1. ¿Qué diferencia hay entre diseño lógico y físico?
2. ¿Qué cardinalidad existe entre pedidos y productos cuando cada pedido contiene varios productos y cada producto puede aparecer en varios pedidos?
3. ¿Para qué sirve una FK?
4. ¿Qué anomalía obliga a actualizar el mismo dato en muchas filas?
5. ¿Qué exige la 2FN?

**Respuestas:** 1) El lógico define estructuras; el físico las adapta al SGBD. 2) N:M. 3) Integridad referencial. 4) Actualización. 5) 1FN y ausencia de dependencias parciales de atributos no clave respecto de claves compuestas.
