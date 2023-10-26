import { Component, OnInit } from '@angular/core';
import { Condidat } from 'src/app/models/condidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit{
 public  listCondidat :Condidat []=[];
 //j'ai creer une variable de type cpndidat pour preparer l'input elle va recevoir le condidat venu de cv
public selectedCondidate:Condidat=new Condidat ();
ngOnInit(): void {
 this.listCondidat=[
new Condidat(14519182,"oumayma","Nouioui",22 ,"o.png","oumaymanouioui@gmail.com","Geomaticien"),
new Condidat(451912,"Ines","Belhareth",20 ,"o.png","Ines@gmail.com","Developper"),
 new Condidat(1419182,"Achref","Ghiryani",21 ,"a.png","ghiryaniachref@gmail.com","Network Technician"),
 new Condidat(1451982,"Sinda","Cherif",22 ,"o.png","sindacherif@gmail.com","An Accountant")
]
}

receivedCondidate(condidat:any){
  this.selectedCondidate=condidat;
}

}
