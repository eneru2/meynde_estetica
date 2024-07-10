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
    <div class="py-14 relative">
      <div class="absolute w-screen h-full bg-[#c1d5e339] left-[50%] translate-x-[-50%] -z-20 top-0 border-main border-b-[1px] border-t-[1px]"></div>
      <h1 class="text-5xl uppercase  text-center tracking-widest">Tratamientos</h1>
      <!-- <div class="flex mt-4 justify-center">
        <input 
          class="my-3 py-2 px-4 border border-zinc-300"
          type="search"
          placeholder="Busca tu tratamiento..."
          #searchInput
          (input)="search(treatmentType, searchInput.value)">
        </div> -->
      </div>
      <app-buttons
        class="flex justify-center mt-8 mb-10"
        (changeTreatmentTypeEvent)="getTreatmentType($event)"
        treatmentType="{{ treatmentType }}"
      >
      </app-buttons>
    <div class="flex gap-x-8 mb-8 items-center">
      <div class=" bg-black h-[1px] w-full"></div>
      <h2 id="cara" class="text-[1.6rem] text-black tracking-widest text-center uppercase">Cara</h2>
      <div class=" bg-black h-[1px] w-full"></div>
    </div>
    <ul 
      class="grid gap-4 mt-4 grid-cols-4
      max-[1080px]:grid-cols-3 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 ">
      @for (treatment of treatmentFace; track $index) {
        <li class="rounded text-lg shadow-md relative flex flex-col items-center will-change-contents
        hover:shadow-lg transition-all filter saturate-[30%] hover:saturate-100
        dark:hover:shadow-lg dark:hover:shadow-white/10 dark:shadow-white/10">
          <img
          class="h-36 w-full object-cover -z-10"
          src="{{treatment.img}}" alt="">
          <p class="my-auto py-3 text-center">{{treatment.name}}</p>
          <!-- <p class=" text-sm">{{treatment.shortDescription}}</p> -->
          <a class="absolute w-full h-full top-0 left-0" href="{{'/tratamientos/' + treatment.slug}}">
          </a>
        </li>
      }      
    </ul>
    <div class="flex gap-x-8 my-8 items-center">
      <div class=" bg-main h-[1px] w-full"></div>
      <h2 id="cuerpo" class="text-[1.6rem] text-main tracking-widest text-center uppercase">Cuerpo</h2>
      <div class=" bg-main h-[1px] w-full"></div>
    </div>
    <ul 
      class="grid gap-4 mt-4 grid-cols-4
      max-[1080px]:grid-cols-3 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 ">
      @for (treatment of treatmentBody; track $index) {
        <li class="rounded text-lg shadow-md relative flex flex-col items-center will-change-auto
        hover:shadow-lg transition-all filter saturate-[30%] hover:saturate-100
        dark:hover:shadow-lg dark:hover:shadow-white/10 dark:shadow-white/10">
          <img
          class="h-36 w-full object-cover -z-10"
          src="{{treatment.img}}" alt="">
          <p class="my-auto py-3 text-center">{{treatment.name}}</p>
          <!-- <p class=" text-sm">{{treatment.shortDescription}}</p> -->
          <a class="absolute w-full h-full top-0 left-0" href="{{'/tratamientos/' + treatment.slug}}">
          </a>
        </li>
      }      
    </ul>
    <div class="flex my-8 gap-x-8 items-center">
      <div class=" bg-main h-[1px] w-full"></div>
      <h2 id="piel" class="text-[1.6rem] text-main tracking-widest text-center uppercase">Piel</h2>
      <div class=" bg-main h-[1px] w-full"></div>
    </div>
    <ul 
      class="grid gap-4 mt-4 grid-cols-4
      max-[1080px]:grid-cols-3 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 ">
      @for (treatment of treatmentSkin; track $index) {
        <li class="rounded text-lg shadow-md relative flex flex-col items-center will-change-auto
        hover:shadow-lg transition-all filter saturate-[30%] hover:saturate-100
        dark:hover:shadow-lg dark:hover:shadow-white/10 dark:shadow-white/10">
          <img
          class="h-36 w-full object-cover -z-10"
          src="{{treatment.img}}" alt="">
          <p class="my-auto py-3 text-center">{{treatment.name}}</p>
          <!-- <p class=" text-sm">{{treatment.shortDescription}}</p> -->
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
  treatmentType = "cara"
  treatmentFace = this.treatmentsService.searchProducts("cara", "")
  treatmentBody = this.treatmentsService.searchProducts("cuerpo", "")
  treatmentSkin = this.treatmentsService.searchProducts("piel", "")
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
