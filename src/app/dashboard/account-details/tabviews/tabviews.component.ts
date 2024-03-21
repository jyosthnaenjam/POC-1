import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabviews',
  templateUrl: './tabviews.component.html',
  styleUrl: './tabviews.component.css',
})
export class TabviewsComponent {
  constructor() {}
  activeTab: number = 1;
  isDisablebyDatefield = false;
  isDisableByPeriodfield = false;
  selectedOpt: string = '';
  fromTransDate = '';
  toTransDate = '';
  showMode = '';
  showData = false;
  sevenPeriodicDays = '7';
  fourteenPeriodicDays = '14';
  minRangeDate = new Date();

  
  

  arrangeToDate() {
    this.minRangeDate = new Date(this.fromTransDate);
  }

  disableDateField() {
    this.isDisablebyDatefield = true;
    this.isDisableByPeriodfield = false;
    this.showMode = 'ShowbyDate';
  }

  disablePeriodField() {
    this.isDisableByPeriodfield = true;
    this.isDisablebyDatefield = false;
    this.showMode = 'ShowbyPeriod';
  }

  activateTab(tabNo: number) {
    this.activeTab = tabNo;
  }

  cancelField() {
    this.isDisablebyDatefield = false;
    this.isDisableByPeriodfield = false;
    this.showData = false;
  }

  submitField() {
    if (this.showMode == 'ShowbyDate') {
      if (this.fromTransDate != '' && this.toTransDate != '') {
        console.log('Showing Data in Table');
        this.showData = true;
      } else {
        console.log('Enter The Dates');
      }
    } else if (this.showMode == 'ShowbyPeriod') {
      if (this.sevenPeriodicDays != '') {
        console.log('Showing the data of Days = ', this.sevenPeriodicDays);
        this.showData = true;
      } else if (this.fourteenPeriodicDays != '') {
        console.log('Showing the Data of Days = ', this.fourteenPeriodicDays);
      } else {
        console.log('Select The Period Of Duration');
      }
    } else {
      console.log('User Dint Choose Any Field');
    }
  }

  submitStatement(){
    
  }

  cancelStatement(){
    
  }


}
