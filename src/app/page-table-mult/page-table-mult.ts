import { Component } from '@angular/core';

@Component({
  selector: 'app-page-table-mult',
  standalone: false,
  templateUrl: './page-table-mult.html',
  styleUrl: './page-table-mult.css',
})
export class PageTableMult {

  // Propriété pour stocker le nombre de tables de multiplication
  numberOfTables: number = 1;

}
