import { Component,Input, Output,EventEmitter } from '@angular/core';

export class Todo{
  constructor(public name:String,public desc:string ){}
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todo!:Todo;
// @Output deletetodo:EventEmitter<Todo>=new EventEmitter<Todo>();

@Output() tododelete: EventEmitter<Todo> = new EventEmitter<Todo>(); 

  delete(todo:Todo){
    console.log("working");
   this.tododelete.emit(todo)
    
    
  }
}
