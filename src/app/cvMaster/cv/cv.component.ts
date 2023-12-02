import { Component, OnInit } from '@angular/core';
import { Condidat } from 'src/app/models/condidat';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],

})
export class CvComponent implements OnInit{
 public  listCondidat :Condidat []=[];
  //j'ai creer une variable de type cpndidat pour preparer l'input elle va recevoir le condidat venu de cv
public selectedCondidate:Condidat=new Condidat ();
 
 //1-creation de constructeur pour peparer a l'injection de service 
 constructor(private cvservice : CvService ){}
 
ngOnInit(): void {
  //2-appel de la fonction de cvservice 
this.listCondidat=this.cvservice.loadData();


 }

receivedCondidate(condidat:any){
  this.selectedCondidate=condidat;
}


}
