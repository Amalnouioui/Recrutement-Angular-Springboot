import { Component, OnInit } from '@angular/core';
import { Condidat } from 'src/app/models/condidat';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-embaucher',
  templateUrl: './embaucher.component.html',
  styleUrls: ['./embaucher.component.css']
})
export class EmbaucherComponent implements OnInit {
  condidatEm:Condidat[];
  constructor(private embaucheservie:EmbaucheService){
    this.condidatEm=[];

  }
  ngOnInit(): void {

    this.condidatEm=this.embaucheservie.getEmb();
  }
  debaucher(condidat:Condidat){
   
  this.embaucheservie.debaucher(condidat);
   
  }
  
}
