import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { Rating, RatingService } from '@score/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'rate-ratings',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    AsyncPipe,
    NgFor,
    RouterLink,
  ],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
})
export class RatingsComponent {
  public ratings$: Observable<Rating[]>;

  constructor(ratingService: RatingService) {
    this.ratings$ = ratingService.getAll();
  }
}
