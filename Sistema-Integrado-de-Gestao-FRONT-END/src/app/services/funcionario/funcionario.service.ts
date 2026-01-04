import { Funcionario } from './../../models/funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environment.development';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private apiUrl = environment.apiUrlFuncionario;

  constructor(private http: HttpClient) { }

  listarFuncionarios() {
    return this.http.get<Funcionario[]>(this.apiUrl + '/listarFuncionarios');
  }



  pesquisarFuncionarioPorNome(nome: string) {
    return this.http.get<Funcionario[]>(`${this.apiUrl}/selecionarFuncionarioPorNome/${nome}`);
  }
  pesquisarFuncionarioPorMatricula(nome: string) {
    return this.http.get<Funcionario[]>(`${this.apiUrl}/selecionarFuncionarioPorMatricula/${nome}`);
  }

}
