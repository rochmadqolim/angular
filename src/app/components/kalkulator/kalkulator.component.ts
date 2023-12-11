import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kalkulator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kalkulator.component.html',
  styleUrl: './kalkulator.component.css',
})
export class KalkulatorComponent {
  title = 'Kalkulator Component';
  // num1 = 0;
  // num2 = 0;
  // result = 0;
  // tambah = () => {
  //   this.result = this.num1 + this.num2;
  // };

  // kurang = () => {
  //   this.result = this.num1 - this.num2;
  // };

  // kali = () => {
  //   this.result = this.num1 * this.num2;
  // };

  // bagi = () => {
  //   this.result = this.num1 / this.num2;
  // };

  result = 0;
  tambah = (num1: string, num2: string) => {
    this.result = +num1 + +num2;
  };
  kurang = (num1: string, num2: string) => {
    this.result = +num1 - +num2;
  };
  kali = (num1: string, num2: string) => {
    this.result = +num1 * +num2;
  };
  bagi = (num1: string, num2: string) => {
    this.result = +num1 / +num2;
  };
}
