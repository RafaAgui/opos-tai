import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { App } from './app';
import { Api } from './core/services/api';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render brand title in sidebar', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Opus TAI');
  });

  it('should return correct state label with obtenerTextoEstado', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.obtenerTextoEstado('pendiente')).toBe('Pendiente');
    expect(app.obtenerTextoEstado('en curso')).toBe('En curso');
    expect(app.obtenerTextoEstado('completado')).toBe('Completado');
  });

  it('should handle saving state and update tema and list on success', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const api = TestBed.inject(Api);

    app.temaSeleccionado.set({
      id: 1,
      numero: 1,
      titulo: 'Tema 1',
      contenido: null,
      estado_estudio: 'pendiente',
      bloque: { id: 1, nombre: 'Bloque 1' }
    });

    app.bloquesTemario.set([
      {
        id: 1,
        nombre: 'Bloque 1',
        orden: 1,
        temas: [
          { id: 1, numero: 1, titulo: 'Tema 1', contenido: null, estado_estudio: 'pendiente' }
        ]
      }
    ]);

    vi.spyOn(api, 'actualizarEstadoTema').mockReturnValue(
      of({ id: 1, estado_estudio: 'completado' })
    );

    app.cambiarEstadoTema(1, 'completado');

    expect(app.guardandoEstado()).toBe(false);
    expect(app.errorEstado()).toBe('');
    expect(app.temaSeleccionado()?.estado_estudio).toBe('completado');
    expect(app.bloquesTemario()[0].temas[0].estado_estudio).toBe('completado');
  });

  it('should display error when backend fails to save state', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const api = TestBed.inject(Api);

    vi.spyOn(api, 'actualizarEstadoTema').mockReturnValue(
      throwError(() => new Error('Error de red'))
    );

    app.cambiarEstadoTema(1, 'completado');

    expect(app.guardandoEstado()).toBe(false);
    expect(app.errorEstado()).toBeTruthy();
  });
});
