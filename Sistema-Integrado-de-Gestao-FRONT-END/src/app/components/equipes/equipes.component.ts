import { ListarEquipes } from '../../services/equipes/listar-equipes';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Equipe } from '../../models/equipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipes',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './equipes.component.html',
  styleUrl: './equipes.component.css',
})
export class Equipes implements OnInit {

  equipes: Equipe[] = []

  constructor(
    private listarEquipes: ListarEquipes,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarEquipes();
  }
  carregarEquipes(): void {
    this.listarEquipes.listarEquipes().subscribe({
      next:(dados) =>{
        this.equipes = dados;
        //força a atualização da view
        this.cdr.detectChanges();
      },
      error:(erro) =>{
        console.error('Erro ao carregar equipes:', erro);
      }
    });
  }
}
