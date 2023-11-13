import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Collection,
  CollectionService,
  Rating,
  RatingService,
} from '@score/api';
import {
  DetailTemplateDirective,
  ItemBrowserComponent,
  ItemTemplateDirective,
} from '@score/ui';
import { Observable, forkJoin, map, mergeMap, shareReplay } from 'rxjs';

interface CollectionWithRatings extends Collection {
  ratings: Rating[];
  medians: { name: string; display: string }[];
}

@Component({
  selector: 'rate-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ItemBrowserComponent,
    ItemTemplateDirective,
    DetailTemplateDirective,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export default class DashboardComponent {
  public collections$: Observable<CollectionWithRatings[]>;

  private ratings$: Observable<Rating[]>;

  constructor(
    private collectionService: CollectionService,
    private ratingService: RatingService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.ratings$ = this.ratingService.getAll().pipe(shareReplay());
    this.collections$ = this.collectionService
      .getAll()
      .pipe(
        mergeMap((collections) =>
          forkJoin(
            collections.map((collection) =>
              this.collectionWithRatings(collection)
            )
          )
        )
      );
  }

  public editItem(item: CollectionWithRatings) {
    this.router.navigate(['..', item.id], { relativeTo: this.route });
  }

  private collectionWithRatings(
    collection: Collection
  ): Observable<CollectionWithRatings> {
    return this.ratings$.pipe(
      map((ratings) => ({
        ...collection,
        ratings: ratings.filter(
          (rating) => rating.collectionId === collection.id
        ),
        medians: [
          { name: 'level', display: '4/5' },
          { name: 'comprehension', display: '75%' },
        ], // collection.kpis?.map()
      }))
    );
  }
}
