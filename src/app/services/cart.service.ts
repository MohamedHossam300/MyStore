import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../types/Product.type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Product[]>([])

  constructor() {}

  getProductsOfTheCart(): Product[] {
    return this.cart
  }

  addToCart(product: Product, quantity: number): Observable<Product[]> | number {
    product.quantity = quantity
    return this.cart.pipe(tap(currentList=> {
      currentList.unshift(product)
    }));
  }

  cartQuantity(): Observable<Product[]> {
    return this.cart.pipe(tap(currentList=> {
      currentList.length
    }));
  }

  removeFromTheCart(product: Product): Observable<Product[]> {
    return this.cart.pipe(tap(currentList=> {
      this.cart = currentList.filter(p => p.id !== product.id)
      return this.cart
    }));
  }
}
