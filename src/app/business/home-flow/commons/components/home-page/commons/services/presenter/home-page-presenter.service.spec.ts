import { TestBed } from '@angular/core/testing';

import { HomePagePresenterService } from './home-page-presenter.service';

describe('HomePagePresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomePagePresenterService = TestBed.get(HomePagePresenterService);
    expect(service).toBeTruthy();
  });
});
