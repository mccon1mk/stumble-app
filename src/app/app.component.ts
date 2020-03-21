import { Component } from '@angular/core';
import { TicketmasterApiService } from './ticketmaster-api.service';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// interface DialogData {
//   email: string;
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sportsEvents;
  public familyEvents;
  public musicEvents;
  public artEvents;
  public textSearch;



  constructor(private __TicketmasterApiService: TicketmasterApiService) { }


  ngOnInit() {

  }

}