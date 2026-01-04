import { FuncionarioService } from './../../services/funcionario/funcionario.service';
import { Funcionario } from './../../models/funcionario';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-funcionario.component',
  imports: [DatePipe, CommonModule, FormsModule],
  templateUrl: './listar-funcionario.component.html',
  styleUrl: './listar-funcionario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarFuncionarioComponent implements OnInit {

    funcionariosFiltrados: Funcionario[] = [];
    dataPesquisa: string = '';
    funcionarios: Funcionario[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private cdr: ChangeDetectorRef
  ) { }



  ngOnInit(): void {
    this.carregarFuncionarios();
  }
  //carrega todos os funcionários
  carregarFuncionarios() {
    this.funcionarioService.listarFuncionarios().subscribe({
      next: (dados) => {
        this.funcionarios = dados;
        this.funcionariosFiltrados = dados;
        //força a atualização da view
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar funcionários:', erro);
      }
    });
  }
// pesquisa por data
  pesquisarPorData() {
  const data = this.dataPesquisa?.trim();
  if (!data) {
    this.funcionariosFiltrados = [...this.funcionarios];
    this.cdr.detectChanges();
    return;
  }

  this.funcionariosFiltrados = this.funcionarios.filter(funcionario => {

    // garante conversão correta
    const dataFormatada = new Date(funcionario.dataCriacao)
      .toLocaleDateString('pt-BR');

    return dataFormatada.includes(data);
  });

  this.cdr.detectChanges();
}
//pesquisar por nome
  pesquisarPorNome(e: Event) {
    const nome = (e.target as HTMLInputElement).value;
    if (!nome || nome.length < 1) {
      this.carregarFuncionarios();
      return;
    }
    this.funcionarioService.pesquisarFuncionarioPorNome(nome).subscribe({
      next: (dados) => {
        this.funcionarios = dados;
        this.funcionariosFiltrados = dados;
        //força a atualização da view
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao pesquisar funcionários:', erro);
      }
    });
  }
 // pesquisar por matrícula
  pesquisarPorMatricula(e: Event) {
    const matricula = (e.target as HTMLInputElement).value;
    if (!matricula || matricula.length < 1) {
      this.carregarFuncionarios();
      return;
    }
    this.funcionarioService.pesquisarFuncionarioPorMatricula(matricula).subscribe({
      next: (dados) => {
        this.funcionarios = dados;
        this.funcionariosFiltrados = dados;
        //força a atualização da view
        this.cdr.detectChanges();

      },
      error: (erro) => {
        console.error('Erro ao pesquisar funcionários:', erro);
      }
    });
  }
  // excluir funcionário
  excluirFuncionario(id: number) {
    if (!confirm('Tem certeza que deseja excluir este funcionário?')) {
      return;
    }

    this.funcionarioService.excluirFuncionario(id).subscribe({
      next: () => {
        // Recarrega a lista de funcionários após exclusão
        this.carregarFuncionarios();
      },
      error: (erro) => {
        console.error('Erro ao excluir funcionário:', erro);
      }
    });
  }
}
