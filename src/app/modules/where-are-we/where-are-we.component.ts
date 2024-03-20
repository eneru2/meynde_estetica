import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-where-are-we',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl font-bold">Dónde estamos</h1>
    <div class="mt-4 overflow-hidden max-md:w-full">
      <img
        class="filter grayscale-[55%] max-md:w-full max-md:h-full object-cover max-md:scale-[1.75]"
        src="assets/imgs/map.png"
        alt="" />
    </div>
    <p class="mt-4">
      Nos encontramos en el barrio de Gràcia, Barcelona.
      Estamos en la calle Mare de Deu de la Salut, 78, planta 3 puerta D. Para entrar hay que dar la vuelta al edificio
      para entrar por la puerta principal.
      <br>
      <br>
      Los transportes públicos cercanos al centro son los siguientes:
    </p>
    <ul>
      <li>Buses: 24, D40, H6, 116, 93, V21</li>
      <li>Metro: Alfons X de la <span class="text-yellow-600">L4</span></li>
    </ul>
  `,  
})
export class WhereAreWeComponent {
  constructor(private titleService:Title){
    titleService.setTitle("Dónde estamos")
  }
}
