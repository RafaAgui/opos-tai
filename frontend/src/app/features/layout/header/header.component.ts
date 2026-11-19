import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly eyebrow = input<string>('PREPARACIÓN DE OPOSICIONES');
  readonly title = input<string>('Tu espacio de estudio');
  readonly tag = input<string>('TAI · 2026');
}
