import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { credentials } from './apikey';


@Injectable({
  providedIn: 'root'
})

export class TicketmasterApiService {

  favorites = [];

  constructor(private http: HttpClient) { }

  public city;
  public baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json'

  getSports(textSearch = 'detroit') {
    this.city = textSearch
    let sportsUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&keyword=sports&city=${this.city}`
    return this.http.get(sportsUrl);
  }

  getFamily(textSearch = 'detroit') {
    this.city = textSearch
    let familyUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&keyword=family&city=${this.city}`
    return this.http.get(familyUrl);
  }

  getMusic(textSearch = 'detroit') {
    this.city = textSearch
    let musicUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&keyword=music&city=${this.city}`
    return this.http.get(musicUrl);
  }

  getArt(textSearch = 'detroit') {
    this.city = textSearch
    let artUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&keyword=art&city=${this.city}`
    return this.http.get(artUrl);
  }
}
addFavorites(event) {
  console.log(event);
  this.favorites.push(event);
} 
