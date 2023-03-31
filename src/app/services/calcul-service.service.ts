import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {

  constructor() { }





  getNumberOf(list:any[], critiria:string, value:any):number{
   return  list.filter(e=>e[critiria]==value).length

  }
}


