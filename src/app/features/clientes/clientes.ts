import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-clientes',
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
    MatSelectModule,
    MatDialogModule
  ],
  templateUrl: './clientes.html',
  styleUrl: './clientes.scss'
})
export class ClientesComponent {
  clientes = [
    { nome: 'Ana Paula Ferreira', cpf: '123.456.789-01', telefone: '(11) 98765-4321', email: 'ana.paula.ferreira@email.com', status: 'Ativo' },
    { nome: 'Bruno Alves da Silva', cpf: '987.654.321-00', telefone: '(19) 99654-3210', email: 'bruno.alves.silva@email.com', status: 'Ativo' },
    { nome: 'Carla Mendes Souza', cpf: '456.789.123-45', telefone: '(21) 98123-4567', email: 'carla.mendes@email.com', status: 'Ativo' },
    { nome: 'Daniel Martins Lima', cpf: '321.654.987-08', telefone: '(31) 97531-2468', email: 'daniel.martins.lima@email.com', status: 'Inativo' },
    { nome: 'Juliana Ribeiro Costa', cpf: '159.753.486-27', telefone: '(41) 98876-5432', email: 'juliana.ribeiro@email.com', status: 'Ativo' },
  ];

  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'email', 'status', 'acoes'];

  constructor(private dialog: MatDialog) { }

  abrirModalNovoCliente() {
    alert('Funcionalidade "Novo Cliente" será implementada em breve!');
  }
}