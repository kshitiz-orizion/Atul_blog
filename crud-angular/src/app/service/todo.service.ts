import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(private http:Http) {
   console.log('Todo Service initialized');
   }

   getTodo(){
   return this.http.get('http://localhost:3000/todo').map(res=>res.json());
   }

}
