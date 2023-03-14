import { TestBed } from '@angular/core/testing';

import { MoviesListDataHandlerService } from './movies-list-data-handler.service';

describe('MoviesListDataHandlerService', () => {
  let service: MoviesListDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesListDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
