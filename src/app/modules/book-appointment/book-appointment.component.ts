import { Component } from '@angular/core';
import { BookAppointmentInformationComponent } from './book-appointment-information/book-appointment-information.component';
import { Title } from '@angular/platform-browser';
import { TreatmentsService } from '../../services/treatments.service';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [BookAppointmentInformationComponent],
  template: `
  <h1 class="text-3xl font-bold mb-4">Cita previa</h1>
    <div class="flex gap-x-5 max-lg:flex-col-reverse max-lg:gap-y-8">
      <!-- <information></information> -->
      <div class="w-full flex flex-col p-7 shadow-lg">
        <div class="flex gap-x-12">
          <p class="uppercase text-2xl">Escoge una zona</p>
          <select #select class="bg-transparent" name="" id="" (input)="getTreatmentType(select.value)">
            <option value="cara">cara</option>
            <option value="cuerpo">cuerpo</option>
            <option value="piel">piel</option>
          </select>
        </div>
        @for (treatment of treatments; track $index) {
          <div class="w-full shadow-md dark:shadow-md dark:shadow-white/10 my-10 max-lg:my-5 p-7">
            <p class="text-xl font-semibold mb-4">{{  treatment.name  }}</p>
            <p class="mb-8">{{ treatment.shortDescription }}</p>
            <div class="flex justify-between border-t-[1px] border-zinc-200 py-6 max-lg:py-3">
              <div class="flex items-center gap-x-2">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </i>
                <p>{{ treatment.duration }}</p></div>
              <a href="{{'/cita-previa/' + treatment.slug}}">Pide cita</a>
            </div>
            <a class="text-sm" href="{{'/tratamientos/' + treatment.slug}}">Más información</a>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``
})
export class BookAppointmentComponent {
  constructor(public treatmentsService: TreatmentsService, private titleService:Title) {
    this.titleService.setTitle("Cita previa")    
  }
  treatmentType = "cara"
  treatments = this.treatmentsService.searchProducts(this.treatmentType)

  getTreatmentType(type:string){
    this.treatmentType = type
    this.treatments = this.treatmentsService.searchProducts(type)
  }
  search(treatmentType:string){
    this.treatments = this.treatmentsService.searchProducts(treatmentType)
  }
}
