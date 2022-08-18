import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../patientClass/patient';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {
  @Input() patients!: Patient[];


  constructor() { }

  ngOnInit(): void {
  }

}
