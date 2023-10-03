import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './pages/customer/customer.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { FormsModule } from '@angular/forms';
import { PaginaNaoExisteComponent } from './pages/pagina-nao-existe/pagina-nao-existe/pagina-nao-existe.component';


@NgModule({
  declarations: [
    CustomerComponent,
    PizzaComponent,
    PaginaNaoExisteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [CustomerComponent, PizzaComponent, PaginaNaoExisteComponent]
})
export class HomeModule { }
