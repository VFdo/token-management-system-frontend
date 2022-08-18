import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    // move to login page with routes
    if( this.role == 'ROLE_MANAGER'){
      this.message= 'welcome to the MANAGER page ' + sessionStorage.getItem('username')
      this.hideManagerView = false;

      // this.http.get('/http://localhost:8080/manager/home').subscribe((res:any) => console.log(res))
    }
    else if(this.role == 'ROLE_PATIENT'){
      this.message= 'welcome to the PATIENT page ' + sessionStorage.getItem('username')
      this.hidePatientView = false;
      // this.http.get('/http://localhost:8080/manager/home').subscribe((res:any) => console.log(res))
    }
    else{
      this.hideLoginButton = false;
    }
  }

}
