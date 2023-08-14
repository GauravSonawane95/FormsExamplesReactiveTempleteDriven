import { Component } from '@angular/core';

@Component({
  selector: 'app-productcart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css']
})
export class ProductcartComponent {
product1:Product=new Product()
getData(){
  let obj={
    Category:"Smartphones",
  ProductName:"Nokia 3300",
  Quantity:12,
  Price:3499,
  Total:0,
  }
  this.product1=obj
  obj.Total=obj.Quantity * obj.Price
}

totalPrice(){
  this.product1.Total=this.product1.Quantity * this.product1.Price;
}



reset(){
 this.product1=new Product()
}


}
export class Product{
  Category:string="";
  ProductName:string="";
  Quantity:number=0;
  Price:number=0;
  Total:number=0;

}