import { Injectable } from '@angular/core';
import{Http,Headers,Response} from '@angular/http';

import{Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

import{Todo} from '../todo';

@Injectable()
export class TodoService {
	private todo: Todo;
  constructor(private http:Http) {
   console.log('Todo Service initialized');
   }

   getTodo(){
   return this.http.get('http://localhost:3000/todo').map(res=>res.json()).catch(this.errorHandler);
   }

   getSingletodo(id:String){
   return this.http.get('http://localhost:3000/todo/'+id).map(res=>res.json()).catch(this.errorHandler);
   }

   deleteTodo(id:String){
   return this.http.delete('http://localhost:3000/todo/'+id).map(res=>res.json()).catch(this.errorHandler);
   }

   createTodo(todo:Todo){
   return this.http.post('http://localhost:3000/todo',todo).map(res=>res.json()).catch(this.errorHandler);
   }


  updateTodo(todo:Todo){
   return this.http.put('http://localhost:3000/todo/'+todo._id,todo).map(res=>res.json()).catch(this.errorHandler);
   }

   errorHandler(error:Response){
   return Observable.throw(error||"This is a server Error");
   }

   setter(todo:Todo){
   	this.todo=todo;
   }

   getter(){
   return this.todo;
   }
}
