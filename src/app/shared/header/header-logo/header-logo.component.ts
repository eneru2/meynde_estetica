import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'header-logo, [header-logo]',
  standalone: true,
  imports: [CommonModule],
  template: `
      <a href="/">
        <svg  class="w-16 max-[960px]:w-12" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 13.004 13.004">
          <g transform="translate(-2.077 -2.488)">
            <circle
              [ngClass]="{
                'fill-[#64829b] stroke-[#64829b]': !(hovered && this.headerService.transparentBg) || mobile,
                'fill-[transparent] stroke-[transparent]': hovered && this.headerService.transparentBg && !mobile
              }"
              cx="8.58" cy="-8.99" r="6.038" style="stroke-width:.929;stroke-opacity:1" transform="scale(1 -1)"/>
            <g
              class="transition-all"
              [ngClass]="{
                'fill-zinc-100': !(hovered && this.headerService.transparentBg) || mobile,
                'fill-[#64829b]': hovered && this.headerService.transparentBg && !mobile
              }">
              <path d="M4.769 5.56v.188c.212.006.372.03.478.075a.338.338 0 0 1 .225.225c.038.106.056.275.056.506v1.97h.18c.008-1.253.036-2.364.036-2.364l2.365 6.09h.15l2.262-6.073v5.032c0 .225-.019.394-.056.507a.339.339 0 0 1-.226.225 1.86 1.86 0 0 1-.478.075v.188c.131-.013.303-.02.516-.02a23.22 23.22 0 0 1 1.332 0c.22 0 .401.007.545.02v-.188a2.004 2.004 0 0 1-.488-.075.338.338 0 0 1-.216-.225 1.71 1.71 0 0 1-.056-.507V6.554c0-.231.019-.4.056-.506a.338.338 0 0 1 .216-.225c.112-.044.275-.07.488-.075V5.56l-.545.019c-.212.006-.428.009-.647.009h-.441l-2.019 5.408L6.44 5.56a18.42 18.42 0 0 1-.798.028c-.156 0-.316-.003-.478-.01a22.209 22.209 0 0 1-.394-.018zm.76 5.534v.021c0 .225-.02.404-.057.535a.427.427 0 0 1-.225.272c-.106.05-.266.081-.478.094v.188c.106-.013.237-.02.394-.02a12.361 12.361 0 0 1 .994 0c.182 0 .33.007.442.02v-.188c-.244-.013-.43-.044-.554-.094a.456.456 0 0 1-.244-.272c-.038-.131-.047-.356-.057-.535v-.021z" aria-label="Logo de Meynde" />
            </g>
          </g>
        </svg>
      </a>  
  `,
})
export class HeaderLogoComponent {
  @Input() hovered:boolean = false
  @Input() mobile:boolean = false
  constructor(public headerService: HeaderService) {}
}
