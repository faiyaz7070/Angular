import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddtodoComponent } from './addtodo/addtodo.component';


const routes: Routes = [
  { path: '', component:TodoComponent },
  { path: 'todolist', component: TodoListComponent },
  { path: 'addtodo', component: AddtodoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
