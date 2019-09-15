import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string, changeCounter) {
    return value.filter(item => item.name.indexOf(searchText) > -1);
  }

}
