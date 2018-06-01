import { Component } from '@angular/core';
import{TodoService} from './service/todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoService]
})
export class AppComponent {
  title = 'app works!';
}
