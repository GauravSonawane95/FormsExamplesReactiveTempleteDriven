import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-templetform',
  templateUrl: './templetform.component.html',
  styleUrls: ['./templetform.component.css']
})
export class TempletformComponent {
  
resiForm:User=new User()
getUser(){
 let useronj={
    fname:"Nikola",
    lname:"Tesla",
    Email:"nikolatesla007@gmail.com",
    Mobile:"9993339999",
    dob: "1986-07-10",
    Age:36,
    Pass:"gsgsfF6hgt",
    Check:true,
  }
  this.resiForm=useronj

}

reset(){
  this.resiForm=new User()
}

  resi(){
    console.log(this.resiForm)
  }
  
  calculateAge(){
    
    // let birthDate = e.target.value ;
     if (this.resiForm.dob) {
       var timeDiff = Math.abs(Date.now() - new Date(this.resiForm.dob).getTime());
       this.resiForm.Age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
     
     } 
    
   }
   
}

export class User{
  fname:string="";
  lname:string="";
  Email:string="";
  Mobile:string="";
  dob!:string;
  Age!:Number;
  Pass:string="";
  Check!:boolean;
}
