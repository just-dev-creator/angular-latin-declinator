import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor() { }
  entry: String | undefined;
  wortstamm: String | undefined;

  get onKeyFunction() {
    return this.onKey.bind(this)
  }

  ngOnInit(): void {
  }

  onKey(event: KeyboardEvent, kasus: String, nummerus: Byte) {
    this.entry = (event.target as HTMLInputElement).value;
    if (kasus=="nom") {
      if (nummerus == 0) {
        if (this.entry.slice(-2) != "us") {
          this.wortstamm = "";
        } else {
          this.wortstamm = this.entry.slice(0,-2)
        }
      } else {
        if (this.entry.slice(-1) != "i") {
          this.wortstamm = undefined
        } else {
          this.wortstamm = this.entry.slice(0,-1)
        }
      }
    } else if (kasus=="gen") {
      if (nummerus == 0) {
        if (this.entry.slice(-1) != "i") {
          this.wortstamm = "";
        } else {
          this.wortstamm = this.entry.slice(0,-1)
        }
      } else {
        if (this.entry.slice(-4) != "orum") {
          this.wortstamm = "";
        } else {
          this.wortstamm = this.entry.slice(0,-4)
        }
      }
    } else if (kasus=="dat") {
      if (nummerus == 0) {
        if (this.entry.slice(-1) != "o") {
          this.wortstamm = "";
        } else {
          this.wortstamm = this.entry.slice(0,-1)
        }
      } else {
        if (this.entry.slice(-2) != "is") {
          this.wortstamm = "";
        } else {
          this.wortstamm = this.entry.slice(0,-2)
        }
      }
    } else if (kasus=="akk") {
      if (nummerus == 0) {
        if (this.entry.slice(-2) != "um") {
          this.wortstamm = "";
        } else {
          this.wortstamm = this.entry.slice(0,-2)
        }
      } else {
        if (this.entry.slice(-2) != "os") {
          this.wortstamm = "";
        } else {
          this.wortstamm = this.entry.slice(0,-2)
        }
      }
    } else if (kasus == "abl") {
      if (nummerus == 0) {
        if (this.entry.slice(-1) != "o") {
          this.wortstamm = "";
        } else {
          this.wortstamm = this.entry.slice(0,-1)
        }
      } else {
        if (this.entry.slice(-2) != "is") {
          this.wortstamm = "";
        } else {
          this.wortstamm = this.entry.slice(0,-2)
        }
      }
    }
  }  
}
