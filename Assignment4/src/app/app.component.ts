import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment4';
  oddnumber: number[]=[]
  evennumber: number[]=[]

  onintervalfired(firednumber:number){
    console.log(firednumber);
    if (firednumber%2 ===0){
      this.evennumber.push(firednumber);
    }
    else{
      this.oddnumber.push(firednumber);
    }
  }
}
