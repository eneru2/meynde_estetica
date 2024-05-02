import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeroComponent } from './hero/hero.component';
import { HeaderService } from "../../services/header.service"
import { HomeTreatmentsCarouselComponent } from "./treatments-carousel/home-treatments-carousel.component"
import { HomeOffersCarouselComponent } from "./offers-carousel/home-offers-carousel.component"
import { HomeInstagramComponent } from "./instagram/home-instagram.component"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HomeTreatmentsCarouselComponent, HomeOffersCarouselComponent, HomeInstagramComponent],
  template: `    
    <hero></hero>
    @defer () {
      <home-treatments-carousel></home-treatments-carousel>  
      <!-- <home-offers-carousel></home-offers-carousel>     -->
      <home-instagram></home-instagram>
    }
  `,
  styles:`
  `
})
export class HomeComponent {
  constructor(public headerService: HeaderService, private titleService:Title) {
    this.titleService.setTitle("Meynde Centro Médico")
    this.headerService.transparentBg = true
  }
}
