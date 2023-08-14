import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivefoms',
  templateUrl: './reactivefoms.component.html',
  styleUrls: ['./reactivefoms.component.css']
})
export class ReactivefomsComponent{
  signUpForm! : FormGroup

  constructor(){

  }


  ngOnInit(): void {
    this.createRegistrationForm();
   // this.createRegistrationFormWithBuilder();
  }

  createRegistrationForm(){
     this.signUpForm = new FormGroup({
       "firstName":new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("[a-zA-Z]{2,10}")]),
       "lastName":new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("[a-zA-Z]{2,10}")]),
       "mobileNo":new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
       "gender":new FormControl('',[Validators.required,]),
       "email":new FormControl('',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
       //nested form 
       "address":new FormGroup({
        "line1":new FormControl('',[Validators.required,]),
        "line2":new FormControl('',[]),
        "city":new FormControl('',[Validators.required,]),
        "state":new FormControl('',[Validators.required,]),
      })
      })
  }


  
  save(){
    console.log("form data",this.signUpForm.value);
  }

  get firstName(){
   // this.signUpForm.get('firstName');
    return this.signUpForm.controls['firstName'];
  }

  get lastName(){
    return this.signUpForm.controls['lastName'];
  }

  get mobileNo(){
    return this.signUpForm.controls['mobileNo'];
  }

  get gender(){
    return this.signUpForm.controls['gender'];
  }

    get email(){
      return this.signUpForm.controls['email'];
    }
    
    get line1(){
      return this.signUpForm.controls['line1'];
    }

    get line2(){
      return this.signUpForm.controls['line2'];
    }

    get state(){
      return this.signUpForm.controls['state'];
    }

    get city(){
      return this.signUpForm.controls['city'];
    }


  

}