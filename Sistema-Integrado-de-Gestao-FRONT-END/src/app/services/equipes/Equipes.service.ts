import { Equipe } from './../../models/equipe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment.development';


@Injectable({
  providedIn: 'root',
})
export class EquipesService {

  private apiUrl = environment.apiUrlEquipe;

  constructor(private http: HttpClient) { }

  listarEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.apiUrl + '/listarEquipes');
  }
  pesquisarEquipePorId(id: number) {
   return this.http.get<Equipe>(`${this.apiUrl}/selecionarEquipePorId/${id}`);
 }
 pesquisarEquipePorPrefixo(prefixo: string) {
   return this.http.get<Equipe[]>(`${this.apiUrl}/selecionarEquipePorPrefixo/${prefixo}`);
 }
  cadastroEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiUrl + '/registrar', equipe);
  }
  deletarEquipe(equipeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/excluirEquipe/${equipeId}`);
  }
  editarEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${this.apiUrl}/alterarEquipePorId/${equipe.id}`, equipe);
  }
}
