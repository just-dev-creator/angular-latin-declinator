import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {
  impressumActivated: boolean | undefined
  dataActivated: boolean | undefined
  constructor() { }

  ngOnInit(): void {
  }

  toggleImpressum() {
    this.impressumActivated = !this.impressumActivated
  }
  
  toggleData() {
    this.dataActivated = !this.dataActivated
  }
}
