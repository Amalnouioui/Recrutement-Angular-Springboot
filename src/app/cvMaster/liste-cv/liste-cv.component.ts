import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Condidat } from 'src/app/models/condidat';


@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {

 @Input() condidats:Condidat[]=[]//declaration de variable condidat de type condidat qui va contenur la liste de condidat

 
//on fait un second output pour envoyer le data de list a cv
@Output( ) selectedCondidate=new EventEmitter();
 
ngOnInit(): void {}
//la fonction de output de item a list
   SendCondidatToList(condidat:any){
    this.selectedCondidate.emit(condidat);
    
   } 
   
   


  }