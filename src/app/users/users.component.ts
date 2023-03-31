import { Component, OnInit } from '@angular/core';
import { CalculServiceService } from '../services/calcul-service.service';
import { UserServiceService } from '../services/user-service.service';
import { Utilisateur } from '../Utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  
 
  constructor(private c :CalculServiceService , private users : UserServiceService , private router:Router) { }

  ngOnInit(): void {
    this.listUsers;
    this.getUsers();


}
listUsers:any
value:any=""
message:any=""
somme :any=0
  getNumberOf(){
  this.somme= this.c.getNumberOf(this.listUsers,'username',this.value)
  this.message="le nombre d’utilisateurs ayant le username "+this.value+" "+this.somme
 
  }
  getUsers(){
    this.users.getUsers().subscribe(
      (data)=>{
        this.listUsers=data

      }
    )
  }


}