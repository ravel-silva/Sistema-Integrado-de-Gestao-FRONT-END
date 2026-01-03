import { EquipesService } from './../../services/equipes/Equipes.service';
import { Equipe } from '../../models/equipe';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-equipes.component',
  imports: [RouterLink, FormsModule],
  templateUrl: './editar-equipes.component.html',
  styleUrl: './editar-equipes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditarEquipesComponent {
  editarEquipes : Equipe = {
    id: 0,
    prefixo: '' ,
    dataCriacao: '',
  };


   constructor(private route: ActivatedRoute, private service: EquipesService) {}

   ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.service.pesquisarEquipePorId(id).subscribe({
        next: (equipe) => {
          this.editarEquipes = equipe;
        },
        error: (erro) => {
          console.error('Erro ao buscar equipe:', erro);
        }
      });
    }
  }

  onSubmitEditar(): void {
    console.log('SUBMIT DISPARADO', this.editarEquipes);

    this.service.editarEquipe(this.editarEquipes).subscribe({
      next: () => {
        console.log('Equipe atualizada com sucesso');
        alert('Equipe atualizada com sucesso! '+ this.editarEquipes.prefixo);
      },

      error: (erro) => {
        console.error('Erro ao atualizar equipe:', erro);
      }
    });
  }
}
