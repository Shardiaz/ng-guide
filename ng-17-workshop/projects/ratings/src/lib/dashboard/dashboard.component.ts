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
  CardComponent,
  DetailTemplateDirective,
  ItemBrowserComponent,
  ItemTemplateDirective,
} from '@score/ui';
import { Observable, forkJoin, map, mergeMap, shareReplay } from 'rxjs';

type TopList = { kpi: string; rating: string; value: number };
interface CollectionWithRatings extends Collection {
  ratings: Rating[];
  topLists: TopList[];
}

@Component({
  selector: 'rate-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ItemBrowserComponent,
    ItemTemplateDirective,
    DetailTemplateDirective,
    CardComponent,
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
      map((allRatings) => {
        const ratings = allRatings.filter(
          (rating) => rating.collectionId === collection.id
        );
        const maxKpi: Record<string, number> = {};
        const topLists = Object.values(
          ratings.reduce((result, rating) => {
            for (const kpiValue of rating.values) {
              if ((maxKpi[kpiValue.name] ?? '') < kpiValue.value) {
                maxKpi[kpiValue.name] = kpiValue.value;
                result[kpiValue.name] = {
                  rating: rating.name,
                  kpi: kpiValue.name,
                  value: kpiValue.value,
                };
              }
            }

            return result;
          }, {} as Record<string, TopList>)
        );
        return {
          ...collection,
          ratings,
          topLists,
        };
      })
    );
  }
}
