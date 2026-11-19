import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { DetalleTema, EstadoEstudio } from '../../../../core/models';
import { MarkdownPipe } from '../../../../shared/pipes';
import { TemaNavegacionComponent } from '../tema-navegacion/tema-navegacion.component';

@Component({
  selector: 'app-tema-detalle',
  standalone: true,
  imports: [MarkdownPipe, TemaNavegacionComponent],
  templateUrl: './tema-detalle.component.html',
  styleUrl: './tema-detalle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemaDetalleComponent {
  readonly tema = input<DetalleTema | null>(null);
  readonly cargando = input<boolean>(false);
  readonly error = input<string>('');
  readonly hayAnterior = input<boolean>(false);
  readonly haySiguiente = input<boolean>(false);

  readonly anterior = output<void>();
  readonly siguiente = output<void>();
  readonly cambiarEstado = output<{ id: number; estado: EstadoEstudio }>();
}
