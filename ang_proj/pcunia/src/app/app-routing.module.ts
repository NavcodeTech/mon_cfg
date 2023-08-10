import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'accounts/update', component: UpdateComponent },
  { path: 'accounts/createaccount', component: CreateAccountComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'transaction/creditslip', component: CreditSlipComponent },
  { path: 'transaction/creditcheque', component: CreditChequeComponent },
  { path: 'transaction/debitslip', component: DebitSlipComponent },
  { path: 'transaction/debitcheque', component: DebitChequeComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'loan/loanrequest', component: LoanRequestComponent },
  { path: 'loan/loandisbursal', component: LoanDisbursalComponent },
  { path: 'passbook', component: PassbookComponent },
  { path: 'passbook/transactiondetails', component: TransactionDetailsComponent },
  { path: 'passbook/accountsummary', component: AccountSummaryComponent },
  { path: 'accounts', component: AccountsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
