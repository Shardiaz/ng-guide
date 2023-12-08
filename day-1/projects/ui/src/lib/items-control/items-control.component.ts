import { NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, ContentChild, Input } from '@angular/core';
import { DetailTemplateDirective } from './detail-template.directive';
import { ItemTemplateDirective } from './item-template.directive';

@Component({
  selector: 'ui-items-control',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './items-control.component.html',
  styleUrl: './items-control.component.scss',
})
export class ItemsControlComponent<TItem = unknown> implements AfterViewInit {
  @Input() items?: TItem[];
  @ContentChild(ItemTemplateDirective)
  itemTemplate: ItemTemplateDirective<TItem> | null = null;
  @ContentChild(DetailTemplateDirective)
  detailTemplate: DetailTemplateDirective<TItem> | null = null;
  public selectedItem: TItem | null = null;

  ngAfterViewInit(): void {
    console.log(this.itemTemplate);
  }

  public selectItem(item: TItem) {
    this.selectedItem = this.selectedItem === item ? null : item;
  }
}
