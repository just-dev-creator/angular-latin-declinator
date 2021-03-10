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
    if (kasus=="nom" && nummerus == 0) {
      if (this.entry.slice(-2) != "us") {
        this.wortstamm = "";
      } else {
        this.wortstamm = this.entry.slice(0,-2)
      }
    }
    else if (kasus=="nom" && nummerus == 1) {
      if (this.entry.slice(-1) != "i") {
        this.wortstamm = undefined
      } else {
        this.wortstamm = this.entry.slice(0,-1)
      }
    }
  }

  // NOMINATIV

  get nom_sg() {
    if (this.wortstamm) {
      return this.wortstamm + "us";
    } else {
      return " ";
    }
  }

  get nom_pl() {
    if (this.wortstamm) {
      return this.wortstamm + "i";
    } else {
      return " ";
    }
  }

  // GENITIV

  get gen_sg() {
    if (this.wortstamm) {
      return this.wortstamm + "i";
    } else {
      return " ";
    }
  }

  get gen_pl() {
    if (this.wortstamm) {
      return this.wortstamm + "orum";
    } else {
      return " ";
    }
  }

  
}
