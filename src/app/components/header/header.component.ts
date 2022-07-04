import { Component, OnInit } from '@angular/core';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { map, Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  faCartShopping = faCartShopping
  quantity$: Observable<string>

  constructor(private cart: CartService) {
    this.quantity$ = this.cart.cartQuantity().pipe(map(quantity => quantity > 9 ? "9+" : quantity.toString()))
  }
  
  ngOnInit(): void {
  }

}
