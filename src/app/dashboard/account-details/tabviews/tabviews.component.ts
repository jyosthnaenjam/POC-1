import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabviews',
  templateUrl: './tabviews.component.html',
  styleUrl: './tabviews.component.css'
})
export class TabviewsComponent {

    constructor() {}
    activeTab:number=1;
    selectedOpt:string="";
    isfetchByDate=false;
    isfetchByPeriod=false;
  
    
    transViewFormbyDate!:FormGroup;
    transViewFormbyPeriod!:FormGroup;
  
    mainView = new FormGroup({
      withDate: new FormControl(),
      withPeriod: new FormControl()
    });
  
    onMainView(){
      console.log(this.mainView.value.withDate);
      console.log(this.mainView.value.withPeriod);
      this.mainView.reset();
    }
  
    
    
    activateTab(tabNo:number){
      this.activeTab = tabNo;
    }
  
    viewByPeriod(){
      this.isfetchByDate=true;
      console.log("Fetch By Period",this.isfetchByDate);
    }
  
    viewByDate(){
      this.isfetchByPeriod=true;
      console.log("Fetch By Date",this.isfetchByPeriod);
    }
  
    cancelView(){
      this.isfetchByDate=false;
      this.isfetchByPeriod=false;
    }
  
  
  
    
  
    
  
  
  

}
