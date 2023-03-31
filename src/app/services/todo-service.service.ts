import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }


  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
 
}
