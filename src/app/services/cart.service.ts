import { Injectable } from '@angular/core';
import { Product } from '../types/Product.type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = []
  constructor() { }

  getProductsOfTheCart(): Product[] {
    return this.cart
  }

  addToCart(product: Product) {

  }
}
