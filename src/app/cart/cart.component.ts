import {Component, OnChanges, OnInit} from '@angular/core';
import {Frut} from "../../Entity/frut";
import {CartService} from "../service/cart.service";
import {CartItem} from "../../Entity/cartItem";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  frutsCart:CartItem[] = [];
  sum:number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.frutsCart = this.cartService.getCart();
    this.sum = this.cartService.getSum();
  }



  deleteItem(сartItem: CartItem): void {

    this.cartService.deleteItem(сartItem.frut);
    location.reload();

  }

  updateItem(сartItem: CartItem,count:number): void {

    this.cartService.updateItem(сartItem.frut,count);
    location.reload();
  }


}
