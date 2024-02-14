import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment3';
  showpassword=false;
  array= [];

  onclicking(){
    this.showpassword = ! this.showpassword;
    this.array.push(this.array.length +1);

  }

}
