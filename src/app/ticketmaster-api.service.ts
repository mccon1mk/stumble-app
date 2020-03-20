import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { credentials } from './apikey';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TicketmasterApiService {

  private _favorites = [];



  constructor(private http: HttpClient) { }

  public city;
  public baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json'
  public expUrl = 'http://localhost:3000'

  

  getSports(textSearch = 'detroit'): Observable<any> {
    this.city = textSearch
    let sportsUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&size=20&keyword=sports&city=${this.city}`
    return this.http.get<any>(sportsUrl);
  }

  getFamily(textSearch = 'detroit'): Observable<any> {
    this.city = textSearch
    let familyUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&size=20&keyword=family&city=${this.city}`
    return this.http.get<any>(familyUrl);
  }

  getMusic(textSearch = 'detroit'): Observable<any> {
    this.city = textSearch
    let musicUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&size=20&keyword=music&city=${this.city}`
    return this.http.get<any>(musicUrl);
  }

  getArt(textSearch = 'detroit'): Observable<any> {
    this.city = textSearch
    let artUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&size=20&keyword=art&city=${this.city}`
    return this.http.get<any>(artUrl);
  }

  // addFavorites(event) {
  //   const item = {
  //     "name": event.name,
  //     "url": event.url,
  //     "image": event['images'][8]['url'],
  //     "localDate": event.dates.start.localDate,
  //     "city": event._embedded.venues[0].city.name
  //   }
  //   let body = JSON.stringify(item)
  //   console.log(body)
  //   return this.http.post(this.expUrl, body, httpOptions)
  //   .pipe(
  //     catchError(this.handleError)
  //   )
  // }

  addFavorites(event) {
    const item = {
      "name": event.name,
      "url": event.url,
      "image": event['images'][8]['url'],
      "localDate": event.dates.start.localDate.toString(),
      "city": event._embedded.venues[0].city.name
    }
    return this.http.post(this.expUrl, item).subscribe(data => console.log(data)) 
  }


  getFavorites() {
    return this.http.get(this.expUrl)
  }


  removeFavorites(event) {
    let indx = -1;
    indx = this._favorites.indexOf(event);
    if (indx > -1) {
      this._favorites.splice(indx, 1);
    }
    console.log("Service Favorite Count: " + this._favorites.length);
  }

  // get favorites() {
  //   return this._favorites
  // }

  // handleError(error: HttpErrorResponse){
  //   return throwError(error.error.text);
  //   }


    
}


