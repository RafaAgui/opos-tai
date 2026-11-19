import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'temario',
    pathMatch: 'full',
  },
  {
    path: 'temario',
    loadComponent: () =>
      import('./features/temario/pages/temario-page/temario-page.component').then(
        (m) => m.TemarioPageComponent
      ),
  },
  {
    path: 'temas/:id',
    loadComponent: () =>
      import('./features/temario/pages/tema-page/tema-page.component').then(
        (m) => m.TemaPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'temario',
  },
];
