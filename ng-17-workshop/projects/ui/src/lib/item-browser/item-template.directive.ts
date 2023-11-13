import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[itemOf]',
  standalone: true,
})
export class ItemTemplateDirective<T> {
  constructor(public template: TemplateRef<{ $implicit: T }>) {}
  @Input() itemOf!: T[];

  static ngTemplateContextGuard<T>(
    dir: ItemTemplateDirective<T>,
    ctx: unknown
  ): ctx is { $implicit: T } {
    return true;
  }
}
