import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmzonComponent } from './amzon/amzon.component';
import { CategoryComponent } from './Menu/category/category.component';
import { WishListComponent } from './Menu/wish-list/wish-list.component';
import { DealsComponent } from './Menu/deals/deals.component';
import { BookTicketsComponent } from './Menu/book-tickets/book-tickets.component';
import { AmazonPrimeComponent } from './Menu/amazon-prime/amazon-prime.component';
import { EmployeeComponent } from './employee/employee.component';
import { DemoComponent } from './PracticeFile/demo/demo.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { ShopingComponent } from './shopingWebsite/shoping/shoping.component';
import { MobilesComponent } from './mobiles/mobiles.component';



@NgModule({
  declarations: [
    AppComponent,
    AmzonComponent,
    CategoryComponent,
    WishListComponent,
    DealsComponent,
    BookTicketsComponent,
    AmazonPrimeComponent,
    EmployeeComponent,
    DemoComponent,
    ShopingComponent,
    MobilesComponent
  
 
  
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
