import { Component } from '@angular/core';
import { TicketmasterApiService } from './ticketmaster-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public events;
  public sportsEvents;
  public familyEvents;
  public musicEvents;
  public artEvents;
  public textSearch;



  constructor(private __TicketmasterApiService: TicketmasterApiService) { }


  userSearch = {
    sports: this.sportsEvents,
    family: this.familyEvents,
    music: this.musicEvents,
    art: this.artEvents,
    textSearch: this.textSearch
  };

  ngOnInit() {
    // First 4 is just for logging. We can disable it
    this.__TicketmasterApiService.getSports().subscribe(sports => console.log(sports['_embedded']['events']))
    // this.__TicketmasterApiService.getFamily().subscribe(family => console.log(family['_embedded']['events']))
    // this.__TicketmasterApiService.getMusic().subscribe(music => console.log(music['_embedded']['events']))
    // this.__TicketmasterApiService.getArt().subscribe(art => console.log(art['_embedded']['events']))

    // Below 4 lines to get the data back to the html
    this.__TicketmasterApiService.getSports().subscribe(sports => this.sportsEvents = sports['_embedded']['events'])

    // this.__TicketmasterApiService.getFamily().subscribe(family =>this.familyEvents = family['_embedded']['events'])
    // this.__TicketmasterApiService.getMusic().subscribe(music =>this.musicEvents = music['_embedded']['events'])
    // this.__TicketmasterApiService.getSports().subscribe(art =>this.artEvents = art['_embedded']['events'])

  }


  onSearch() {
    let searchCriteria = this.textSearch;
    if (this.sportsEvents === true) {
      searchCriteria += "&keyword=sports";
    }
    if (this.familyEvents === true) {
      searchCriteria += "&keyword=family";
    }
    if (this.musicEvents === true) {
      searchCriteria += "&keyword=music";
    }
    if (this.artEvents === true) {
      searchCriteria += "&keyword=art";
    }
    this.__TicketmasterApiService.userSearch(searchCriteria).subscribe(data => {
      console.log('onSearch app.component: ', data);
      return data as any;
    });

  }
}