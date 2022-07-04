import { Injectable } from '@angular/core';
import { SubmitForm } from '../types/SubmitForm.type';

@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {
  myOrders: SubmitForm[] = []

  constructor() { }

  getTheLastOrder(): SubmitForm {
    return this.myOrders[0]
  }

  addOrder(order: SubmitForm) {
    this.myOrders.unshift(order)
  }
}
