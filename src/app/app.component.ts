import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { KalkulatorComponent } from './components/kalkulator/kalkulator.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    KalkulatorComponent,
    CounterComponent,
    HomeComponent,
    CommonModule,
    ChildComponent,
    RouterModule,
    ParentComponent,
  ],
  templateUrl: './app.component.html', // view
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularBasic';
}
