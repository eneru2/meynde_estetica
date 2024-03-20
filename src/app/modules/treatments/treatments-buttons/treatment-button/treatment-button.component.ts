import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'treatment-button',
  standalone: true,
  imports: [CommonModule],
  template: `  
      <button 
        class=" uppercase text-sm font-semibold  px-1.5 py-1 rounded
         cursor-pointer
         dark:text-zinc-50"
        [ngClass]="treatmentType === buttonType ? 'bg-black text-white'  : 'bg-transparent text-black hover:bg-zinc-200 hover:dark:text-black'"
        (click)="changeTreatmentType(buttonType)">
        {{ buttonType }}</button>
  `,
  styles: ``
})
export class TreatmentButtonComponent {
  @Input() treatmentType = "todos"
  @Input() buttonType = ""
  @Output() changeTreatmentTypeEvent = new EventEmitter()

  changeTreatmentType(treatmentType:string){
    this.treatmentType = treatmentType
    this.changeTreatmentTypeEvent.emit(treatmentType)
  }
}
