import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AmazonPrimeComponent } from 'src/app/Menu/amazon-prime/amazon-prime.component';


@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.scss']
})
export class ShopingComponent {
  buttonHovered = false;
  button1Hovered = false;
  button2Hovered = false;
  button3Hovered = false;
  button4Hovered = false;
  button5Hovered = false;
  button6Hovered = false;
  button7Hovered = false;
  button8Hovered = false;
  button9Hovered = false;
  button10Hovered = false;
  button11Hovered = false;


  typo: number = 1;
  popupPrime: boolean = false;
  closePopup: boolean = false;
  @Output() popupClose: EventEmitter<boolean> = new EventEmitter<boolean>(); 

  constructor(private router: Router) {}

  navigateToFashion() {
    this.router.navigate(['/mobile']); // Replace 'fashion' with the actual route path to your FashionComponent
  }


  addRipple(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${event.clientX - button.getBoundingClientRect().left}px`;
    ripple.style.top = `${event.clientY - button.getBoundingClientRect().top}px`;
    button.appendChild(ripple);

    // Remove the ripple element after the animation completes
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }

ShowLogin(){
  this.typo = 0;

}
ShowShoping(){
  this.typo = 1;
}

ShowHome(){
  this.typo = 2;
}
hidePopup(){
  this.popupClose.emit(true);
}

}
