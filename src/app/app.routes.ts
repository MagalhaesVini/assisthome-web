import { Routes } from '@angular/router';
import { ClientesComponent } from './features/clientes/clientes';
import { PlanosComponent } from './features/planos/planos';
import { PrestadoresComponent } from './features/prestadores/prestadores';
import { AtendimentosComponent } from './features/atendimentos/atendimentos';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  // { path: 'planos', component: PlanosComponent },
  // { path: 'prestadores', component: PrestadoresComponent },
  // { path: 'atendimentos', component: AtendimentosComponent },

  // { path: '**', component: NotFoundComponent }
];