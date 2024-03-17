import { Component, Input,OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[]=[];

  constructor() { }
  
  ngOnInit(): void {
    // You can initialize the task property here if needed
  }
}
