
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

}
