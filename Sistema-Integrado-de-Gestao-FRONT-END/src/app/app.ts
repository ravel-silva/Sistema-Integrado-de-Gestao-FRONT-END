import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../components/home/home';
import { Equipes } from "../components/equipes/equipes";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Equipes],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Sistema-Integrado-de-Gestao-FRONT-END');
}
