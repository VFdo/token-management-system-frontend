import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../tokenClass/token';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  @Input() tokens!: Token[];
  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  ngOnInit(): void {
    let ChangedFormat = this.pipe.transform(this.today, 'YYYY-MM-dd');
    this.changedDate = ChangedFormat!;
  }

  deactivateTokens() : void {
    let formData =new FormData();
    formData.append('date', this.changedDate)
    this.http.post('http://localhost:8080/tokens/deactivate', formData).subscribe((res : any)=>{console.log(res)})
    this.router.navigate(['manager']);
  }
}

