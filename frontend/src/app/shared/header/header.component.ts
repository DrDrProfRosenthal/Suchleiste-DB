import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  keyword =''
  results : any = []

  constructor(private http: HttpClient) { }

  search() {
    console.log(this.keyword);
    this.http
      .post(
        "http://localhost:3000/search-results",
        {"input": this.keyword },
      
        )
      .subscribe(data => {
       this.results = data
  })
}
}