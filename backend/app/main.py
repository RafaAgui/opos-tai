
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import init_db


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Inicializa la base de datos al arrancar la aplicación."""
    init_db()
    yield


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
