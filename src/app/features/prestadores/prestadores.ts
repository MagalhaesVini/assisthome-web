import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-prestadores',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './prestadores.html',
  styleUrl: './prestadores.scss'
})
export class PrestadoresComponent {
  prestadores = [
    { nome: 'João Carlos Silva', tipo: 'Autônomo', servico: 'Encanamento', cidade: 'São Paulo - SP', telefone: '(11) 98765-4321', status: 'Ativo' },
    { nome: 'Maria Fernanda Lima', tipo: 'Autônoma', servico: 'Limpeza Residencial', cidade: 'Curitiba - PR', telefone: '(41) 99876-5432', status: 'Ativo' },
    { nome: 'Elétrica Rápida Sul', tipo: 'Empresa', servico: 'Instalação Elétrica', cidade: 'Porto Alegre - RS', telefone: '(51) 99123-4567', status: 'Ativo' },
    { nome: 'Chaveiro Central', tipo: 'Empresa', servico: 'Chaveiro 24h', cidade: 'Belo Horizonte - MG', telefone: '(31) 97531-2468', status: 'Inativo' },
    { nome: 'Roberto Alves Souza', tipo: 'Autônomo', servico: 'Jardinagem', cidade: 'Campinas - SP', telefone: '(19) 98712-3456', status: 'Ativo' },
  ];

  displayedColumns: string[] = ['nome', 'tipo', 'servico', 'cidade', 'telefone', 'status', 'acoes'];

  abrirModalNovoPrestador() {
    alert('Funcionalidade "Novo Prestador" será implementada em breve!');
  }
}