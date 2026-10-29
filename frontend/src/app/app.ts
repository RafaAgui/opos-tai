
import { Component, signal, inject, OnInit } from '@angular/core';
import { Api, HealthResponse, BloqueTemario  } from './core/services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly api = inject(Api);

  readonly estadoBackend = signal('Comprobando conexión...');
  readonly respuestaBackend = signal<HealthResponse | null>(null);
  readonly errorBackend = signal('');

  readonly backendConectado = signal(false);

  // signal del temario
  readonly bloquesTemario = signal<BloqueTemario[]>([]);
  readonly cargandoTemario = signal(true);
  readonly errorTemario = signal('');

  bloques = [
    { nombre: 'Organización del Estado', temas: 10, progreso: 0 },
    { nombre: 'Tecnología básica', temas: 15, progreso: 0 },
    { nombre: 'Desarrollo de sistemas', temas: 12, progreso: 0 },
    { nombre: 'Sistemas y comunicaciones', temas: 14, progreso: 0 },
  ];

  ngOnInit(): void {
    this.api.getHealth().subscribe({
      next: (respuesta) => {
        this.respuestaBackend.set(respuesta);
        this.estadoBackend.set('Conectado');
        this.backendConectado.set(true);
        this.errorBackend.set('');
      },
      error: (error: unknown) => {
        console.error('Error al conectar con FastAPI:', error);
        this.respuestaBackend.set(null);
        this.estadoBackend.set('Sin conexión');
        this.backendConectado.set(false);
        this.errorBackend.set(
          'No se ha podido contactar con el backend.',
        );
      },
    });

    this.api.getTemario().subscribe({
      next: (bloques) => {
        this.bloquesTemario.set(bloques);
        this.cargandoTemario.set(false);
        this.errorTemario.set('');
      },
      error: (error: unknown) => {
        console.error('Error al cargar el temario:', error);
        this.cargandoTemario.set(false);
        this.errorTemario.set(
          'No se ha podido cargar el temario.',
        );
      },
    });
  }
}
