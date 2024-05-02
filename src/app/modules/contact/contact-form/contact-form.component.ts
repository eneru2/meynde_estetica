import { Component } from '@angular/core';
@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [],
  template: `  
    <div class="flex items-center max-lg:flex-col-reverse gap-x-8 max-lg:gap-y-8">
      <div class="w-1/2 max-lg:w-full">
        <h2 class="text-2xl font-bold mb-4">Envíanos tu mensaje</h2>
        <form 
          class="flex flex-col w-full text-lg"
          method="post"
          action="/contacto.php">
          <label class="flex flex-col">
            Nombre y apellidos
            <input
              class="border-zinc-200 border-2 bg-transparent mt-1 mb-2 py-2 px-3 text-zinc-900
              placeholder:text-zinc-600
              dark:placeholder:text-zinc-400 dark:text-zinc-50
              focus:outline-none focus:rounded-none focus:border-main"
              id="name"
              name="name"
              placeholder="Alex Sanchez"
              type="text"
              required>
          </label>
          <label class="flex flex-col">
            Correo electrónico
            <input
              class="bg-transparent border-zinc-201 border-2 mt-1 mb-2 py-2 px-3 text-zinc-900
            placeholder:text-zinc-600
            dark:placeholder:text-zinc-400 dark:text-zinc-50
              focus:outline-none focus:rounded-none focus:border-main"
              id="email"
              name="email"
              placeholder="alexsanchez@gmail.com"
              type="email"
              required> 
          </label>
          <label class="flex flex-col">
            Teléfono
            <input
              class="bg-transparent border-zinc-200 border-2 mt-1 mb-2 py-2 px-3 text-zinc-900
            placeholder:text-zinc-600
            dark:placeholder:text-zinc-400 dark:text-zinc-50
              focus:outline-none focus:rounded-none focus:border-main"
              id="phone"
              name="phone"
              placeholder="682 456 141"
              type="text"
              required>
          </label>
          <label>
            Mensaje
            <textarea
              class="bg-transparent border-zinc-200 border-2 mt-1 mb-2 py-2 px-3 text-zinc-900 resize-none w-full
            placeholder:text-zinc-600
            dark:placeholder:text-zinc-400 dark:text-zinc-50
              focus:outline-none focus:rounded-none focus:border-main"
              name=""
              rows="10"
              id="message"
              name="message"
              placeholder="Queria saber un poco más sobre el tratamiento de ácido hialurónico, que no me quedo claro el..."></textarea>
          </label>
          <label class="flex items-center gap-x-2 mb-2">
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
            class="bg-main hover:bg-light-main text-white self-end px-5 py-2 text-lg transition-all
            dark:shadow-[0_0_0_.125rem_white]
            focus:outline-none focus:rounded-none focus:shadow-[0_0_0_.125rem_black]">Enviar</button>
        </form>
      </div>
      <div class="flex flex-col w-1/2 max-lg:w-full">
        <div style="width: 100%">
          <iframe                      
            class="w-full h-full aspect-square max-lg:aspect-auto max-lg:h-[600px]
            max-md:aspect-square max-md:h-auto max-[360px]:aspect-video"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            loading="lazy"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Centro%20M%C3%A9dico%20MEYNDE+(Centro%20M%C3%A9dico%20MEYNDE)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>         
          <!-- <img class="w-full mb-4" src="imagenes/mapa.svg" alt="Mapa de la zona en la que se situa el centro médico">        
          <a
          class="absolute top-4 right-4 bg-slate-50 text-light-main font-semibold px-2 py-1.5 shadow-sm
          hover:text-main transition-all"
          href="https://www.google.com/maps/place/Centro+M%C3%A9dico+MEYNDE/@41.4101496,2.159784,16.25z/data=!3m1!5s0x12a4a296d85b67b7:0xf303457373a34ede!4m6!3m5!1s0x12a4a2b0d2629421:0x143c5bc9501a338e!8m2!3d41.4128042!4d2.1595676!16s%2Fg%2F11g8w5ky_k?entry=ttu"
          target="_blank">
            Ver en Maps
          </a> -->
        
        <p class="text-lg mt-2 max-lg:mt-4">Nos encuentras en la parte posterior del edificio, que da a Mare De Dèu de Montserrat: <b>C/ Mare de Dèu de la Salut 78, 3-D, Barcelona, CP 08024.</b> Estamos en el barrio de Gracia en Barcelona</p>
    </div>    
  `,
  styles: ``
})
export class ContactFormComponent {
  
}
