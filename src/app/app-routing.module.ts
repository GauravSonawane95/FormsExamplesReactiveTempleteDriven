import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TempletformComponent } from './templetform/templetform.component';
import { ReactivefomsComponent } from './reactivefoms/reactivefoms.component';
import { ProductcartComponent } from './productcart/productcart.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"Templet",component:TempletformComponent},
  {path:"Reactive",component:ReactivefomsComponent},
  {path:"Templet",component:ProductcartComponent},
  {path:"wecome",component:WelcomeComponent},
  {path:"",redirectTo:"/TempletformComponent",pathMatch:'full'},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
