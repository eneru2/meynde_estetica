import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <!-- mt-40 max-md:mt-4 -->
    <main
      class="w-[min(80rem,_100%-2.5rem)] mx-auto mt-40 max-[960px]:mt-24">
      <router-outlet></router-outlet>
    </main>
    @defer () {
      <app-footer class="mt-auto"></app-footer>
    }
  `,
})
export class AppComponent {
  title = 'Centro Médico Meynde';
}
