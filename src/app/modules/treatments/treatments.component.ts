import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TreatmentsService } from '../../services/treatments.service';
import { ButtonsComponent } from "./treatments-buttons/treatments-buttons.component"
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-treatments',
  standalone: true,
  imports: [ButtonsComponent, CommonModule, RouterLink],
  template: `
    <h1 class="text-3xl font-bold">Tratamientos</h1>
    <input 
      class="my-3 py-2 px-4 border border-zinc-300"
      type="search"
      placeholder="Busca tu tratamiento..."
      #searchInput
      (input)="search(treatmentType, searchInput.value)">
    <app-buttons 
      (changeTreatmentTypeEvent)="getTreatmentType($event)"
      treatmentType="{{ treatmentType }}"
    >
    </app-buttons>
    <ul 
      class="grid gap-4 mt-4 grid-cols-4
      
      max-[1080px]:grid-cols-3 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 ">
      @for (treatment of treatments; track $index) {
        <li class="rounded py-4 px-5 text-lg shadow-md relative
        hover:shadow-lg transition-all
        dark:hover:shadow-lg dark:hover:shadow-white/10 dark:shadow-white/10">
          {{treatment.name}}
          <a class="absolute w-full h-full top-0 left-0" href="{{'/tratamientos/' + treatment.slug}}">
          </a>
        </li>
      }      
    </ul>    
  `,
  styles: ``
})
export class TreatmentsComponent {  
  constructor(
    public treatmentsService: TreatmentsService,
    private titleService:Title) {
    this.titleService.setTitle("Tratamientos")    
  }
  treatmentType = "todos"
  treatments = this.treatmentsService.searchProducts(this.treatmentType, "")
  treatmentId!: string | null

  getTreatmentType(treatmentType:string){
    this.treatmentType = treatmentType
    this.search(treatmentType, "")
  }

  search(treatmentType:string, query:string){
    this.treatments = this.treatmentsService.searchProducts(treatmentType, query)
  }

}
