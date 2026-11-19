# AGENTS.md - Guía de Entorno y Arquitectura de Opus TAI

Este documento proporciona las especificaciones técnicas, convenciones de diseño y procedimientos operativos necesarios para que cualquier agente de inteligencia artificial (o desarrollador) comprenda, opere y evolucione el proyecto **Opus TAI**.

---

## 1. Visión General del Proyecto

**Opus TAI** es una aplicación web concebida para la preparación integral de las oposiciones al Cuerpo de Técnicos Auxiliares de Informática de la Administración General del Estado (TAI - AGE, subgrupo C1).

### Objetivos y Funcionalidades Principales
- **Temario oficial:** Consulta de los 33 temas oficiales organizados en 4 bloques normativos (según Resolución de 18 de diciembre de 2025, BOE-A-2025-26262).
- **Seguimiento del estudio:** Registro del estado por tema (`pendiente`, `en curso`, `completado`).
- **Métricas y analítica:** Indicadores de progreso global, progreso por bloque y porcentaje de cobertura de contenidos Markdown importados.
- **Visualizador de apuntes:** Renderizado de contenido formativo redactado en Markdown con navegación secuencial (tema anterior/siguiente) y buscador interactivo con filtros combinados.
- **Módulos proyectados en UI:** Tests autoevaluativos y Asistente IA de tutorización.

---

## 2. Arquitectura del Repositorio

El repositorio está estructurado como un monorepo desacoplado:

```text
tai-inteligente/
├── AGENTS.md                    # Este archivo de especificaciones para agentes
├── README.md                    # Documentación general y arranque rápido
├── backend/                     # Backend API en Python (FastAPI + SQLite)
│   ├── app/
│   │   ├── __init__.py
│   │   ├── database.py          # Conexión SQLite, esquema, migraciones y consultas
│   │   └── main.py              # API FastAPI, middlewares (CORS), endpoints
│   ├── contenidos/              # Apuntes fuente en Markdown organizados por bloque
│   │   ├── bloque_02/           # tema_01.md a tema_05.md
│   │   └── bloque_03/           # tema_01.md a tema_09.md
│   ├── .venv/                   # Entorno virtual de Python
│   ├── cargar_contenido.py      # Script CLI para cargar Markdown en SQLite
│   ├── opos_tai.db              # Base de datos SQLite local
│   ├── requirements.txt         # Dependencias Python
│   └── seed.py                  # Carga del temario oficial e inicialización
├── frontend/                    # Frontend SPA en Angular 21
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/
│   │   │   │   └── services/
│   │   │   │       ├── api.ts   # Cliente HTTP y modelos TypeScript
│   │   │   │       └── api.spec.ts
│   │   │   ├── app.ts           # Componente raíz (Signals, estado y lógica)
│   │   │   ├── app.html         # Plantilla HTML con sintaxis moderna (@if, @for)
│   │   │   ├── app.scss         # Estilos SCSS del componente principal
│   │   │   ├── app.config.ts    # Proveedores globales (Router, HttpClient)
│   │   │   ├── app.routes.ts    # Enrutamiento de la aplicación
│   │   │   └── app.spec.ts      # Tests unitarios con Vitest
│   │   ├── styles.scss          # Estilos globales y maquetación de apuntes Markdown
│   │   ├── index.html           # HTML base
│   │   └── main.ts              # Bootstrap standalone de Angular
│   ├── angular.json             # Configuración de compilación y servidor Angular CLI
│   ├── package.json             # Dependencias npm y scripts (Angular 21, Vitest)
│   ├── tsconfig.json            # Configuración de TypeScript
│   └── .prettierrc              # Reglas de formateo de código
└── documentos/                  # Recursos y documentación auxiliar de estudio
```

---

## 3. Especificaciones del Backend

