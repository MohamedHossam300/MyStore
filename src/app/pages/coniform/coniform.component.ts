import { Component, OnInit } from '@angular/core';
import { SubmitFormService } from 'src/app/services/submit-form.service';
import { SubmitForm } from 'src/app/types/SubmitForm.type';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-coniform',
  templateUrl: './coniform.component.html',
  styleUrls: ['./coniform.component.css']
})
export class ConiformComponent implements OnInit {
  orderInfo: SubmitForm 
  faChevronRight = faChevronRight
  
  constructor(private cart: SubmitFormService) {
    this.orderInfo = {
      total: 0,
      fullName: "",
      address: "",
      creditCard: 0
    }
  }

  ngOnInit(): void {
    this.orderInfo = this.cart.getTheLastOrder()
  }

}
