import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/Product.type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = []
  total: number = 0
  isEmpty: boolean = true

  constructor(private cart: CartService) {  }

  ngOnInit(): void {
    this.cartItems = this.cart.getProductsOfTheCart()
    
    if (this.cartItems.length === 0) {
      this.isEmpty = true
    } else {
      this.isEmpty = false
    }
  }
  
  dispalyTotal(): number {
    this.cartItems.map(item => {
      this.total += <number>(<unknown>item.quantity) * <number>(<unknown>item.price)
    })
    console.log(this.isEmpty)
    return <number>(<unknown>this.total)
  }
}
