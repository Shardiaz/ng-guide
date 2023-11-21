import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RatingService } from '@score/api';
import { CardComponent } from '@score/ui';
import { Subject, filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'rate-ratings',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
})
export default class RatingsComponent implements OnDestroy {
  public ratings$ = this.route.paramMap.pipe(
    map((params) => params.get('collectionId')),
    filter(this.isString),
    switchMap((id) =>
      this.apiService
        .getAll()
        .pipe(
          map((ratings) =>
            ratings.filter((rating) => rating.collectionId === id)
          )
        )
    )
  );

  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private apiService: RatingService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private isString(value: string | null): value is string {
    return typeof value === 'string';
  }
}
