import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollectionService } from '@slides/api';
import { CardComponent } from '@slides/ui';

@Component({
  selector: 'col-overview',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export default class OverviewComponent {
  public collections$ = this.collectionService.getAll();

  constructor(private collectionService: CollectionService) {}
}
