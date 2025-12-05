import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTableMult } from './page-table-mult/page-table-mult';

const routes: Routes = [
   {path: 'table-multiplication', component: PageTableMult }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
