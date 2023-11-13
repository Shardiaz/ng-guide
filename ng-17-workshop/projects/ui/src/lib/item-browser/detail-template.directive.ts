import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[detailOf]',
  standalone: true,
})
export class DetailTemplateDirective<T> {
  constructor(public template: TemplateRef<{ $implicit: T }>) {}
  @Input() detailOf!: T[];

  static ngTemplateContextGuard<T>(
    dir: DetailTemplateDirective<T>,
    ctx: unknown
  ): ctx is { $implicit: T } {
    return true;
  }
}
