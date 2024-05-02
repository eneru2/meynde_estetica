import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'home-offers-carousel',
  standalone: true,
  imports: [],
  template: `
    <section class="splide mt-12" id="slider2" aria-label="Ofertas y especiales">
      <h2 class="mb-4 uppercase text-2xl">Nuestras ofertas y especiales (Pronto)</h2>
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <a href="">
            <picture>
                <source
                  srcset="imagenes/carrusel-ofertas/primera-visita-512x.avif"
                  type="image/avif">                
                <source
                  srcset="imagenes/carrusel-ofertas/primera-visita-512x.webp"
                  type="image/webp">                
                <img
                  class="aspect-video w-full object-cover brightness-75"                
                  src="imagenes/carrusel-ofertas/primera-visita-512x.jpg"
                  alt="Profesional con una jeringuilla en la mano"
                  type="image/jpeg">
              </picture>
              <p class="text-lg font-normal capitalize mt-3">Primera visita</p>
            </a>
          </li>          
          <li class="splide__slide">
            <a href="">
              <picture>
                <source
                  srcset="imagenes/carrusel-ofertas/packs-combos-512x.avif"
                  type="image/avif">                
                <source
                  srcset="imagenes/carrusel-ofertas/packs-combos-512x.webp"
                  type="image/webp">                
                <img
                  class="aspect-video w-full object-cover brightness-75"                
                  src="imagenes/carrusel-ofertas/packs-combos-512x.jpg"
                  alt="Mujer teniendo un tratamiento de luz LED"
                  type="image/jpeg">
              </picture>
              <p class="text-lg font-normal capitalize mt-3">Packs y combos</p>
            </a>
          </li>          
          <li class="splide__slide">
            <a href="">
              <!-- style="object-view-box: inset(0% 10% 10% 10%);" -->
              <picture>
                <source
                  srcset="imagenes/carrusel-ofertas/tarjeta-regalo-meynde-512x.avif"
                  type="image/avif">                
                <source
                  srcset="imagenes/carrusel-ofertas/tarjeta-regalo-meynde-512x.webp"
                  type="image/webp">                
                <img
                  class="aspect-video w-full object-cover brightness-75"                
                  src="imagenes/carrusel-ofertas/tarjeta-regalo-meynde-512x.jpg"
                  alt="Tarjetas de regalo Meynde"
                  type="image/jpeg">
              </picture>
            </a>
            <p class="text-lg font-normal capitalize mt-3">Tarjetas regalo</p>            
          </li>          
        </ul>
      </div>
    </section>
  `,
  styles: ``
})
export class HomeOffersCarouselComponent implements OnInit {
  ngOnInit(): void {
    new Splide( '#slider2', {
      type: "loop",
      gap: "2rem",
      perMove: 1,
      perPage: 3,
      rewindByDrag: true,
      pagination: false,
      breakpoints: {
        1000: {
          perPage: 3
        },
        960: {
          perPage: 2
        },
        600: {
          perPage: 1
        },
        400: {
          perPage: 1
        }
      }
    } ).mount();
  }
}
