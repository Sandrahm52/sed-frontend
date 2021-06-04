import { TestBed } from '@angular/core/testing';

import { AutorizathionInterceptorService } from './autorizathion-interceptor.service';

describe('AutorizathionInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutorizathionInterceptorService = TestBed.get(AutorizathionInterceptorService);
    expect(service).toBeTruthy();
  });
});
