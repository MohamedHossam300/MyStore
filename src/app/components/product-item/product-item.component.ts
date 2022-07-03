import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/Product.type';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product
  quantity: number = 1

  constructor(private cart: CartService) {
    this.product = {
      id: 0,
      name: "",
      description: "",
      price: 0,
      url: ""
    }
  }

  ngOnInit(): void {
  }

  onSelected(quantitySelected: string): void {
    this.quantity = <number>(<unknown>quantitySelected)
  }

  addToCart(): void {
    this.cart.addToCart(this.product, this.quantity)
    window.alert(`${ this.product.name } Was Added To The Cart`)
  }

}
