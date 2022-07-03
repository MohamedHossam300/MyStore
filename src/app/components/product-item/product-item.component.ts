import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/types/Product.type';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product

  constructor() {
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

  AddToCart() {
    window.alert(`${ this.product.name } Was Added To The Cart`)
  }

}
