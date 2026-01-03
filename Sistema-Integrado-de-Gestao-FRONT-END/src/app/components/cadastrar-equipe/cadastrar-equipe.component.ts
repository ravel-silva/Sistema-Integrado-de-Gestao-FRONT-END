import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms'; // IMPORTANTE!
import { Equipe } from '../../models/equipe';
import { EquipesService } from '../../services/equipes/Equipes.service';

@Component({
  selector: 'app-cadastrar-equipe',
  standalone: true,
  imports: [RouterLink, FormsModule], // Adicione FormsModule aqui!
  templateUrl: './cadastrar-equipe.component.html',
  styleUrls: ['./cadastrar-equipe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastrarEquipeComponent {
  cadastroEquipe: Equipe = {
    prefixo: '',
    dataCriacao: '',

  };

  constructor(private service: EquipesService) {}

  onSubmit(): void {
    this.service.cadastroEquipe(this.cadastroEquipe).subscribe({
      next: (equipeCriada) => {
        console.log('Equipe criada com sucesso:', equipeCriada);
        //limpar formulário após o cadastro
        
        this.cadastroEquipe = { prefixo: '', dataCriacao: new Date().toISOString() };
      },
      error: (erro) => {
        console.error('Erro ao criar equipe:', erro);
      }
    });
  }
}
