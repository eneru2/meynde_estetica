import { Component, OnInit } from '@angular/core';
import TreatmentsList from '../../stores/treatments-list';
import { TreatmentsService } from '../../services/treatments.service';
import { ActivatedRoute, Router } from '@angular/router';
import TreatmentList from '../../stores/treatments-list'
import { CanonicalLinkService } from '../../services/canonical-link.service';

@Component({
  selector: 'app-booking-treatment',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-row-reverse gap-x-24 mt-4 max-[960px]:flex-col">
      <picture 
        class="w-1/2 filter grayscale-[25%]
        max-[1052px]:w-full">
        <source
          srcset="imagenes/contacto-768x.avif"
          type="image/avif">
        <source
          srcset="imagenes/contacto-768x.webp"
          type="image/webp">
        <img
          src="imagenes/contacto-768x.jpg"
          type="image/jpeg"
          class="w-full object-cover max-[960px]:aspect-video max-[960px]:w-full"
          alt="Mujer de pie apoyada en una camilla">
      </picture>
      <form
        method="post"
        action="/cita.php"
        class="flex flex-col justify-between py-24 text-lg gap-y-4 w-1/2
        max-[1052px]:w-full max-[1052px]:pt-6">
        <h1 class="text-3xl font-bold mb-2">¿Cuándo te gustaria venir?</h1>
        <p class="mb-4 text-lg">Ten en cuenta que en algunos casos esta visita sera para un reconocimiento inicial con el doctor.</p>
        <label class="flex flex-col">
          Nombre y apellidos
          <input
            class="border-zinc-200 border-2 bg-transparent my-2 py-2 px-3 text-zinc-900
           placeholder:text-zinc-600 placeholder:opacity-35
            dark:placeholder:text-zinc-400 dark:text-zinc-50
            focus:outline-none focus:rounded-none focus:border-main"
            id="name"
            name="name"
            placeholder="Tu nombre y apellidos"
            type="text"
            required>
        </label>
        <label class="flex flex-col">
          Correo electrónico
          <input
            class="bg-transparent border-zinc-200 border-2 my-2 py-2 px-3 text-zinc-900
          placeholder:text-zinc-500 placeholder:opacity-35
            dark:placeholder:text-zinc-400 dark:text-zinc-50
            focus:outline-none focus:rounded-none focus:border-main"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            type="email"
            required> 
        </label>
        <label class="flex flex-col">
          Teléfono
          <input
            class="bg-transparent border-zinc-200 border-2 mb-2 py-2 px-3 text-zinc-900
          placeholder:text-zinc-600 placeholder:opacity-35
            dark:placeholder:text-zinc-400 dark:text-zinc-50
            focus:outline-none focus:rounded-none focus:border-main"
            id="phone"
            name="phone"
            placeholder="Tu número de teléfono"
            type="text"
            required>
        </label>    

        <label for="" class="flex flex-col">
          Fecha
          <input
           class="bg-transparent border-zinc-200 border-2 mb-2 py-2 px-3 text-zinc-600
            dark:text-zinc-50
            focus:outline-none focus:rounded-none focus:border-main"
            #date
            (input)="selectedDay($event, date)"
            id="date"
            name="date"
            type="date"
            required>
        </label>
        <label for="">
          Hora
          <select
            class="bg-transparent border-zinc-200 border-2 mb-2 p-2 text-zinc-600 flex flex-col
            dark:text-slate-50 *:text-slate-500
            
            focus:outline-none focus:rounded-none focus:border-main"
            name="hour"
            id="hour"
            required>
            @switch (treatmentType) {
              @case ("aparatologia"){
                @switch (day) {
                  @case ("monday") {
                    @for (hour of aparatologiaSchedule.monday; track $index) {
                      <option value={{hour}}>{{hour}}</option>
                    }
                  }
                  @case ("thursday") {
                    @for (hour of aparatologiaSchedule.thursday; track $index) {
                      <option value={{hour}}>{{hour}}</option>
                    }
                  }
                  @case ("friday") {
                    @for (hour of aparatologiaSchedule.friday; track $index) {
                      <option value={{hour}}>{{hour}}</option>
                    }
                  }
                  @default {
                    <option value="null" disabled>Escoge otra día</option>
                  }
                }
              }
              @case ("estetica"){
                @switch (day) {
                  @case ("friday") {
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="16:30">16:30</option>
                    <option value="17:00">17:00</option>
                    <option value="17:30">17:30</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                  }
                  @case ("monday") {
                    <option value="17:00">17:00</option>
                    <option value="17:30">17:30</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                  }
                  @case ("thursday") {
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
    
                  }
                  @case ("wednesday") {
                    <option value="16:30">16:30</option>
                    <option value="17:00">17:00</option>
                    <option value="17:30">17:30</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                  }
                  @default {
                    <option value="null" disabled>Escoge otra día</option>
                  }
              }
              }
            }
          </select>
        </label>
        <label>
          Tu tratamiento
          <select
            class="flex flex-col bg-transparent border-zinc-200 border-2 mb-2 p-2 placeholder:text-zinc-600
            dark:text-zinc-50
            focus:outline-none focus:rounded-none focus:border-main" 
            name="treatment"
            #treatmentInput
            (input)="getTreatmentType(treatmentInput.value)"
            id="treatment">
            @for (treatment of treatments; track $index) {
              <option class="dark:text-slate-500" value="{{treatment.slug}}">{{treatment.name}}</option>
            }
          </select>
        </label>
        <label>
            Mensaje (opcional)
            <textarea
              class="bg-transparent border-zinc-200 border-2 mt-1 mb-2 py-2 px-3 text-zinc-900 resize-none w-full
            placeholder:text-zinc-600
            dark:placeholder:text-zinc-400 dark:text-zinc-50
              focus:outline-none focus:rounded-none focus:border-main"
              name="message"
              rows="10"
              id="message"
              placeholder="..."></textarea>
          </label> 
        <label class="flex items-center gap-x-2">
          <input
            class="accent-main w-5 h-5
            focus:outline-main"
            type="checkbox"
            name=""
            id=""
            required>
          <p>He leido y acepto la <a class="text-main underline underline-offset-2" href="politica-de-privacidad">política de privacidad.</a></p>
        </label>
        <button
          class="bg-main text-white py-2 px-8 self-center hover:bg-light-main transition-all
          dark:focus:shadow-[0_0_0_.125rem_white]
          focus:outline-none focus:rounded-none focus:shadow-[0_0_0_.125rem_black]">
          Enviar</button>
      </form>
    </div>
  `,
  styles: ``
})
export class BookingTreatmentComponent implements OnInit {
  treatments:any = TreatmentsList
  constructor(
    public treatmentsService: TreatmentsService,
    private router: Router,
    private route: ActivatedRoute,
    private canonicalService: CanonicalLinkService) {}

  day = "friday";
  object:any
  treatment:any
  treatmentSlug!: string | null
  treatmentType!: any | null

  aestheticSchedule = {
    monday: ["16:30", "17:00", "17:30", "18:00", "18:30"],
    tuesday: [],
    weknesday: ["16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
    thursday: ["10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00"],
    friday: ["10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"]
  }

  aparatologiaSchedule = {
    monday: ["16:00", "16:30", "17:00", "17:30", "18:00", "18:30"],
    thursday: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00"],
    friday: ["16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
  }

  getTreatmentType(slug:string) {
    this.treatmentType =
    TreatmentList
      .find((item) => item.slug === slug) 
      ?.generalType
  }

  selectedDay(day:Event, date:HTMLInputElement) {
    let parsedDate = new Date(date.value).getDay()
    switch(parsedDate){
      case 0:
        this.day = "sunday"
        break;
      case 1:
        this.day = "monday"
        break;
      case 2:
        this.day = "tuesday"
        break;
      case 3:
        this.day = "wednesday"
        break;
      case 4:
        this.day = "thursday"
        break;
      case 5:
        this.day = "friday"
        break;
      case 6:
        this.day = "saturday"
        break 
    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.treatmentSlug = params.get("slug")
      this.treatment = TreatmentList.find((item) => item.slug === this.treatmentSlug)      
      const treatmentSelect:any = document.getElementById("treatment")
      
      // Check if slug exists
      if(this.treatment == null){
        this.router.navigateByUrl("/cita-previa");
      } else {
        document.addEventListener("DOMContentLoaded", () => {
          treatmentSelect.value = this.treatment.slug;
          this.canonicalService.updateCanonicalLink("https://www.meynde-estetica.com/cita-previa");
        })
      }

      this.getTreatmentType(treatmentSelect.value)

      const dateSelect:any = document.getElementById("date")
      const date:Date = new Date()
      const year:number = date.getFullYear()
      
      const month = () => {
        const monthRaw:string|number = date.getMonth() + 1
        if (monthRaw < 10) {
          const processedMonth = "0" + monthRaw
          return processedMonth
        }
        return monthRaw
      }

      const day = () => {
        const dayRaw:string|number = date.getDate()
        if (dayRaw < 10) {
          const  processedDay = "0" + dayRaw
          return processedDay  
        }
        return dayRaw
      }

      const today = year + "-" + month() + "-" + day()
      
      dateSelect.setAttribute("min", today)
      dateSelect.setAttribute("value", today)
    })
  }
}
