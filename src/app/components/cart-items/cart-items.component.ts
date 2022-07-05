import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/types/Product.type';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  @Input() cart: Product = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    url: ""
  }
  @Output() updateQuantity: EventEmitter<number> = new EventEmitter

  faTrushCan = faTrashCan
  newQuantity: any = this.cart.quantity

  constructor(private cartService: CartService,) {
    this.updateQuantity.emit(this.newQuantity)
  }

  ngOnInit(): void {
  }

  removeFromTheCart = (product: Product) => {
    this.cartService.removeFromTheCart(product)
  }

}
