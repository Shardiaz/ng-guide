import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recordValues',
  standalone: true,
})
export class RecordValuesPipe<TKey extends string | symbol | number, TValue>
  implements PipeTransform
{
  transform(value: Record<TKey, TValue>): TValue[] {
    if (!value) return [];

    return Object.values(value) as TValue[];
  }
}
