import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
// TODO
// Incluir limpieza facial en el carrusel
// Niquelar tratamientos de la página principal
// Sobre nosotros dark
// Chatgpt Dr.Mezones
// Actualizar información de David y alistar todas
// OPCIONALES:
//  Estilizar contacto
@Component({
  selector: 'home-treatments-carousel',
  standalone: true,
  imports: [],
  template: `
    <section class="splide mt-8 max-[960px]:mt-4 max-md:mt-4" id="slider1" aria-label="Tratamientos destacados">
      <h2 class="mb-4 uppercase text-2xl">Nuestros tratamientos más populares</h2>
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
            <a href="/tratamientos/acido-hialuronico">
              <picture>
                <source
                  srcset="assets/imgs/carrusel-tratamientos/relleno-labios-512x.avif"
                  type="image/avif">
                <source
                  srcset="assets/imgs/carrusel-tratamientos/relleno-labios-512x.webp"
                  type="image/webp">
                <img
                  class="aspect-video w-full object-cover object-[45%_20%] brightness-[65%]"
                  src="assets/imgs/carrusel-tratamientos/relleno-labios-512x.jpg"
                  alt="Ácido hialurónico"
                  type="image/jpeg">
              </picture>
            </a>
            <p class="text-md text-slate-500 mt-3 mb-1.5">facial</p>
            <p class=" text-lg font-normal capitalize">
              <a href="/tratamientos/acido-hialuronico">Ácido hialurónico</a>
            </p>
          </li>
          <li class="splide__slide">
            <a href="/tratamientos/relajante-muscular">
              <picture>
                <source
                  srcset="assets/imgs/carrusel-tratamientos/relajante-muscular-512x.avif"
                  type="image/avif">
                <source
                  srcset="assets/imgs/carrusel-tratamientos/relajante-muscular-512x.webp"
                  type="image/webp">
                <img
                  class="aspect-video w-full object-cover scale-x-[-100%] brightness-[65%]"
                  src="assets/imgs/carrusel-tratamientos/relajante-muscular-512x.jpg"
                  alt="Relajante muscular"
                  type="image/jpeg">
              </picture>
            </a>
            <p class="text-md text-slate-500 mt-3 mb-1.5">facial</p>
            <p class="text-lg font-normal capitalize">
              <a href="/tratamientos/relajante-muscular">Relajante muscular</a>
            </p>
          </li>
          <li class="splide__slide">
            <a href="/tratamientos/depilacion-laser">
              <picture>
                <source
                  srcset="assets/imgs/carrusel-tratamientos/depilacion-laser-512x.avif"
                  type="image/avif">
                <source
                  srcset="assets/imgs/carrusel-tratamientos/depilacion-laser-512x.webp"
                  type="image/webp">
                <img
                  class="w-full aspect-video object-cover brightness-[65%]"
                  src="assets/imgs/carrusel-tratamientos/depilacion-laser-512x.jpg"
                  alt="Depilación laser"
                  type="image/jpeg">
              </picture>
            </a>
            <p class="text-md text-slate-500 mt-3 mb-1.5">corporal</p>
            <p class="text-lg font-normal capitalize">
              <a href="/tratamientos/depilacion-laser">Depilación con laser</a>
            </p>
          </li>
          <li class="splide__slide">
            <a href="/tratamientos/relleno-labios">
            <picture>
                <source
                  srcset="assets/imgs/carrusel-tratamientos/relleno-labios-512x.avif"
                  type="image/avif">
                <source
                  srcset="assets/imgs/carrusel-tratamientos/relleno-labios-512x.webp"
                  type="image/webp">
                <img
                  class="aspect-video w-full object-cover object-[45%_20%] brightness-[65%]"
                  src="assets/imgs/carrusel-tratamientos/relleno-labios-512x.jpg"
                  alt="Ácido hialurónico"
                  type="image/jpeg">
              </picture>
            </a>
            <p class="text-md text-slate-500 mt-3 mb-1.5">facial</p>
            <p class=" text-lg font-normal capitalize">
              <a href="/tratamientos/relleno-labios">Aumento de labios</a>
            </p>
          </li>
          <li class="splide__slide">
            <a href="/tratamientos/limpieza-facial">
              <picture>
                <source
                  srcset="assets/imgs/carrusel-tratamientos/eliminacion-verrugas-lunares-512x.avif"
                  type="image/avif">
                <source
                  srcset="assets/imgs/carrusel-tratamientos/eliminacion-verrugas-lunares-512x.webp"
                  type="image/webp">
                <img
                  class="aspect-video w-full object-cover object-[45%_20%] brightness-[65%]"
                  src="assets/imgs/carrusel-tratamientos/eliminacion-verrugas-lunares-512x.jpg"
                  alt="Eliminación de verrugas, lunares y puntos de rubí"
                  type="image/jpeg">
              </picture>
            </a>
            <p class="text-md text-slate-500 mt-3 mb-1.5">facial</p>
            <p class="text-lg font-normal capitalize">
              <a href="/tratamientos/limpieza-facial">Limpieza facial</a>
            </p>
          </li>
          <li class="splide__slide">
            <a href="">
              <picture>
                <source
                  srcset="assets/imgs/carrusel-tratamientos/eliminacion-verrugas-lunares-512x.avif"
                  type="image/avif">
                <source
                  srcset="assets/imgs/carrusel-tratamientos/eliminacion-verrugas-lunares-512x.webp"
                  type="image/webp">
                <img
                  class="aspect-video w-full object-cover object-[45%_20%] brightness-[65%]"
                  src="assets/imgs/carrusel-tratamientos/eliminacion-verrugas-lunares-512x.jpg"
                  alt="Eliminación de verrugas, lunares y puntos de rubí"
                  type="image/jpeg">
              </picture>
            </a>
            <p class="text-md text-slate-500 mt-3 mb-1.5">facial</p>
            <p class="text-lg font-normal capitalize">
              <a href="">Eliminación verrugas, lunares y puntos rubí</a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  `,
  styles: ``
})
export class HomeTreatmentsCarouselComponent implements OnInit {
  ngOnInit(): void {
    new Splide( '#slider1', {
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
