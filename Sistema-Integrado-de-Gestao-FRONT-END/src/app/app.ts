import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { EquipesComponent } from "./components/equipes/equipes.component";
import { CadastrarEquipeComponent } from "./components/cadastrar-equipe/cadastrar-equipe.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Sistema-Integrado-de-Gestao-FRONT-END');
}
