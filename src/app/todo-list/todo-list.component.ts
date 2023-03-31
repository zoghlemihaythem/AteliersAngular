import { Component, OnInit } from '@angular/core';
import { CalculServiceService } from '../services/calcul-service.service';
import { TodoServiceService } from '../services/todo-service.service';
import { todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private calcul: CalculServiceService , private tod: TodoServiceService) { }
somme :any=0
  ngOnInit(): void {
    this.todolist;
    this.getTodo()
  
    

  }
message:string=""
  getNbOf():any{
   
 this.somme= this.calcul.getNumberOf(this.todolist,'completed',true)
 
  this.message="le nombre de todo completed par rapport au nombre de todo total est affiché " + this.somme +" / "+ this.todolist.length;
   
      
  }


  todolist:any;

  getTodo(){
    this.tod.getTodos().subscribe(
      (data)=>{
        this.todolist=data

      }
    );

  }
  
}
