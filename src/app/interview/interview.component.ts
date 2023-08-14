import { Component } from '@angular/core';


import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent {
  interviewf!:FormGroup

  ngOnInit(): void {
    this.interview();
  }

  interview(){
    this.interviewf = new FormGroup({
      "fName": new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    })
  }
  getdata(){
    console.log("Form data",this.interviewf.value);
  }
}
