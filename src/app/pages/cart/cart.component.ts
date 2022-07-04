import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/Product.type';
import { SubmitForm } from 'src/app/types/SubmitForm.type';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { SubmitFormService } from 'src/app/services/submit-form.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  faTrushCan = faTrashCan
  cartItems: Product[] = []
  total: number = 0
  isEmpty: boolean = true
  fullName: string = ""
  address: string = ""
  creditCard: number = 0
  
  constructor(
      private cart: CartService,
      private order: SubmitFormService,
      private router: Router,
    ) {  }

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
    return <number>(<unknown>this.total)
  }
  
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
