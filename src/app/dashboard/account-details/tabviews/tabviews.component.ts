import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabviews',
  templateUrl: './tabviews.component.html',
  styleUrl: './tabviews.component.css'
})
export class TabviewsComponent {

  constructor() {}
  activeTab: number = 1;
  isDisablebyDatefield = false;
  isDisableByPeriodfield = false;
  selectedOpt: string = '';

  disableDateField() {
    this.isDisablebyDatefield = true;
    this.isDisableByPeriodfield = false;
  }

  disablePeriodField() {
    this.isDisableByPeriodfield = true;
    this.isDisablebyDatefield = false;
  }

  activateTab(tabNo: number) {
    this.activeTab = tabNo;
  }

  cancelField(){
    this.isDisablebyDatefield = false;
  this.isDisableByPeriodfield = false;
  }
  
  
    
  
    
  
  
  

}
