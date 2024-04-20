import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderService } from '../../services/header.service';
import { AboutUsCardComponent } from './about-us-card/about-us-card.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutUsCardComponent],
  template: `
    <img
      src="assets/imgs/hero-sobre-nosotros-1920x.jpg"
      alt=""
      class="absolute top-0 left-0 w-screen h-[80vh] object-cover filter brightness-50 z-[-1]
       max-md:h-[60vh]">
    <h1
      class="text-zinc-50 text-6xl mt-[calc(65vh-10rem)] uppercase
      max-[960px]:mt-[calc(80vh-5.5rem*2)]
      max-md:text-4xl max-md:mt-[calc(60vh-5.5rem*2)]">Sobre nosotros</h1>
    <div
      class="px-36 mt-[15vh] w-full
       max-[960px]:mt-[18vh] max-[960px]:px-0 max-md:mt-[calc(15vh)]">
      <div class="flex items-center gap-x-16 max-[960px]:flex-col-reverse">
        <div class="py-24 flex flex-col w-[55%]
        max-[1280px]:w-full max-[1280px]:py-0">
          <h2 class="text-zinc-700 dark:text-slate-50 text-3xl mb-4 capitalize">Nuestra filosofia</h2>
          <p class="text-zinc-700 dark:text-slate-50">
          En el centro médico Meynde, nos esforzamos por acercar la medicina estética, haciendo este servicio más asequible y accesible para todos en el área de Barcelona. Nos enorgullece trabajar como una familia para lograr los resultados y la satisfacción de nuestros clientes. Nos encantaría tratarte como uno más de la familia.
          </p>
        </div>
        <img
          class="w-[45%] aspect-[9/11] object-cover brightness-75 filter
          max-[960px]:aspect-video max-[960px]:w-full
          max-md:mb-8"
          src="assets/imgs/nuestra-filosofia.jpg"
          alt="">
      </div>
      <div class="flex flex-row-reverse items-center gap-x-16 mt-24 max-[960px]:flex-col-reverse">
        <div class="py-24 flex flex-col w-[55%]
        max-[960px]:w-full max-[960px]:py-0">
          <h2 class="text-zinc-700 dark:text-slate-50 text-2xl capitalize">Dr. Mezones</h2>
          <h3 class="text-xl mb-4 font-bold">Especialista en medicina estética y del deporte</h3>
          <p class="text-zinc-700 dark:text-slate-50">
            En el centro médico Meynde, nos esforzamos por acercar la medicina estética haciendo más asequible y accesible este servicio para todos en el área de Barcelona
            Nos enorgullecemos de trabajar como una familia para conseguir los resultados y satisfacción de nuestros clientes. Y nos encantaria tratar como uno mas de la familia.

            En el centro médico Meynde queremos acercar la medicina estética ofreciendo precios más asequibles y accesibles en el area de Barcelona.
            Estamos consiguiendos esto cada dia trabajando como una familia, familiar que nos permite mantener precios muy competitivos.
          </p>
        </div>
        <picture class="w-[45%] max-[960px]:w-[75%] max-[480px]:w-full">
          <source
            srcset="assets/imgs/equipo/jesus/jesus-768x.avif"
            type="image/avif">
          <source
            srcset="assets/imgs/equipo/jesus/jesus-768x.webp"
            type="image/webp">
          <img
            class="aspect-[9/11] object-cover"
            src="assets/imgs/equipo/jesus/jesus-768x.webp"
            alt="Foto del Dr. Mezones"
            type="image/jpeg">
        </picture>
      </div>
      <h2
        id="equipo"
        class="mt-24 text-3xl max-md:mt-8">Conoce a nuestro equipo</h2>
        <div
          class="flex flex-wrap justify-around gap-x-4 gap-y-12 mt-10
          max-lg:mt-6 max-md:gap-y-8">
          <card
            name="Claudia"
            profession="Gestión ejecutiva"
            description="Claudia se unió a nosotros en 2021, ella a pivotado entre diversos roles dentro de Meynde. Desde la recepción a esteticien."
            imgAlt="Foto de Claudia"
            avifSrc512x="assets/imgs/equipo/claudia/claudia-512x.avif"
            webpSrc512x="assets/imgs/equipo/claudia/claudia-512x.webp"
            jpgSrc512x="assets/imgs/equipo/claudia/claudia-512x.jpg"
            avifSrc768x="assets/imgs/equipo/claudia/claudia-768x.avif"
            webpSrc768x="assets/imgs/equipo/claudia/claudia-768x.webp"
            jpgSrc768x="assets/imgs/equipo/claudia/claudia-768x.jpg"/>
          <card
            name="Esther"
            profession="Medicina"
            description="Esther es la integrante más reciente de Meynde. Es muy animada y divertida, a todos le anima su compañia. Ella se encarga de hacer reconocimientos médicos."
            imgAlt="Foto de Esther"
            avifSrc512x="assets/imgs/equipo/esther/esther-512x.avif"
            webpSrc512x="assets/imgs/equipo/esther/esther-512x.webp"
            jpgSrc512x="assets/imgs/equipo/esther/esther-512x.jpg"
            avifSrc768x="assets/imgs/equipo/esther/esther-768x.avif"
            webpSrc768x="assets/imgs/equipo/esther/esther-768x.webp"
            jpgSrc768x="assets/imgs/equipo/esther/esther-768x.jpg"/>
          <card
            name="Alejandro"
            profession="Psicólogia"
            description="Alejandro lleva en Meynde desde 2018. Es el integrante más antiguo del equipo. El es psicólogo y se encarga de realizar pruebas en el centro."
            imgAlt="Foto de Alejandro"
            avifSrc512x="assets/imgs/equipo/alejandro/alejandro-512x.avif"
            webpSrc512x="assets/imgs/equipo/alejandro/alejandro-512x.webp"
            jpgSrc512x="assets/imgs/equipo/alejandro/alejandro-512x.jpg"
            avifSrc768x="assets/imgs/equipo/alejandro/alejandro-768x.avif"
            webpSrc768x="assets/imgs/equipo/alejandro/alejandro-768x.webp"
            jpgSrc768x="assets/imgs/equipo/alejandro/alejandro-768x.jpg"/>
          <card
            name="David"
            profession="Reservas y Recepción"
            description="David se unió al equipo en 2021. El tiene experiencias anteriores al teléfono y ahora mismo compagina el trabajo con la carrera de psicologia."
            imgAlt="Foto de David"
            avifSrc512x="assets/imgs/equipo/david/david-512x.avif"
            webpSrc512x="assets/imgs/equipo/david/david-512x.webp"
            jpgSrc512x="assets/imgs/equipo/david/david-512x.jpg"
            avifSrc768x="assets/imgs/equipo/david/david-768x.avif"
            webpSrc768x="assets/imgs/equipo/david/david-768x.webp"
            jpgSrc768x="assets/imgs/equipo/david/david-768x.jpg"/>
          <card
            name="Dámaris"
            profession="Gestión de Recepción"
            description="Dámaris se unió a nosotros en septiembre de 2020. Su trayectoria incluye una formación académica con bachillerato y un grado superior en fabricación de productos farmacéuticos. Ella dedica la mayor parte de su tiempo a hacer trabajo voluntario. Su cosa favorita es la excelente relación entre compañeros."
            imgAlt="Foto de Dámaris"
            avifSrc512x="assets/imgs/equipo/damaris/damaris-512x.avif"
            webpSrc512x="assets/imgs/equipo/damaris/damaris-512x.webp"
            jpgSrc512x="assets/imgs/equipo/damaris/damaris-512x.jpg"
            avifSrc768x="assets/imgs/equipo/damaris/damaris-768x.avif"
            webpSrc768x="assets/imgs/equipo/damaris/damaris-768x.webp"
            jpgSrc768x="assets/imgs/equipo/damaris/damaris-768x.jpg"/>
          <card
            name="Andrés"
            profession="Diseñador web y marketing"
            description="Andrés se unio al equipo en 2022 es el diseñador web y el encargado de marketing. El estudió marketing y publicidad y ahora se encarga de las redes sociales del centro."
            imgAlt="Foto de Andrés"
            avifSrc512x="assets/imgs/equipo/andres/andres-512x.avif"
            webpSrc512x="assets/imgs/equipo/andres/andres-512x.webp"
            jpgSrc512x="assets/imgs/equipo/andres/andres-512x.jpg"
            avifSrc768x="assets/imgs/equipo/andres/andres-768x.avif"
            webpSrc768x="assets/imgs/equipo/andres/andres-768x.webp"
            jpgSrc768x="assets/imgs/equipo/andres/andres-768x.jpg"/>
        </div>
  `,
  styles: ``
})
export class AboutUsComponent {
  constructor(public headerService: HeaderService, private titleService:Title) {
    this.titleService.setTitle("Sobre nosotros")
    this.headerService.transparentBg = true
  }
}
