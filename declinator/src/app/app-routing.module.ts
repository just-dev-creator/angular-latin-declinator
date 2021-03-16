/*
 * File: app-routing.module.ts
 * Project: declinator
 * Copyright: This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

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
