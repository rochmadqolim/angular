import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  title = 'Child Component';
  @Input() listProduct: any[] = [];
  @Input() incre: any;
  @Input() decre: any;
}
