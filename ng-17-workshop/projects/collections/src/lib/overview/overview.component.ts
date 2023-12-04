import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { CardComponent } from '@score/ui';
import { CollectionsAPIActions } from '../store/collections.actions';
import { collectionsFeature } from '../store/collections.feature';

@Component({
  selector: 'col-overview',
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterLink, CardComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export default class OverviewComponent implements OnInit {
  public isLoading$ = this.store.select(collectionsFeature.selectIsLoading);
  public collections$ = this.store.select(collectionsFeature.selectCollections);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CollectionsAPIActions.load());
  }

  public delete(id?: string) {
    if (id) {
      this.store.dispatch(CollectionsAPIActions.delete({ id }));
    }
  }
}
