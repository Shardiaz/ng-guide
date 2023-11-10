import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recordKeys',
  standalone: true,
})
export class RecordKeysPipe<TKey extends string | symbol | number>
  implements PipeTransform
{
  transform(value: Record<TKey, unknown>): TKey[] {
    if (!value) return [];

    return Object.keys(value) as TKey[];
  }
}
