import { Component, OnInit } from '@angular/core';
import {Frut} from "../../Entity/frut";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }


  fruts: Frut[] =
    [
      { name: "Банан", price: 10},
      { name: "Мандарин", price: 16 },
      { name: "Яблоко",price: 20 },
      { name: "Папайя(три по цене одной)", price:300 }
    ];



    addItem(frut: Frut): void {

      this.cartService.add(frut);
  }


}


