import {Pipe, PipeTransform} from '@angular/core';
import {StatusEnum} from "./StatusType";

@Pipe({
  name: 'status',
  pure: false
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (StatusEnum.DOING == value)
      return "Doing";
    else if (StatusEnum.DONE == value)
      return "Done";
    else if (StatusEnum.TODO == value)
      return "Todo";
    else
      return "-";
  }

}
