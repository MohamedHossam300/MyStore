import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/Product.type';
import { SubmitForm } from 'src/app/types/SubmitForm.type';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { SubmitFormService } from 'src/app/services/submit-form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  faTrushCan = faTrashCan
  cartItems$: Observable<Product[]>
  total: number = 0
  isEmpty: boolean = true
  fullName: string = ""
  address: string = ""
  creditCard: number = 0
  
  constructor(
      private cart: CartService,
      private order: SubmitFormService,
      private router: Router,
    ) { 
      this.cartItems$ = this.cart.getProductsOfTheCart()

      this.cartItems$.subscribe(items => {
        this.isEmpty = items.length === 0
        this.total = items.reduce((acc, curr) => acc + curr.price * (curr as any).quantity, 0)
      })
    }
  
  ngOnInit(): void { }

  removeFromTheCart = (product: Product) => {
    this.cart.removeFromTheCart(product)
  }
  
  submitForm(): void {
    const form: SubmitForm = {
      fullName: this.fullName,
      address: this.address,
      creditCard: this.creditCard,
      total: this.total
    }

    this.order.addOrder(form)
    this.router.navigate(["/coniform"])
  }
}
