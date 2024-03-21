import { Component } from '@angular/core';
import { RegisterService } from '../../../register.service';

@Component({
  selector: 'app-multiple-accounts',
  templateUrl: './multiple-accounts.component.html',
  styleUrls: ['./multiple-accounts.component.css']
})
export class MultipleAccountsComponent {

  accountShow:boolean = false;

  constructor(private service:RegisterService){}

  getSavingsAccountDetails(){
    this.service.accountObj.AccountType = "Savings Account";
    this.service.accountObj.AvailableBalanceinRupees = "1,81,680/-";
  }
 
  getLoanAccountDetails(){
    this.service.accountObj.AccountType = "Loan Account";
    this.service.accountObj.AvailableBalanceinRupees = "4,00,000/-";
  }

  getCreditCardDetails(){
    this.service.accountObj.AccountType = "Credit Card";
    this.service.accountObj.AvailableBalanceinRupees = "1,00,000/-";
  }

  getODAccountDetails(){
    this.service.accountObj.AccountType = "OverDraft Account";
    this.service.accountObj.AvailableBalanceinRupees = "1,81,680/-";
  }

}
