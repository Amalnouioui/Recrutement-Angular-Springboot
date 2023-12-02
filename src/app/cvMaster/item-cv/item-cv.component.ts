import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Condidat } from 'src/app/models/condidat';


@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css'],

})

export class ItemCvComponent implements OnInit {
ngOnInit(): void {
 
}
@Input () condidat:Condidat=new Condidat() ;
//output:pour envoyer les donner de item a list 
//1-on declare un output une variable qui va contenir le data a envoyer a list-cv qui est une instance de EventEmitter  
@Output () selectedCondidate =new EventEmitter();
//3-on lance une fonction qui va etre lancer une fonction qui contient un condidat
    sendCondidat(){
      this.selectedCondidate.emit(this.condidat);
}

} 

