import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {StatusLabelComponent} from "../status-label/status-label.component";
import {DragulaModule} from "ng2-dragula/ng2-dragula";
import {FilterByStatusPipe} from "./types/status/filter-by-status.pipe";
import {TasksListComponent} from "../tasks-list/tasks-list.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DragulaModule
  ],
  declarations: [StatusLabelComponent, FilterByStatusPipe, TasksListComponent]
})
export class TasksModule { }
