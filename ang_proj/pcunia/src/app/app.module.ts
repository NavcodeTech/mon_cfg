import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './accounts/update/update.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoanComponent } from './loan/loan.component';
import { PassbookComponent } from './passbook/passbook.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateAccountComponent } from './accounts/create-account/create-account.component';
import { CreditSlipComponent } from './transaction/credit-slip/credit-slip.component';
import { CreditChequeComponent } from './transaction/credit-cheque/credit-cheque.component';
import { DebitSlipComponent } from './transaction/debit-slip/debit-slip.component';
import { DebitChequeComponent } from './transaction/debit-cheque/debit-cheque.component';
import { TransactionDetailsComponent } from './passbook/transaction-details/transaction-details.component';
import { AccountSummaryComponent } from './passbook/account-summary/account-summary.component';
import { LoanRequestComponent } from './loan/loan-request/loan-request.component';
import { LoanDisbursalComponent } from './loan/loan-disbursal/loan-disbursal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UpdateComponent,
    TransactionComponent,
    LoanComponent,
    PassbookComponent,
    AccountsComponent,
    CreateAccountComponent,
    CreditSlipComponent,
    CreditChequeComponent,
    DebitSlipComponent,
    DebitChequeComponent,
    TransactionDetailsComponent,
    AccountSummaryComponent,
    LoanRequestComponent,
    LoanDisbursalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