### 3.1 Tecnologías y Librerías
- **Lenguaje:** Python 3.10+ (probado en 3.11/3.12).
- **Framework Web:** [FastAPI](https://fastapi.tiangolo.com/) (0.162.x) con validación mediante [Pydantic v2](https://docs.pydantic.dev/).
- **Servidor ASGI:** [Uvicorn](https://www.uvicorn.org/) (0.54.x).
- **Base de Datos:** SQLite nativo mediante el módulo estándar `sqlite3`.

### 3.2 Persistencia y Esquema de Base de Datos
La base de datos se almacena en el archivo local `backend/opos_tai.db`.

#### Tablas
1. **`bloques`**:
   - `id INTEGER PRIMARY KEY AUTOINCREMENT`
   - `nombre TEXT NOT NULL`
   - `orden INTEGER NOT NULL UNIQUE` (Bloques 1 a 4)

2. **`temas`**:
   - `id INTEGER PRIMARY KEY AUTOINCREMENT`
   - `bloque_id INTEGER NOT NULL` (FK -> `bloques(id)`)
   - `numero INTEGER NOT NULL`
   - `titulo TEXT NOT NULL`
   - `contenido TEXT` (Texto Markdown o `NULL`)
   - `estado_estudio TEXT NOT NULL DEFAULT 'pendiente'` (Valores: `'pendiente'`, `'en curso'`, `'completado'`)
   - `UNIQUE(bloque_id, numero)`

#### Migraciones e Inicialización
- La función `init_db()` en `backend/app/database.py` crea las tablas si no existen y valida la presencia de columnas nuevas mediante `PRAGMA table_info(temas)`, aplicando `ALTER TABLE` si procede.
- Se ejecuta automáticamente durante el `lifespan` de FastAPI al arrancar el servidor.

### 3.3 Gestión de Datos y Scripts Auxiliares
- **`seed.py`**:
  - Poblador del temario oficial TAI (33 temas distribuidos en 4 bloques).
  - Emplea sentencias `ON CONFLICT` para garantizar idempotencia sin duplicar registros existentes ni pisar contenidos previos.
- **`cargar_contenido.py`**:
  - Script CLI que toma `<orden_bloque>` y `<numero_tema>`, busca el archivo `backend/contenidos/bloque_XX/tema_YY.md` (con formato de dos dígitos con ceros iniciales) y actualiza el campo `contenido` en SQLite codificado en `UTF-8`.
  - Ejemplo: `python cargar_contenido.py 2 1`.

### 3.4 Contrato de la API REST
El servidor corre por defecto en `http://localhost:8000` con CORS habilitado para `http://localhost:4200`.

| Método | Endpoint | Parámetros / Body | Descripción | Respuesta Exitosa |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Ninguno | Verificación de estado del servicio | `{"status": "ok", "application": "Opos TAI", "message": "..."}` |
| `GET` | `/api/temario` | Ninguno | Lista de bloques y sus temas asociados | `[{ id, nombre, orden, temas: [{ id, numero, titulo, contenido, estado_estudio }] }]` |
| `GET` | `/api/estadisticas/contenidos` | Ninguno | Cobertura de contenidos por bloque | `[{ bloque_id, nombre, total_temas, temas_con_contenido, temas_pendientes, porcentaje }]` |
| `GET` | `/api/temas/{tema_id}` | `tema_id: int` (path) | Detalle completo de un tema con bloque | `{ id, numero, titulo, contenido, estado_estudio, bloque: { id, nombre } }` |
| `PATCH` | `/api/temas/{tema_id}/estado` | `{"estado": "pendiente" \| "en curso" \| "completado"}` | Actualización de estado de estudio | `{"id": tema_id, "estado_estudio": "..."}` |

Documentación interactiva disponible en:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### 3.5 Procedimiento de Ejecución del Backend (PowerShell)
```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python seed.py
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

---

## 4. Especificaciones del Frontend

### 4.1 Tecnologías y Librerías
- **Framework:** [Angular 21](https://angular.dev/) (21.2.x).
- **Paradigma:** Standalone Components sin `NgModule`.
- **Manejo de Estado Reactivo:** [Angular Signals](https://angular.dev/guide/signals) (`signal`, `computed`, `update`).
- **Inyección de Dependencias:** Función `inject()` en lugar de constructores tradicionales.
- **Renderizado Markdown:** [`marked`](https://marked.js.org/) (18.1.x) para parsear el contenido Markdown a HTML seguro en tiempo real.
- **Hojas de Estilo:** SCSS modularizado con diseño adaptativo (CSS Grid y Flexbox).
- **Pruebas:** [Vitest](https://vitest.dev/) con `jsdom` (integrado nativamente con `@angular/build` en Angular 21).

### 4.2 Arquitectura y Componentes Clave
1. **Configuración (`src/app/app.config.ts`)**:
   - `provideHttpClient()` para habilitar peticiones HTTP.
   - `provideRouter(routes)` para gestión de rutas.
   - `provideBrowserGlobalErrorListeners()`.
2. **Servicio API (`src/app/core/services/api.ts`)**:
   - Centraliza todas las llamadas HTTP hacia `http://localhost:8000`.
   - Exporta tipos TypeScript estrictos: `EstadoEstudio`, `HealthResponse`, `Tema`, `BloqueTemario`, `ResumenContenido`, `DetalleTema`.
3. **Componente Principal (`src/app/app.ts`)**:
   - Totalmente reactivo mediante Signals:
     - `estadoBackend`, `respuestaBackend`, `backendConectado`.
     - `bloquesTemario`, `temaSeleccionado`, `resumenContenidos`.
     - `textoBusqueda`, `bloqueSeleccionado`, `estadoSeleccionado`.
     - Señales calculadas (`computed`): `totalTemas`, `temasCompletados`, `progresoGlobal`, `coberturaGlobal`, `contenidoHtml`, `bloquesFiltrados`, `todosLosTemas`, `hayTemaAnterior`, `hayTemaSiguiente`.
4. **Plantilla (`src/app/app.html`)**:
   - Emplea la sintaxis de flujo de control moderna: `@if (condicion)`, `@for (item of coleccion; track item.id)`, `@empty`.
5. **Estilos (`src/styles.scss` y `src/app/app.scss`)**:
   - `src/styles.scss` contiene reglas exhaustivas para las clases generadas por `marked` bajo `.tema-detalle__contenido` (encabezados, listas, tablas, bloques de código, citas y alertas).

### 4.3 Procedimiento de Ejecución del Frontend (PowerShell)
```powershell
cd frontend
npm install
npm start           # Inicia servidor de desarrollo en http://localhost:4200
npm run build       # Compila producción en frontend/dist/
npm test            # Ejecuta la suite de pruebas unitarias con Vitest
```

---

## 5. Instrucciones y Reglas de Desarrollo para Agentes IA

Cuando realices tareas en este repositorio, debes cumplir estrictamente las siguientes directrices:

### 5.1 Reglas para el Backend
1. **Tipado Estricto:** Utiliza anotaciones de tipos estándar de Python (`int`, `str`, `list[dict]`, `dict | None`, `Literal`) y modelos Pydantic para validar entradas y respuestas.
2. **Consultas SQL Seguras:** Usa siempre consultas parametrizadas con `?` para prevenir inyecciones SQL. Nunca concatenes cadenas dentro de consultas.
3. **Mantenimiento del Esquema SQLite:** Al añadir nuevas columnas o tablas en `app/database.py`, asegúrate de incluir cláusulas seguras (`IF NOT EXISTS` o verificación dinámica con `PRAGMA table_info`) para no romper bases de datos locales ya existentes (`opos_tai.db`).
4. **Codificación:** Todo archivo leído o escrito (especialmente contenidos Markdown en `contenidos/`) debe emplear codificación `utf-8`.
5. **Estructura de Apuntes:** Los archivos Markdown deben respetar estrictamente la convención de nombres:
   `backend/contenidos/bloque_{XX}/tema_{YY}.md` (con dos dígitos numéricos).

### 5.2 Reglas para el Frontend
1. **Convenciones de Angular 21:**
   - Mantén componentes `standalone: true`.
   - Utiliza la función `inject()` para dependencias.
   - Gestiona el estado local y derivado exclusivamente con `signal()` y `computed()`. No reintroduzcas suscripciones manuales innecesarias ni desincronices el estado.
   - Usa los bloques de sintaxis moderna `@if` y `@for (...; track ...)` en lugar de directivas clásicas (`*ngIf`, `*ngFor`).
2. **Tipado y Modelos Compartidos:**
   - Cualquier cambio en los endpoints del backend debe reflejarse inmediatamente en las interfaces de `frontend/src/app/core/services/api.ts`.
3. **Estilos y Maquetación:**
   - Utiliza variables y clases semánticas en SCSS.
   - Si se modifican elementos renderizados a partir de Markdown, verifica y adapta las reglas CSS en `frontend/src/styles.scss` bajo el selector `.tema-detalle__contenido`.
4. **Verificación:**
   - Ejecuta `npm run build` y `npm test` en `frontend/` tras realizar cambios importantes para certificar que el bundle y los tests se mantienen libres de errores.

### 5.3 Consideraciones de Entorno Windows
- El entorno operativo es **Windows**. Usa `powershell` para la ejecución de scripts.
- El entorno virtual de Python se ubica en `backend\.venv` y se activa con `.\.venv\Scripts\Activate.ps1`.
- En PowerShell, evita operadores no nativos de sh/bash como `&&` si la versión del shell no los soporta, o encadena comandos con `;` o llamadas consecutivas.
