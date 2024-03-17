import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  title: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  constructor() { }

  addTask(): void {
    if (this.title.trim()) {
      this.taskAdded.emit(this.title.trim());
      this.title = '';
    }
  }
}
