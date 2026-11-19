import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/api.config';
import {
  HealthResponse,
  BloqueTemario,
  DetalleTema,
  EstadoEstudio,
  ResumenContenido,
  ActualizarEstadoTemaResponse,
} from '../models';

// Re-exportamos los modelos para mantener retrocompatibilidad
export * from '../models';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);

  getHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(`${this.apiUrl}/api/health`);
  }

  getTemario(): Observable<BloqueTemario[]> {
    return this.http.get<BloqueTemario[]>(`${this.apiUrl}/api/temario`);
  }

  getResumenContenidos(): Observable<ResumenContenido[]> {
    return this.http.get<ResumenContenido[]>(
      `${this.apiUrl}/api/estadisticas/contenidos`
    );
  }

  getTema(id: number): Observable<DetalleTema> {
    return this.http.get<DetalleTema>(`${this.apiUrl}/api/temas/${id}`);
  }

  actualizarEstadoTema(
    id: number,
    estado: EstadoEstudio
  ): Observable<ActualizarEstadoTemaResponse> {
    return this.http.patch<ActualizarEstadoTemaResponse>(
      `${this.apiUrl}/api/temas/${id}/estado`,
      { estado }
    );
  }
}
