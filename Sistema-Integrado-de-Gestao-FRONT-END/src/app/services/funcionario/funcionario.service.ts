import { Observable } from 'rxjs';
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
  cadastroFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiUrl + '/registrar', funcionario);
  }
  excluirFuncionario(id: number) {
    return this.http.delete(`${this.apiUrl}/excluirFuncionario/${id}`);
  }
}
