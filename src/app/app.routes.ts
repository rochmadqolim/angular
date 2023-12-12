import { Routes } from '@angular/router';
import { KalkulatorComponent } from './components/kalkulator/kalkulator.component';
import { CounterComponent } from './components/counter/counter.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

export const routes: Routes = [
  { path: 'kalkulator', component: KalkulatorComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'counter', component: CounterComponent },
];
