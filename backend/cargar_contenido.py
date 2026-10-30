
from pathlib import Path
from app.database import get_connection

ARCHIVO_CONTENIDO = (
    Path(__file__).resolve().parent
    / "contenidos"
    / "bloque_II"
    / "tema_01.md"
)

TITULO_ESPERADO = (
    "Informática básica. Representación y comunicación de la información: "
    "elementos constitutivos de un sistema de información. Características "
    "y funciones. Arquitectura de ordenadores. Componentes internos de "
    "los equipos microinformáticos."
)


def cargar_contenido_tema() -> None:
    if not ARCHIVO_CONTENIDO.exists():
        raise FileNotFoundError(
            f"No se encuentra el archivo: {ARCHIVO_CONTENIDO}"
        )

    contenido = ARCHIVO_CONTENIDO.read_text(
        encoding="utf-8"
    ).strip()

    if not contenido:
        raise ValueError("El archivo de contenido está vacío.")

    with get_connection() as connection:

        # Localizamos el Bloque II.
        bloque = connection.execute(
            "SELECT id FROM bloques WHERE orden = ?",
            (2,)
        ).fetchone()

        if bloque is None:
            raise ValueError("No existe el Bloque II en la base de datos.")

        # Localizamos el Tema 1 dentro del Bloque II.
        tema = connection.execute(
            """
            SELECT id, titulo
            FROM temas
            WHERE bloque_id = ? AND numero = ?
            """,
            (bloque["id"], 1)
        ).fetchone()

        if tema is None:
            raise ValueError("No existe el Tema 1 del Bloque II.")

        if tema["titulo"] != TITULO_ESPERADO:
            raise ValueError(
                "El título del tema no coincide con el esperado. "
                "No se ha modificado la base de datos."
            )

        connection.execute(
            "UPDATE temas SET contenido = ? WHERE id = ?",
            (contenido, tema["id"])
        )

        print(f"Contenido guardado correctamente.")
        print(f"Tema: {tema['titulo']}")
        print(f"Caracteres guardados: {len(contenido)}")


if __name__ == "__main__":
    cargar_contenido_tema()
