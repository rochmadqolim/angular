import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  // inisial var
  // counter:number=0

  title = 'Counter Component';

  counter = 0;

  // arrow func
  increment = () => {
    this.counter++;
  };

  increment2() {
    this.counter++;
  }

  decrement = () => {
    this.counter--;
  };
}
