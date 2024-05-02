import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-7xl w-8/12 mt-8 mb-4 max-md:text-5xl">
      <span class="text-light-main">Gracias</span> por contactarnos
    </h1>
    <p class="text-2xl mb-2">En breve te confirmaremos el horario de tu cita por e-mail o mensaje de texto</p>
    <p class="text-2xl">Vuelve a la <a class="text-light-main underline hover:text-main transition-all" href="/">página de inicio</a></p>
  `,
  styles: ``
})
export class ThankYouComponent {

}
