import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Component({
  selector: 'app-confirmation-modal',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Confirm Delete</h4>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete this patient?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.<br>
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" ngbAutofocus class="btn btn-danger" (click)="confirm()">Ok</button>
  </div>
  `
})
export class ConfirmationModalComponent implements OnInit {
  pressedOk=false;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  confirm(): void{
    let url = 'http://localhost:8080/user/delete/' + sessionStorage.getItem('deleteId')
      this.http.delete(url)
      .subscribe((res : any)=> {console.log(JSON.parse(res))},
      (err: HttpErrorResponse)=> alert(err.message))
      window.location.reload();
  }

}
