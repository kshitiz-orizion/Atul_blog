import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import { TodoformComponent } from './component/todoform/todoform.component';
import{TodoService} from './service/todo.service';
const appRoutes:Routes=[
{path:'',component:TodoComponent},
{path:'op',component:TodoformComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
