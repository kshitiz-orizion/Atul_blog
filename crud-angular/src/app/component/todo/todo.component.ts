import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../service/todo.service';
import{Todo} from '../../todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos=[];
  constructor(private todoService:TodoService) { 
  this.todoService.getTodo().subscribe(todo=>{
 	this.todos=todo;	
  });
  }

  ngOnInit() {
  }

}
