import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  account = {
    name: 'John Doe',
    accountNumber: '1234567890',
    balance: 1000
  };
  username:any;
  ngOnInit(){
    this.username = this.service.trimmedString
  }
  constructor(private service:RegisterService,private route:Router) { }
  // get currentUser() {
  //   return this.service.getCurrentUser();
  // }
  gotoAccountDashboard(){
    this.route.navigate(["/accountDashboard"])
  }
}


