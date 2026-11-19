import { Component, ChangeDetectionStrategy, input, model, output } from '@angular/core';
import { BloqueTemario, EstadoEstudio } from '../../../../core/models';

@Component({
  selector: 'app-temario-filtros',
  standalone: true,
  templateUrl: './temario-filtros.component.html',
  styleUrl: './temario-filtros.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemarioFiltrosComponent {
  readonly bloques = input.required<BloqueTemario[]>();

  readonly textoBusqueda = model<string>('');
  readonly bloqueSeleccionado = model<number | null>(null);
  readonly estadoSeleccionado = model<EstadoEstudio | 'todos'>('todos');

  readonly limpiar = output<void>();

  onBloqueChange(event: Event): void {
    const val = (event.target as HTMLSelectElement).value;
    this.bloqueSeleccionado.set(val === '' ? null : Number(val));
  }

  onEstadoChange(event: Event): void {
    const val = (event.target as HTMLSelectElement).value as EstadoEstudio | 'todos';
    this.estadoSeleccionado.set(val);
  }
}
