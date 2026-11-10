# Tema 6. Arquitectura de sistemas cliente/servidor y multicapas: componentes y operación. Arquitecturas de servicios web y protocolos asociados. Programas para control de versiones. Metodologías de desarrollo. Pruebas.

## 1. Cliente/servidor
El cliente solicita servicios y el servidor los proporciona. El navegador puede actuar como cliente y un servidor web procesar la petición, ejecutar lógica y consultar datos. El modelo facilita compartir recursos, pero depende de la red y requiere gestionar fallos.

## 2. Arquitecturas por capas
- Dos capas: cliente y servidor.
- Tres capas: presentación, lógica de negocio y datos.
- N capas: añade servicios, integración, caché, mensajería u otras responsabilidades.

Capas lógicas no equivalen necesariamente a máquinas físicas: pueden coexistir en un servidor o distribuirse. La separación facilita mantenimiento y escalado, aunque añade comunicaciones y complejidad.

## 3. Servicios web
Permiten interoperabilidad a través de redes:
- **SOAP:** mensajería estructurada en XML, con contratos y extensiones WS-*.
- **REST:** estilo basado en recursos identificados mediante URI y operaciones HTTP.
- **JSON/XML:** formatos de intercambio.
- **WSDL:** descripción de servicios SOAP.
- **OpenAPI:** descripción de APIs HTTP.

Métodos HTTP: GET, POST, PUT, PATCH y DELETE. Códigos: 2xx éxito, 3xx redirección, 4xx problema de solicitud y 5xx error del servidor.

## 4. Protocolos y seguridad
TLS protege el transporte cuando está correctamente configurado. Se aplican autenticación, autorización, validación, limitación de solicitudes, registro y protección de datos sensibles.

## 5. Control de versiones
Git es un sistema distribuido. Conceptos:
- Repositorio: historial y objetos.
- Commit: conjunto coherente de cambios.
- Branch: línea de trabajo.
- Merge: integración.
- Rebase: reaplicación de commits sobre otra base.
- Tag: referencia identificable.
- Remote: repositorio remoto.

Flujo: clonar, crear rama, modificar, `add`, `commit`, sincronizar y `push`. GitHub, GitLab y Bitbucket añaden alojamiento y colaboración. Buenas prácticas: commits pequeños, ramas breves y revisión por pares.

## 6. Metodologías
- Cascada: fases secuenciales.
- Iterativa/incremental: entregas sucesivas.
- Espiral: ciclos guiados por riesgos.
- RUP: iterativo, centrado en arquitectura y casos de uso.
- Ágil: colaboración, entregas frecuentes y adaptación.
- Scrum: Product Owner, Scrum Master, Developers, Sprint y backlogs.
- Kanban: visualiza flujo y limita trabajo en curso.
- DevOps: colaboración entre desarrollo y operaciones, automatización y observabilidad.

## 7. Pruebas
- Unitarias: unidades aisladas.
- Integración: interacción entre módulos.
- Sistema: producto completo.
- Aceptación: necesidades del usuario.
- Regresión: evita reintroducir defectos.
- Rendimiento: carga, estrés y escalabilidad.
- Seguridad: vulnerabilidades.
- Usabilidad/accesibilidad: calidad de interacción.

Caja negra evalúa comportamiento sin conocer implementación; caja blanca considera estructura interna; caja gris combina ambas.

## Resumen
Cliente/servidor distribuye solicitudes. Las capas separan responsabilidades. Los servicios web permiten interoperar; Git controla versiones; metodologías organizan trabajo y pruebas verifican calidad.

## Preguntas
1. ¿Cuáles son las tres capas clásicas?
2. ¿Qué formato utiliza SOAP?
3. ¿Qué diferencia hay entre Git y GitHub?
4. ¿Quién maximiza el valor del producto en Scrum?
5. ¿Qué comprueba una prueba de regresión?

**Respuestas:** 1) Presentación, negocio y datos. 2) XML. 3) Git es el sistema de versiones; GitHub una plataforma colaborativa. 4) Product Owner. 5) Que cambios no rompan funciones existentes.
