import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'NumberToMinutes' })
export class NumberToMinutes implements PipeTransform {
  transform(value: number): string {
    var hours = Math.floor(value / 60);
    var minutes = value % 60;
    if (hours > 0) {
      return hours + 'h ' + minutes + ' min ';
    } else {
      return minutes + ' min ';
    }
  }
}
