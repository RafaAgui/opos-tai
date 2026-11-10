# Tema 4. Diseño y programación orientada a objetos. Elementos y componentes software: objetos, clases, herencia, métodos, sobrecarga. Ventajas e inconvenientes. Patrones de diseño y UML.

## 1. Conceptos
La programación orientada a objetos (POO) organiza el software en objetos que combinan estado y comportamiento.
- **Clase:** plantilla que define atributos y métodos.
- **Objeto:** instancia concreta.
- **Atributo:** dato que representa estado.
- **Método:** operación.
- **Constructor:** inicializa una instancia.

## 2. Principios
- **Encapsulación:** agrupa estado y comportamiento y controla el acceso.
- **Abstracción:** expone lo esencial y oculta detalles.
- **Herencia:** especializa una clase a partir de otra; debe reflejar una relación «es-un».
- **Polimorfismo:** permite tratar objetos distintos mediante una interfaz común.
- **Composición:** construye objetos combinando otros («tiene-un»); suele ser más flexible que jerarquías profundas.

## 3. Métodos y tipos
La **sobrecarga** declara métodos con el mismo nombre y parámetros diferentes, si el lenguaje lo permite. La **sobrescritura** redefine en una subclase un método heredado. Una interfaz define un contrato; una clase abstracta puede combinar contrato y comportamiento parcial.

## 4. Ventajas e inconvenientes
Ventajas: modularidad, encapsulación, reutilización y facilidad de evolución. Inconvenientes: abstracciones excesivas, jerarquías complejas, acoplamiento y costes de indirección. No es siempre el paradigma más adecuado para cualquier problema.

## 5. Principios SOLID
- **S:** responsabilidad única.
- **O:** abierto a extensión y cerrado a modificación.
- **L:** sustitución de Liskov.
- **I:** segregación de interfaces.
- **D:** inversión de dependencias.

Son orientaciones de diseño para mejorar cohesión y reducir acoplamiento.

## 6. Patrones de diseño
Soluciones reutilizables a problemas recurrentes:
- **Creacionales:** Factory Method, Abstract Factory, Builder, Singleton.
- **Estructurales:** Adapter, Facade, Decorator, Composite, Proxy.
- **Comportamiento:** Strategy, Observer, Command, Iterator, Template Method.

Ejemplos: Adapter adapta interfaces; Facade simplifica un subsistema; Strategy intercambia algoritmos; Observer notifica a suscriptores. Singleton restringe instancias, pero puede introducir estado global y dificultar pruebas.

## 7. UML
UML (Unified Modeling Language) es un lenguaje de modelado visual, no un lenguaje de programación ni una metodología.

Diagramas estructurales: clases, objetos, componentes y despliegue. Diagramas de comportamiento: casos de uso, actividades, estados y secuencia.

Relaciones: asociación, agregación (todo-parte débil), composición (todo-parte fuerte), generalización/herencia y dependencia. Los diagramas de secuencia muestran mensajes ordenados temporalmente; los de casos de uso muestran actores y funcionalidades.

## Resumen
La POO se apoya en clases, objetos, encapsulación, abstracción, herencia y polimorfismo. La composición evita jerarquías innecesarias. Los patrones describen soluciones recurrentes y UML representa estructura y comportamiento.

## Preguntas
1. Diferencia clase/objeto.
2. Diferencia sobrecarga/sobrescritura.
3. ¿Qué es polimorfismo?
4. ¿A qué familia pertenece Adapter?
5. ¿Qué es UML?

**Respuestas:** 1) Plantilla/instancia. 2) Mismo nombre con distinta lista de parámetros/redefinición heredada. 3) Uso de implementaciones distintas mediante un contrato común. 4) Estructural. 5) Lenguaje de modelado visual.
