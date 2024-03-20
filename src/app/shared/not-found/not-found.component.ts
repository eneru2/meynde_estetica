import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-7xl w-8/12 mb-4">
      <span class="text-light-main">Lo sentimos</span>, esta página no esta disponible
    </h1>
    <p class="text-2xl mb-2">No pudimos encontrar la página que estabas buscando</p>
    <p class="text-2xl">Vuelve a la <a class="text-light-main underline hover:text-main transition-all" href="/">página de inicio</a></p>
  `,
  styles: `main {

  }`
})
export class NotFoundComponent {
  constructor(headerService: HeaderService){
    headerService.transparentBg = false
  }
}
