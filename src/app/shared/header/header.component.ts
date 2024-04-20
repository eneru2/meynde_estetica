import { Component, OnInit } from '@angular/core';
import { HeaderOvernavComponent } from './header-overnav/header-overnav.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { HeaderService } from "../../services/header.service"
import { CommonModule } from '@angular/common';
import { HeaderMenuButtonComponent } from './header-menu-button/header-menu-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderOvernavComponent, HeaderLogoComponent, HeaderLinksComponent, HeaderMenuButtonComponent],
  template: `
    <div
      id="mask"
      class="bg-black opacity-50 z-10"
      [ngClass]="{'hidden': !maskOpen, 'absolute top-0 left-0 w-[150vw] h-screen': maskOpen}" 
      (click)="changeMenuState(!maskOpen)">
    </div>   
    <header     
      class="flex flex-col items-center absolute top-0 left-0 right-0 transition-all z-10"
      [ngClass]="{
        'shadow-sm': !mobile && !this.headerService.transparentBg,
        'text-black hover:bg-slate-100  dark:hover:bg-[#1b1b1d] dark:text-slate-50': hovered && this.headerService.transparentBg && !mobile,
        'text-zinc-100': !hovered && this.headerService.transparentBg && !mobile,
      }"
      #header
      (mouseover)="headerHover()"
      (mouseout)="headerUnhover()"   
      >
      <header-overnav class="w-full text-current border-b-[1px] border-b-current flex justify-center max-[960px]:border-b-0" [hovered]="hovered"></header-overnav>
      <nav class="w-[min(80rem,_100%-2.5rem)] mx-auto bg-transparent text-current">
        <ul          
          class="flex w-full justify-between items-center py-5 text-current">
          <li
            header-logo
            [hovered]="hovered"
            [mobile]="mobile"></li>
          <li
            menu-button
            class="hidden max-[960px]:block transition-all z-20 text-current"
            [ngClass]="{
              'fixed right-10': menuOpen,
              'text-black': menuOpen || !this.headerService.transparentBg,
              'text-zinc-100': !menuOpen && this.headerService.transparentBg,
            }"
            [menuOpen]="menuOpen"
            [maskOpen]="maskOpen"
            (changeMenuStateEvent)="changeMenuState($event)"></li>
          <li
            header-links
            [menuOpen]="menuOpen"
            class="flex text-current max-[960px]:absolute"></li>
        </ul>  
      </nav>
    </header>
  `,  
})
export class HeaderComponent implements OnInit {  
  hovered:boolean = false
  mobile:boolean = false  
  menuOpen:boolean = false
  maskOpen:boolean = false
  constructor(public headerService: HeaderService) {} 
  
  headerHover() {
    this.checkIfMobile()
    if(this.mobile == false){
      this.hovered = true
    } else {      
      return
    }
  }
  
  headerUnhover() {
    this.checkIfMobile()
    if(this.mobile == false){
      this.hovered = false
    } else return
  }
  
  checkIfMobile(){    
    if (window.innerWidth > 960){
      this.mobile = false      
    } else {
      this.mobile = true
    }
  }

  changeMenuState(state:boolean){
    this.menuOpen = this.maskOpen = state

    if(state){
      document.addEventListener('scroll', () => {
        this.menuOpen = this.maskOpen = false
      })
    }
  }
  
  ngOnInit(): void {
    if(typeof document !== "undefined"){
      this.checkIfMobile()
      const notPhoneQuery = window.matchMedia("(min-width: 960px)")

      notPhoneQuery.addEventListener("change", (event) => {
        if(event.matches){
          this.mobile = false
          this.menuOpen = false
          this.maskOpen = false
        } else this.mobile = true
      })
    }  
  }  

}
