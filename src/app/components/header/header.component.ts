import { Component, OnInit } from '@angular/core';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  faCartShopping = faCartShopping
  quantity: number = 0

  constructor(private cart: CartService) {
  }
  
  ngOnInit(): void {
  }
  
  quantityDisplayInCart(): string {
    this.quantity = this.cart.cartQuantity()
    if(this.quantity > 9) {
      return "9+"
    } else {
      return <string>(<unknown>this.quantity)
    }
  }
}
