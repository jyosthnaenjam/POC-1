import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotInfoComponent } from './forgot-info/forgot-info.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountDetailsComponent } from './dashboard/account-details/account-details.component';
import { PaymentsComponent } from './dashboard/payments/payments.component';
import { FundTransferComponent } from './dashboard/fund-transfer/fund-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotInfoComponent,
    RegistrationComponent,
    DashboardComponent,
    AccountDetailsComponent,
    PaymentsComponent,
    FundTransferComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
