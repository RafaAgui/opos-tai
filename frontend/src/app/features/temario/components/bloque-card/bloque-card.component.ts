import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import { BloqueTemario, ResumenContenido } from '../../../../core/models';
import { ProgressBarComponent } from '../../../../shared/components';
import { TemaItemComponent } from '../tema-item/tema-item.component';

@Component({
  selector: 'app-bloque-card',
  standalone: true,
  imports: [ProgressBarComponent, TemaItemComponent],
  templateUrl: './bloque-card.component.html',
  styleUrl: './bloque-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BloqueCardComponent {
  readonly bloque = input.required<BloqueTemario>();
  readonly resumen = input<ResumenContenido | undefined>(undefined);
  readonly cargandoResumen = input<boolean>(false);

  readonly seleccionarTema = output<number>();

  readonly progresoEstudio = computed(() => {
    const temas = this.bloque().temas;
    if (temas.length === 0) return 0;

    const completados = temas.filter(
      (tema) => tema.estado_estudio === 'completado'
    ).length;

    return Math.round((completados / temas.length) * 100);
  });
}
