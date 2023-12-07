import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rating } from '../model/rating.model';
import { EntityService } from './entity.service';

@Injectable({ providedIn: 'root' })
export class RatingService extends EntityService<Rating> {
  constructor(http: HttpClient) {
    super(http, 'rating');
  }
}
