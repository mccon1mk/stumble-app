import { Component } from '@angular/core';
import { TicketmasterApiService } from './ticketmaster-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventText = '';

  onSwipe(evt) {
    const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
    const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';

    this.eventText += `${x} ${y}<br/>`;
  }
  public sportsEvents;
  public familyEvents;
  public musicEvents;
  public artEvents;
  public textSearch;

  constructor(private __TicketmasterApiService: TicketmasterApiService) { }

  popUpOpen = false;


  openPopUp() {
    this.popUpOpen = true;
  }

  cancelOption() {
    this.popUpOpen = false;
  }
  ngOnInit() {

  }

}