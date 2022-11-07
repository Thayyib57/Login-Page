import { TestBed } from '@angular/core/testing';

import { AngprojService } from './angproj.service';

describe('AngprojService', () => {
  let service: AngprojService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngprojService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
