import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patientClass/patient';
import { Token } from '../tokenClass/token';
import { UpdateUserComponent } from '../update-user/update-user.component';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TokenComponent } from '../token/token.component';


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

  constructor(
    public router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    
  }

  getEditView(id: any){
    sessionStorage.setItem('findUser', id)
    const modalRef = this.modalService.open(UpdateUserComponent);
    this.showTokenView = false;
  }

  getTokensView(id : any){
    sessionStorage.setItem('findUser', id)
    this.showEditView = false;
    // this.showTokenView = true;
    this.form = this.formBuilder.group({
      patientid: sessionStorage.getItem('findUser')
    });
    let url = 'http://localhost:8080/patient/tokens/all'
    this.http.post(url, this.form.getRawValue()).subscribe((res : any)=>{
      this.tokens = res;
      const modalRef = this.modalService.open(TokenComponent, { size: 'xl' });
      modalRef.componentInstance.tokens = this.tokens;
      console.log(res);
    })
    // console.log(this.form.getRawValue())
    // console.log(this.tokens[0])
  }
    

  deletePatient(id : any){
    sessionStorage.setItem('deleteId', id)
    this.form = this.formBuilder.group({
      id: sessionStorage.getItem('deleteId')
    });
    let url = 'http://localhost:8080/user/delete'
    this.http.post(url, this.form.getRawValue())
    .subscribe((res : any)=> console.log(JSON.parse(res)))
    console.log(this.form.getRawValue())
    window.location.reload();
  }


}
