import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../service/todo.service';
import{Todo} from '../../todo';
import{Router} from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[]=[];
  constructor(private _todoService:TodoService,private _router:Router) { }

  ngOnInit() {

  	this._todoService.getTodo().subscribe(data=>{
 		this.todos=data;	
  	});
  }


  delete(todo){
  	this._todoService.deleteTodo(todo._id).subscribe(data=>{
  	console.log(this.todos.indexOf);
 		this.todos.splice(this.todos.indexOf(todo),1);	
  	});
  }
  updateTodo(todo){
    this._todoService.setter(todo);
  	this._router.navigateByUrl('/op');
  }
  newTodo(){
    let todo=new Todo();
    this._todoService.setter(todo);
    this._router.navigateByUrl('/op');
  }
}

