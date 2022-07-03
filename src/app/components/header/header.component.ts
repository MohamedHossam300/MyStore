import { Component, OnInit } from '@angular/core';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  querySelector(header: any): any {
    throw new Error('Method not implemented.');
  }

  faCartShopping = faCartShopping
  quantity: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  quantityDisplayInCart(): string {
    if(this.quantity > 9) {
      return "9+"
    } else {
      return <string>(<unknown>this.quantity)
    }
  }
}
