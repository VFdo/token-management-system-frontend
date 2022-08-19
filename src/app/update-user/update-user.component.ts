import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patientClass/patient';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  form!: FormGroup;
  patient!: Patient;
  userId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: sessionStorage.getItem('findUser'),
      username: '',
      fullName: '',
      email: '',
      phoneNo: '',
      dateOfBirth: ''
    });
    let url = 'http://localhost:8080/user/details'
    // console.log(this.form.getRawValue())
    this.http.post(url, this.form.getRawValue()!).subscribe((res : any)=> this.form.patchValue(res))
    console.log(this.form.getRawValue())
  }

  submit() : void{
    console.log(this.form.getRawValue())
    this.http.post('http://localhost:8080/user/update', this.form.getRawValue())
    .subscribe((res: any) => {
      console.log(res); 
      sessionStorage.setItem('findUser', sessionStorage.getItem('userId')!)
      this.router.navigate([''])})
  }

  updateId(userId : any) : void{
    this.form.controls['id'].setValue(userId);
  }

}
