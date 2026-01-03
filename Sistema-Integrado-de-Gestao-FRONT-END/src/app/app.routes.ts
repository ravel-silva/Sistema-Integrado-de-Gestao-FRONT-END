import { Routes } from '@angular/router';
import { EquipesComponent } from './components/equipes/equipes.component';
import { CadastrarEquipeComponent } from './components/cadastrar-equipe/cadastrar-equipe.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'equipes',
    component: EquipesComponent
  },
  {
    path: 'cadastrar-equipe',
    component: CadastrarEquipeComponent
  }
];
