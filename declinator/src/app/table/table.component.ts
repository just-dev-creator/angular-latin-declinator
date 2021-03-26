/*
 * File: table.component.ts
 * Project: declinator
 * Copyright: This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  entry: string | undefined;
  wortstamm: string | undefined;
  gender: string | undefined;
  autoCalc = true;
  easterEggTimes: any;
//  thirddeclination = false;
  // eslint-disable-next-line @typescript-eslint/ban-types
  calcEvent: EventEmitter<Function> = new EventEmitter();
  constructor() { }
  get onKeyFunction() {
    return this.onKey.bind(this);
  }

  get calculateFunction() {
    return this.calculate.bind(this);
  }

  ngOnInit(): void {
    console.log('=====================================================================================');
    console.log('Du bist ja ein richtiger HACKERMANS und hast die Konsole gefunden!');
    console.log('=====================================================================================');
  }

  onKey(event: KeyboardEvent, kasus: string, nummerus: Byte) {
    if (!this.autoCalc) {return;}
    this.entry = (event.target as HTMLInputElement).value;
    this.calculate(this.entry, kasus, nummerus);

  }
  genderLong(gendercode: string): string {
    if (gendercode === 'm') {
      return 'maskulinum';
    } else if (gendercode === 'f') {
      return 'femininum';
    } else if (gendercode === 'n') {
      return 'neutrum';
    }
    return '';
  }

  calculate(entry: string, kasus: string, nummerus: Byte) {
    this.entry = entry;
    if (kasus === 'nom') {
      if (nummerus === 0) {
        if (this.entry.slice(-2) === 'us') {
          this.wortstamm = this.entry.slice(0,-2);
          this.gender = 'm';
        } else if (this.entry.slice(-1) === 'a') {
          this.wortstamm = this.entry.slice(0, -1);
          this.gender = 'f';
        } else if (this.entry.slice(-2) === 'um') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = 'n';
        }
      } else {
        if (this.entry.slice(-1) === 'i') {
          this.wortstamm = this.entry.slice(0,-1);
          this.gender = 'm';
        } else if (this.entry.slice(-2) === 'ae') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = 'f';
        } else if (this.entry.slice(-1) === 'a') {
          this.wortstamm = this.entry.slice(0, -1);
          this.gender = 'n';
        } else if (this.entry.slice(-2) === 'es') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = '3';
        }
      }
    } else if (kasus === 'gen') {
      if (nummerus === 0) {
        if (this.entry.slice(-2) === 'is') {
          this.gender = '3';
          this.wortstamm = this.entry.slice(0, -2);
        }
        else if (this.entry.slice(-1) === 'i') {
          this.gender = 'mn';
          this.wortstamm = this.entry.slice(0, -1);
        } else if (this.entry.slice(-2) === 'ae') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = 'f';
        }
      } else {
        if (this.entry.slice(-4) === 'orum') {
          this.gender = 'mn';
          this.wortstamm = this.entry.slice(0, -4);
        } else if (this.entry.slice(-4) === 'arum') {
          this.wortstamm = this.entry.slice(0, -4);
          this.gender = 'f';
        } else if (this.entry.slice(-2) === 'um') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = '3';
        }
      }
    } else if (kasus === 'dat') {
      if (nummerus === 0) {
        if (this.entry.slice(-1) === 'o') {
          this.gender = 'mn';
          this.wortstamm = this.entry.slice(0, -1);
        } else if (this.entry.slice(-2) === 'ae') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = 'f';
        } else if (this.entry.slice(-1) === 'i') {
          this.wortstamm = this.entry.slice(0, -1);
          this.gender = '3';
        }
      } else {
        if (this.entry.slice(-2) === 'is') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = 'mfn';
        } else if (this.entry.slice(-4) === 'ibus') {
          this.wortstamm = this.entry.slice(0, -4);
          this.gender = '3';
        }
      }
    } else if (kasus === 'akk') {
      if (nummerus === 0) {
        if (this.entry.slice(-2) === 'um') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = 'mn';
        } else if (this.entry.slice(-2) === 'am') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = 'f';
        } else if (this.entry.slice(-2) === 'em') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = '3';
        }
      } else {
        if (this.entry.slice(-2) === 'os') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = 'm';
        } else if (this.entry.slice(-2) === 'as') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = 'f';
        } else if (this.entry.slice(-1) === 'a') {
          this.wortstamm = this.entry.slice(0, -1);
          this.gender = 'n';
        } else if (this.entry.slice(-2) === 'es') {
          this.wortstamm = this.entry.slice(0, -2);
          this.gender = '3';
        }
      }
    } else if (kasus === 'abl') {
      if (nummerus === 0) {
        if (this.entry.slice(-1) === 'o') {
          this.wortstamm = this.entry.slice(0, -1);
          this.gender = 'mn';
        } else if (this.entry.slice(-1) === 'a') {
          this.wortstamm = this.entry.slice(0, -1);
          this.gender = 'f';
        } else if (this.entry.slice(-1) === 'e') {
          this.wortstamm = this.entry.slice(0, -1);
          this.gender = '3';
        }
      } else {
        if (this.entry.slice(-2) === 'is') {
          this.wortstamm = this.entry.slice(0,-2);
          this.gender = 'mnf';
        } else if (this.entry.slice(-4) === 'ibus') {
          this.wortstamm = this.entry.slice(0, -4);
          this.gender = '3';
        }
      }
    }
  }

  changeEasterEgg() {
    console.log('change | ' + this.easterEggTimes);
    if (!this.easterEggTimes) {
      this.easterEggTimes = 1;
    } else {
      this.easterEggTimes++;
    }
  }
}
