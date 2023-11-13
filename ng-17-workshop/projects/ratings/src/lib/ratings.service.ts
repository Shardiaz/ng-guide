import { Injectable } from '@angular/core';
import { CollectionService, RatingService } from '@score/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingsService {
  constructor(
    private collectionService: CollectionService,
    private apiService: RatingService
  ) {}

  public resolveRatingName(id: string | null) {
    if (!id || id === '-') {
      return 'New rating';
    }
    return this.apiService.get(id).pipe(map((item) => item.name));
  }

  public resolveCollectionName(id: string | null) {
    if (!id || id === '-') {
      return '{delted}';
    }
    return this.collectionService.get(id).pipe(map((item) => item.name));
  }
}
