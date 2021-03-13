import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor() { }
  entry: String | undefined;
  wortstamm: String | undefined;
  gender: String | undefined;
  autoCalc: boolean = true
  calcEvent : EventEmitter<Function> = new EventEmitter()

  get onKeyFunction() {
    return this.onKey.bind(this)
  }

  get calculateFunction() {
    return this.calculate.bind(this)
  }

  ngOnInit(): void {
    console.log("=====================================================================================")
    console.log("Du bist ja ein richtiger HACKERMANS und hast die Konsole gefunden!")
    console.log("=====================================================================================")
  }

  onKey(event: KeyboardEvent, kasus: String, nummerus: Byte) {
    if (!this.autoCalc) return;
    this.entry = (event.target as HTMLInputElement).value;
    this.calculate(this.entry, kasus, nummerus)
    
  }  
  genderLong(gendercode: String): String {
    if (gendercode == "m") {
      return "maskulinum"
    } else if (gendercode == "f") {
      return "femininum"
    } else if (gendercode == "n") {
      return "neutrum"
    }
    return ""
  } 

  calculate(entry: String, kasus: String, nummerus: Byte) {
    this.entry = entry
    if (kasus=="nom") {
      if (nummerus == 0) {
        if (this.entry.slice(-2) == "us") {
          this.wortstamm = this.entry.slice(0,-2)
          this.gender = "m"
        } else if (this.entry.slice(-1) == "a") {
          this.wortstamm = this.entry.slice(0, -1)
          this.gender = "f"
        } else if (this.entry.slice(-2) == "um") {
          this.wortstamm = this.entry.slice(0, -2)
          this.gender = "n"
        }
      } else {
        if (this.entry.slice(-1) == "i") {
          this.wortstamm = this.entry.slice(0,-1)
          this.gender = "m"
        } else if (this.entry.slice(-2) == "ae") {
          this.wortstamm = this.entry.slice(0, -2)
          this.gender = "f"
        } else if (this.entry.slice(-1) == "a") {
          this.wortstamm = this.entry.slice(0, -1)
          this.gender = "n"
        }
      }
    } else if (kasus=="gen") {
      if (nummerus == 0) {
        if (this.entry.slice(-1) == "i") {
          this.gender = "mn"
          this.wortstamm = this.entry.slice(0, -1)
        } else if (this.entry.slice(-2) == "ae") {
          this.wortstamm = this.entry.slice(0, -2)
          this.gender = "f"
        } 
      } else {
        if (this.entry.slice(-4) == "orum") {
          this.gender = "mn"
          this.wortstamm = this.entry.slice(0, -4)
        } else if (this.entry.slice(-4) == "arum") {
          this.wortstamm = this.entry.slice(0, -4)
          this.gender = "f"
        } 
      }
    } else if (kasus=="dat") {
      if (nummerus == 0) {
        if (this.entry.slice(-1) == "o") {
          this.gender = "mn"
          this.wortstamm = this.entry.slice(0, -1)
        } else if (this.entry.slice(-2) == "ae") {
          this.wortstamm = this.entry.slice(0, -2)
          this.gender = "f"
        } 
      } else {
        if (this.entry.slice(-2) == "is") {
          this.wortstamm = this.entry.slice(0, -2)
          this.gender = "mfn"
        }
      }
    } else if (kasus=="akk") {
      if (nummerus == 0) {
        if (this.entry.slice(-2) == "um") {
          this.wortstamm = this.entry.slice(0, -2)
          this.gender = "mn"
        } else if (this.entry.slice(-2) == "am") {
          this.wortstamm = this.entry.slice(0, -2)
          this.gender = "f"
        }
      } else {
        if (this.entry.slice(-2) == "os") {
          this.wortstamm = this.entry.slice(0, -2)
          this.gender = "m"
        } else if (this.entry.slice(-2) == "as") {
          this.wortstamm = this.entry.slice(0, -2)
          this.gender = "f"
        } else if (this.entry.slice(-1) == "a") {
          this.wortstamm = this.entry.slice(0, -1)
          this.gender = "n"
        }
      }
    } else if (kasus == "abl") {
      if (nummerus == 0) {
        if (this.entry.slice(-1) == "o") {
          this.wortstamm = this.entry.slice(0, -1);
          this.gender = "mn"
        } else if (this.entry.slice(-1) == "a") {
          this.wortstamm = this.entry.slice(0, -1)
          this.gender = "f"
        }
      } else {
        if (this.entry.slice(-2) == "is") {
          this.wortstamm = this.entry.slice(0,-2)
          this.gender = "mnf"
        }
      }
    }
  }
}
