import { Component, OnInit } from "@angular/core";
import { TicketmasterApiService } from "../ticketmaster-api.service";

@Component({
  selector: "app-bucket-list",
  templateUrl: "./bucket-list.component.html",
  styleUrls: ["./bucket-list.component.css"]
})
export class BucketListComponent implements OnInit {
  public favs;

  constructor(public __TicketmasterApiService: TicketmasterApiService) {}

  ngOnInit() {
    this.__TicketmasterApiService
      .getFavorites()
      .subscribe(data => (this.favs = data));
    this.__TicketmasterApiService
      .getFavorites()
      .subscribe(data => console.log(data));
  }

  // removeEventDB(fav) {
  //   this.__TicketmasterApiService.removeEvent(fav)
  //   .subscribe(data => console.log(data));
  // }

  removeEvent(fav,i) {
    this.favs.splice(i, 1);
    this.__TicketmasterApiService.removeEvent(fav)
    .subscribe(data => console.log(data));
  }

}
