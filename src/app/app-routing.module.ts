import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './modules/home/pages/customer/customer.component';
import { PizzaComponent } from './modules/home/pages/pizza/pizza.component';
import { PaginaNaoExisteComponent } from './modules/home/pages/pagina-nao-existe/pagina-nao-existe/pagina-nao-existe.component';
import { PodeAtivarGuard } from './modules/home/pages/guards/pode-ativar.guard';
import { PodeDesativarGuard } from './modules/home/pages/guards/pode-desativar.guard';
import { PodeCarregarGuard } from './modules/home/pages/guards/pode-carregar.guard';

const routes: Routes = [

  {path: '', component: CustomerComponent, pathMatch: 'full'},
  {path: 'cadastro-cliente/:usuario/:senha',
       component: CustomerComponent,
       canActivate: [PodeAtivarGuard],
       canDeactivate: [PodeDesativarGuard]
  },
  {path: 'cadastro-pizza', component: PizzaComponent, children:[
    {path: ':id/:user', component: PizzaComponent},
  ]},
  
  {path: 'pedido',loadChildren: () => import('./pedido/pedido-routing.module').then(x => x.PedidoRoutingModule),
    canLoad: [PodeCarregarGuard]
  }, 

  {path: '404', component: PaginaNaoExisteComponent},
  {path: '**', redirectTo: '404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
