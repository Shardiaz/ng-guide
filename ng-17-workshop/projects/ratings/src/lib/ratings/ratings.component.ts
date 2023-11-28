import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RatingService } from '@score/api';
import { Subject, filter, map, switchMap } from 'rxjs';
@Component({
  selector: 'rate-ratings',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
  ],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
})
export default class RatingsComponent implements OnDestroy {
  public displayedColumns = ['name', 'description', 'values'];

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
