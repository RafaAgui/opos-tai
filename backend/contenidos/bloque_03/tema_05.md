# Tema 5. Arquitectura Java EE/Jakarta EE y plataforma .NET: componentes, persistencia y seguridad. Características, elementos, lenguajes y funciones en ambos entornos. Desarrollo de interfaces.

## 1. Plataformas empresariales
Jakarta EE y .NET son plataformas para construir aplicaciones empresariales. Ofrecen APIs, bibliotecas y servicios de persistencia, transacciones, seguridad, mensajería y desarrollo web. No son lenguajes.

## 2. Java EE / Jakarta EE
Java EE pasó a llamarse Jakarta EE tras su transferencia a Eclipse Foundation. Las APIs actuales usan `jakarta.*`; aplicaciones antiguas pueden usar `javax.*`, por lo que la migración requiere revisar compatibilidad.

Elementos:
- **JVM:** ejecuta bytecode Java.
- **JDK:** herramientas de desarrollo.
- **Servidor de aplicaciones/contenedor:** gestiona componentes y servicios.

Tecnologías:
- Servlets: peticiones y respuestas HTTP.
- Jakarta RESTful Web Services: APIs REST.
- Jakarta Persistence (JPA): persistencia objeto-relacional.
- Enterprise Beans: componentes empresariales.
- Jakarta Messaging: mensajería.
- Bean Validation: validación declarativa.

## 3. Plataforma .NET
.NET es multiplataforma. El **CLR** gestiona ejecución, memoria, excepciones y recolección de basura. Los lenguajes se compilan normalmente a **CIL**; CTS define el sistema común de tipos y CLS reglas de interoperabilidad. BCL proporciona bibliotecas base. Lenguajes: C#, F# y Visual Basic .NET. ASP.NET Core se utiliza para aplicaciones web y APIs.

## 4. Comparación
| Aspecto | Jakarta EE | .NET |
|---|---|---|
| Lenguaje habitual | Java | C# |
| Entorno | JVM | CLR |
| Código intermedio | Bytecode | CIL |
| Web | Servlets, REST | ASP.NET Core |
| Persistencia | JPA | ADO.NET, Entity Framework Core |

Ambas admiten arquitecturas por capas, servicios web y acceso a datos.

## 5. Componentes y capas
Una aplicación empresarial separa normalmente presentación, lógica de negocio y persistencia/integración. Esta separación facilita pruebas y mantenimiento. Los componentes deben tener responsabilidades claras y contratos definidos.

## 6. Persistencia
JDBC permite acceso Java a bases relacionales; JPA ofrece mapeo objeto-relacional. ADO.NET proporciona acceso a datos en .NET y Entity Framework Core actúa como ORM. Conceptos: entidad, clave primaria, transacción, contexto/unidad de trabajo, mapeo y migraciones. Un ORM no elimina la necesidad de conocer SQL e índices.

## 7. Seguridad
Autenticación comprueba identidad; autorización determina permisos. Otros controles: mínimo privilegio, sesiones seguras, validación de entradas, consultas parametrizadas, protección de secretos, TLS, registro de eventos y actualización de dependencias.

## 8. Desarrollo de interfaces
Las interfaces pueden ser web, API, escritorio o móvil. Deben ofrecer validación, mensajes comprensibles, navegación coherente y accesibilidad. Las APIs definen contratos, métodos, códigos HTTP, formatos y errores.

## Resumen
Jakarta EE y .NET son plataformas, no lenguajes. Java/JVM/bytecode se asocian a Jakarta; C#/CLR/CIL a .NET. Ambas ofrecen componentes, persistencia y seguridad.

## Preguntas
1. ¿Qué nombre sustituyó a Java EE?
2. ¿Qué ejecuta bytecode Java?
3. ¿Qué gestiona el CLR?
4. ¿Qué significa ORM?
5. Diferencia autenticación/autorización.

**Respuestas:** 1) Jakarta EE. 2) JVM. 3) Ejecución y servicios como memoria y excepciones. 4) Mapeo objeto-relacional. 5) Verificar identidad/determinar permisos.
