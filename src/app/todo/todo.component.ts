import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
username:string="Enter username to show at right";
taskList:any[]=[''];
onClick(taskdetail?:any){
  if(taskdetail.value.length >0){
    this.taskList.push(taskdetail.value);
    taskdetail.value='';
  }
}
onDelete(index?:any){
  this.taskList.splice(this.taskList.length-1);
}
}
