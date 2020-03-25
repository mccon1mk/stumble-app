import { Component, OnInit } from '@angular/core';
import { TicketmasterApiService } from '../ticketmaster-api.service';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {

 
  public blEvents: any[];

  constructor(public __TicketmasterApiService: TicketmasterApiService) {
 
   }

  ngOnInit() {

   this.blEvents = this.__TicketmasterApiService.favorites;
   console.log ("Service Favorite Count: " +   this.__TicketmasterApiService.favorites.length);
   console.log ("Bucket List Event Count: " + this.blEvents.length);
  }

}
