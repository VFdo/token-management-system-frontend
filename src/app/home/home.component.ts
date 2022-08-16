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

  constructor(
    private http: HttpClient,
    private router: Router
) { }

  ngOnInit(): void {
    var role = sessionStorage.getItem("role")
    if( role == 'ROLE_MANAGER'){
      // this.router.navigate(['/http://localhost:8080/manager/home'])
      this.message= 'welcome to the MANAGER page ' + sessionStorage.getItem('username')
    }
    else{
      // this.router.navigate(['/http://localhost:8080/patient/home'])
      this.message= 'welcome to the PATIENT page ' + sessionStorage.getItem('username')
    }
  }

}
