import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  onSubmit(): any {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  // getData(){
  //   return this.http.get('https://run.mocky.io/v3/46d132e1-5b95-42a8-9e33-3bd3c38a9f5f')
  // }
  // vaidateUser(email:string,password:string){
  //   return this.http.get(`https://run.mocky.io/v3/46d132e1-5b95-42a8-9e33-3bd3c38a9f5f?email=${email}&password=${password}`)
  // }
  userData:string[]=['leela@gmail.com','Leela@123','katy@gmail.com','Katy@12354','user@gmail.com','User@12#1'];
  registerDetails:Array<Object> = []
  currentUser: any;
  trimmedString:string = ""
  // setUserData(data: any) {
  //   this.userData = data;
  // }

  getUserData() {
    return this.userData;
  }
  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }
  
  accountObj={
    AccountHolder:"Thotakura Dileep",
    AccountType:"Savings Account",
    AccountNumber:"1234567890111213",
    AccountBranch:"KPHB",
    AvailableBalanceinRupees:"1,81,680/-"
  }
 
  

}
