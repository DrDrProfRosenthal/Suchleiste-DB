import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accounts-overview',
  templateUrl: './accounts-overview.component.html',
  styleUrls: ['./accounts-overview.component.css'],
})
export class AccountsOverviewComponent implements OnInit {
  accounts: Account[] = [];
  results: Account[] = [];
  keyword = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAccounts();
  }

  search() {
    this.results = this.accounts.filter((account) =>
      account.accountName.toLowerCase().includes(this.keyword.toLowerCase()) ||
      account.accountNumber.toLowerCase().includes(this.keyword.toLowerCase())
    );
  }

  getAccounts() {
    this.http
      .get<Account[]>('http://localhost:3000/bank-accounts')
      .subscribe((data) => {
        this.accounts = data;
        this.results = data;
      });
  }
}
