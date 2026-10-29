import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
    bloques = [
    { nombre: 'Organización del Estado', temas: 10, progreso: 0 },
    { nombre: 'Tecnología básica', temas: 15, progreso: 0 },
    { nombre: 'Desarrollo de sistemas', temas: 12, progreso: 0 },
    { nombre: 'Sistemas y comunicaciones', temas: 14, progreso: 0 },
  ];
}
