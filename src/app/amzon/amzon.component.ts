import { Component } from '@angular/core';


@Component({
  selector: 'app-amzon',
  templateUrl: './amzon.component.html',
  styleUrls: ['./amzon.component.scss']
})
export class AmzonComponent {

type : number = 1;

bookTicketsComponetsPopup: boolean = false;

primePopup: boolean = false;
loading: boolean = true;


constructor(){

}
showPopup(){
  this.bookTicketsComponetsPopup = true;
}
hidePopup(){
  this.bookTicketsComponetsPopup = false;
}
hidePopup2(){
  this.primePopup = false;
}

PopupShow(){
this.primePopup = true;

}
showAmzonDepartment(){
this.type = 0;

}
  showCategoryDepartment(){
    this.type = 1;
  }

  showWishListDepartment(){
    this. type = 2;
  }
  showDealsDepartment(){
    this. type = 3;
  }
 

}
