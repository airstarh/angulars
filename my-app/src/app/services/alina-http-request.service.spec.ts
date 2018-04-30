import { TestBed, inject } from '@angular/core/testing';

import { AlinaHttpRequestService } from './alina-http-request.service';

describe('AlinaHttpRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlinaHttpRequestService]
    });
  });

  it('should be created', inject([AlinaHttpRequestService], (service: AlinaHttpRequestService) => {
    expect(service).toBeTruthy();
  }));
});
