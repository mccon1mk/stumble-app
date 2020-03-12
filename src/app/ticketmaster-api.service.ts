import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class TicketmasterApiService {

  constructor(private http: HttpClient) { }


  public city='detroit';


  getSports() {
    let sportsUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd&keyword=sports&city=${this.city}`
    return this.http.get(sportsUrl);
  }

  getFamily() {
    let familyUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd&keyword=family&city=${this.city}`
    return this.http.get(familyUrl);
  }

  getMusic() {
    let musicUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd&keyword=music&city=${this.city}`
    return this.http.get(musicUrl);
  }

  getArt() {
    let artUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd&keyword=music&city=${this.city}`
    return this.http.get(artUrl);
  }

  
}
