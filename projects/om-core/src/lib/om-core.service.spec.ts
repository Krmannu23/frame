import { TestBed } from '@angular/core/testing';

import { OmCoreService } from './om-core.service';

describe('OmCoreService', () => {
  let service: OmCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
