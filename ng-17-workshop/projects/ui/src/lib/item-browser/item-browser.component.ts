import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DetailTemplateDirective } from './detail-template.directive';
import { ItemTemplateDirective } from './item-template.directive';

@Component({
  selector: 'ui-item-browser',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './item-browser.component.html',
  styleUrl: './item-browser.component.scss',
})
export class ItemBrowserComponent<T> {
  @Input() items?: T[] = [];
  @Output() itemSelected = new EventEmitter<T>();
  @Output() editItem = new EventEmitter<T>();
  @ContentChild(ItemTemplateDirective) itemTemplate?: ItemTemplateDirective<T>;
  @ContentChild(DetailTemplateDirective)
  detailTemplate?: DetailTemplateDirective<T>;
  public selected?: T;

  public select(item: T) {
    this.selected = item;
    this.itemSelected.emit(item);
  }
}
