import { Component } from '@angular/core';

@Component({
  selector: 'app-event-b',
  templateUrl: './event-b.component.html',
  styleUrl: './event-b.component.css'
})
export class EventBComponent {
    allowtoproceed =false;
    proceedstatus="Cannot proceed! click on the proceed button";
    updatestatus='';

    constructor(){
           setTimeout(() => {
            this.allowtoproceed = true;
           }, 3000);
    }

    ngOnInit(){

    }

    onproceed(){
      this.proceedstatus="Attempt successful! You can proceed now"
    }

    onupdate(event: any){
        this.updatestatus = (<HTMLInputElement>event.target).value;
    }
}

