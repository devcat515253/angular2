import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Frut} from "../../Entity/frut";
import {CartItem} from "../../Entity/cartItem";



@Injectable()
export class CartService {
  frutsCart:CartItem[]=[];

  constructor() {
    this.frutsCart = this.getCart();

  }


  add(frut: Frut){

    let cartItem:CartItem = new CartItem(frut,1);

    if(this.frutsCart.find((element)=> element.frut.name == cartItem.frut.name) != undefined) {
      return;
    }
    else{
      this.frutsCart.push(cartItem);
      localStorage.setItem('Cart', JSON.stringify(this.frutsCart));
    }

  }

  deleteItem(frut:Frut){

    let index = this.frutsCart.findIndex((element) => element.frut.name ==  frut.name);

    if(index > -1) {
      this.frutsCart.splice(index,1);
      localStorage.setItem('Cart', JSON.stringify(this.frutsCart));
    }


  }

  updateItem(frut:Frut,count:number): void {

    let index = this.frutsCart.findIndex((element) => element.frut.name ==  frut.name);

    if(index > -1) {
      this.frutsCart[index].count = count;
      localStorage.setItem('Cart', JSON.stringify(this.frutsCart));
    }

  }

  getSum():number{
    let sum:number = 0;

    for (let item of this.frutsCart){

      let price:number = item.frut.price;
      let count:number = item.count;

      if(item.frut.name == "Папайя(три по цене одной)")
        sum +=  (price / 3)  * count;
      else
        sum +=  price  * count;

    }

    return sum;
  }

  getCart(){

    return JSON.parse(localStorage.getItem('Cart'));
  }
}



