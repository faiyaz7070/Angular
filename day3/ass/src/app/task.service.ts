import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    this.tasks.push({ title: title, completed: false });
  }

  updateTaskStatus(task: Task, completed: boolean): void {
    task.completed = completed;
  }
}
