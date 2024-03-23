import { Component,Output,EventEmitter } from '@angular/core';
export class Todo{
  constructor(public name:String,public desc:string ){}
}
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css'
})


export class AddtodoComponent {
  name:string=''
  desc:string=''
  @Output() todoadd: EventEmitter<Todo> = new EventEmitter<Todo>(); 


  onSubmit(){
    const todos=new Todo(this.name,this.desc)
    this.todoadd.emit(todos)
  }
  

}
