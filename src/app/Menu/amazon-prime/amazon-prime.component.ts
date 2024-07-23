import { Component , Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-amazon-prime',
  templateUrl: './amazon-prime.component.html',
  styleUrls: ['./amazon-prime.component.scss']
})
export class AmazonPrimeComponent {

  @Output() popupClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  primePopup: boolean = false;

  ClosePopUp(){
 this.popupClose.emit(true);
  }

}
