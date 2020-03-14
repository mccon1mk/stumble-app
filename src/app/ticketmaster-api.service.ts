import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { credentials } from './apikey';


@Injectable({
  providedIn: 'root'
})

export class TicketmasterApiService {

  favorites = [];

  constructor(private http: HttpClient) { }


  public city = 'detroit';


  getSports() {
    let sportsUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd&keyword=sports&city=${this.city}`
    return this.http.get(sportsUrl);
  }

  // getFamily() {
  //   let familyUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd&keyword=family&city=${this.city}`
  //   return this.http.get(familyUrl);
  // }

  // getMusic() {
  //   let musicUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd&keyword=music&city=${this.city}`
  //   return this.http.get(musicUrl);
  // }

  // getArt() {
  //   let artUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=oJg1ssT8GkVknKJ2kFY8qAx3Dzw4GeYd&keyword=art&city=${this.city}`
  //   return this.http.get(artUrl);
  // }

  userSearch(searchTerm) {
    let searchUrl = `https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=${credentials.apiKey}&keyword=${searchTerm}`;
    return this.http.get(searchUrl);
  }

  addFavorites(event) {
    console.log(event);
    this.favorites.push(event);
  } 
}