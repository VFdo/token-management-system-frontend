import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
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
  ownUser = true;

  constructor(
    private http: HttpClient,
    public router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  getAllTokens() : void{
    this.showTokenView = true;
    this.showEditView = false;
    let url = 'http://localhost:8080/tokens/all/' + sessionStorage.getItem('userId')
    this.http.get(url).subscribe((res : any)=>{this.tokens = res}),
    (err: HttpErrorResponse)=> alert(err.message);
    console.log(sessionStorage.getItem('userId'))
  }

  showUpdateView(){
    this.showTokenView = false;
    this.showEditView = false;
    const modalRef = this.modalService.open(UpdateUserComponent);
    modalRef.componentInstance.ownUser = true;
  }
}

