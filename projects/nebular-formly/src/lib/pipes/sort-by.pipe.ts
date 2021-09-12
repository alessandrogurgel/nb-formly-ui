import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any[], column: string, dir: string): unknown {
    if (dir && dir === 'asc') {
      _.sortBy(value, column);
    } else if (dir && dir === 'desc') {
      _.sortBy(value, (e) => { -e[column] });
    }
    return _.sortBy(value, column);
  }

}
