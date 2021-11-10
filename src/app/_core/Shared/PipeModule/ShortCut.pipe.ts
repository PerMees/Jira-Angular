import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut',
})
export class ShortCutPipe implements PipeTransform {
  transform(value: any, limit: number): any {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
