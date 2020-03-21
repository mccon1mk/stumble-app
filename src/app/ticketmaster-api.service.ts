import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { credentials } from "./apikey";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TicketmasterApiService {
  private _favorites = [];
  SportsArr = [];

  constructor(private http: HttpClient) {}

  public city;
  public baseUrl = "https://app.ticketmaster.com/discovery/v2/events.json";

  getSports(textSearch = "detroit"): Observable<any> {
    this.city = textSearch;
    let sportsUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&size=20&keyword=sports&city=${this.city}`;
    return this.http.get<any>(sportsUrl);
  }

  getFamily(textSearch = "detroit"): Observable<any> {
    this.city = textSearch;
    let familyUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&size=20&keyword=family&city=${this.city}`;
    return this.http.get<any>(familyUrl);
  }

  getMusic(textSearch = "detroit"): Observable<any> {
    this.city = textSearch;
    let musicUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&size=20&keyword=music&city=${this.city}`;
    return this.http.get<any>(musicUrl);
  }

  getArt(textSearch = "detroit"): Observable<any> {
    this.city = textSearch;
    let artUrl = `${this.baseUrl}?apikey=${credentials.apiKey}&size=20&keyword=art&city=${this.city}`;
    return this.http.get<any>(artUrl);
  }

  addFavorites(event) {
    console.log(event);
    this._favorites.push(event);
    console.log("Service Favorite Count: " + this._favorites.length);
  }

  removeFavorites(event) {
    let indx = -1;
    indx = this._favorites.indexOf(event);
    if (indx > -1) {
      this._favorites.splice(indx, 1);
    }
    console.log("Service Favorite Count: " + this._favorites.length);
  }

  get favorites() {
    return this._favorites;
  }
}
