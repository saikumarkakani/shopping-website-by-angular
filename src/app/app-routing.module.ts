import { Component, NgModule } from '@angular/core';
import { RouterModule,  Router, Routes } from '@angular/router';
import { ShopingComponent } from './shopingWebsite/shoping/shoping.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
