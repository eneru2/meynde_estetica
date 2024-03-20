import { Component } from '@angular/core';

@Component({
  selector: 'footer-links',
  standalone: true,
  imports: [],
  template: `
    <figure>
      <figcaption class="font-bold text-lg">Links</figcaption>
      <ul class="flex flex-col gap-y-2 mt-1.5">
        <li><a href="/cita-previa">Cita previa</a></li>
        <li><a href="/tratamientos">Tratamientos</a></li>
        <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>    
    </figure>
  `,
  styles: ``
})
export class FooterLinksComponent {

}
