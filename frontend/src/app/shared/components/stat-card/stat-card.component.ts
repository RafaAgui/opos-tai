import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCardComponent {
  readonly label = input.required<string>();
  readonly value = input<string | number | null>(null);
  readonly helperText = input<string | null>(null);
  readonly loading = input<boolean>(false);
  readonly hasError = input<boolean>(false);
}
