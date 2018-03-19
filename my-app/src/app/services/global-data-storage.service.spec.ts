import { TestBed, inject } from '@angular/core/testing';

import { GlobalDataStorageService } from './global-data-storage.service';

describe('GlobalDataStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalDataStorageService]
    });
  });

  it('should be created', inject([GlobalDataStorageService], (service: GlobalDataStorageService) => {
    expect(service).toBeTruthy();
  }));
});
