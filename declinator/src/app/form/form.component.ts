/*
 * Copyright (c) 2021 just-dev-creator
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Byte } from '@angular/compiler/src/util';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  wortstamm: string | undefined;
  @Input()
  // eslint-disable-next-line @typescript-eslint/ban-types
  onKey!: Function;
  @Input()
  kasus: string | undefined;
  @Input()
  nummerus: Byte | undefined;
  @Input()
  gender: string | undefined;
  @Input()
  // eslint-disable-next-line @typescript-eslint/ban-types
  calculateValues!: EventEmitter<Function>;

  entry: string | undefined;

  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/ban-types
    this.calculateValues.subscribe((calculateFunction: Function) => {
      if (this.entry !== undefined) {
        calculateFunction(this.entry, this.kasus, this.nummerus);
      }
    });
  }

  get getVal(): string {
    if (!this.wortstamm) {return ''; }
    else if (this.kasus === 'nom') {
      if (this.nummerus === 0) {
        if (this.gender === 'm') {
          return this.wortstamm + 'us';
        } else if (this.gender === 'f') {
          return this.wortstamm + 'a';
        } else if (this.gender === 'n') {
          return this.wortstamm + 'um';
        }
      } else {
        if (this.gender === 'm') {
          return this.wortstamm + 'i';
        } else if (this.gender === 'f') {
          return this.wortstamm + 'ae';
        } else if (this.gender === 'n') {
          return this.wortstamm + 'a';
        } else if (this.gender === '3') {
          return this.wortstamm + 'es';
        }
      }
    } else if (this.kasus === 'gen') {
      if (this.nummerus === 0) {
        if (this.gender === 'm') {
          return this.wortstamm + 'i';
        } else if (this.gender === 'f') {
          return this.wortstamm + 'ae';
        } else if (this.gender === 'n') {
          return this.wortstamm + 'i';
        } else if (this.gender === '3') {
          return this.wortstamm + 'is';
        }
      } else {
        if (this.gender === 'm') {
          return this.wortstamm + 'orum';
        } else if (this.gender === 'f') {
          return this.wortstamm + 'arum';
        } else if (this.gender === 'n') {
          return this.wortstamm + 'orum';
        } else if (this.gender === '3') {
          return this.wortstamm + 'um';
        }
      }
    } else if (this.kasus === 'dat') {
      if (this.nummerus === 0) {
        if (this.gender === 'm') {
          return this.wortstamm + 'o';
        } else if (this.gender === 'f') {
          return this.wortstamm + 'ae';
        } else if (this.gender === 'n') {
          return this.wortstamm + 'o';
        } else if (this.gender === '3') {
          return this.wortstamm + 'i';
        }
      } else {
        if (this.gender === 'm') {
          return this.wortstamm + 'is';
        } else if (this.gender === 'f') {
          return this.wortstamm + 'is';
        } else if (this.gender === 'n') {
          return this.wortstamm + 'is';
        } else if (this.gender === '3') {
          return this.wortstamm + 'ibus';
        }
      }
    } else if (this.kasus === 'akk') {
      if (this.nummerus === 0) {
        if (this.gender === 'm') {
          return this.wortstamm + 'um';
        } else if (this.gender === 'f') {
          return this.wortstamm + 'am';
        } else if (this.gender === 'n') {
          return this.wortstamm + 'um';
        } else if (this.gender === '3') {
          return this.wortstamm + 'em';
        }
      } else {
        if (this.gender === 'm') {
          return this.wortstamm + 'os';
        } else if (this.gender === 'f') {
          return this.wortstamm + 'as';
        } else if (this.gender === 'n') {
          return this.wortstamm + 'a';
        } else if (this.gender === '3') {
          return this.wortstamm + 'es';
        }
      }
    } else if (this.kasus === 'abl') {
      if (this.nummerus === 0) {
        if (this.gender === 'm') {
          return this.wortstamm + 'o';
        } else if (this.gender === 'f') {
          return this.wortstamm + 'a';
        } else if (this.gender === 'n') {
          return this.wortstamm + 'o';
        } else if (this.gender === '3') {
          return this.wortstamm + 'e';
        }
      } else {
        if (this.gender === 'm') {
          return this.wortstamm + 'is';
        } else if (this.gender === 'f') {
          return this.wortstamm + 'is';
        } else if (this.gender === 'n') {
          return this.wortstamm + 'is';
        } else if (this.gender === '3') {
          return this.wortstamm + 'ibus';
        }
      }
    }
    return '';
  }

  get placeholder(): string {
    if (this.wortstamm) {return ''; }
    else if (this.kasus === 'nom') {
      if (this.nummerus === 0) {
        return 'servus';
      } else {
        return 'servi';
      }
    } else if (this.kasus === 'gen') {
      if (this.nummerus === 0) {
        return 'servi';
      } else {
        return 'servorum';
      }
    } else if (this.kasus === 'dat') {
      if (this.nummerus === 0) {
        return 'servo';
      } else {
        return 'servis';
      }
    } else if (this.kasus === 'akk') {
      if (this.nummerus === 0) {
        return 'servum';
      } else {
        return 'servos';
      }
    } else if (this.kasus === 'abl') {
      if (this.nummerus === 0) {
        return 'servo';
      } else {
        return 'servis';
      }
    }
    return '';
  }

  get canWrite(): boolean {
    return true;
   // return this.kasus == "nom" || this.kasus == "akk"
  }
}
