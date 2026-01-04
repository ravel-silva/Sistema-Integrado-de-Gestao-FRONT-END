import { FuncionarioService } from './../../services/funcionario/funcionario.service';
import { Funcionario } from './../../models/funcionario';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-listar-funcionario.component',
  imports: [DatePipe, CommonModule],
  templateUrl: './listar-funcionario.component.html',
  styleUrl: './listar-funcionario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarFuncionarioComponent implements OnInit {
funcionarios: Funcionario[] = [];
  constructor(
    private funcionarioService: FuncionarioService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.carregarFuncionarios();
  }
  carregarFuncionarios() {
    this.funcionarioService.listarFuncionarios().subscribe({
      next: (dados) => {
        this.funcionarios = dados;
        //força a atualização da view
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar funcionários:', erro);
      }
    });
  }
}
