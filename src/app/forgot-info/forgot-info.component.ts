import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-forgot-info',
  templateUrl: './forgot-info.component.html',
  styleUrls: ['./forgot-info.component.css']
})
export class ForgotInfoComponent {
    isOpen: boolean = false;
    email: any;
    myForm!: FormGroup;
    formGroup!: FormGroup;
    userList: any;

    constructor(private fb: FormBuilder,private modalService: NgbModal, private service:RegisterService) {}
  
    ngOnInit(): void {
      this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      // validators: this.passwordMatchValidator
    });
    this.userList = this.service.registerDetails

    }
    passwordMatchValidator(formGroup: FormGroup) {
      const password = formGroup.get('password')?.value;
      console.log(password)
      const confirmPassword = formGroup.get('confirmPassword')?.value;
  
      if (password !== confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
      } else {
        formGroup.get('confirmPassword')?.setErrors({});
      }
    }
    onSubmit() {
      if ((this.myForm.valid) && this.service.userData.includes(this.myForm.value.email)) {
        console.log("User is in Array");
        let userIndex=this.service.userData.indexOf(this.myForm.value.email);
        console.log(userIndex+1);
        this.service.userData[userIndex+1] = this.myForm.value.password;
        console.log('Password Changed Successfully!!');
        this.closePopup();
      }
    }
    openPopup() {
      this.isOpen = true;
    }
    closePopup() {
      this.modalService.dismissAll();
    }

}
