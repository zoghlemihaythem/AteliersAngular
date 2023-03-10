import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  listeEmploi=[
    {reference: 1 ,titre:"developpeur",entreprise:"vermeg",etat:"true"},
    { reference: 1 ,titre:"ingenieur",entreprise:"sofrecom",etat:"false"},
   
  ];
somme : any=0;
  calcul(){
      this.somme= this.listeEmploi.filter(e=>e.etat=="true").length

  }


  copyList: any[] = [];
  filter(value: any) {
    this.copyList=this.listeEmploi;
    let v = value.target.value;
    this.listeEmploi= this.copyList.filter(l => { 
      return l.entreprise.toLowerCase().includes(v.toLowerCase())
      
    })
  }
}
