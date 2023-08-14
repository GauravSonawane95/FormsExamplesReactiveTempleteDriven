import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveproduct',
  templateUrl: './reactiveproduct.component.html',
  styleUrls: ['./reactiveproduct.component.css']
})
export class ReactiveproductComponent implements OnInit {
 
   ReactiveCart!: FormGroup
  
  category:string[]=[];
   product:string[]=[];

 ngOnInit(): void {
      this.category=Object.keys(this.obj)

  }

   obj:any={
    "Electronics":["Mobile","Laptop","Video Games","TV","AC"],
    "Accesorries":["watch","Cap","Belts","Wallet"],
   }
  }
   
