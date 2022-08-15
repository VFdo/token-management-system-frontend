import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = 'you are not logged in';
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/dashboard',{withCredentials: true}).subscribe(
      res => {
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
