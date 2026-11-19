import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

@Component({
  selector: 'app-tema-navegacion',
  standalone: true,
  templateUrl: './tema-navegacion.component.html',
  styleUrl: './tema-navegacion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemaNavegacionComponent {
  readonly numeroTema = input.required<number>();
  readonly hayAnterior = input<boolean>(false);
  readonly haySiguiente = input<boolean>(false);
  readonly cargando = input<boolean>(false);

  readonly anterior = output<void>();
  readonly siguiente = output<void>();
}
