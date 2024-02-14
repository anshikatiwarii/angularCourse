import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',                     // changes done here for components with inline tempelate 
  styleUrl: './app.component.css'                          // changes done here for components according to the inline style 
})
export class AppComponent {
  title = 'blog';
  info="step by step, little by little"

}


/* .html for html file 
   .css for css file 
   .spec.tc for testing the program 
   .components.ts for logical operations 
*/