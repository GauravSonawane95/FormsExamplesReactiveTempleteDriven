import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TempletformComponent } from './templetform/templetform.component';
import { ProductcartComponent } from './productcart/productcart.component';
import { ReactivefomsComponent } from './reactivefoms/reactivefoms.component';
import { ReactiveproductComponent } from './reactiveproduct/reactiveproduct.component';
import { InterviewComponent } from './interview/interview.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Route } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    TempletformComponent,
    ProductcartComponent,
    ReactivefomsComponent,
    ReactiveproductComponent,
    InterviewComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
