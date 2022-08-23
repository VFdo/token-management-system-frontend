import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn = false;
  message = 'you are not logged in';
  role = sessionStorage.getItem("role")
  hideManagerView = true;
  hidePatientView = true;
  hideLoginButton = true;

  constructor(
    private http: HttpClient,
    private router: Router
) { }

  ngOnInit(): void {
    // If manager -> manager view
    if( this.role == 'ROLE_MANAGER'){
      this.message= 'Welcome Manager, ' + sessionStorage.getItem('username')
      this.hideManagerView = false;
      this.loggedIn=true;
    }
    // If patient -> patient view
    else if(this.role == 'ROLE_PATIENT'){
      this.message= 'Welcome Patient, ' + sessionStorage.getItem('username')
      this.hidePatientView = false;
      this.loggedIn=true;
    }
    // else -> not logged in
    else{
      this.hideLoginButton = false;
    }
  }

  login() : void{
    this.router.navigate(['/login'])
  }
}
