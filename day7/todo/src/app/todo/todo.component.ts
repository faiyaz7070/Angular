import { Component } from '@angular/core';
  export class Todo{
    constructor(public name:String,public desc:string ){}
  }
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

todos:Todo[]=[]
constructor() {
  this.getTodosFromLocalStorage();
}
getTodosFromLocalStorage() {
  if (typeof localStorage !== 'undefined') {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }
}
deletetodo(todo:Todo){
  const index=this.todos.indexOf(todo)
  this.todos.splice(index,1)
  localStorage.setItem("todos", JSON.stringify(this.todos));

}
addtodo(todo:Todo){
  this.todos.push(todo)
  localStorage.setItem("todos", JSON.stringify(this.todos));
}


}
