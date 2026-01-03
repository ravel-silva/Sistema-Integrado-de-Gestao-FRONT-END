import { Equipe } from './../../models/equipe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EquipesService {
  private apiUrl = 'https://localhost:7204/equipe';

  constructor(private http: HttpClient) { }

  listarEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.apiUrl + '/listarEquipes');
  }

  cadastroEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiUrl + '/registrar', equipe);
  }
  deletarEquipe(equipeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/excluirEquipe/${equipeId}`);
  }
}
