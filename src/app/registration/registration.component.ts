import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  usersList: Array<Object> = []
  submitted = false;
  imagePath = 'assets/image.png';
  imageWidth = 700; 
  imageHeight = 800;
  countries: string[] = ['Select Country', 'India','USA', 'Canada', 'UK', 'Australia', 'Other'];
  states: string[] = ['Select State','Telangana','Andhra Pradesh','Karnataka','Tamil Nadu','Himachal Pradesh']
  constructor(private fb: FormBuilder,private router: Router, private register: RegisterService ) { }

  ngOnInit(): void {
    // this.usersList =  JSON.parse(localStorage.getItem('list') as any) || [];
    // console.log(this.usersList)
    this.registrationForm = this.fb.group({
      // username: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      country: ['Select Country', [Validators.required]],
      state: ['Select State', [Validators.required]],
      dob: [null, [Validators.required]],
      address: ['', [Validators.required, Validators.pattern(/^[\w\d\s\/-]+$/)]],
      // zipcode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],

    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(data:any) {
    // this.userData.setUserData(data);
    // console.log(this.userData)
    // console.log(this.registrationForm.value)

    if(this.registrationForm.valid){
      this.register.registerDetails.push(this.registrationForm.value)
      this.register.userData.push(this.registrationForm.value.email,this.registrationForm.value.password)
      console.log(this.register.registerDetails)
      this.router.navigateByUrl('/login')
    }else{
      alert('please enter the details!')
    }
    
  }
 
}
