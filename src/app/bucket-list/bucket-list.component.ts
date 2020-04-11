import { Component, OnInit } from "@angular/core";
import { TicketmasterApiService } from "../ticketmaster-api.service";

@Component({
  selector: "app-bucket-list",
  templateUrl: "./bucket-list.component.html",
  styleUrls: ["./bucket-list.component.css"]
})
export class BucketListComponent implements OnInit {
  public favs;
  public blEvents: any[];

  constructor(public __TicketmasterApiService: TicketmasterApiService) {

  }

  ngOnInit() {

    this.blEvents = this.__TicketmasterApiService.favorites;
    console.log("Service Favorite Count: " + this.__TicketmasterApiService.favorites.length);
    console.log("Bucket List Event Count: " + this.blEvents.length);

    this.__TicketmasterApiService
      .getFavorites()
      .subscribe(data => (this.favs = data));
    this.__TicketmasterApiService
      .getFavorites()
      .subscribe(data => console.log(data));
  }


  // constructor(public __TicketmasterApiService: TicketmasterApiService) {}


  // removeEvent(event) {
  //   this.favs.splice(event, 1);
  // }
  // }
  // removeEventDB(fav) {
  //   this.__TicketmasterApiService.removeEvent(fav)
  //   .subscribe(data => console.log(data));
  // }



  removeEvent(blEvents, i) {
    this.blEvents.splice(i, 1);
    this.__TicketmasterApiService.removeEvent(blEvents)
      .subscribe(data => console.log(data));
  }

}
