import { Component, OnInit } from "@angular/core";
import { TicketmasterApiService } from "../ticketmaster-api.service";
import { PopUpComponent } from "../pop-up/pop-up.component";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {




  sportsEvents;
  familyEvents;
  musicEvents;
  artEvents;
  public textSearch;

  constructor(public __TicketmasterApiService: TicketmasterApiService) { }

  ngOnInit() {
    this.__TicketmasterApiService
      .getSports()
      .subscribe(sports => (this.sportsEvents = sports["_embedded"]["events"]));

    setTimeout(() => {
      this.__TicketmasterApiService.getFamily().subscribe(family => {
        console.log(family["page"]["totalElements"]);
        if (family["page"]["totalElements"] === 0) {
          setTimeout(
            () =>
              this.__TicketmasterApiService
                .getCategoryMI("family")
                .subscribe(
                  family => (this.familyEvents = family["_embedded"]["events"])
                ),
            2000
          );
        } else {
          this.familyEvents = family["_embedded"]["events"];
        }
      });
    }, 1000);

    setTimeout(() => {
      this.__TicketmasterApiService.getMusic().subscribe(music => {
        this.musicEvents = music["_embedded"]["events"];
      });
    }, 4000);
    setTimeout(() => {
      this.__TicketmasterApiService.getArt().subscribe(art => {
        this.artEvents = art["_embedded"]["events"];
      });
    }, 5000);
  }

  // Below is only called when Customer searches for events in specific city
  onSearch(textSearch) {

    this.__TicketmasterApiService
      .getSports(textSearch)
      .subscribe(sports => (this.sportsEvents = sports["_embedded"]["events"]));
    setTimeout(() => {
      this.__TicketmasterApiService.getFamily(textSearch).subscribe(family => {
        this.familyEvents = family["_embedded"]["events"];
      });
    }, 1000);
    setTimeout(() => {
      this.__TicketmasterApiService.getMusic(textSearch).subscribe(music => {
        this.musicEvents = music["_embedded"]["events"];
      });
    }, 2000);
    setTimeout(() => {
      this.__TicketmasterApiService.getArt(textSearch).subscribe(art => {
        this.artEvents = art["_embedded"]["events"];
      });
    }, 2000);
  }

  deleteSports(event) {
    this.sportsEvents.splice(event, 1);
  }
  deleteMusic(event) {
    this.musicEvents.splice(event, 1);
  }
  deleteFamily(event) {
    this.familyEvents.splice(event, 1);
  }
  deleteArt(event) {
    this.artEvents.splice(event, 1);
  }

}
