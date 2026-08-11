import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-atendimentos',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './atendimentos.html',
  styleUrl: './atendimentos.scss'
})
export class AtendimentosComponent {
  atendimento = {
    protocolo: 'ATD-0001',
    cliente: 'Maria Silva',
    servico: 'Encanamento',
    descricao: 'Vazamento na pia da cozinha, com infiltração no armário inferior.',
    status: 'Aguardando início',
    dataAbertura: '20/05/2025 09:15',
    prestador: {
      nome: 'João Carlos Silva',
      tipo: 'Autônomo',
      servico: 'Encanamento',
      telefone: '(21) 97123-4567',
      status: 'Disponível'
    }
  };

  atribuirPrestador() {
    alert('Funcionalidade "Atribuir prestador" será implementada em breve!');
  }

  iniciarAtendimento() {
    alert('Funcionalidade "Iniciar atendimento" será implementada em breve!');
  }
}