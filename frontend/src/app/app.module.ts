import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AccountsOverviewComponent } from './components/accounts-overview/accounts-overview.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TransferComponent } from './components/transfer/transfer.component';
import { InvestComponent } from './components/invest/invest.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: 'accounts', component: AccountsOverviewComponent }, //overview
  { path: 'transfer', component: TransferComponent },
  { path: 'invest', component: InvestComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AccountsOverviewComponent,
    AccountDetailsComponent,
    TransferComponent,
    InvestComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
