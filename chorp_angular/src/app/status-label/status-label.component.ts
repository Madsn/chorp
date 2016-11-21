import {Component, OnInit, Input} from '@angular/core';
import {StatusEnum} from "../tasks/types/status/StatusType";

@Component({
  selector: 'app-status-label',
  templateUrl: './status-label.component.html',
  styleUrls: ['./status-label.component.css']
})
export class StatusLabelComponent implements OnInit {
  @Input() status: StatusEnum;

  constructor() { }

  ngOnInit() {
  }

}
