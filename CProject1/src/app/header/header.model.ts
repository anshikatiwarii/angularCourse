import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() featureselected= new EventEmitter<string>();
  onselect(feature: string){
   this.featureselected.emit(feature);
  }
}

//child component
//featureselected mein output lere h aur fir featureselected ko use karre h parent component mein 