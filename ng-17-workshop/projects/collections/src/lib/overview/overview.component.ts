import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CollectionService } from '@score/api';
import { CardComponent } from '@score/ui';

@Component({
  selector: 'col-overview',
  standalone: true,
  imports: [AsyncPipe, RouterLink, CardComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export default class OverviewComponent {
  public collections$ = this.collectionService.getAll();

  constructor(private collectionService: CollectionService) {}
}
