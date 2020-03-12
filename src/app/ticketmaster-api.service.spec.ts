import { TestBed } from '@angular/core/testing';

import { TicketmasterApiService } from './ticketmaster-api.service';

describe('TicketmasterApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketmasterApiService = TestBed.get(TicketmasterApiService);
    expect(service).toBeTruthy();
  });
});
