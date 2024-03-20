import { Component } from '@angular/core';

@Component({
  selector: 'information',
  standalone: true,
  imports: [],
  template: `
    <div 
      class="flex flex-col w-[25vw] min-w-96 p-7 shadow-lg bg-white 
      max-lg:w-full">
        <p class="uppercase mb-4">Centro Médico Meynde</p>
        <a 
          href="/contacto" 
          class="text-center bg-black text-zinc-100 uppercase font-semibold rounded-3xl py-2 px-1 mb-4">
          Contáctanos</a>
        <p class="mb-4">
        Medicina estética
        <br>
        Nos preocupamos por tu bienestar brindando 
        tratamientos accesibles y trato cercano.</p>
        <h2 class="text-xl mb-2">Localización</h2>
        <img class="mb-2" src="assets/imgs/mapa.webp" alt="Mapa">
        <p class="font-poppins self-end ">Carrer Mare de Deu de la Salut 78, 3D</p>
        <p class="mb-4 font-poppins self-end ">Gràcia, Barcelona 08024</p>
        <h2 class="text-xl">Horario</h2>
        <ul class="pl-5">
          <li class="flex justify-between items-center">
            <p class="before:content-['•'] before:text-3xl before:text-green-400 before:w-4 before:inline-block before:ml-4">
              Lunes:
            </p>
            <span>09:00-14:00 y 16:00-20:00</span>
          </li>
          <li class="flex justify-between items-center">
            <p class="before:content-['•'] before:text-3xl before:text-green-400 before:w-4 before:inline-block before:ml-4">
              Martes:
            </p>
            <span>09:00-14:00 y 16:00-20:00</span>
          </li>
          <li class="flex justify-between items-center">
            <p class="before:content-['•'] before:text-3xl before:text-green-400 before:w-4 before:inline-block before:ml-4">
              Miércoles:
            </p>
            <span>09:00-14:00 y 16:00-20:00</span>
          </li>
          <li class="flex justify-between items-center">
            <p class="before:content-['•'] before:text-3xl before:text-green-400 before:w-4 before:inline-block before:ml-4">
              Jueves:
            </p>
            <span>09:00-14:00 y 16:00-20:00</span>
          </li>
          <li class="flex justify-between items-center">
            <p class="before:content-['•'] before:text-3xl before:text-green-400 before:w-4 before:inline-block before:ml-4">
              Viernes:
            </p>
            <span>09:00-14:00 y 16:00-20:00</span>
          </li>
          <li class="flex justify-between items-center">
            <p class="before:content-['•'] before:text-3xl before:text-red-400 before:w-4 before:inline-block before:ml-4">
              Sábado:
            </p>
            <span>Cerrado</span>
          </li>
          <li class="flex justify-between items-center">
            <p class="before:content-['•'] before:text-3xl before:text-red-400 before:w-4 before:inline-block before:ml-4">
              Domingo:
            </p>
            <span>Cerrado</span>
          </li>
        </ul>
      </div>
  `,
  styles: ``
})
export class BookAppointmentInformationComponent {

}
