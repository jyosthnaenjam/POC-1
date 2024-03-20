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
import { NavbarComponent } from './dashboard/account-details/navbar/navbar.component';
import { AccountHolderDetailsComponent } from './dashboard/account-details/account-holder-details/account-holder-details.component';
import { MultipleAccountsComponent } from './dashboard/account-details/multiple-accounts/multiple-accounts.component';
import { AccountSummaryComponent } from './dashboard/account-details/account-summary/account-summary.component';
import { AccountDashboardComponent } from './dashboard/account-details/account-dashboard/account-dashboard.component';
import { TabviewsComponent } from './dashboard/account-details/tabviews/tabviews.component';

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
    NavbarComponent,
    AccountHolderDetailsComponent,
    MultipleAccountsComponent,
    AccountSummaryComponent,
    AccountDashboardComponent,
    TabviewsComponent,
    
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
