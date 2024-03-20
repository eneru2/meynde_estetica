import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreatmentButtonComponent } from './treatment-button/treatment-button.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, TreatmentButtonComponent],
  template: `
    <div class="flex select-none gap-x-1.5" draggable="false">     
      <treatment-button
        (changeTreatmentTypeEvent)="changeTreatmentType($event)"
        treatmentType={{treatmentType}}
        buttonType="todos"/>
      <treatment-button
        (changeTreatmentTypeEvent)="changeTreatmentType($event)"
        treatmentType={{treatmentType}}
        buttonType="cara"/>
      <treatment-button
        (changeTreatmentTypeEvent)="changeTreatmentType($event)"
        treatmentType={{treatmentType}}
        buttonType="cuerpo"/>
      <treatment-button
        (changeTreatmentTypeEvent)="changeTreatmentType($event)"
        treatmentType={{treatmentType}}
        buttonType="piel"/>
    </div>
  `,
  styles: ``
})
export class ButtonsComponent {
  @Input() treatmentType = "todos"
  @Output() changeTreatmentTypeEvent = new EventEmitter()

  changeTreatmentType(treatmentType:string){
    this.treatmentType = treatmentType
    this.changeTreatmentTypeEvent.emit(treatmentType)
  }
  
}
