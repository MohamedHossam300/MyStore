import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/types/Product.type';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: Product
  quantity: number = 1
  faChevronRight = faChevronRight

  constructor(private products: ProductsService, private cart: CartService, private route: ActivatedRoute) {
    this.product = {
      id: 0,
      name: "",
      price: 0,
      description: "",
      url: ""
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.products.getProducts().subscribe(res => {
        const productAsArray = res.filter(prod => `${prod.id}` === paramsId['id'])
        this.product = productAsArray[0]
      })
    })
  }

  onSelected(quantitySelected: string): void {
    this.quantity = <number>(<unknown>quantitySelected)
  }

  addToCart(): void {
    this.cart.addToCart(this.product, this.quantity)
    window.alert(`${ this.product.name } Was Added To The Cart`)
  }

}
