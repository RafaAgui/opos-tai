
import { Component, signal, inject, OnInit, computed  } from '@angular/core';
import { marked } from 'marked';
import { Api, HealthResponse, BloqueTemario, DetalleTema, EstadoEstudio, ResumenContenido   } from './core/services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly api = inject(Api);

  readonly estadoBackend = signal('Comprobando conexión...');
  readonly respuestaBackend = signal<HealthResponse | null>(null);
  readonly errorBackend = signal('');

  readonly backendConectado = signal(false);

  // signal del temario
  readonly bloquesTemario = signal<BloqueTemario[]>([]);
  readonly cargandoTemario = signal(true);
  readonly errorTemario = signal('');

  // signal del tema
  readonly temaSeleccionado = signal<DetalleTema | null>(null);
  readonly cargandoTema = signal(false);
  readonly errorTema = signal('');

  // Estadísticas de cobertura de contenidos
  readonly resumenContenidos = signal<ResumenContenido[]>([]);
  readonly cargandoResumen = signal(true);
  readonly errorResumen = signal('');

  // Buscador y filtros del temario
  readonly textoBusqueda = signal('');
  readonly bloqueSeleccionado = signal<number | null>(null);
  readonly estadoSeleccionado = signal<EstadoEstudio | 'todos'>('todos');

  // Estadísticas del temario
  readonly totalTemas = computed(() =>
    this.bloquesTemario().reduce(
      (total, bloque) => total + bloque.temas.length,
      0
    )
  );

  readonly temasCompletados = computed(() =>
    this.bloquesTemario().reduce(
      (total, bloque) =>
        total + bloque.temas.filter(
          tema => tema.estado_estudio === 'completado'
        ).length,
      0
    )
  );

  readonly progresoGlobal = computed(() =>
    this.totalTemas() === 0
      ? 0
      : Math.round(
          (this.temasCompletados() / this.totalTemas()) * 100
        )
  );

  // Estadísticas globales de cobertura de contenidos
  readonly totalTemasConContenido = computed(() =>
    this.resumenContenidos().reduce(
      (total, bloque) => total + bloque.temas_con_contenido,
      0
    )
  );

  readonly coberturaGlobal = computed(() => {
    const total = this.resumenContenidos().reduce(
      (suma, bloque) => suma + bloque.total_temas,
      0
    );

    if (total === 0) return 0;

    return Math.round(
      (this.totalTemasConContenido() / total) * 100
    );
  });

  readonly contenidoHtml = computed(() => {
    const tema = this.temaSeleccionado();

    if (!tema?.contenido) {
      return '';
    }

    return marked.parse(tema.contenido, {
      async: false
    });
  });

  // Temario filtrado para mostrar en pantalla
  readonly bloquesFiltrados = computed(() => {
    const texto = this.textoBusqueda().trim().toLowerCase();
    const bloqueId = this.bloqueSeleccionado();
    const estado = this.estadoSeleccionado();

    return this.bloquesTemario()
      .filter(bloque =>
        bloqueId === null || bloque.id === bloqueId
      )
      .map(bloque => ({
        ...bloque,
        temas: bloque.temas.filter(tema => {
          const coincideTexto =
            texto === '' ||
            tema.titulo.toLowerCase().includes(texto) ||
            String(tema.numero).includes(texto);

          const coincideEstado =
            estado === 'todos' ||
            tema.estado_estudio === estado;

          return coincideTexto && coincideEstado;
        })
      }))
      .filter(bloque => bloque.temas.length > 0);
  });

  ngOnInit(): void {
    this.api.getHealth().subscribe({
      next: (respuesta) => {
        this.respuestaBackend.set(respuesta);
        this.estadoBackend.set('Conectado');
        this.backendConectado.set(true);
        this.errorBackend.set('');
      },
      error: (error: unknown) => {
        console.error('Error al conectar con FastAPI:', error);
        this.respuestaBackend.set(null);
        this.estadoBackend.set('Sin conexión');
        this.backendConectado.set(false);
        this.errorBackend.set(
          'No se ha podido contactar con el backend.',
        );
      },
    });

    // Cargar el temario al iniciar la aplicación
    this.api.getTemario().subscribe({
      next: (bloques) => {
        this.bloquesTemario.set(bloques);
        this.cargandoTemario.set(false);
        this.errorTemario.set('');
      },
      error: (error: unknown) => {
        console.error('Error al cargar el temario:', error);
        this.cargandoTemario.set(false);
        this.errorTemario.set(
          'No se ha podido cargar el temario.',
        );
      },
    });
    this.actualizarResumenContenidos();
  }

  // Función para seleccionar un tema y cargar sus detalles
  seleccionarTema(id: number): void {
    this.temaSeleccionado.set(null);
    this.cargandoTema.set(true);
    this.errorTema.set('');

    this.api.getTema(id).subscribe({
      next: (tema) => {
        this.temaSeleccionado.set(tema);
        this.cargandoTema.set(false);
      },
      error: (error: unknown) => {
        console.error('Error al cargar el tema:', error);
        this.cargandoTema.set(false);
        this.errorTema.set(
          'No se ha podido cargar el tema seleccionado.',
        );
      },
    });
  }


  cambiarEstadoTema(id: number, estado: EstadoEstudio): void {
    this.api.actualizarEstadoTema(id, estado).subscribe({
      next: (respuesta) => {

        // Actualizamos el tema que estamos visualizando.
        this.temaSeleccionado.update(tema =>
          tema
            ? { ...tema, estado_estudio: respuesta.estado_estudio }
            : null
        );

        // Actualizamos también el listado de temas.
        this.bloquesTemario.update(bloques =>
          bloques.map(bloque => ({
            ...bloque,
            temas: bloque.temas.map(tema =>
              tema.id === id
                ? { ...tema, estado_estudio: respuesta.estado_estudio }
                : tema
            )
          }))
        );
      },
      error: (error) => {
        console.error('Error al actualizar el estado:', error);
      }
    });
  }

  progresoBloque(bloque: BloqueTemario): number {
    if (bloque.temas.length === 0) return 0;

    const completados = bloque.temas.filter(
      tema => tema.estado_estudio === 'completado'
    ).length;

    return Math.round((completados / bloque.temas.length) * 100);
  }

  resumenBloque(bloqueId: number): ResumenContenido | undefined {
    return this.resumenContenidos().find(
      resumen => resumen.bloque_id === bloqueId
    );
  }

  actualizarResumenContenidos(): void {
    this.cargandoResumen.set(true);
    this.errorResumen.set('');

    this.api.getResumenContenidos().subscribe({
      next: (resumen) => {
        this.resumenContenidos.set(resumen);
        this.cargandoResumen.set(false);
      },
      error: (error: unknown) => {
        console.error('Error al actualizar la cobertura:', error);

        this.cargandoResumen.set(false);
        this.errorResumen.set(
          'No se ha podido actualizar la cobertura.'
        );
      },
    });
  }

  limpiarFiltros(): void {
    this.textoBusqueda.set('');
    this.bloqueSeleccionado.set(null);
    this.estadoSeleccionado.set('todos');
  }
}
