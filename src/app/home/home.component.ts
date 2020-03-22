import { Component, OnInit } from '@angular/core';
import { TicketmasterApiService } from '../ticketmaster-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  sportsEvents;
  public familyEvents;
  public musicEvents;
  public artEvents;
  public textSearch;


  constructor(public __TicketmasterApiService: TicketmasterApiService) { }


  ngOnInit() {
    this.__TicketmasterApiService.getSports().subscribe(sports => this.sportsEvents = sports['_embedded']['events']);
    setTimeout(() => { this.__TicketmasterApiService.getFamily().subscribe(family => { this.familyEvents = family['_embedded']['events'] }) }, 1000);
    setTimeout(() => { this.__TicketmasterApiService.getMusic().subscribe(music => { this.musicEvents = music['_embedded']['events'] }) }, 2000);
    setTimeout(() => { this.__TicketmasterApiService.getArt().subscribe(art => { this.artEvents = art['_embedded']['events'] }) }, 2000);
    this.sportsEvents = this.__TicketmasterApiService.SportsArr;
    this.familyEvents = this.__TicketmasterApiService.FamilyArr;
    this.musicEvents = this.__TicketmasterApiService.MusicArr;
    this.artEvents = this.__TicketmasterApiService.ArtArr;
  }



  // Below is only called when Customer searches for events in specific city
  onSearch(textSearch) {
    // this.__TicketmasterApiService.getSports(textSearch).subscribe(sports => this.sportsEvents = sports['_embedded']['events'])
    // this.__TicketmasterApiService.getFamily(textSearch).subscribe(family =>this.familyEvents = family['_embedded']['events'])
    // this.__TicketmasterApiService.getMusic(textSearch).subscribe(music =>this.musicEvents = music['_embedded']['events'])
    // this.__TicketmasterApiService.getArt(textSearch).subscribe(art =>this.artEvents = art['_embedded']['events'])

    this.__TicketmasterApiService.getSports(textSearch).subscribe(sports => this.sportsEvents = sports['_embedded']['events'])
    setTimeout(() => { this.__TicketmasterApiService.getFamily(textSearch).subscribe(family => { this.familyEvents = family['_embedded']['events'] }) }, 1000);
    setTimeout(() => { this.__TicketmasterApiService.getMusic(textSearch).subscribe(music => { this.musicEvents = music['_embedded']['events'] }) }, 2000);
    setTimeout(() => { this.__TicketmasterApiService.getArt(textSearch).subscribe(art => { this.artEvents = art['_embedded']['events'] }) }, 2000)
  }

  delete(event) {
    this.sportsEvents.splice(event, 1);
    this.musicEvents.splice(event, 1);
  }

}