import { Component, OnInit } from '@angular/core';

import{Todo} from '../../todo';
import{Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
	
	private todo:Todo

  constructor(private _todoService:TodoService,private _router:Router) { }

  ngOnInit() {
  	 this.todo=this._todoService.getter();
  }

  processTodo(){
  	if(this.todo._id==undefined){
  		this._todoService.createTodo(this.todo).subscribe(data=>{
 		console.log(data);	
 		this._router.navigateByUrl('/');
  	});
  	}else{
  		this._todoService.updateTodo(this.todo).subscribe((todo)=>{
  			console.log(todo);
  			this._router.navigateByUrl('/');
  		});
  	}
  }

}
