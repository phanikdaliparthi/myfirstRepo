import { TestBed } from '@angular/core/testing';

import { FetchContactDetailsService } from './fetch-contact-details.service';

describe('FetchContactDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchContactDetailsService = TestBed.get(FetchContactDetailsService);
    expect(service).toBeTruthy();
  });
});
