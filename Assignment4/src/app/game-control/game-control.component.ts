import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
   interval;
   @Output() intervalfired= new EventEmitter<number>();
   lastnumber=0;

  onstartgame(){
   this.interval=setInterval(()=>{
    this.intervalfired.emit(this.lastnumber+1);
    this.lastnumber++;
   } ,1000);
  }

  onstopgame(){
    clearInterval(this.interval)
  }
}
