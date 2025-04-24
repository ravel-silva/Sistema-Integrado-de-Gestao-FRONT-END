import { TeamList } from './sig-api.js';
async function carregartabela() {
    try {
       const equipes = await TeamList();
       const tabela = document.querySelector('#teamTable tbody');
 
       equipes.forEach(equipes =>{
          const linha = document.createElement('tr');
          linha.innerHTML = 
          `<td>${equipes.prefixo}</td>
          <td>${new Date (equipes.dataCriacao).toLocaleDateString('pt-BR')}</td>`;
          tabela.append(linha);
       });
    } catch (error) {
       console.error('Erro em carregar as equipes:', error)
    }
 }
document.addEventListener('DOMContentLoaded', carregartabela)