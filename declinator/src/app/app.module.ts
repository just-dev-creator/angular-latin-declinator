/*
 * File: app.module.ts
 * Project: declinator
 * Copyright: This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbInputModule, NbSelectModule, NbOptionModule, NbToggleModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ImpressumComponent } from './impressum/impressum.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ThirdTableComponent } from './third-table/third-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    TableComponent,
    FormComponent,
    ThirdTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbOptionModule,
    NbToggleModule,
    NbIconModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
