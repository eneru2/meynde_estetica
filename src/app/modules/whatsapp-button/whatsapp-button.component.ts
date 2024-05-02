import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  template: `
    <a
      href="https://wa.me/34635159431"
      target="_blank"
      aria-label="Contáctanos a traves de WhatsApp"
      class="fixed grid rounded-full place-items-center bg-main h-14 w-14 right-5 bottom-3.5 z-20
      hover:bg-light-main transition-all group"
      >
  <svg
    version="1.1"
    class="w-8"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="-3 -2 64 64"
    xml:space="preserve">
    <g>
      <path class="fill-main group-hover:fill-light-main"  stroke="#fff" stroke-width="6px" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/>
      <path style="fill:#FFFFFF;" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/>
    </g>
  </svg>
</a>
  `,
  styles: ``
})
export class WhatsappButtonComponent {

}
