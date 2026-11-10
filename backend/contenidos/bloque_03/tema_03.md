# Tema 3. Lenguajes de interrogación de bases de datos. Estándar ANSI SQL. Procedimientos almacenados. Eventos y disparadores.

## 1. SQL
SQL (Structured Query Language) permite definir, consultar y manipular bases relacionales. ANSI e ISO publican estándares; cada SGBD añade extensiones.
- **DDL:** definición: `CREATE`, `ALTER`, `DROP`.
- **DML:** manipulación: `INSERT`, `UPDATE`, `DELETE`.
- **DQL:** consultas, principalmente `SELECT`.
- **DCL:** permisos: `GRANT`, `REVOKE`.
- **TCL:** transacciones: `COMMIT`, `ROLLBACK`, `SAVEPOINT`.

## 2. Consultas
```sql
SELECT departamento_id, COUNT(*) AS total
FROM Empleado
WHERE activo = TRUE
GROUP BY departamento_id
HAVING COUNT(*) > 3
ORDER BY total DESC;
```
Orden lógico simplificado: FROM/JOIN, WHERE, GROUP BY, HAVING, SELECT y ORDER BY. `WHERE` filtra filas; `HAVING`, grupos. Agregaciones: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.

## 3. JOIN
- `INNER JOIN`: solo coincidencias.
- `LEFT JOIN`: todas las filas izquierdas y coincidencias derechas.
- `RIGHT JOIN`: equivalente simétrico.
- `FULL OUTER JOIN`: conserva filas de ambos lados.
- `CROSS JOIN`: producto cartesiano.

Las uniones suelen relacionar PK y FK. Una condición incorrecta puede multiplicar filas.

## 4. Subconsultas y conjuntos
Una subconsulta es una consulta anidada; puede devolver un escalar o varias filas. Operadores: `IN`, `EXISTS`, `ANY`, `ALL`. `UNION` combina resultados eliminando duplicados; `UNION ALL` los conserva. También existen `INTERSECT` y `EXCEPT`/`MINUS`, según producto.

## 5. Manipulación de datos
`INSERT` añade filas; `UPDATE` modifica; `DELETE` elimina. Antes de modificar o borrar, comprueba el filtro `WHERE`. Usa consultas parametrizadas, nunca concatenación insegura de entradas, para reducir inyección SQL.

## 6. Transacciones y ACID
Una transacción agrupa operaciones:
- **Atomicidad:** todas o ninguna.
- **Consistencia:** respeta reglas e invariantes.
- **Aislamiento:** controla interferencias concurrentes.
- **Durabilidad:** lo confirmado persiste.

`COMMIT` confirma y `ROLLBACK` revierte cambios no confirmados. Los niveles de aislamiento regulan lecturas sucias, no repetibles y fantasma.

## 7. Procedimientos almacenados
Conjunto de instrucciones guardado en el servidor, que puede aceptar parámetros y ejecutar lógica procedural. Ventajas: reutilización, centralización, menos viajes cliente-servidor y control de permisos. Inconvenientes: dependencia del SGBD y lógica distribuida entre aplicación y base de datos.

## 8. Funciones, disparadores y eventos
Una función almacenada devuelve un valor o conjunto de resultados. Un **trigger/disparador** se ejecuta automáticamente ante `INSERT`, `UPDATE` o `DELETE`; puede ser BEFORE, AFTER o INSTEAD OF según el motor. Se usa para auditoría o validaciones, pero puede ocultar efectos secundarios.

Un **evento programado** ejecuta una tarea según calendario; no debe confundirse con un trigger, que reacciona a un evento sobre datos. La sintaxis varía entre SGBD.

## 9. Buenas prácticas
Mínimo privilegio, consultas parametrizadas, roles, copias de seguridad probadas, índices según consultas reales y revisión de planes de ejecución.

## Resumen
SQL define, consulta y modifica datos. JOIN combina tablas; ACID caracteriza transacciones. Procedimientos encapsulan lógica; triggers reaccionan a cambios y eventos ejecutan tareas programadas.

## Preguntas
1. ¿Qué instrucción es DDL?
2. Diferencia WHERE/HAVING.
3. ¿Qué conserva LEFT JOIN?
4. ¿Qué garantiza atomicidad?
5. Diferencia trigger/evento programado.

**Respuestas:** 1) CREATE/ALTER/DROP. 2) WHERE filtra filas y HAVING grupos. 3) Todas las filas de la izquierda y las coincidentes de la derecha. 4) Aplicación completa o ninguna. 5) Trigger reacciona a cambios de datos; evento sigue una planificación temporal.
