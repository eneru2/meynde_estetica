import { Component, OnInit } from '@angular/core';
import TreatmentsList from '../../stores/treatments-list';
import { TreatmentsService } from '../../services/treatments.service';
//import Datepicker from 'vanillajs-datepicker/js/Datepicker';
import 'vanillajs-datepicker/css/datepicker.css';
import { getDate } from 'date-fns';

@Component({
  selector: 'app-booking-treatment',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl font-bold mb-2">¿Cuándo te gustaria venir?</h1>
    <p>Ten en cuenta que esta visita sera para un reconocimiento inicial con el doctor.</p>
    <div class="w-64 aspect-square flex flex-col items-center">
      <p>&lt; April 2024 &gt;</p>
      <input type="text" name="date_picker">
      <div id="date_picker"></div>
      <div class="flex gap-x-2 w-full overflow-x-hidden">
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
    <select name="" id="">
      <option value="">Mañana</option>
      <option value="">Tarde</option>
    </select>
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
export class BookingTreatmentComponent implements OnInit {
  treatments:any = TreatmentsList
  constructor(treatments: TreatmentsService){}

  ngOnInit(): void {

    const date = new Date
    const year = date.getFullYear()
    const month = date.getMonth()
    const numDays= (year:number, month:number) => new Date(year, month, 0).getDate()
    if (typeof document !== "undefined"){
      console.log(numDays(year, month))
    }
  }
}
