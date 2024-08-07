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
      src="imagenes/hero-sobre-nosotros-1920x.jpg"
      alt=""
      class="absolute top-0 left-0 w-screen h-[80vh] object-cover filter brightness-50 z-[-1]
       max-md:h-[60vh]">
    <h1
      class="text-zinc-50 text-6xl mt-[calc(65vh-10rem)] uppercase
      max-[960px]:mt-[calc(80vh-5.5rem*2)]
      max-md:text-4xl max-md:mt-[calc(60vh-5.5rem*2)]">Sobre nosotros</h1>
    <div
      class="px-36 mt-[15vh] w-full
      max-[960px]:mt-[9vh] max-[960px]:px-0">
      <div class="flex items-center gap-x-16 max-[960px]:flex-col-reverse">
        <div class="py-24 flex flex-col w-[55%]
        max-[1280px]:w-full max-[1280px]:py-0">
          <h2 class="text-zinc-700 dark:text-slate-50 text-3xl mb-4 capitalize">Nuestra filosofia</h2>
          <p class="text-zinc-700 dark:text-slate-50">
          En el centro médico Meynde, nos esforzamos por acercar la medicina estética, haciendo este servicio más asequible y accesible para todos en el área de Barcelona. Nos enorgullece trabajar como una familia para lograr los resultados y la satisfacción de nuestros clientes. Nos encantaría tratarte como uno más de la familia.
          </p>
        </div>
        <picture class="w-[45%] aspect-[9/11] max-[1280px]:w-full max-[960px]:aspect-video">
          <source 
            srcset="imagenes/nuestra-filosofia-512x.avif"
            type="image/avif">
          <source
          srcset="imagenes/nuestra-filosofia-512x.webp"
          type="image/webp"
          >
          <img class="w-full max-[960px]:aspect-video object-cover brightness-75 filter
          max-md:mb-8" src="imagenes/nuestra-filosofia-512x.jpg" alt="">

        </picture>
       
      </div>
      <div class="flex flex-row-reverse items-center gap-x-16 mt-24 max-[960px]:flex-col-reverse">
        <div class="py-24 flex flex-col w-[55%]
        max-[960px]:w-full max-[960px]:py-0">
          <h2 class="text-zinc-700 dark:text-slate-50 text-2xl capitalize">Dr. Mezones</h2>
          <h3 class="text-xl mb-4 font-bold">Especialista en medicina estética y del deporte</h3>
          <p class="text-zinc-700 dark:text-slate-50">
            El doctor Mezones es un destacado profesional con más de 25 años de
            experiencia en el campo médico, reconocido con múltiples premios a
            lo largo de su carrera. En la última década ha enfocado su
            práctica en la medicina estética, donde ha demostrado un compromiso
            excepcional con la excelencia y ha ganado la confianza de numerosos
            clientes satisfechos gracias a su habilidad y dedicación.
          </p>
        </div>
        <picture class="w-[45%] max-[960px]:w-[75%] max-[480px]:w-full">
          <source
            srcset="imagenes/equipo/jesus/jesus-768x.avif"
            type="image/avif">
          <source
            srcset="imagenes/equipo/jesus/jesus-768x.webp"
            type="image/webp">
          <img
            class="aspect-[9/11] object-cover"
            src="imagenes/equipo/jesus/jesus-768x.webp"
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
            <!-- profession="Gestión ejecutiva"
            description="Claudia se unió a nosotros en 2021, ella lleva las cuentas y la gestión de la empresa."  -->
          <card
            name="Claudia"
            profession="Asistente del doctor"
            description="Claudia se unió a nosotros en 2021, ella realiza diversas tareas dentro de la empresa." 
            imgAlt="Foto de Claudia"
            avifSrc512x="imagenes/equipo/claudia/claudia-512x.avif"
            webpSrc512x="imagenes/equipo/claudia/claudia-512x.webp"
            jpgSrc512x="imagenes/equipo/claudia/claudia-512x.jpg"
            avifSrc768x="imagenes/equipo/claudia/claudia-768x.avif"
            webpSrc768x="imagenes/equipo/claudia/claudia-768x.webp"
            jpgSrc768x="imagenes/equipo/claudia/claudia-768x.jpg"/>
          <card
            name="Esther"
            profession="Medicina"
            description="Esther es una de las integrante más reciente de Meynde. Es muy divertida, y anima a todos le anima su compañia. Ella se encarga de hacer reconocimientos médicos."
            imgAlt="Foto de Esther"
            avifSrc512x="imagenes/equipo/esther/esther-512x.avif"
            webpSrc512x="imagenes/equipo/esther/esther-512x.webp"
            jpgSrc512x="imagenes/equipo/esther/esther-512x.jpg"
            avifSrc768x="imagenes/equipo/esther/esther-768x.avif"
            webpSrc768x="imagenes/equipo/esther/esther-768x.webp"
            jpgSrc768x="imagenes/equipo/esther/esther-768x.jpg"/>
          <card
            name="Alejandro"
            profession="Psicólogia"
            description="Alejandro lleva en Meynde desde 2018. Es el integrante más antiguo del equipo. El es psicólogo y se encarga de realizar pruebas en el centro."
            imgAlt="Foto de Alejandro"
            avifSrc512x="imagenes/equipo/alejandro/alejandro-512x.avif"
            webpSrc512x="imagenes/equipo/alejandro/alejandro-512x.webp"
            jpgSrc512x="imagenes/equipo/alejandro/alejandro-512x.jpg"
            avifSrc768x="imagenes/equipo/alejandro/alejandro-768x.avif"
            webpSrc768x="imagenes/equipo/alejandro/alejandro-768x.webp"
            jpgSrc768x="imagenes/equipo/alejandro/alejandro-768x.jpg"/>
          <card
            name="Agustina"
            profession="Psicólogia"
            description="Agustina es la más reciente de nuestras incorporaciones ella se unió a nosotros este 2024. Ella es psicólogo y se realiza reconocimientos médicos."
            imgAlt="Foto de Alejandro"
            avifSrc512x="imagenes/equipo/agustina/agustina-512x.avif"
            webpSrc512x="imagenes/equipo/agustina/agustina-512x.webp"
            jpgSrc512x="imagenes/equipo/agustina/agustina-512x.jpg"
            avifSrc768x="imagenes/equipo/agustina/agustina-768x.avif"
            webpSrc768x="imagenes/equipo/agustina/agustina-768x.webp"
            jpgSrc768x="imagenes/equipo/agustina/agustina-768x.jpg"/>
          <card
            name="David"
            profession="Reservas y Recepción"
            description="David se unió al equipo en 2021. El tiene experiencias anteriores al teléfono y ahora mismo compagina el trabajo con la carrera de psicologia."
            imgAlt="Foto de David"
            avifSrc512x="imagenes/equipo/david/david-512x.avif"
            webpSrc512x="imagenes/equipo/david/david-512x.webp"
            jpgSrc512x="imagenes/equipo/david/david-512x.jpg"
            avifSrc768x="imagenes/equipo/david/david-768x.avif"
            webpSrc768x="imagenes/equipo/david/david-768x.webp"
            jpgSrc768x="imagenes/equipo/david/david-768x.jpg"/>
            <!-- profession="Gestión de Recepción" -->
          <card
            name="Dámaris"
            profession="Reservas y Recepción"
            description="Dámaris se unió a nosotros en septiembre de 2020. Su trayectoria incluye una formación académica con bachillerato y un grado superior en fabricación de productos farmacéuticos. Ella dedica la mayor parte de su tiempo a hacer trabajo voluntario. Su cosa favorita es la excelente relación entre compañeros."
            imgAlt="Foto de Dámaris"
            avifSrc512x="imagenes/equipo/damaris/damaris-512x.avif"
            webpSrc512x="imagenes/equipo/damaris/damaris-512x.webp"
            jpgSrc512x="imagenes/equipo/damaris/damaris-512x.jpg"
            avifSrc768x="imagenes/equipo/damaris/damaris-768x.avif"
            webpSrc768x="imagenes/equipo/damaris/damaris-768x.webp"
            jpgSrc768x="imagenes/equipo/damaris/damaris-768x.jpg"/>
          <card
            name="Andrés"
            profession="Diseñador web y marketing"
            description="Andrés se unio al equipo en 2022 es el diseñador web y el encargado de marketing. El estudió marketing y publicidad y ahora se encarga de las redes sociales del centro."
            imgAlt="Foto de Andrés"
            avifSrc512x="imagenes/equipo/andres/andres-512x.avif"
            webpSrc512x="imagenes/equipo/andres/andres-512x.webp"
            jpgSrc512x="imagenes/equipo/andres/andres-512x.jpg"
            avifSrc768x="imagenes/equipo/andres/andres-768x.avif"
            webpSrc768x="imagenes/equipo/andres/andres-768x.webp"
            jpgSrc768x="imagenes/equipo/andres/andres-768x.jpg"/>
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
