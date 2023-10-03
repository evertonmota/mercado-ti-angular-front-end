import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(private customerService: CustomerService, private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerService.emissorDeEvento.subscribe(
      res => alert(`Eu componente pizza,  fui notificado  com a mensagem : ${res}`)
    )

    //parametros com rotas
    this.activatedRouted.params.subscribe(
      res => console.log("Id : " +res['id'], "User : " + res['user'], res)
    )

    //Parametros de consultas.
    this.activatedRouted.queryParams.subscribe(
      res=> console.log("Nome : " +res['nome'], res)
    )

  }



}
