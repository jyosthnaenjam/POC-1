import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../register.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent{

   constructor(private service:RegisterService){}

  isDisplay:boolean = false;
  loanAccountSummary:any = [];

  ngOnInit(){
    this.loanAccountSummary.push(this.service.accountObj);
    console.log(this.loanAccountSummary)
  }
  

  showData(){
    this.isDisplay = !this.isDisplay
  }


}
