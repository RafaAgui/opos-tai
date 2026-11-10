# Tema 9. Repositorios: estructura y actualización. Generación de código y documentación. Metodologías de desarrollo. Pruebas.

## 1. Repositorios
Un repositorio almacena código, historial y metadatos. Puede ser local o remoto. Suele incluir código, ramas, etiquetas, documentación, pruebas, configuración y canalizaciones. Conviene separar código de producción, pruebas, documentación y recursos, y excluir credenciales y archivos temporales.

## 2. Actualización y colaboración
En Git:
- `fetch`: obtiene referencias remotas sin integrar.
- `pull`: descarga e integra cambios.
- `push`: publica commits.
- `merge`: integra historiales.
- `rebase`: reaplica commits sobre otra base.
- `tag`: crea una referencia identificable.

Flujo: actualizar rama principal, crear rama de tarea, modificar y probar, confirmar commits, publicar, abrir pull/merge request, revisar, integrar y limpiar ramas. Los conflictos requieren revisar el resultado y ejecutar pruebas.

## 3. Generación de código y construcción
La generación produce código a partir de modelos, plantillas o esquemas. La construcción transforma fuentes y recursos en artefactos mediante compilación, resolución de dependencias y empaquetado.

Herramientas: Maven y Gradle (Java), MSBuild y `dotnet` (.NET), npm y herramientas relacionadas (JavaScript/TypeScript), Make y sistemas nativos. El código generado debe revisarse y mantenerse bajo control.

## 4. Integración y entrega
- **CI (integración continua):** integrar frecuentemente y ejecutar automáticamente compilación y pruebas.
- **Continuous Delivery:** mantener el producto listo para desplegar; la producción puede requerir aprobación.
- **Continuous Deployment:** desplegar automáticamente cambios que superan los controles.

Una canalización puede incluir checkout, dependencias, análisis estático, compilación, pruebas, empaquetado, análisis de seguridad y despliegue.

## 5. Documentación
Tipos: técnica (arquitectura, módulos, APIs), código, usuario, instalación/operación, despliegue y contratos de API. Debe versionarse y revisarse junto con el código. Los comentarios explican decisiones y aspectos no evidentes, no repiten literalmente las instrucciones.

## 6. Metodologías
Cascada organiza fases secuenciales; iterativo/incremental entrega versiones sucesivas; espiral prioriza riesgos; RUP es iterativo y centrado en arquitectura/casos de uso. Scrum organiza Sprints y backlogs; Kanban visualiza flujo y limita trabajo en curso. La elección depende de criticidad, requisitos, equipo y contexto.

## 7. Pruebas y calidad
Niveles: unitarias, integración, sistema, aceptación y regresión. Otras pruebas: rendimiento, seguridad, accesibilidad y usabilidad. Caja negra evalúa comportamiento externo; caja blanca considera estructura interna; caja gris combina ambas. La automatización mejora repetibilidad, pero no sustituye todas las pruebas exploratorias.

Indicadores posibles: cobertura, frecuencia de despliegue, tiempo de cambio, tasa de fallos y tiempo de recuperación. Deben interpretarse en contexto.

## 8. Gestión de configuración y versiones
Controla código, dependencias, configuración, documentación e infraestructura. El versionado semántico suele usar `MAJOR.MINOR.PATCH`: cambios incompatibles, nuevas funciones compatibles y correcciones compatibles.

## Resumen
Los repositorios mantienen código e historial. CI automatiza integración y pruebas; entrega continua prepara versiones para producción y despliegue continuo automatiza su publicación. Documentación, pruebas y configuración sostienen la calidad.

## Preguntas
1. Diferencia `fetch` y `pull`.
2. ¿Qué persigue CI?
3. Diferencia entrega continua y despliegue continuo.
4. ¿Qué representa PATCH?
5. ¿Por qué versionar documentación?

**Respuestas:** 1) Fetch descarga referencias; pull descarga e integra. 2) Integrar cambios y validar automáticamente. 3) Delivery puede requerir aprobación; Deployment automatiza la puesta en producción. 4) Correcciones compatibles. 5) Para mantenerla sincronizada y trazable.
