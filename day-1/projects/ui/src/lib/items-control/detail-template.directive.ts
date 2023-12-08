import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[details]',
  standalone: true,
})
export class DetailTemplateDirective<T> {
  @Input() details: T[] = [];
  constructor(public template: TemplateRef<unknown>) {}

  static ngTemplateContextGuard<T>(
    dir: DetailTemplateDirective<T>,
    ctx: unknown
  ): ctx is { $implicit: T } {
    return true;
  }
}
