import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  CollectionService,
  KPIValue,
  Rating,
  RatingService,
} from '@slides/api';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingsService {
  constructor(
    private collectionService: CollectionService,
    private apiService: RatingService,
    private fromBuilder: FormBuilder
  ) {}

  public createModel(collectionId: string): Observable<Rating> {
    return this.collectionService.get(collectionId).pipe(
      map((collection) => {
        const now = Date.now();
        const values =
          collection.kpis?.map(
            (kpi) =>
              ({
                name: kpi.name,
                description: '',
                value: 0,
              } satisfies KPIValue)
          ) ?? [];
        return {
          name: '',
          description: '',
          created: now,
          edited: now,
          createdById: 'userId',
          editedById: 'userId',
          collectionId,
          values,
        };
      })
    );
  }

  public formGroup(rating: Rating) {
    const { values, ...ratingForm } = rating;

    return this.fromBuilder.group({
      ...ratingForm,
      values: this.fromBuilder.array(
        values.map((v) => this.fromBuilder.group(v))
      ),
    });
  }

  public formModel(formGroup: FormGroup): Rating {
    return formGroup.value;
  }

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
