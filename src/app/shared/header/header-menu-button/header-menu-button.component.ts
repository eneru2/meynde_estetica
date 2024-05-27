import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'header-menu-button, [menu-button]',
  standalone: true,
  imports: [CommonModule],
  template: `    
  <button
    aria-label="Abrir menu"
    class="transition-all"
    [ngClass]="menuOpen ? 'hidden' : 'block'"
    (click)="changeMenuState()">
      <i class="transition-all text-current">
        <svg           
          xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
      </i>      
    </button>
    <button
      aria-label="Cerrar menu"
      class="transition-all"
      (click)="changeMenuState()"
      [ngClass]="menuOpen ? 'block' : 'hidden'">
      <i class="transition-all text-current">        
        <svg
          xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/>
        </svg>
      </i>           
    </button>
  `,
  styles: ``
})
export class HeaderMenuButtonComponent {
  constructor(public headerService: HeaderService) {}     
  @Input() maskOpen:boolean = false
  @Input() menuOpen:boolean = false
  @Output() changeMenuStateEvent = new EventEmitter()

  changeMenuState(){
    this.menuOpen = !this.menuOpen
    this.maskOpen = this.menuOpen
    this.changeMenuStateEvent.emit(this.maskOpen)
  }
}
