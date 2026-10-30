
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export type EstadoEstudio = 'pendiente' | 'en curso' | 'completado';

export interface HealthResponse {
  status: string;
  application: string;
  message: string;
}

export interface Tema {
  id: number;
  numero: number;
  titulo: string;
  contenido: string | null;
  estado_estudio: EstadoEstudio;
}

export interface BloqueTemario {
  id: number;
  nombre: string;
  orden: number;
  temas: Tema[];
}

export interface DetalleTema {
  id: number;
  numero: number;
  titulo: string;
  contenido: string | null;
  estado_estudio: EstadoEstudio;
  bloque: {
    id: number;
    nombre: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8000';

  getHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(
      `${this.apiUrl}/api/health`,
    );
  }

  getTemario(): Observable<BloqueTemario[]> {
    return this.http.get<BloqueTemario[]>(
      `${this.apiUrl}/api/temario`,
    );
  }

  getTema(id: number): Observable<DetalleTema> {
    return this.http.get<DetalleTema>(
      `${this.apiUrl}/api/temas/${id}`,
    );
  }

  actualizarEstadoTema(
    id: number,
    estado: EstadoEstudio
  ): Observable<{ id: number; estado_estudio: EstadoEstudio }> {
    return this.http.patch<{ id: number; estado_estudio: EstadoEstudio }>(
      `${this.apiUrl}/api/temas/${id}/estado`,
      { estado }
    );
  }


}
