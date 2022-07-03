import { Injectable } from '@angular/core';
import { Product } from '../types/Product.type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  static cartQuantity(): number {
    throw new Error('Method not implemented.');
  }
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
}
