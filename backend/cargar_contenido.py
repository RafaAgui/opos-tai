
import argparse
from pathlib import Path

from app.database import get_connection


DIRECTORIO_CONTENIDOS = (
    Path(__file__).resolve().parent / "contenidos"
)


def cargar_contenido_tema(
    orden_bloque: int,
    numero_tema: int
) -> None:

    # Construimos la ruta del archivo Markdown.
    archivo = (
        DIRECTORIO_CONTENIDOS
        / f"bloque_{orden_bloque:02d}"
        / f"tema_{numero_tema:02d}.md"
    )

    if not archivo.exists():
        raise FileNotFoundError(
            f"No se encuentra el archivo: {archivo}"
        )

    contenido = archivo.read_text(
        encoding="utf-8"
    ).strip()

    if not contenido:
        raise ValueError("El archivo de contenido está vacío.")

    with get_connection() as connection:

        # Localizamos el bloque.
        bloque = connection.execute(
            "SELECT id, nombre FROM bloques WHERE orden = ?",
            (orden_bloque,)
        ).fetchone()

        if bloque is None:
            raise ValueError(
                f"No existe el bloque {orden_bloque}."
            )

        # Localizamos el tema.
        tema = connection.execute(
            """
            SELECT id, titulo
            FROM temas
            WHERE bloque_id = ? AND numero = ?
            """,
            (bloque["id"], numero_tema)
        ).fetchone()

        if tema is None:
            raise ValueError(
                f"No existe el tema {numero_tema} "
                f"en el bloque {orden_bloque}."
            )

        # Actualizamos exclusivamente el contenido.
        connection.execute(
            "UPDATE temas SET contenido = ? WHERE id = ?",
            (contenido, tema["id"])
        )

    print("Contenido guardado correctamente.")
    print(f"Bloque: {bloque['nombre']}")
    print(f"Tema {numero_tema}: {tema['titulo']}")
    print(f"Archivo: {archivo.name}")
    print(f"Caracteres guardados: {len(contenido)}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Carga contenido Markdown en Opus TAI."
    )

    parser.add_argument(
        "bloque",
        type=int,
        help="Número del bloque (1-4)."
    )

    parser.add_argument(
        "tema",
        type=int,
        help="Número del tema dentro del bloque."
    )

    args = parser.parse_args()

    if args.bloque not in range(1, 5):
        parser.error("El bloque debe estar entre 1 y 4.")

    if args.tema < 1:
        parser.error("El número de tema debe ser positivo.")

    cargar_contenido_tema(args.bloque, args.tema)


if __name__ == "__main__":
    main()
