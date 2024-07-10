import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'treatment-button',
  standalone: true,
  imports: [CommonModule],
  template: `
  <!-- border-b-[1px] border-main   -->
      <a
        href="{{ '/tratamientos#' + treatmentType}}"
        class="uppercase text-lg p-1.5 tracking-wider
         text-main
        cursor-pointer transition-all relative
          before:w-[60%] before:h-[1.25px] before:bg-main before:absolute before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:transition-all
'bg-transparent  hover:text-black hover:border-black hover:dark:text-black'
        hover:before:bg-black
         dark:text-zinc-50"
        (click)="changeTreatmentType(buttonType)">
        {{ buttonType }}</a>
        <!-- [ngClass]="treatmentType === buttonType ? 'bg-black text-white dark:bg-main'  : " -->
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
