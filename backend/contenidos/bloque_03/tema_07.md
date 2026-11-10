# Tema 7. Aplicaciones web, multiplataforma y multidispositivo. Desarrollo web front-end y en servidor. Lenguajes: HTML, XML y derivaciones. Navegadores y lenguajes de programación web. Lenguajes de script.

## 1. Aplicaciones web
Se utilizan mediante un navegador y suelen comunicarse por HTTP/HTTPS. Flujo típico: navegador solicita recurso; servidor o proxy recibe; aplicación procesa reglas y datos; devuelve respuesta; navegador interpreta HTML, CSS y JavaScript.

## 2. Front-end y servidor
**Front-end:** interfaz ejecutada principalmente en navegador: estructura, estilos, interacción y llamadas a APIs. **Back-end:** lógica de negocio, autenticación, autorización, persistencia e integración. La validación cliente mejora experiencia, pero el servidor debe validar siempre porque el cliente no es confiable.

## 3. HTML
HTML estructura semánticamente documentos web mediante elementos y atributos. Elementos semánticos: `header`, `nav`, `main`, `article`, `section` y `footer`.
```html
<main>
  <h1>Catálogo</h1>
  <article><h2>Producto</h2><p>Descripción</p></article>
</main>
```
Buenas prácticas: encabezados coherentes, etiquetas semánticas, textos alternativos y controles correctamente etiquetados.

## 4. CSS y diseño adaptable
CSS controla presentación. Diseño responsive usa unidades flexibles, media queries, Flexbox y Grid para adaptarse a pantallas. Multiplataforma implica funcionar en distintos sistemas; multidispositivo, adaptarse a móviles, tabletas y ordenadores, considerando interacción, rendimiento y accesibilidad.

## 5. JavaScript y TypeScript
JavaScript es el lenguaje principal del navegador: manipula DOM, gestiona eventos y consume APIs con Fetch. Conceptos: variables, tipos, funciones, objetos, propagación de eventos, promesas, `async/await` y módulos. TypeScript añade tipos estáticos y se transforma a JavaScript.

Lenguajes de servidor habituales: Java, C#, Python, PHP, JavaScript/Node.js y Ruby.

## 6. XML y derivados
XML es un metalenguaje extensible para estructurar datos mediante etiquetas. Un documento bien formado tiene raíz única, etiquetas anidadas y cerradas, atributos entre comillas y distingue mayúsculas/minúsculas.

Tecnologías:
- DTD: define estructura.
- XSD/XML Schema: estructura y tipos.
- XPath: selecciona nodos.
- XSLT: transforma XML.
- Namespaces: evitan colisiones.
- SOAP: mensajes XML.

HTML se orienta a documentos web; XML al intercambio estructurado. XHTML aplica reglas XML a HTML.

## 7. Navegadores
Obtienen recursos, interpretan HTML, calculan estilos, construyen representación visual, ejecutan JavaScript y presentan la página. Incluyen motor de renderizado, motor JavaScript, caché, almacenamiento y herramientas de desarrollo. Los estándares favorecen interoperabilidad; se debe probar en distintos navegadores.

## 8. Seguridad web
HTTPS, validación en servidor, codificación de salida frente a XSS, consultas parametrizadas frente a inyección SQL, protección CSRF, cookies seguras, política de mismo origen, CORS restrictivo, CSP y dependencias actualizadas.

## Resumen
HTML estructura, CSS presenta y JavaScript añade comportamiento. XML estructura datos y se apoya en XSD, XPath y XSLT. Front-end gestiona interfaz; back-end lógica y datos.

## Preguntas
1. ¿Qué hace HTML?
2. Diferencia front-end/back-end.
3. ¿Qué define tipos y estructura XML?
4. ¿Qué lenguaje manipula DOM?
5. ¿Por qué validar también en servidor?

**Respuestas:** 1) Estructura semántica. 2) Interfaz frente a lógica/servicios. 3) XSD. 4) JavaScript. 5) El cliente puede manipularse.
