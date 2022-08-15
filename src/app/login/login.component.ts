import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
    console.log(this.form.getRawValue())
    this.http.post('http://localhost:8080/signin', this.form.getRawValue(), {withCredentials: true})
    .subscribe((res : any) => {
      this.myUser=res;
      sessionStorage.setItem('username', this.myUser.username)
      let tokenStr = 'Bearer ' + this.myUser.token
      sessionStorage.setItem('token', tokenStr)
      console.log(this.myUser.type)
    });
  }
}