import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  mystring!: string;
  myUser!: User;
  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  submit(): void{
    this.http.post('http://localhost:8080/signin', this.form.getRawValue(), {withCredentials: true})
    .subscribe((res : any) => {
      this.myUser=res;
      sessionStorage.setItem('username', this.myUser.username)
      sessionStorage.setItem('userId', this.myUser.id)
      let tokenStr = 'Bearer ' + this.myUser.token
      sessionStorage.setItem('token', tokenStr)
      sessionStorage.setItem('role', this.myUser.roles[0])
      sessionStorage.setItem('findUser', this.myUser.id)
      sessionStorage.setItem('loggedIn', 'true')
      console.log('done')
      window.location.href='http://localhost:4200/'
    },(err: HttpErrorResponse)=> this.error = true);
  }

  close(): void{
    this.error = false;
  }
}
