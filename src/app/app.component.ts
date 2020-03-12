import { Component } from '@angular/core';
import { TicketmasterApiService } from './ticketmaster-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sportsEvents;
  public familyEvents;
  public musicEvents;
  public artEvents;

  
  constructor(private __TicketmasterApiService: TicketmasterApiService) { }

  ngOnInit() {
    // First 4 is just for logging. We can disable it
    this.__TicketmasterApiService.getSports().subscribe(sports => console.log(sports['_embedded']['events']))
    this.__TicketmasterApiService.getFamily().subscribe(family =>  console.log(family['_embedded']['events']))
    this.__TicketmasterApiService.getMusic().subscribe(music => console.log(music['_embedded']['events']))
    this.__TicketmasterApiService.getArt().subscribe(art => console.log(art['_embedded']['events']))

    // Below 4 lines to get the data back to the html
    // this.__TicketmasterApiService.getSports().subscribe(sports =>this.sportsEvents = sports['_embedded']['events'])
    // this.__TicketmasterApiService.getFamily().subscribe(family =>this.familyEvents = family['_embedded']['events'])
    // this.__TicketmasterApiService.getMusic().subscribe(music =>this.musicEvents = music['_embedded']['events'])
    // this.__TicketmasterApiService.getSports().subscribe(art =>this.artEvents = art['_embedded']['events'])

  }
}
