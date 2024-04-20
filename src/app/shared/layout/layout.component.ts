import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappButtonComponent } from '../../modules/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'Layout',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent, WhatsappButtonComponent],
  template: `
    <Header></Header>
      <app-whatsapp-button></app-whatsapp-button>
      <main>
        <router-outlet name="app"></router-outlet>
      </main>
    <Footer></Footer>
  `,  
})
export class LayoutComponent {

}
