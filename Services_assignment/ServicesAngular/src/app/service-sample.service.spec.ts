import { TestBed } from '@angular/core/testing';

import { ServiceSampleService } from './service-sample.service';

describe('ServiceSampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceSampleService = TestBed.get(ServiceSampleService);
    expect(service).toBeTruthy();
  });
});
