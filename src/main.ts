import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // sebagai routing
import { AppComponent } from './app/app.component'; // isi content

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
