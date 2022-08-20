import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from '../tokenClass/token';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  userManager!: boolean;
  @Input() tokens!: Token[];
  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');
  form!: FormGroup;
  @Input() modalView!: boolean;

  constructor(
    private http:HttpClient,
    private router:Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    let ChangedFormat = this.pipe.transform(this.today, 'YYYY-MM-dd');
    this.changedDate = ChangedFormat!;
    // console.log(sessionStorage.getItem('role'))
    if(sessionStorage.getItem('role') === 'ROLE_MANAGER')
        this.userManager = true;
    else{
        this.userManager = false;
    }
    
  }

  deactivateTokens() : void {
    let formData =new FormData();
    formData.append('date', this.changedDate)
    this.http.post('http://localhost:8080/tokens/deactivate', formData).subscribe((res : any)=>{console.log(res)},
    (err: HttpErrorResponse)=> alert(err.message))
    this.router.navigate(['manager']);
  }

  // TODO: make edit?

  // deleteToken(id : any){
  //   sessionStorage.setItem('deleteId', id)
  //   this.form = this.formBuilder.group({
  //     id: sessionStorage.getItem('deleteId')
  //   });
  //   let url = 'http://localhost:8080/tokens/delete'
  //   this.http.post(url, this.form.getRawValue())
  // }

}

