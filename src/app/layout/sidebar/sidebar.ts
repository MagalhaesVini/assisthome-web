import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, MatListModule, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Clientes', icon: 'people', route: '/clientes' },
    { label: 'Planos', icon: 'assignment', route: '/planos' },
    { label: 'Prestadores', icon: 'engineering', route: '/prestadores' },
    { label: 'Atendimentos', icon: 'support_agent', route: '/atendimentos' },
  ];
}