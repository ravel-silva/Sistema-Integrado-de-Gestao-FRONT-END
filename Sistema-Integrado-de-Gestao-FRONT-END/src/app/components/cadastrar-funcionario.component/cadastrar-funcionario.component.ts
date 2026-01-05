import { EquipesService } from './../../services/equipes/Equipes.service';
import { Funcionario } from './../../models/funcionario';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario/funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrl: './cadastrar-funcionario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastrarFuncionarioComponent {

  cadastroFuncionario: Funcionario = {
    nome: '',
    matricula: '',
    dataCriacao: new Date().toISOString(),
  };

  constructor(private service: FuncionarioService) { }


  cadastrarFuncionario(): void {
    this.service.cadastroFuncionario(this.cadastroFuncionario).subscribe({
      next: (funcionarioCriado) => {
        console.log('Equipe criada com sucesso:', funcionarioCriado);

        this.cadastroFuncionario = {
          nome: '',
          matricula: '',
          dataCriacao: new Date().toISOString()
        }
        alert('Equipe criada com sucesso! ' + funcionarioCriado.nome)
      },
      error: (erro) => {
        console.error('Erro ao criar Funcionario:', erro);
      }
    });
  }
}
