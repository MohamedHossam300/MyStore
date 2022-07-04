import { Injectable } from '@angular/core';
import { Product } from '../types/Product.type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = []
  constructor() {}

  getProductsOfTheCart(): Product[] {
    return this.cart
  }

  addToCart(product: Product, quantity: number): Product[] | number {
    product.quantity = quantity
    console.log(this.cart)
    return this.cart.unshift(product)
  }

  cartQuantity(): number {
    return this.cart.length
  }

  removeFromTheCart(product: Product): Product[] {
    this.cart = this.cart.filter(p => p.id !== product.id)
    return this.cart
  }
}
