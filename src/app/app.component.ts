import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WhatsappButtonComponent } from './modules/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent],
  template: `
    <app-header></app-header>    
    <app-whatsapp-button></app-whatsapp-button>
    <main
      class="w-[min(80rem,_100%-2.5rem)] mx-auto mt-40 max-[960px]:mt-24">
      <router-outlet></router-outlet>
    </main>
    <app-footer class="mt-auto"></app-footer>
  `,
})
export class AppComponent {
  title = 'Centro Médico Meynde';
}
