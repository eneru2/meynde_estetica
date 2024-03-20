import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  template: `
    <h1 class="text-3xl font-bold mb-8">Contacto</h1>
    <div class="flex flex-wrap justify-between mb-16 gap-x-32 gap-y-10 max-md:flex-col max-md:mb-8">
      <div>
        <h2 class="uppercase font-bold">Horarios</h2>
        <p class=" text-gray-500 mt-4 mb-2">Lunes a viernes:</p>
        <p class="text-gray-500">09:00-14:00 y 16:00-20:00</p>
      </div>
      <div>
        <h2 class="uppercase font-bold">Teléfonos</h2>
        <p class=" text-gray-500 mt-4 mb-2">Fijos: +34 932 424 731 - +34 931 053 739</p>
        <p class="text-gray-500">Whatsapp: +34 635 159 431</p>
      </div>
      <div>
        <h2 class="uppercase font-bold">Correo</h2>
        <p class=" text-gray-500 mt-4 mb-2">contacto&#64;meynde.com</p>
      </div>
    </div>
    <contact-form></contact-form>
    <h2 class="text-2xl font-bold mb-4">Localización</h2>
    <div>
      <p>        
        Nos encontramos en el barrio de Gràcia, Barcelona. Hay que dar la vuelta al edificio para entrar por la puerta principal.
        Los transportes públicos cercanos al centro son los siguientes:
      </p>
      <ul class="mt-4">
        <li>Buses: 24, D40, H6, 116, 93, V21</li>
        <li>Metro: Alfons X de la <span class="text-yellow-600">L4</span></li>
      </ul>
    </div>
  `,
  styles: ``
})
export class ContactComponent {

}
