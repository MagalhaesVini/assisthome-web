import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './planos.html',
  styleUrl: './planos.scss'
})
export class PlanosComponent {
  planos = [
    { nome: 'Plano Essencial', descricao: 'Assistência residencial com serviços básicos para o dia a dia.', valor: 'R$ 39,90', status: 'Ativo' },
    { nome: 'Plano Família', descricao: 'Mais tranquilidade para sua família com coberturas ampliadas.', valor: 'R$ 59,90', status: 'Ativo' },
    { nome: 'Plano Completo', descricao: 'Cobertura completa para sua residência com atendimento 24h.', valor: 'R$ 89,90', status: 'Ativo' },
    { nome: 'Plano Empresarial Leve', descricao: 'Soluções essenciais para pequenas empresas e escritórios.', valor: 'R$ 79,90', status: 'Inativo' },
  ];

  displayedColumns: string[] = ['nome', 'descricao', 'valor', 'status', 'acoes'];

  abrirModalNovoPlano() {
    alert('Funcionalidade "Novo Plano" será implementada em breve!');
  }
}