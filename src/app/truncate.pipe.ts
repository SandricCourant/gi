import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const transformedValue:string = value.slice(0,14);
    return transformedValue;
  }

}
