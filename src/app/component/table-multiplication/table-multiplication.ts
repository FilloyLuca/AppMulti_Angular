import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-multiplication',
  standalone: false,
  templateUrl: './table-multiplication.html',
  styleUrl: './table-multiplication.css',
})
export class TableMultiplication {

  // n: number = 2
  @Input()n: number = 2

}
