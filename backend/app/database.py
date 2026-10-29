
import sqlite3
from pathlib import Path

DATABASE_PATH = Path(__file__).resolve().parent.parent / "opos_tai.db"


def get_connection() -> sqlite3.Connection:
    connection = sqlite3.connect(DATABASE_PATH)
    connection.row_factory = sqlite3.Row
    return connection


def init_db() -> None:
    with get_connection() as connection:
        connection.executescript("""
            CREATE TABLE IF NOT EXISTS bloques (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                orden INTEGER NOT NULL UNIQUE
            );

            CREATE TABLE IF NOT EXISTS temas (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                bloque_id INTEGER NOT NULL,
                numero INTEGER NOT NULL,
                titulo TEXT NOT NULL,
                contenido TEXT,
                FOREIGN KEY (bloque_id) REFERENCES bloques(id),
                UNIQUE (bloque_id, numero)
            );
        """)

    print(f"Base de datos inicializada: {DATABASE_PATH}")


def obtener_temario() -> list[dict]:
    """Devuelve los bloques y sus temas ordenados."""

    with get_connection() as connection:
        filas = connection.execute("""
            SELECT
                b.id AS bloque_id,
                b.nombre AS bloque_nombre,
                b.orden AS bloque_orden,
                t.id AS tema_id,
                t.numero AS tema_numero,
                t.titulo AS tema_titulo,
                t.contenido AS tema_contenido
            FROM bloques b
            LEFT JOIN temas t ON t.bloque_id = b.id
            ORDER BY b.orden, t.numero
        """).fetchall()

    bloques: dict[int, dict] = {}

    for fila in filas:
        bloque_id = fila["bloque_id"]

        if bloque_id not in bloques:
            bloques[bloque_id] = {
                "id": bloque_id,
                "nombre": fila["bloque_nombre"],
                "orden": fila["bloque_orden"],
                "temas": [],
            }

        if fila["tema_id"] is not None:
            bloques[bloque_id]["temas"].append({
                "id": fila["tema_id"],
                "numero": fila["tema_numero"],
                "titulo": fila["tema_titulo"],
                "contenido": fila["tema_contenido"],
            })

    return list(bloques.values())