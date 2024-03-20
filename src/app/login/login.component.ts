import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  imagePath = 'assets/image.png';
  imageWidth = 600; 
  imageHeight = 550;
  isShowPopup: boolean = false;
  submitted = false;
  uEmail: any;
  uPassword:any;
  userList: any;
  constructor(private fb: FormBuilder,private router: Router,private modalService: NgbModal,
    private service:RegisterService) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/)]],
    });
    this.userList = this.service.registerDetails;
    console.log(this.service.userData);
  }
 
  get formControls() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.userList)
    // this.uEmail = this.userList[0].email;
    // this.uPassword = this.userList[0].password;
    if (this.loginForm.invalid) {
      console.log(this.service)
      return;
    }
    if(this.service.userData.includes(this.formControls['email'].value)&& this.service.userData.includes(this.formControls['password'].value)){
      alert('Login successful!');
     
        const user = { username: this.formControls['email'].value}; 
        console.log(user)
         this.service.setCurrentUser(user);
        var newStr = this.formControls['email'].value.replace(/@.*$/,"");
        this.service.trimmedString = newStr;
        console.log(this.service.trimmedString)
        var name = newStr!==user ? newStr : null;
        console.log(name);
        this.loginForm.reset();
        this.router.navigateByUrl('/dashboard')
  
    }else{
      alert('Invalid username or password');
        this.loginForm.reset();
    }
   
  }
  openForgotPasswordPopup(content: any) {
    this.modalService.open(content, {
      centered: true,
      scrollable: true,
      size: 'lg',
      backdrop: 'static',
    });
  }
  getRegistration(){
    this.router.navigate(['/registration']);
  }
  // onLoginClick() {
  //   // Your login logic goes here

  //   // Clear the input fields
  //   // this.username = '';
  //   // this.password = '';
  // }
}
