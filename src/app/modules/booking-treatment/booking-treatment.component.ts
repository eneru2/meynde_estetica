import { Component } from '@angular/core';
import TreatmentsList from '../../stores/treatments-list';
import { TreatmentsService } from '../../services/treatments.service';

@Component({
  selector: 'app-booking-treatment',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl font-bold mb-2">¿Cuándo te gustaria venir?</h1>
    <p>Ten en cuenta que esta visita sera para un reconocimiento inicial con el doctor.</p>
    <div class="w-64 aspect-square flex flex-col items-center">
      <p>&lt; April 2024 &gt;</p>
      <div class="flex gap-x-2">
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Tue</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>
    </div>
    <h2>¿Qué hora preferirias?</h2>
    <div>
      <p>Mañana</p>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div>      
      <p>Tarde</p>
      <button></button>
    </div>
    <p>El tratamiento:</p>
    <select name="" id="">
      @for (treatment of treatments; track $index) {
        <option value="{{treatment.slug}}">{{treatment.name}}</option>
      }
    </select>
  `,
  styles: ``
})
export class BookingTreatmentComponent {
  treatments:any = TreatmentsList
  constructor(treatments: TreatmentsService){}

}
