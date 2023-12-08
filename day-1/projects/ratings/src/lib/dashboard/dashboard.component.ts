import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {
  Collection,
  CollectionService,
  Rating,
  RatingService,
} from '@score/api';
import {
  DetailTemplateDirective,
  ItemTemplateDirective,
  ItemsControlComponent,
} from '@score/ui';

type CollectionWithRatings = Collection & { ratings: Rating[] };

@Component({
  selector: 'rate-dashboard',
  standalone: true,
  imports: [
    JsonPipe,
    ItemsControlComponent,
    ItemTemplateDirective,
    DetailTemplateDirective,
    RouterLink,
    MatButtonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  public collectionRatings: CollectionWithRatings[] = [];

  constructor(
    private collectionApiService: CollectionService,
    private ratingApiService: RatingService
  ) {}

  ngOnInit(): void {
    this.collectionApiService.getAll().subscribe((collections) => {
      this.ratingApiService.getAll().subscribe((ratings) => {
        this.collectionRatings = collections.map((collection) => ({
          ...collection,
          ratings: ratings.filter((r) => r.collectionId === collection.id),
        }));
      });
    });
  }
}
