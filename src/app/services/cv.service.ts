import { Injectable } from '@angular/core';
import { Condidat } from '../models/condidat';
//requargde l'exemple dans le component de cv
 @Injectable ({ 
  //injection des dependances : on creer un service et on lui injecte avec le injection dans le  constructeur 
  providedIn: 'root'
})
export class CvService {
  private listCondidat:Condidat [];

  
  constructor() {
    this.listCondidat=[
    new Condidat(14519182,"oumayma","Nouioui",22 ,"o.png","oumaymanouioui@gmail.com","Geomaticien"),
    new Condidat(451912,"Ines","Belhareth",20 ,"o.png","Ines@gmail.com","Developper"),
     new Condidat(1419182,"Achref","Ghiryani",21 ,"a.png","ghiryaniachref@gmail.com","Network Technician"),
     new Condidat(1451982,"Sinda","Cherif",22 ,"o.png","sindacherif@gmail.com","An Accountant"),
     new Condidat(1451982,"Sinda","Cherif",22 ,"o.png","sindacherif@gmail.com","An Accountant"),
     new Condidat(1451982,"Sinda","Cherif",22 ,"o.png","sindacherif@gmail.com","An Accountant"),
     new Condidat(1451982,"Sinda","Cherif",22 ,"o.png","sindacherif@gmail.com","An Accountant")
    ];
  }
  loadData(){
    return this.listCondidat;
  }

   





















  // showAlert(){
  //   alert("hii its an injectable service !");
  // }
  
  
}
