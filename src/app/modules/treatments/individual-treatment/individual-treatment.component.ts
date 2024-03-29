import { ActivatedRoute, RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/header.service';
import { Title } from '@angular/platform-browser';
import TreatmentList from '../../../stores/treatments-list'
import { TreatmentsService } from '../../../services/treatments.service';
@Component({
  selector: 'individual-treatment',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <div class="flex justify-center items-center h-[60vh] top-0 left-0 right-0 absolute z-0">
      <h1 
        class="text-center uppercase tracking-wide text-5xl z-10 w-[min(80rem,_100%-2.5rem)] mx-auto text-balance leading-snug"
        [ngClass]="{
          'text-black': treatment.whiteText === false,
          'text-white': treatment.whiteText === true,
          }">        
        {{treatment.name}}</h1>
      <img
        class="w-full h-full absolute object-cover brightness-50 select-none"
        src="{{treatment.img}}"
        alt="{{treatment.imgAlt}}"
        draggable="false">
    </div>
    <div class="flex mt-[calc(60vh-10rem+1.25rem)] gap-x-4 max-[960px]:mt-[calc(60vh-5rem)]">
      <button
        [ngClass]="{'bg-main text-white': treatmentDescriptionButton}"
        class=" uppercase font-semibold px-2 py-1" 
        (click)="changeTab('description')">¿Qué es?</button>
      <!-- <button
        [ngClass]="{'bg-main text-white': treatmentDayButton}"
        class=" uppercase font-semibold px-2 py-1" 
        (click)="changeTab('treatmentDay')">Día tratamiento</button> -->
      <button
        [ngClass]="{'bg-main text-white': treatmentBenefitsButton}"
        class=" uppercase font-semibold px-2 py-1" 
        (click)="changeTab('benefits')">Beneficios</button>      
    </div>
    <div class="flex py-4 gap-x-12">
      <div class="max-w-[60%]">
        @if (treatmentDescriptionButton) {
          <p class="">{{treatment.description}}</p>      
        }
        @if (treatmentDayButton) {
          <p class="">{{treatment.treatmentDay}}</p>      
        }
        @if (treatmentBenefitsButton) {
          <p class="">{{treatment.benefits.initialText}}</p>      
          <ul class="pl-10 pb-2">
            @for (listElement of treatment.benefits.listElements; track $index) {
              <li>
                <span class="font-semibold">{{listElement.title}}</span>
                {{listElement.text}}
              </li>
            }
          </ul>
        }
      </div>
      <ul class="flex flex-col justify-between w-full h-72 p-4 gap-y-3 shadow-md">
        <li class="self-center font-semibold text-lg">{{treatment.name}}</li>
        <li class="flex justify-between">Duración<span class="font-semibold">{{treatment.duration}}</span></li>
        <li class="flex justify-between">Resultados<span class="font-semibold">{{treatment.results}}</span></li>
        <li class="flex justify-between">Vuelta al trabajo (est)<span class="font-semibold">{{treatment.backToWork}}</span></li>
        <li class="flex justify-between">Precio
          <span class="font-semibold">
            @if (
              treatment.sessionsAvailable && 
              object.values(treatment.sessionsAvailable)[0] !== object.values(treatment.sessionsAvailable).slice(-1)[0]) {
              {{object.values(treatment.sessionsAvailable)[0] + " - " + object.values(treatment.sessionsAvailable).slice(-1)[0] + " €"}}
            } @else {
              {{treatment.price}}€
            }
          </span>
        </li>
        <li class="self-center"><button class="hover:bg-light-main bg-main text-zinc-100 px-4 py-1 text-lg transition-all">Pide cita</button></li>
      </ul>
    </div>
    <h2 class="text-2xl font-medium mb-2">Preguntas frecuentes</h2>
    <!-- @for (item of treatment.requiredFaq; track $index) {
      <details name="faq">        
        <summary class="text-main cursor-pointer">{{item.title}}</summary>
        <p>{{item.description}}</p>
      </details>
    } -->

    @if(treatment.optionalFaq){    
      @for (item of treatment.optionalFaq; track $index) {
        <details class="my-2 select-none open:select-text" name="faq">        
          <summary class="cursor-pointer">{{item.title}}</summary>
          <p class="pl-5 mt-2">{{item.description}}</p>
        </details>
      }
    }
    
  `,
  styles: ``
})
export class IndividualTreatmentComponent implements OnInit {
  constructor(
    public treatmentsService: TreatmentsService,
    private route: ActivatedRoute, 
    private router: Router,
    private titleService:Title,
    public headerService: HeaderService) {}

  object:any
  treatment:any
  treatmentSlug!: string | null  

  treatmentDescriptionButton:boolean = true
  treatmentDayButton:boolean = false
  treatmentBenefitsButton:boolean = false

  
  changeTab(button:string){
    switch(button){
      case "description":        
        this.treatmentDescriptionButton = true
        this.treatmentDayButton = false
        this.treatmentBenefitsButton = false
        break;
      case "treatmentDay":        
        this.treatmentDescriptionButton = false
        this.treatmentDayButton = true
        this.treatmentBenefitsButton = false
        break;
      case "benefits":        
        this.treatmentDescriptionButton = false
        this.treatmentDayButton = false
        this.treatmentBenefitsButton = true
        break;        
      }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.treatmentSlug = params.get("slug")
      this.treatment = TreatmentList.find((item) => item.slug == this.treatmentSlug)      
      
      // Check if slug exists
      if(this.treatment == null){
        this.router.navigateByUrl("/404")
      } else {
        this.titleService.setTitle(this.treatment.name)
      }

      // Check if the header has to be transparent or no
      this.headerService.transparentBg = true

    })

    if(typeof Object !== "undefined"){
      this.object = Object
    }
  }
}
