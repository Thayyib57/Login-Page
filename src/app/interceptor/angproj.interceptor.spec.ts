import { TestBed } from '@angular/core/testing';

import { AngprojInterceptor } from './angproj.interceptor';

describe('AngprojInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AngprojInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AngprojInterceptor = TestBed.inject(AngprojInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
