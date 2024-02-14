import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
   flag='';
  constructor(){

  }

  ngOnInit(){

  }
  @ Input() item=0;

}
