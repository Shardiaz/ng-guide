import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type NavigationItem = {
  key: string;
  text: string;
};

@Component({
  selector: 'score-navigation',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() items: Array<NavigationItem> = [];
  @Output() itemSelected = new EventEmitter<NavigationItem>();
}
