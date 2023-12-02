import { Injectable } from '@angular/core';
import { Condidat } from '../models/condidat';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
 private condidatEmb:Condidat[];
  constructor() {
    this.condidatEmb = []; 

   }
   getEmb(){
    return this.condidatEmb; 
   }

   embaucher(condidat:Condidat){
    const index=this.condidatEmb.indexOf(condidat);
    if(index<0){
      this.condidatEmb.push(condidat);
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `No ! ${condidat.nom} ${condidat.prenom} deja embauché`,

        
      });
    }
  }
   
   debaucher(condidat:Condidat){
    const index=this.condidatEmb.indexOf(condidat);
   this.condidatEmb.splice(index);
   }
}
