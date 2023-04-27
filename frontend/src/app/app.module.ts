import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AccountsOverviewComponent } from './components/accounts-overview/accounts-overview.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { HttpClientModule } from '@angular/common/http'; // Import the HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    AccountsOverviewComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
