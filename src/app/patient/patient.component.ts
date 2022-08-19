import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from '../patientClass/patient';
import { TokenComponent } from '../token/token.component';
import { Token } from '../tokenClass/token';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  tokens!: Token[];
  showTokenView = false;
  showEditView = false;
  @ViewChild(UpdateUserComponent) updateUser!: UpdateUserComponent
  form!: FormGroup

  constructor(
    private http: HttpClient,
    public router: Router,
    public formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      patientid: sessionStorage.getItem('userId')
    })
  }

  getAllTokens() : void{
    this.showTokenView = true;
    this.showEditView = false;
    let url = 'http://localhost:8080/patient/tokens/all'
    this.http.post(url, this.form.getRawValue()).subscribe((res : any)=>this.tokens = res)
    console.log(sessionStorage.getItem('userId'))
  }

  showUpdateView(){
    this.showTokenView = false;
    this.showEditView = false;
    const modalRef = this.modalService.open(UpdateUserComponent);
  }




}

