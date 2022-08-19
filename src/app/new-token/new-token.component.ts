import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-token',
  templateUrl: './new-token.component.html',
  styleUrls: ['./new-token.component.css']
})
export class NewTokenComponent implements OnInit {
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      date: '',
      patient: sessionStorage.getItem('username'),
      patientId: sessionStorage.getItem('userId')
    });
  }

  submit(): void{
    // console.log(this.form.getRawValue())
    this.http.post('http://localhost:8080/tokens/new', this.form.getRawValue())
    .subscribe((res : any) => console.log(res))
    this.router.navigate([''])
  }
}
