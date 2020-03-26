import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { credentials } from "./apikey";
import { Observable } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { throwError } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:4200"
  })
};

@Injectable({
  providedIn: "root"
})
export class TicketmasterApiService {
  private _favorites = [];

  constructor(private http: HttpClient) {}
  public cate;
  public city;
  public baseUrl = "https://app.ticketmaster.com/discovery/v2/events.json";
  public expUrl = "http://localhost:3000/";

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
    const item = {
      name: event.name,
      url: event.url,
      image: event["images"][8]["url"],
      localDate: event.dates.start.localDate,
      city: event._embedded.venues[0].city.name
    };
    console.log(event);
    this._favorites.push(event);
    console.log("Service Favorite Count: " + this._favorites.length);
    return this.http
      .post(this.expUrl, item)
      .subscribe(data => console.log(data));
  }

  getFavorites() {
    return this.http.get(this.expUrl);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.error.text);
  }

  get favorites() {
    return this._favorites;
  }

  getCategoryMI(Cate): Observable<any> {
    this.cate = Cate;
    let url = `${this.baseUrl}?apikey=${credentials.apiKey}&keyword=${this.cate}&stateCode=MI`;
    return this.http.get<any>(url);
  }

  removeEvent(fav): Observable<any> {
    const item = {
      id: fav._id
    }
    return this.http
      .delete(this.expUrl + item.id)
  }

}
