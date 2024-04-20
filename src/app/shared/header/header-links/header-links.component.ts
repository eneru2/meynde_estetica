import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderService } from '../../../services/header.service';
@Component({
  selector: 'header-links, [header-links]',
  standalone: true,
  imports: [CommonModule],
  template: `               
      <ul
      class="flex text-xl uppercase text-current gap-x-[6vw]      
      max-[960px]:flex-col max-[960px]:items-center max-[960px]:justify-start max-[960px]:pt-36 max-[960px]:gap-y-12 max-[960px]:w-[60vw] max-[960px]:h-screen max-[960px]:top-0 max-[960px]:bg-zinc-100 max-[960px]:p-0 max-[960px]:m-0 max-[960px]:fixed z-10 max-[960px]:transition-all"
      [ngClass]="menuOpen ? 'max-[960px]:right-0 dark:bg-[#1b1b1d]' : 'max-[960px]:right-[-80vw]'"      
      >
        <li class="flex relative">
          <a 
            class="hover:before:opacity-100 hover:text-main hover:dark:text-light-main text-current
            before:w-[80%] before:h-[.1rem] before:rounded-full before:content-[''] before:bg-main before:absolute before:left-[50%] before:-translate-x-1/2 before:-bottom-1 before:transition-all before:opacity-0" 
            href="/tratamientos">
          Tratamientos</a>
        </li>
        <li class="flex relative">
          <a
            class="hover:before:opacity-100 hover:text-main hover:dark:text-light-main 
            before:w-[80%] before:h-[.1rem] before:rounded-full before:content-[''] before:bg-main before:absolute before:left-[50%] before:-translate-x-1/2 before:-bottom-1 before:transition-all before:opacity-0" 
            href="/cita-previa">
            Cita previa</a>
        </li>
        <li class="flex relative">
          <a 
            class="hover:before:opacity-100 hover:text-main hover:dark:text-light-main 
            before:w-[80%] before:h-[.1rem] before:rounded-full before:content-[''] before:bg-main before:absolute before:left-[50%] before:-translate-x-1/2 before:-bottom-1 before:transition-all before:opacity-0" 
            href="/sobre-nosotros">
            Sobre nosotros</a>
        </li>
        <li class="flex relative">
          <a
            class="hover:before:opacity-100 hover:text-main hover:dark:text-light-main
            before:w-[80%] before:h-[.1rem] before:rounded-full before:content-[''] before:bg-main before:absolute before:left-[50%] before:-translate-x-1/2 before:-bottom-1 before:transition-all before:opacity-0" 
            href="/contacto">
            Contacto</a>
        </li>
        <li
          class="hidden flex-col gap-y-4 max-[960px]:flex">
          <a 
            class="flex text-sm items-center lowercase gap-x-2"
            href="https://instagram.com/meyndeestetica"
            target="_blank">
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
                <title>Logo de Instagram</title>
              </svg>
            </i>          
            &#64;meyndeestetica            
          </a>
          <a class="flex text-lg items-center gap-x-2" href="tel:930271707">
            <i>
              <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4.05 21H3v-5.875L8 14.1l2.9 2.9q1-.575 1.863-1.238t1.587-1.387q.775-.75 1.45-1.625t1.225-1.85l-2.85-2.875L15.1 3H21v1.05q0 3.15-1.35 6.2T15.8 15.8q-2.5 2.5-5.563 3.85T4.05 21Z"/>
                <title>Icono de teléfono</title>
              </svg>            
            </i>+34 930 271 707
          </a>          
        </li>
      </ul>    
  `,
})
export class HeaderLinksComponent {
  constructor(public headerService: HeaderService) {}   
  @Input() menuOpen:boolean = false    
}
