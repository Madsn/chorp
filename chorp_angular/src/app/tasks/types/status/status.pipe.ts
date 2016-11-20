import { Pipe, PipeTransform } from '@angular/core';
import {StatusEnum} from "./StatusType";

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case StatusEnum.DOING:
        return "Doing";
      case StatusEnum.DONE:
        return "Done";
      case StatusEnum.TODO:
        return "Todo";
      default:
        return "-";
    }
  }

}
