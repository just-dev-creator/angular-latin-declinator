import { Byte } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  wortstamm: String | undefined;
  @Input() 
  onKey!: Function;
  @Input()
  kasus: String | undefined
  @Input()
  nummerus: Byte | undefined
  constructor() { }

  ngOnInit(): void {
  }

  get getVal() : String {
    if (!this.wortstamm) return ""
    else if (this.kasus == "nom") {
      if (this.nummerus == 0) {
        return this.wortstamm + "us"
      } else {
        return this.wortstamm + "i"
      }
    } else if (this.kasus == "gen") {
      if (this.nummerus == 0) {
        return this.wortstamm + "i"
      } else {
        return this.wortstamm + "orum"
      }
    } else if (this.kasus == "dat") {
      if (this.nummerus == 0) {
        return this.wortstamm + "o"
      } else {
        return this.wortstamm + "is"
      }
    } else if (this.kasus == "akk") {
      if (this.nummerus == 0) {
        return this.wortstamm + "um"
      } else {
        return this.wortstamm + "os"
      }
    } else if (this.kasus == "abl") {
      if (this.nummerus == 0) {
        return this.wortstamm + "o"
      } else {
        return this.wortstamm + "is"
      }
    }
    return ""
  }

  get placeholder(): String {
    if (this.wortstamm) return ""
    else if (this.kasus == "nom") {
      if (this.nummerus == 0) {
        return "servus"
      } else {
        return "servi"
      }
    } else if (this.kasus == "gen") {
      if (this.nummerus == 0) {
        return "servi"
      } else {
        return "servorum"
      }
    } else if (this.kasus == "dat") {
      if (this.nummerus == 0) {
        return "servo"
      } else {
        return "servis"
      }
    } else if (this.kasus == "akk") {
      if (this.nummerus == 0) {
        return "servum"
      } else {
        return "servos"
      }
    } else if (this.kasus == "abl") {
      if (this.nummerus == 0) {
        return "servo"
      } else {
        return "servis"
      }
    }
    return ""
  }

  get canWrite(): boolean {
    return this.kasus == "nom" || this.kasus == "akk"
  }
}
