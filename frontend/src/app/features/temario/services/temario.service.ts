import { Injectable, inject, signal, computed } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Api } from '../../../core/services/api';
import {
  BloqueTemario,
  DetalleTema,
  EstadoEstudio,
  ResumenContenido,
  ActualizarEstadoTemaResponse,
} from '../../../core/models';

@Injectable({
  providedIn: 'root',
})
export class TemarioService {
  private readonly api = inject(Api);

  readonly bloques = signal<BloqueTemario[]>([]);
  readonly cargandoTemario = signal(false);
  readonly errorTemario = signal('');

  readonly resumenContenidos = signal<ResumenContenido[]>([]);
  readonly cargandoResumen = signal(false);
  readonly errorResumen = signal('');

  // Lista ordenada de todos los temas
  readonly todosLosTemas = computed(() =>
    this.bloques().flatMap((bloque) =>
      [...bloque.temas].sort((a, b) => a.numero - b.numero)
    )
  );

  // Estadísticas globales de temas
  readonly totalTemas = computed(() =>
    this.bloques().reduce((total, b) => total + b.temas.length, 0)
  );

  readonly temasCompletados = computed(() =>
    this.bloques().reduce(
      (total, b) =>
        total + b.temas.filter((t) => t.estado_estudio === 'completado').length,
      0
    )
  );

  readonly progresoGlobal = computed(() =>
    this.totalTemas() === 0
      ? 0
      : Math.round((this.temasCompletados() / this.totalTemas()) * 100)
  );

  // Estadísticas globales de cobertura
  readonly totalTemasConContenido = computed(() =>
    this.resumenContenidos().reduce(
      (total, b) => total + b.temas_con_contenido,
      0
    )
  );

  readonly coberturaGlobal = computed(() => {
    const total = this.resumenContenidos().reduce(
      (suma, b) => suma + b.total_temas,
      0
    );
    if (total === 0) return 0;
    return Math.round((this.totalTemasConContenido() / total) * 100);
  });

  cargarTemario(): void {
    if (this.bloques().length > 0) return; // Evita recargar si ya está cargado

    this.cargandoTemario.set(true);
    this.errorTemario.set('');

    this.api.getTemario().subscribe({
      next: (bloques) => {
        this.bloques.set(bloques);
        this.cargandoTemario.set(false);
      },
      error: (err: unknown) => {
        console.error('Error al cargar temario:', err);
        this.cargandoTemario.set(false);
        this.errorTemario.set('No se ha podido cargar el temario.');
      },
    });
  }

  cargarResumenContenidos(forzar = false): void {
    if (!forzar && this.resumenContenidos().length > 0) return;

    this.cargandoResumen.set(true);
    this.errorResumen.set('');

    this.api.getResumenContenidos().subscribe({
      next: (resumen) => {
        this.resumenContenidos.set(resumen);
        this.cargandoResumen.set(false);
      },
      error: (err: unknown) => {
        console.error('Error al cargar cobertura:', err);
        this.cargandoResumen.set(false);
        this.errorResumen.set('No se ha podido actualizar la cobertura.');
      },
    });
  }

  getTema(id: number): Observable<DetalleTema> {
    return this.api.getTema(id);
  }

  actualizarEstadoTema(
    id: number,
    estado: EstadoEstudio
  ): Observable<ActualizarEstadoTemaResponse> {
    return this.api.actualizarEstadoTema(id, estado).pipe(
      tap((res) => {
        // Actualizar en el estado local de los bloques
        this.bloques.update((bloques) =>
          bloques.map((b) => ({
            ...b,
            temas: b.temas.map((t) =>
              t.id === id ? { ...t, estado_estudio: res.estado_estudio } : t
            ),
          }))
        );
      })
    );
  }

  resumenBloque(bloqueId: number): ResumenContenido | undefined {
    return this.resumenContenidos().find((r) => r.bloque_id === bloqueId);
  }
}
