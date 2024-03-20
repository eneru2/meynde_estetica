import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'Layout',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  template: `
    <Header></Header>
      <main>
        <router-outlet name="app"></router-outlet>
      </main>
    <Footer></Footer>
  `,  
})
export class LayoutComponent {

}
