import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollectionService, Rating, RatingService } from '@score/api';
import { Observable, firstValueFrom, map, of } from 'rxjs';
import { onlyNumbers } from './ratings/validators';

@Injectable({
  providedIn: 'root',
})
export class RatingsService {
  constructor(
    private apiService: RatingService,
    private collectionService: CollectionService,
    private fb: FormBuilder
  ) {}

  public async createEditModel(collectionId: string, id: string) {
    const kpis$ = this.collectionService
      .get(collectionId)
      .pipe(map((collection) => collection.kpis));

    const kpis = await firstValueFrom(kpis$);
    if (id == '-') {
      return {
        name: '',
        created: Date.now(),
        edited: Date.now(),
        createdById: '',
        editedById: '',
        description: '',
        values: kpis?.map((kpi) => ({ ...kpi, value: 0 })),
      } as Rating;
    } else {
      return await firstValueFrom(this.apiService.get(id));
    }
  }

  public resolveCollectionName(id: string | null): Observable<string> {
    if (!id || id === '-') {
      throw Error('Cannot navigate without :id');
    }

    return this.collectionService.get(id).pipe(map((rating) => rating.name));
  }

  public resolveRatingName(id: string | null): Observable<string> {
    if (!id || id === '-') {
      return of('<Neues Rating>');
    }

    return this.apiService.get(id).pipe(map((rating) => rating.name));
  }

  public ratingToForm(rating: Rating) {
    return this.fb.group({
      id: rating.id,
      collectionId: rating.collectionId,
      name: [rating.name],
      created: rating.created,
      edited: rating.edited,
      createdById: rating.createdById,
      editedById: rating.editedById,
      description: [rating.description],
      values: this.fb.array(
        rating.values.map((v) =>
          this.fb.group({
            ...v,
            value: [v.value, [onlyNumbers, Validators.min(1)]],
          })
        )
      ),
    });
  }

  public formGroupToRating(form: FormGroup) {
    const ratingForm: Rating = form.getRawValue();
    return {
      ...ratingForm,
    } as Rating;
  }

  createCollectionRatings(
    collection: { id: number; name: string },
    rating: { name: string; collectionId: number }[]
  ) {
    return {
      collectionId: collection.id,
      ratings: rating.filter((r) => r.collectionId === collection.id),
    };
  }
}
