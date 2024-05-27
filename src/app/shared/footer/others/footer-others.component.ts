import { Component } from '@angular/core';

@Component({
  selector: 'footer-others',
  standalone: true,
  imports: [],
  template: `
    <figure>
      <figcaption class="font-bold text-lg">Otros</figcaption>
      <ul class="flex flex-col gap-y-2 mt-1.5">
        <!-- <li><a href="/blog">Blog</a></li> -->
        <li><a href="/sobre-nosotros#equipo">Equipo</a></li>        
      </ul>
    </figure>
  `,
  styles: ``
})
export class FooterOthersComponent {

}
