import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component'
import { TableComponent } from './table/table.component'

const routes: Routes = [
  {
    path: 'impressum', component: ImpressumComponent,
  }, {
    path: '', component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
