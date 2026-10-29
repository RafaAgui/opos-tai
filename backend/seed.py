
from app.database import get_connection, init_db


def cargar_datos_prueba() -> None:
    """Inserta un bloque y dos temas ficticios para probar la aplicación."""

    init_db()

    connection = get_connection()

    try:
        # Creamos un bloque de prueba si todavía no existe.
        connection.execute(
            """
            INSERT OR IGNORE INTO bloques (nombre, orden)
            VALUES (?, ?)
            """,
            ("BLOQUE DE PRUEBA (NO OFICIAL)", 9999),
        )

        bloque = connection.execute(
            "SELECT id FROM bloques WHERE orden = ?",
            (9999,),
        ).fetchone()

        bloque_id = bloque["id"]

        # Insertamos dos temas ficticios.
        temas = [
            (
                bloque_id,
                1,
                "Tema de prueba: introducción a la informática",
                "Contenido ficticio para comprobar la base de datos.",
            ),
            (
                bloque_id,
                2,
                "Tema de prueba: fundamentos de programación",
                "Contenido ficticio para comprobar las consultas.",
            ),
        ]

        connection.executemany(
            """
            INSERT OR IGNORE INTO temas
                (bloque_id, numero, titulo, contenido)
            VALUES (?, ?, ?, ?)
            """,
            temas,
        )

        connection.commit()

        print("Datos de prueba cargados correctamente.")

    finally:
        connection.close()


if __name__ == "__main__":
    cargar_datos_prueba()
