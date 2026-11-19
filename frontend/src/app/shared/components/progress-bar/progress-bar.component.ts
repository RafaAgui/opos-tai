import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  readonly value = input.required<number>();
  readonly label = input<string>('');
  readonly variant = input<'primary' | 'warning'>('primary');
}
