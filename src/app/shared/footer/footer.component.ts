import { Component } from '@angular/core';
import { FooterLinksComponent } from "./links/footer-links.component"
import { FooterOthersComponent } from "./others/footer-others.component"

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterLinksComponent, FooterOthersComponent],
  template: `
    <footer 
      class="w-[min(80rem,100%-2.5rem)] border-t-2 border-current mx-auto text-current py-5 mt-8
      grid grid-cols-4 gap-4 relative
      max-md:grid-cols-2 max-[359px]:grid-cols-1">
      <ul class="pr-12 text-balance">
        <li>
          <a href="/">
            <svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 13.004 13.004">
              <title>Logo de Meynde</title>
              <g transform="translate(-2.077 -2.488)">
                <circle
                  class="fill-[#64829b] stroke-[#64829b]"                  
                  cx="8.58" cy="-8.99" r="6.038" style="stroke-width:.929;stroke-opacity:1" transform="scale(1 -1)"/>
                <g
                  class="transition-all fill-white">
                  <path d="M4.769 5.56v.188c.212.006.372.03.478.075a.338.338 0 0 1 .225.225c.038.106.056.275.056.506v1.97h.18c.008-1.253.036-2.364.036-2.364l2.365 6.09h.15l2.262-6.073v5.032c0 .225-.019.394-.056.507a.339.339 0 0 1-.226.225 1.86 1.86 0 0 1-.478.075v.188c.131-.013.303-.02.516-.02a23.22 23.22 0 0 1 1.332 0c.22 0 .401.007.545.02v-.188a2.004 2.004 0 0 1-.488-.075.338.338 0 0 1-.216-.225 1.71 1.71 0 0 1-.056-.507V6.554c0-.231.019-.4.056-.506a.338.338 0 0 1 .216-.225c.112-.044.275-.07.488-.075V5.56l-.545.019c-.212.006-.428.009-.647.009h-.441l-2.019 5.408L6.44 5.56a18.42 18.42 0 0 1-.798.028c-.156 0-.316-.003-.478-.01a22.209 22.209 0 0 1-.394-.018zm.76 5.534v.021c0 .225-.02.404-.057.535a.427.427 0 0 1-.225.272c-.106.05-.266.081-.478.094v.188c.106-.013.237-.02.394-.02a12.361 12.361 0 0 1 .994 0c.182 0 .33.007.442.02v-.188c-.244-.013-.43-.044-.554-.094a.456.456 0 0 1-.244-.272c-.038-.131-.047-.356-.057-.535v-.021z" />
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li>
          Nos preocupamos por tu bienestar brindandote tratamientos accesibles y un trato cercano.
        </li>
      </ul>
      <footer-links></footer-links>
      <footer-others></footer-others>   
      <figure>
        <figcaption class="font-bold text-lg">Contacto</figcaption>
        <ul class="flex flex-col gap-y-2 mt-1.5">
          <li class="flex items-center gap-x-2">
            <svg class="mt-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4.05 21H3v-5.875L8 14.1l2.9 2.9q1-.575 1.863-1.238t1.587-1.387q.775-.75 1.45-1.625t1.225-1.85l-2.85-2.875L15.1 3H21v1.05q0 3.15-1.35 6.2T15.8 15.8q-2.5 2.5-5.563 3.85T4.05 21Z"/>
              <title>Icono de teléfono</title>
            </svg>
            <span><a href="tel:+34930271707">+34 930 271 707</a></span>
          </li>
          <li class="flex items-center gap-x-2">
            <svg class="mt-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7L4 8v10h16V8l-8 5Zm0-2l8-5H4l8 5ZM4 8V6v12V8Z"/>
              <title>Icono de carta</title>
            </svg>
            <span>contacto&#64;meynde.com</span>
          </li>
          <li class="flex items-center gap-x-2">
            <svg class="mt-1.5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762q-.838-1.338-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 1.125-.438 2.363t-1.275 2.575Q17.45 16.475 16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125ZM12 12q.825 0 1.413-.587T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Z"/>
              <title>Icono de pin</title>
            </svg>
            <span>Carrer de la Mare de Déu de la Salut, 78, 3-D, 08024 Barcelona</span>
          </li>
          <!-- <li class="self-end">
            <ul class="flex gap-x-2.5 mt-4 self-end">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                  <title>Logo de Facebook</title>
                </svg>
              </li>
              <li>
                <a href="https://www.instagram.com/meyndeestetica" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
                      <title>Logo de Instagram</title>
                  </svg>
                </a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 128 128">
                  <path fill="currentColor" d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"/>
                  <title>Logo de X</title>
                </svg>
              </li>
            </ul>
          </li> -->
        </ul>    
      </figure>
    </footer>
    <ul class="text-current w-[min(80rem,100%-2.5rem)] mx-auto flex justify-end text-xs py-2 gap-x-2.5 gap-y-2 flex-wrap">
      <li><a href="/aviso-legal">Aviso legal</a></li>
      <li><a href="/politica-de-privacidad">Política de Privacidad</a></li>
      <li><a href="/politica-de-cookies">Política de Cookies</a></li>
    </ul>
    
    `,
  styles: ``
})
export class FooterComponent {

}