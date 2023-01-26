import { Component } from '@angular/core';
import { TcurrencyComponent } from '../tcurrency/tcurrency.component';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})
export class LogicComponent {
  currencies = [
    "US Dollar",
      "Euro",
      "British Pound",
      "Swiss Franc",
      "Japanese Yen",
      "Indian Rupee"
    
  ];

  valueArr={
    "US Dollar": 81.24,
    "Euro":87.95,
    "British Pound" :100.60,
    "Swiss Franc":88.73,
    "Japanese Yen":0.63,
    "Indian Rupee":1,
  }
  
  getData(data:string){

  }

  convertedamt:number
  fromval:number
  toval:number
  temrs:number
  convert(amt:string,from:string,to:string){
     console.log(from);

     Object.entries(this.valueArr).find(([key,value])=>{
        if(key === from){
          this.fromval = value;
          console.log(this.fromval);
        }
     })

     Object.entries(this.valueArr).find(([key,value])=>{
      if(key === to){
        this.toval = value;
        console.log(this.toval);
      }
   })

   
   this.convertedamt = Number([Number(amt)*this.fromval])/this.toval;
  }
      
}
 

