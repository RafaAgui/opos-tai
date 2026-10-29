
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
