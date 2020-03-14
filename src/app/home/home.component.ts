import { Component, OnInit } from '@angular/core';
import { TicketmasterApiService } from '../ticketmaster-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sportsEvents;
  public familyEvents;
  public musicEvents;
  public artEvents;
  public textSearch;



  constructor(private __TicketmasterApiService: TicketmasterApiService) { }


   ngOnInit() {
    // Below 4 lines to get the data back to the view on page load
    //  this.__TicketmasterApiService.getSports().subscribe(sports => {
    //   this.sportsEvents = sports['_embedded']['events'];
    //    this.__TicketmasterApiService.getFamily().subscribe(family => {
    //      this.familyEvents = family['_embedded']['events'];
    //       this.__TicketmasterApiService.getMusic().subscribe(music => {
    //         this.musicEvents = music['_embedded']['events'];
    //         this.__TicketmasterApiService.getArt().subscribe(art => {
    //           this.artEvents = art['_embedded']['events']
    //         })
    //       })
    //    })
    // })
    this.__TicketmasterApiService.getSports().subscribe(sports => this.sportsEvents = sports['_embedded']['events'])
    this.__TicketmasterApiService.getFamily().subscribe(family =>this.familyEvents = family['_embedded']['events'])
    this.__TicketmasterApiService.getMusic().subscribe(music =>this.musicEvents = music['_embedded']['events'])
    this.__TicketmasterApiService.getArt().subscribe(art =>this.artEvents = art['_embedded']['events'])
  }



  // Below is only called when Customer searches for events in specific city
  onSearch(textSearch) {
    this.__TicketmasterApiService.getSports(textSearch).subscribe(sports => this.sportsEvents = sports['_embedded']['events'])
    this.__TicketmasterApiService.getFamily(textSearch).subscribe(family =>this.familyEvents = family['_embedded']['events'])
    this.__TicketmasterApiService.getMusic(textSearch).subscribe(music =>this.musicEvents = music['_embedded']['events'])
    this.__TicketmasterApiService.getArt(textSearch).subscribe(art =>this.artEvents = art['_embedded']['events'])
  }
  
}