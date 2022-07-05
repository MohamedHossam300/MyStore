import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Product } from '../types/Product.type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = []
  private cart$ = new BehaviorSubject<Product[]>([])

  constructor() {}

  getProductsOfTheCart(): Observable<Product[]> {
    return this.cart$
  }

  addToCart(product: Product, quantity: number) {
    product.quantity = quantity
    this.cart.unshift(product)
    this.cart$.next(this.cart)
  }

  cartQuantity(): Observable<number> {
    return this.cart$.pipe(map(currentList => currentList.length))
  }

  removeFromTheCart(product: Product) {
    this.cart= this.cart.filter(p => p.id !== product.id)
    return this.cart$.next(this.cart)
  }

  updateQuantity(product: Product, newQuantity: number) {
    const i = this.cart.indexOf(product)
    this.cart[i].quantity = newQuantity
    return this.cart$.next(this.cart)
  }
}
