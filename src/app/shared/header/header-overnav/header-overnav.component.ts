import { Component, Input } from '@angular/core';
import { HeaderService } from "../../../services/header.service"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-overnav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul 
      class="flex items-center justify-between w-[min(80rem,_100%-2.5rem)] text-current py-3 overflow-hidden
      max-[960px]:hidden"
      [ngClass]="this.headerService.transparentBg ? 'h-16' : 'h-9'"
      >
      <li class="uppercase text-2xl font-bold">
        <a 
          class="transition-all"
          [ngClass]="{
            'visible opacity-100 text-main': hovered && this.headerService.transparentBg, 
            'invisible opacity-0': !hovered && !this.headerService.transparentBg || hovered && !this.headerService.transparentBg,            
            'text-zinc-100': !hovered && this.headerService.transparentBg,
          }"
          href="/">Centro médico Meynde</a>      
      </li>      
      <li class="flex items-center gap-x-9 text-current">
        <a href="https://instagram.com/meyndeestetica" target="_blank">&#64;meyndeestetica</a>
        <a class="flex gap-x-1.5 items-center" href="tel:930271707">
          <i>
            <svg 
              class="pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
             <path fill="currentColor" d="M4.05 21H3v-5.875L8 14.1l2.9 2.9q1-.575 1.863-1.238t1.587-1.387q.775-.75 1.45-1.625t1.225-1.85l-2.85-2.875L15.1 3H21v1.05q0 3.15-1.35 6.2T15.8 15.8q-2.5 2.5-5.563 3.85T4.05 21Z"/>
              <title>Icono de teléfono</title>
            </svg>            
          </i>
          <span>+34 930 271 707</span>
        </a>        
      </li>
    </ul>
  `,  
})
export class HeaderOvernavComponent {  
  @Input() hovered:boolean = false
  constructor(public headerService: HeaderService) {}
}
