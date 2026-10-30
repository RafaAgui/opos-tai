
from app.database import get_connection, init_db


# Temario oficial TAI - AGE - C1
# Resolución de 18 de diciembre de 2025
# BOE-A-2025-26262, Anexo V, apartado 3.

BLOQUES = [
    {
        "nombre": "I. Organización del Estado y Administración electrónica",
        "orden": 1,
        "temas": [
            "La Constitución Española de 1978. Derechos y deberes fundamentales. Su garantía y suspensión. La Corona: funciones constitucionales del Rey.",
            "Las Cortes Generales: atribuciones del Congreso de los Diputados y del Senado. El Tribunal Constitucional: composición y atribuciones. El Defensor del Pueblo.",
            "El Gobierno: composición, nombramiento y cese. Las funciones del Gobierno. Relaciones entre el Gobierno y las Cortes Generales.",
            "El texto refundido del Estatuto Básico del Empleo Público y demás normativa de aplicación: derechos y deberes, formas de provisión de puestos, promoción interna y carrera profesional; situaciones administrativas, incompatibilidades y régimen sancionador. La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno. La Agenda 2030 y los Objetivos de Desarrollo Sostenible.",
            "Políticas de igualdad y contra la violencia de género. Políticas de igualdad de trato y no discriminación de las personas LGTBI. Discapacidad y dependencia: régimen jurídico.",
            "La sociedad de la información. Identidad y firma electrónica: régimen jurídico. El DNI electrónico. La Agenda Digital para España.",
            "La protección de datos personales y su régimen jurídico: principios, derechos y obligaciones. Derechos digitales.",
            "Acceso electrónico de los ciudadanos a los servicios públicos y normativa de desarrollo. La gestión electrónica de los procedimientos administrativos: registros, notificaciones y uso de medios electrónicos. Esquema Nacional de Seguridad y de Interoperabilidad. Normas técnicas de Interoperabilidad.",
            "Instrumentos para el acceso electrónico a las Administraciones públicas: sedes electrónicas, canales y puntos de acceso, identificación y autenticación. Infraestructuras y servicios comunes en materia de administración electrónica.",
        ],
    },
    {
        "nombre": "II. Tecnología básica",
        "orden": 2,
        "temas": [
            "Informática básica. Representación y comunicación de la información: elementos constitutivos de un sistema de información. Características y funciones. Arquitectura de ordenadores. Componentes internos de los equipos microinformáticos.",
            "Periféricos: conectividad y administración. Elementos de impresión. Elementos de almacenamiento. Elementos de visualización y digitalización.",
            "Tipos abstractos y Estructuras de datos. Organizaciones de ficheros. Algoritmos. Formatos de información y ficheros.",
            "Sistemas operativos. Características y elementos constitutivos. Sistemas Windows. Sistemas Unix y Linux. Sistemas operativos para dispositivos móviles.",
            "Sistemas de gestión de bases de datos relacionales, orientados a objetos y NoSQL: características y componentes.",
        ],
    },
    {
        "nombre": "III. Desarrollo de sistemas",
        "orden": 3,
        "temas": [
            "Modelado de datos, metodologías y reglas. Entidades, atributos y relaciones. Diseño de bases de datos. Diseño lógico y físico. El modelo lógico relacional. Normalización.",
            "Lenguajes de programación. Representación de tipos de datos. Operadores. Instrucciones condicionales. Bucles y recursividad. Procedimientos, funciones y parámetros. Vectores y registros. Estructura de un programa.",
            "Lenguajes de interrogación de bases de datos. Estándar ANSI SQL. Procedimientos almacenados. Eventos y disparadores.",
            "Diseño y programación orientada a objetos. Elementos y componentes software: objetos, clases, herencia, métodos, sobrecarga. Ventajas e inconvenientes. Patrones de diseño y lenguaje de modelado unificado (UML).",
            "Arquitectura Java EE/Jakarta EE y plataforma .NET: componentes, persistencia y seguridad. Características, elementos, lenguajes y funciones en ambos entornos. Desarrollo de interfaces.",
            "Arquitectura de sistemas cliente/servidor y multicapas: componentes y operación. Arquitecturas de servicios web y protocolos asociados.",
            "Aplicaciones web. Desarrollo web front-end y en servidor, multiplataforma y multidispositivo. Lenguajes: HTML, XML y sus derivaciones. Navegadores y lenguajes de programación web. Lenguajes de script.",
            "Accesibilidad, diseño universal y usabilidad. Acceso y usabilidad de las tecnologías, productos y servicios relacionados con la sociedad de la información. Confidencialidad y disponibilidad de la información en puestos de usuario final. Conceptos de seguridad en el desarrollo de los sistemas.",
            "Repositorios: estructura y actualización. Generación de código y documentación. Metodologías de desarrollo. Pruebas. Programas para control de versiones. Plataformas de desarrollo colaborativo de software.",
        ],
    },
    {
        "nombre": "IV. Sistemas y comunicaciones",
        "orden": 4,
        "temas": [
            "Administración del Sistema operativo y software de base. Actualización, mantenimiento y reparación del sistema operativo.",
            "Administración de bases de datos. Sistemas de almacenamiento y su virtualización. Políticas, sistemas y procedimientos de backup y su recuperación. Backup de sistemas físicos y virtuales. Virtualización de sistemas y virtualización de puestos de usuario.",
            "Administración de servidores de correo electrónico sus protocolos. Administración de contenedores y microservicios.",
            "Administración de redes de área local. Gestión de usuarios. Gestión de dispositivos. Monitorización y control de tráfico.",
            "Conceptos de seguridad de los sistemas de información. Seguridad física. Seguridad lógica. Amenazas y vulnerabilidades. Técnicas criptográficas y protocolos seguros. Mecanismos de firma digital. Infraestructura física de un CPD: acondicionamiento y equipamiento. Sistemas de gestión de incidencias. Control remoto de puestos de usuario.",
            "Comunicaciones. Medios de transmisión. Modos de comunicación. Equipos terminales y equipos de interconexión y conmutación. Redes de comunicaciones. Redes de conmutación y redes de difusión. Comunicaciones móviles e inalámbricas.",
            "El modelo TCP/IP y el modelo de referencia de interconexión de sistemas abiertos (OSI) de ISO. Protocolos TCP/IP.",
            "Internet: arquitectura de red. Origen, evolución y estado actual. Principales servicios. Protocolos HTTP, HTTPS y SSL/TLS.",
            "Seguridad y protección en redes de comunicaciones. Seguridad perimetral. Acceso remoto seguro a redes. Redes privadas virtuales (VPN). Seguridad en el puesto del usuario.",
            "Redes locales. Tipología. Técnicas de transmisión. Métodos de acceso. Dispositivos de interconexión.",
        ],
    },
]


