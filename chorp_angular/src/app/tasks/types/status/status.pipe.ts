import { Pipe, PipeTransform } from '@angular/core';
import {StatusType} from "./StatusType";

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: StatusType, args?: any): any {
    switch (value) {
      case StatusType.DOING:
        return "Doing";
      case StatusType.DONE:
        return "Done";
      case StatusType.TODO:
        return "Todo";
      default:
        return "Err";
    }
  }

}
