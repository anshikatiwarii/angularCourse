import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)               //bootstrapping - it is where application is loaded when Angular comes to life
  .catch((err) => console.error(err));
