import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/Product.type';
import { SubmitForm } from 'src/app/types/SubmitForm.type';
import { SubmitFormService } from 'src/app/services/submit-form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems$: Observable<Product[]>
  total: string = ""
  isEmpty: boolean = true
  fullName: string = ""
  address: string = ""
  creditCard: number = 0
  itemThatUpdated: Product

  constructor(
      private cart: CartService,
      private order: SubmitFormService,
      private router: Router,
    ) {
      this.itemThatUpdated = {
        name: "",
        id: 0,
        price: 0,
        url: "",
        description: ""
      }
      this.cartItems$ = this.cart.getProductsOfTheCart()

      this.cartItems$.subscribe(items => {
        this.isEmpty = items.length === 0
        this.total = (items.reduce((acc, curr) => acc + curr.price * (curr as any).quantity, 0)).toFixed(2)
      })

    }

  ngOnInit(): void { }

  updateQuantity(value: number) {
    this.cart.updateQuantity(this.itemThatUpdated, value)
  }

  submitForm(): void {
    const form: SubmitForm = {
      fullName: this.fullName,
      address: this.address,
      creditCard: this.creditCard,
      total: <number>(<unknown>this.total)
    }

    this.order.addOrder(form)
    this.router.navigate(["/coniform"])
  }
}
