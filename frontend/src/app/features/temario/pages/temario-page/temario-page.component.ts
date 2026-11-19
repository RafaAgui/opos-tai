import { Component, ChangeDetectionStrategy, inject, OnInit, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../../../../core/services/api';
import { HealthResponse, EstadoEstudio } from '../../../../core/models';
import { StatCardComponent } from '../../../../shared/components';
import { TemarioFiltrosComponent } from '../../components/temario-filtros/temario-filtros.component';
import { BloqueCardComponent } from '../../components/bloque-card/bloque-card.component';
import { TemarioService } from '../../services/temario.service';

@Component({
  selector: 'app-temario-page',
  standalone: true,
  imports: [StatCardComponent, TemarioFiltrosComponent, BloqueCardComponent],
  templateUrl: './temario-page.component.html',
  styleUrl: './temario-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemarioPageComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly api = inject(Api);
  readonly temarioService = inject(TemarioService);

  // Estado del backend
  readonly estadoBackend = signal('Comprobando conexión...');
  readonly respuestaBackend = signal<HealthResponse | null>(null);
  readonly errorBackend = signal('');
  readonly backendConectado = signal(false);

  // Filtros
  readonly textoBusqueda = signal('');
  readonly bloqueSeleccionado = signal<number | null>(null);
  readonly estadoSeleccionado = signal<EstadoEstudio | 'todos'>('todos');

  // Bloques filtrados
  readonly bloquesFiltrados = computed(() => {
    const texto = this.textoBusqueda().trim().toLowerCase();
    const bloqueId = this.bloqueSeleccionado();
    const estado = this.estadoSeleccionado();

    return this.temarioService
      .bloques()
      .filter((bloque) => bloqueId === null || bloque.id === bloqueId)
      .map((bloque) => ({
        ...bloque,
        temas: bloque.temas.filter((tema) => {
          const coincideTexto =
            texto === '' ||
            tema.titulo.toLowerCase().includes(texto) ||
            String(tema.numero).includes(texto);

          const coincideEstado =
            estado === 'todos' || tema.estado_estudio === estado;

          return coincideTexto && coincideEstado;
        }),
      }))
      .filter((bloque) => bloque.temas.length > 0);
  });

  ngOnInit(): void {
    this.comprobarBackend();
    this.temarioService.cargarTemario();
    this.temarioService.cargarResumenContenidos();
  }

  comprobarBackend(): void {
    this.api.getHealth().subscribe({
      next: (res) => {
        this.respuestaBackend.set(res);
        this.estadoBackend.set('Conectado');
        this.backendConectado.set(true);
        this.errorBackend.set('');
      },
      error: (err: unknown) => {
        console.error('Error backend:', err);
        this.respuestaBackend.set(null);
        this.estadoBackend.set('Sin conexión');
        this.backendConectado.set(false);
        this.errorBackend.set('No se ha podido contactar con el backend.');
      },
    });
  }

  actualizarCobertura(): void {
    this.temarioService.cargarResumenContenidos(true);
  }

  limpiarFiltros(): void {
    this.textoBusqueda.set('');
    this.bloqueSeleccionado.set(null);
    this.estadoSeleccionado.set('todos');
  }

  navegarATema(id: number): void {
    this.router.navigate(['/temas', id]);
  }
}
