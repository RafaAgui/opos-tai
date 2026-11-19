import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { Tema } from '../../../../core/models';

@Component({
  selector: 'app-tema-item',
  standalone: true,
  templateUrl: './tema-item.component.html',
  styleUrl: './tema-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemaItemComponent {
  readonly tema = input.required<Tema>();
  readonly seleccionar = output<number>();
}
