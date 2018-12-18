import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'surname'
})
export class SurnamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let separator = args || ',';
    return value.split(' ').reverse().join(separator + ' ');
  }

}
