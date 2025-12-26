import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../../models/equipe';

@Injectable({
  providedIn: 'root',
})
export class ListarEquipes {
  private apiUrl = 'https://localhost:7204/equipe/listarEquipes';

  constructor(private http: HttpClient) { }

  listarEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.apiUrl);
  }
}
