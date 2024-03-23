import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <video
      loop
      id="video"
      muted
      poster="assets/imgs/hero-cover.webp"
      disablepictureinpicture
      class="top-0 left-0 absolute w-screen h-screen object-cover brightness-50 z-[-1] pointer-events-none
      max-[960px]:h-[85vh]">
      <source
        src="assets/videos/hero-video.avif"/>
      <source
        src="assets/videos/hero-video.webm"
        type="video/webm"/>
      <source
        src="assets/videos/hero-video.mp4"
        type="video/mp4"/>
    </video>
    <div class="flex flex-col justify-center h-[calc(100vh-10.5rem)] mx-[auto] text-zinc-100
    max-[960px]:h-[calc(85vh-5.5rem)] max-lg:text-center max-md:text-center ">
      <h1 class="uppercase font-system-ui font-extrabold mb-2 tracking-[0.25em]">Medicina estética en BARCELONA</h1>
      <p
        class="text-3xl max-w-[40vw] mb-10 leading-relaxed
        max-lg:max-w-full max-md:text-2xl">
        Descubre la excelencia en medicina estética, de la mano de nuestro equipo que se preocupa por tu bienestar brindandote tratamientos accesibles y un trato cercano</p>
      <a
        href="/cita-previa"
        class="bg-main text-zinc-100 font-bold uppercase transition-all px-4 py-3 self-start
        hover:bg-light-main max-lg:self-center">
        Cita previa
      </a>
    </div>
  `,
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {

    if(typeof document !== "undefined"){
      let videoElement:any = document.getElementById('video')
      videoElement.play()
    }
  }
}
