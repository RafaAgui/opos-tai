import {
  Component,
  ChangeDetectionStrategy,
  inject,
  input,
  signal,
  computed,
  effect,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DetalleTema, EstadoEstudio } from '../../../../core/models';
import { TemaDetalleComponent } from '../../components/tema-detalle/tema-detalle.component';
import { TemarioService } from '../../services/temario.service';

@Component({
  selector: 'app-tema-page',
  standalone: true,
  imports: [RouterLink, TemaDetalleComponent],
  templateUrl: './tema-page.component.html',
  styleUrl: './tema-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemaPageComponent {
  private readonly router = inject(Router);
  readonly temarioService = inject(TemarioService);

  // Input vinculado automáticamente desde el parámetro de ruta ':id'
  readonly id = input.required<string>();

  readonly tema = signal<DetalleTema | null>(null);
  readonly cargando = signal(false);
  readonly error = signal('');

  private readonly indiceActual = computed(() => {
    const actual = this.tema();
    if (!actual) return -1;
    return this.temarioService
      .todosLosTemas()
      .findIndex((t) => t.id === actual.id);
  });

  readonly hayAnterior = computed(() => this.indiceActual() > 0);

  readonly haySiguiente = computed(() => {
    const idx = this.indiceActual();
    const total = this.temarioService.todosLosTemas().length;
    return idx >= 0 && idx < total - 1;
  });

  constructor() {
    // Asegurar que el temario esté cargado para la navegación entre temas
    this.temarioService.cargarTemario();

    // Reaccionar a cambios en el parámetro :id de la ruta
    effect(() => {
      const temaId = Number(this.id());
      if (!isNaN(temaId) && temaId > 0) {
        this.cargarTema(temaId);
      }
    });
  }

  cargarTema(id: number): void {
    this.tema.set(null);
    this.cargando.set(true);
    this.error.set('');

    this.temarioService.getTema(id).subscribe({
      next: (t) => {
        this.tema.set(t);
        this.cargando.set(false);
      },
      error: (err: unknown) => {
        console.error('Error al cargar el tema:', err);
        this.cargando.set(false);
        this.error.set('No se ha podido cargar el tema seleccionado.');
      },
    });
  }

  temaAnterior(): void {
    const idx = this.indiceActual();
    if (idx > 0) {
      const prev = this.temarioService.todosLosTemas()[idx - 1];
      this.router.navigate(['/temas', prev.id]);
    }
  }

  temaSiguiente(): void {
    const idx = this.indiceActual();
    const temas = this.temarioService.todosLosTemas();
    if (idx >= 0 && idx < temas.length - 1) {
      const next = temas[idx + 1];
      this.router.navigate(['/temas', next.id]);
    }
  }

  cambiarEstado(event: { id: number; estado: EstadoEstudio }): void {
    this.temarioService.actualizarEstadoTema(event.id, event.estado).subscribe({
      next: (res) => {
        this.tema.update((actual) =>
          actual ? { ...actual, estado_estudio: res.estado_estudio } : null
        );
      },
      error: (err: unknown) => {
        console.error('Error al actualizar estado:', err);
      },
    });
  }
}
