import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[items]',
  standalone: true,
})
export class ItemTemplateDirective<T> {
  @Input() items: T[] = [];
  constructor(public template: TemplateRef<unknown>) {}

  static ngTemplateContextGuard<T>(
    dir: ItemTemplateDirective<T>,
    ctx: unknown
  ): ctx is { $implicit: T } {
    return true;
  }
}
