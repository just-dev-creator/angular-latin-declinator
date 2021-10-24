/*
 * File: impressum.component.ts
 * Project: declinator
 * Copyright: This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {
  impressumActivated: boolean | undefined;
  dataActivated: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  toggleImpressum(): void {
    this.impressumActivated = !this.impressumActivated;
  }

  toggleData(): void {
    this.dataActivated = !this.dataActivated;
  }
}
