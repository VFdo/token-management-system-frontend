import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  // @ViewChild(HomeComponent) home!:HomeComponent
  loggedIn!: boolean
  loggedOut!: boolean
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('loggedIn') == 'true'){
      this.loggedIn = true;
      this.loggedOut = false;
    }
    else{
      this.loggedIn = false;
      this.loggedOut = true;
    }
  }

  logout() : void{
    sessionStorage.clear();
    window.location.href='http://localhost:4200/login'
  }
}
