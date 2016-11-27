import { Pipe, PipeTransform } from '@angular/core';
import {StatusEnum} from "./StatusType";
import {ITaskType} from "../TaskType";

@Pipe({
  name: 'filterByStatus',
  pure: false
})
export class FilterByStatusPipe implements PipeTransform {

  transform(items: ITaskType[], arg: StatusEnum): any {
    if (items && items.length > 0) {
      return items.filter(item => {
        return item.status === arg;
      });
    } else {
      return [];
    }
  }
}
