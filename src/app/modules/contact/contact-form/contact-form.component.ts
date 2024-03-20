import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [],
  template: `  
    <div class="flex items-center max-md:flex-col-reverse gap-x-8 max-md:gap-y-8">
      <div class="w-1/2 max-md:w-full">
        <h2 class="text-2xl font-bold mb-4">Envíanos tu mensaje</h2>
        <form class="flex flex-col w-full" action="">
          <input class="bg-zinc-100 mb-2 p-2 placeholder:text-zinc-600" type="text" placeholder="Nombre y apellidos">
          <input class="bg-zinc-100 my-2 p-2 placeholder:text-zinc-600" type="text" placeholder="Correo electrónico">
          <textarea class="bg-zinc-100 my-2 p-2 placeholder:text-zinc-600 resize-none" name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
          <button class="bg-main hover:bg-light-main text-white self-end px-5 py-2 text-lg transition-all">Enviar</button>
        </form>
      </div>
      <div class="flex flex-col w-1/2 max-md:w-full">
        <img class="w-full mb-4" src="assets/imgs/mapa.webp" alt="Mapa de la zona en la que se situa el centro médico">        
        <p>Carrer Mare de Deu de la Salut, 78, planta 3 puerta D</p>
    </div>    
  `,
  styles: ``
})
export class ContactFormComponent {

}
