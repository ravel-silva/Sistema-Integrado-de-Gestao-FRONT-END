import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Funcionario } from '../../models/funcionario';

@Component({
  selector: 'app-editar-funcionario.component',
  imports: [FormsModule, RouterLink],
  templateUrl: './editar-funcionario.component.html',
  styleUrl: './editar-funcionario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditarFuncionarioComponent {
EditarFuncionario: Funcionario = {
  nome: '',
  matricula: '',
  dataCriacao : new Date().toISOString(),
}
editarFuncionario() {
throw new Error('Method not implemented.');
}

}
