import { Component, Input } from '@angular/core';
import { Condidat } from 'src/app/models/condidat';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {


//pour recevoir les donne de cv 
@Input() Condidatselec:Condidat=new Condidat();
constructor(private embaucheservice:EmbaucheService){}
AjouterCondidat(){
  this.embaucheservice.embaucher(this.Condidatselec);
}
}