def cargar_temario() -> None:
    """Carga los 33 temas oficiales sin duplicarlos."""

    init_db()
    connection = get_connection()

    try:
        with connection:
            # Eliminamos únicamente el bloque ficticio anterior.
            connection.execute(
                """
                DELETE FROM temas
                WHERE bloque_id IN (
                    SELECT id FROM bloques WHERE orden = 9999
                )
                """
            )
            connection.execute(
                "DELETE FROM bloques WHERE orden = 9999"
            )

            total_temas = 0

            for bloque in BLOQUES:
                connection.execute(
                    """
                    INSERT INTO bloques (nombre, orden)
                    VALUES (?, ?)
                    ON CONFLICT(orden)
                    DO UPDATE SET nombre = excluded.nombre
                    """,
                    (bloque["nombre"], bloque["orden"]),
                )

                fila = connection.execute(
                    "SELECT id FROM bloques WHERE orden = ?",
                    (bloque["orden"],),
                ).fetchone()

                bloque_id = fila["id"]

                for numero, titulo in enumerate(
                    bloque["temas"], start=1
                ):
                    connection.execute(
                        """
                        INSERT INTO temas
                            (bloque_id, numero, titulo, contenido)
                        VALUES (?, ?, ?, NULL)
                        ON CONFLICT(bloque_id, numero)
                        DO UPDATE SET titulo = excluded.titulo
                        """,
                        (bloque_id, numero, titulo),
                    )

                    total_temas += 1

        print("Temario oficial cargado correctamente.")
        print(f"Bloques: {len(BLOQUES)}")
        print(f"Temas: {total_temas}")

    finally:
        connection.close()


if __name__ == "__main__":
    cargar_temario()
