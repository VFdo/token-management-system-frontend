import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patientClass/patient';
import { Token } from '../tokenClass/token';
import { UpdateUserComponent } from '../update-user/update-user.component';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TokenComponent } from '../token/token.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';


@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {
  @Input() patients!: Patient[];
  @ViewChildren(UpdateUserComponent) updateUser!: UpdateUserComponent
  userId!: string
  tokens!: Token[]
  showEditView = false;
  showTokenView = false;
  form!: FormGroup
  modalView = false;
  ownUser = true;
  confirmation = false;

  constructor(
    public router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  getEditView(id: any){
    this.ownUser = false;
    sessionStorage.setItem('findUser', id)
    const modalRef = this.modalService.open(UpdateUserComponent);
    modalRef.componentInstance.ownUser = false;
    this.showTokenView = false;
  }

  getTokensView(id : any){
    sessionStorage.setItem('findUser', id)
    this.showEditView = false;
    let url = 'http://localhost:8080/tokens/all/' + sessionStorage.getItem('findUser')
    this.http.get(url).subscribe((res : any)=>{
      this.tokens = res;
      const modalRef = this.modalService.open(TokenComponent, { size: 'xl' });
      modalRef.componentInstance.tokens = this.tokens;
      console.log(res)
    },
    (err: HttpErrorResponse)=> alert(err.message))
  }
    
  deletePatient(id : any){
    this.confirmation = true;
    sessionStorage.setItem('deleteId', id)
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    if(modalRef.componentInstance.pressedOk){
      console.log('pressed')
      this.confirmed()
    }
  }

  confirmed(): void{
      
    }
}
