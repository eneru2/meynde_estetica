import { Component, OnInit } from '@angular/core';
import TreatmentsList from '../../stores/treatments-list';
import { TreatmentsService } from '../../services/treatments.service';
import { ActivatedRoute, Router } from '@angular/router';
import TreatmentList from '../../stores/treatments-list'

@Component({
  selector: 'app-booking-treatment',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-row-reverse gap-x-24 mt-4 max-[960px]:flex-col">
      <picture 
        class="w-1/2 filter grayscale-[25%]
        max-[1052px]:w-full "
>
        <source
          srcset="assets/imgs/contacto-768x.avif"
          type="image/avif">
        <source
          srcset="assets/imgs/contacto-768x.webp"
          type="image/webp">
        <img
          src="assets/imgs/contacto-768x.jpg"
          type="image/jpeg"
          class="w-full object-cover max-[960px]:aspect-video max-[960px]:w-full"
          alt="Mujer de pie apoyada en una camilla">
      </picture>
      <form 
        action=""
        class="flex flex-col justify-between py-24 text-lg gap-y-4 w-1/2
        max-[1052px]:w-full max-[1052px]:pt-6">
        <h1 class="text-3xl font-bold mb-2">¿Cuándo te gustaria venir?</h1>
        <p class="mb-4 text-lg">Ten en cuenta que en algunos casos esta visita sera para un reconocimiento inicial con el doctor.</p>
        <label class="flex flex-col">
          Nombre y apellidos
          <input
            class="border-zinc-200 border-2 bg-transparent my-2 py-2 px-3 text-zinc-900
            placeholder:text-zinc-600
            dark:placeholder:text-zinc-400 dark:text-zinc-50
            focus:outline-none focus:rounded-none focus:border-main"
            id="name"
            placeholder="Alex Sanchez"
            type="text"
            required>
        </label>
        <label class="flex flex-col">
          Correo electrónico
          <input
            class="bg-transparent border-zinc-200 border-2 my-2 py-2 px-3 text-zinc-900
          placeholder:text-zinc-600
            dark:placeholder:text-zinc-400 dark:text-zinc-50
            focus:outline-none focus:rounded-none focus:border-main"
            id="email"
            placeholder="alexsanchez@gmail.com"
            type="email"
            required> 
        </label>
        <label class="flex flex-col">
          Teléfono
          <input
            class="bg-transparent border-zinc-200 border-2 mb-2 py-2 px-3 text-zinc-900
          placeholder:text-zinc-600
            dark:placeholder:text-zinc-400 dark:text-zinc-50
            focus:outline-none focus:rounded-none focus:border-main"
            id="phone"
            placeholder="682 456 141"
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
            type="date"
            required>
        </label>
        <label for="">
          Hora
          <select
            class="bg-transparent border-zinc-200 border-2 mb-2 p-2 text-zinc-600 flex flex-col
            dark:text-slate-50 *:text-slate-500
            
            focus:outline-none focus:rounded-none focus:border-main"
            name=""
            id="hour"
            required>
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
                <option value="null">Escoge otra día</option>
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
            name=""
            id="treatment">
            @for (treatment of treatments; track $index) {
              <option class="dark:text-slate-500" value="{{treatment.slug}}">{{treatment.name}}</option>
            }
          </select>
        </label>
        <label class="flex items-center gap-x-2">
          <input
            class="accent-main w-5 h-5
            focus:outline-main"
            type="checkbox"
            name=""
            id=""
            required>
          <p>He leido y acepto la <a class="text-main underline underline-offset-2" href="politica-privacidad">política de privacidad.</a></p>
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
    private route: ActivatedRoute) {}

  day = "friday";
  object:any
  treatment:any
  treatmentSlug!: string | null

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
      this.treatment = TreatmentList.find((item) => item.slug == this.treatmentSlug)      
      
      // Check if slug exists
      if(this.treatment == null){
        this.router.navigateByUrl("/cita-previa")
      } else {
        if (typeof document !== "undefined"){
          console.log(numDays(year, month))
          const select:any = document.getElementById("treatment")
          select.value = this.treatment.slug
          console.log(select)
        }
      }
    })

    const weekdays = {
      monday: 1,
      tuesday: 2,
      wednesday: 3,
      thursday: 4,
      friday: 5,
      saturday: 6,
      sunday: 0
    }

    const date = new Date
    const year = date.getFullYear()
    const month = date.getMonth()
    const numDays= (year:number, month:number) => new Date(year, month, 0).getDate()
    if (typeof document !== "undefined"){
      console.log(numDays(year, month))
    }
    

  }
}
