import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

@Component({
  selector: 'home-instagram',
  standalone: true,
  imports: [],
  template: `
    <section class="mt-6 relative py-8">
      <div class="absolute w-screen h-full bg-[#c1d5e339] left-[50%] translate-x-[-50%] -z-10 top-0"></div>
      <p class="flex justify-center items-center gap-x-4 font-medium">
        <a href="https://instagram.com/meyndeestetica" target="_blank">
          <i class="pt-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
              <title>Logo de Instagram</title>
            </svg>
          </i>
        </a>
        <a href="https://instagram.com/meyndeestetica" target="_blank">
          &#64;meyndeestetica
        </a>
      </p>
      <div class="splide mt-12" id="slider3" aria-label="Reviews y posts de Instagram">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <a href="https://www.instagram.com/meyndeestetica/p/C5RmBvRI94V/" target="_blank">
                <picture>
                  <source
                    srcset="assets/imgs/carrusel-reviews/review1-512x.avif"
                    type="image/avif">
                  <source
                    srcset="assets/imgs/carrusel-reviews/review1-512x.webp"
                    type="image/webp">
                  <img
                    class="aspect-square w-full object-cover hover:contrast-75 transition-all"
                    src="assets/imgs/carrusel-reviews/review1-512x.jpg"
                    alt="Una review positiva sobre un tratamiento con ácido hialurónico"
                    type="image/jpeg">
                </picture>
              </a>
            </li>
            <li class="splide__slide">
              <a href="https://www.instagram.com/meyndeestetica/p/C5j07lyIwvu/" target="_blank">
                <picture>
                  <source
                    srcset="assets/imgs/carrusel-reviews/antes-despues1-512x.avif"
                    type="image/avif">
                  <source
                    srcset="assets/imgs/carrusel-reviews/antes-despues1-512x.webp"
                    type="image/webp">
                  <img
                    class="aspect-square w-full object-cover hover:contrast-75 transition-all"
                    src="assets/imgs/carrusel-reviews/antes-despues1-512x.jpg"
                    alt="Antes y después de una rinomodelación"
                    type="image/jpeg">
                </picture>
              </a>
            </li>
            <li class="splide__slide">
              <a href="assets/imgs/carrusel-reviews/review2-1024x.jpg">
                <picture>
                  <source
                    srcset="assets/imgs/carrusel-reviews/review2-512x.avif"
                    type="image/avif">
                  <source
                    srcset="assets/imgs/carrusel-reviews/review2-512x.webp"
                    type="image/webp">
                  <img
                    class="aspect-square w-full object-cover hover:contrast-75 transition-all"
                    src="assets/imgs/carrusel-reviews/review2-512x.jpg"
                    alt="Una review positiva sobre un tratamiento para verrugas"
                    type="image/jpeg">
                </picture>
              </a>
            </li>
            <li class="splide__slide">
              <a href="https://www.instagram.com/meyndeestetica/p/C4tJd03IWdN/" target="_blank">
                <picture>
                  <source
                    srcset="assets/imgs/carrusel-reviews/antes-despues2-512x.avif"
                    type="image/avif">
                  <source
                    srcset="assets/imgs/carrusel-reviews/antes-despues2-512x.webp"
                    type="image/webp">
                  <img
                    class="aspect-square w-full object-cover hover:contrast-75 transition-all "
                    src="assets/imgs/carrusel-reviews/antes-despues2-512x.jpg"
                    alt="Antes y después de un relleno de labios con ácido hialurónico"
                    type="image/jpeg">
                </picture>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class HomeInstagramComponent implements OnInit {
  ngOnInit(): void {
    new Splide( '#slider3', {
      type: "loop",
      gap: "1rem",
      perMove: 1,
      perPage: 4,
      rewindByDrag: true,
      pagination: false,
      breakpoints: {
        1000: {
          perPage: 4
        },
        960: {
          perPage: 3
        },
        800: {
          perPage: 2
        },
        600: {
          perPage: 1
        }
      }
    } ).mount();
  }
}
