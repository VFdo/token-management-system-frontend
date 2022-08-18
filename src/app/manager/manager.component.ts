import { formatDate, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patientClass/patient';
import { Token } from '../tokenClass/token';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  showPatientView = false;
  showTokenView = false;
  patients!: Patient[];
  tokens!: Token[];

  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');
  
  // today = formatDate(new Date(), 'yyyy/MM/dd', 'en');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getUsers() : void{
    this.showTokenView = false;
    this.showPatientView = true;
    let url = 'http://localhost:8080/users/all'
    this.http.get(url).subscribe((res : any) => this.patients=res)
  }

  getTokens() : void{
    this.showPatientView = false;
    this.showTokenView = true;
    let url = 'http://localhost:8080/tokens/all'
    this.http.get(url).subscribe((res : any) => this.tokens=res
    )
  }

  




}
