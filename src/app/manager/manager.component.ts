import { formatDate, DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from '../patientClass/patient';
import { TokenComponent } from '../token/token.component';
import { Token } from '../tokenClass/token';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  showPatientView = false;
  showTokenView = false;
  showUpdateView = false;
  patients!: Patient[];
  tokens!: Token[];
  ownUser = true;
  // @ViewChild(TokenComponent) tokens!: TokenComponent

  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');
  
  // today = formatDate(new Date(), 'yyyy/MM/dd', 'en');

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    
  }

  getUsers() : void{
    this.showTokenView = false;
    this.showUpdateView = false;
    this.showPatientView = true;
    let url = 'http://localhost:8080/users/all'
    this.http.get(url).subscribe(
      (res : any) => this.patients=res),
      (err: HttpErrorResponse)=> alert(err.message);
  }

  getTokens() : void{
    // console.log('getting child...')
    // this.tokens.getTokensManager()
    this.showPatientView = false;
    this.showUpdateView = false;
    this.showTokenView = true;
    let url = 'http://localhost:8080/tokens/all'
    this.http.get(url).subscribe(
      (res : any) => this.tokens=res),
      (err: HttpErrorResponse)=> alert(err.message);
  }

  showEditView(){
    this.showPatientView = false;
    this.showTokenView = false;
    this.showUpdateView = false;
    sessionStorage.setItem('findUser', sessionStorage.getItem('userId')!)
    const modalRef = this.modalService.open(UpdateUserComponent);
    modalRef.componentInstance.ownUser = true
  }

  




}
