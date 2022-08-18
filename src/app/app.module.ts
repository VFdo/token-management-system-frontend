import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Auth } from './auth/auth';
import { ManagerComponent } from './manager/manager.component';
import { PatientComponent } from './patient/patient.component';
import { TokenComponent } from './token/token.component';
import { PatientViewComponent } from './patient-view/patient-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    ManagerComponent,
    PatientComponent,
    TokenComponent,
    PatientViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Auth, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
