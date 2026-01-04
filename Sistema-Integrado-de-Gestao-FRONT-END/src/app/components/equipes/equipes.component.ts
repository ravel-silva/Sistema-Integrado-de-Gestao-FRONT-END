import { EquipesService } from '../../services/equipes/Equipes.service';
import { ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { Equipe } from '../../models/equipe';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-equipes',
  imports: [CommonModule, RouterLink, FormsModule],
  standalone: true,
  templateUrl: './equipes.component.html',
  styleUrl: './equipes.component.css',
})
export class EquipesComponent implements OnInit {

  equipes: Equipe[] = [];

  constructor(
    private equipesService: EquipesService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.carregarEquipes();
  }
  carregarEquipes(): void {
    this.equipesService.listarEquipes().subscribe({
      next: (dados) => {
        this.equipes = dados;
        //força a atualização da view
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar equipes:', erro);
      }
    });
  }
  criarEquipe(novaEquipe: Equipe): void {
    this.equipesService.cadastroEquipe(novaEquipe).subscribe({
      next: (equipeCriada) => {
        this.equipes.push(equipeCriada);
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao criar equipe:', erro);
      }
    });
  }

  deletar(equipeId?: number): void {
    if (confirm('Tem certeza que deseja excluir esta equipe?') && equipeId !== undefined) {
      this.equipesService.deletarEquipe(equipeId).subscribe({
        next: () => {
          this.equipes = this.equipes.filter(equipe => equipe.id !== equipeId);
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao excluir equipe:', erro);
          this.cdr.detectChanges();
        }
      });
    }
  }

  editar(equipe: Equipe): void {
    this.equipesService.editarEquipe(equipe).subscribe({
      next: (equipeAtualizada) => {
        const index = this.equipes.findIndex(e => e.id === equipeAtualizada.id);
        if (index !== -1) {
          this.equipes[index] = equipeAtualizada;
          this.cdr.detectChanges();
        }
      },
      error: (erro) => {
        console.error('Erro ao editar equipe:', erro);
      }
    });
  }



  ProcurarTexto(e: Event) {
    const prefixo = (e.target as HTMLInputElement).value;

    if (!prefixo || prefixo.length < 1) {
      this.carregarEquipes();
      return;
    }

    this.equipesService.pesquisarEquipePorPrefixo(prefixo).subscribe({
      next: (equipesEncontradas) => {
        this.equipes = equipesEncontradas;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao buscar equipe por prefixo:', erro);
      }
    });
  }
}
