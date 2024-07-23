import { Component, Output,EventEmitter } from '@angular/core';
import { bookTickets } from './models/ticketsBook.model';
import axios from 'axios';


@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.scss']
}) 
export class BookTicketsComponent {

  bookTicketsComponetsPopup: boolean = false;


tickets: bookTickets = new bookTickets();
@Output() closePopup: EventEmitter<boolean> = new EventEmitter <boolean>();



closeDepartmentPopup(){
  this.closePopup.emit (true);
};




saveData(){
     if (this.tickets.id == 0){
 axios.post("http://localhost:3000/bookTickets",this.tickets).then(
 res=>{
  alert("Data Saved Succesfully");
  alert(JSON.stringify(this.tickets));
  this.tickets = new bookTickets();
 }
 )
}

}
}
