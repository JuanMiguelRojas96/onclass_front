import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
