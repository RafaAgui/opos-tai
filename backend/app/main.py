
from contextlib import asynccontextmanager
from typing import Literal
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.database import init_db, obtener_temario, obtener_tema, actualizar_estado_tema


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Inicializa la base de datos al arrancar la aplicación."""
    init_db()
    yield


class EstadoTemaRequest(BaseModel):
    estado: Literal["pendiente", "en curso", "completado"]

app = FastAPI(
    title="Opos TAI API",
    description="API para preparar las oposiciones TAI",
    version="0.1.0",
    lifespan=lifespan,
)


# Permite que Angular se comunique con FastAPI durante el desarrollo.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health_check():
    """Comprueba que el backend está operativo."""
    return {
        "status": "ok",
        "application": "Opos TAI",
        "message": "El backend funciona correctamente",
    }


@app.get("/api/temario")
def consultar_temario():
    """Devuelve el temario almacenado en SQLite."""
    return obtener_temario()



@app.get("/api/temas/{tema_id}")
def consultar_tema(tema_id: int):
    """Devuelve el detalle de un tema."""

    tema = obtener_tema(tema_id)

    if tema is None:
        raise HTTPException(
            status_code=404,
            detail="El tema solicitado no existe",
        )

    return tema


@app.patch("/api/temas/{tema_id}/estado")
def cambiar_estado_tema(
    tema_id: int,
    solicitud: EstadoTemaRequest
):
    actualizado = actualizar_estado_tema(
        tema_id,
        solicitud.estado
    )

    if not actualizado:
        raise HTTPException(
            status_code=404,
            detail="El tema no existe"
        )

    return {
        "id": tema_id,
        "estado_estudio": solicitud.estado
    }
