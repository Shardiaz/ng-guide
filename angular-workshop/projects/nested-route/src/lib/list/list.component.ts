import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollectionService } from '@slides/api';
import { from } from 'rxjs';

@Component({
  selector: 'lib-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public collections$ = from(this.collectionService.GetMany());

  constructor(private collectionService: CollectionService) {}
}
