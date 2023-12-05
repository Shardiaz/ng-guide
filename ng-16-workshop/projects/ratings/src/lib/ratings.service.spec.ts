import { TestBed } from '@angular/core/testing';

import { CollectionService } from '@score/api';
import { RatingsService } from './ratings.service';
import { mockCollectionService } from './test/collection.service.mock';
import { mockRatingService } from './test/ratings.service.mock';

describe('RatingsService', () => {
  let service: RatingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CollectionService, useValue: mockCollectionService() },
        { provide: RatingsService, useValue: mockRatingService() },
      ],
    });
    service = TestBed.inject(RatingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
