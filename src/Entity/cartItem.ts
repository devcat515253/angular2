import {Frut} from "./frut";


export class CartItem {
  frut:Frut ;
  count: number;


  constructor();
  constructor(frut?:Frut,count?:number);
  constructor(frut?:any,count?:any){
    this.frut=frut;
    this.count= count;
  }


}
