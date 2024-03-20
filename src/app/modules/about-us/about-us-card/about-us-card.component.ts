import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  template: `
    <div
      class="w-64 object-cover max-[585px]:w-full">
      <picture>        
        <source           
          media="(min-width: 450px) and (max-width: 855px)" 
          srcset="{{avifSrc768x}}"
          type="image/avif">
        <source
          media="(min-width: 450px) and (max-width:855px)" 
          srcset="{{webpSrc768x}}"
          type="image/webp">
        <source 
          media="(min-width: 450px) and (max-width: 855px)" 
          srcset="{{jpgSrc768x}}"
          type="image/jpeg">
        <source 
          srcset="{{avifSrc512x}}"
          type="image/avif">
        <source 
          srcset="{{webpSrc512x}}"
          type="image/webp">
        <img
          src="{{ jpgSrc512x }}"
          class="w-64 aspect-[3/4] object-cover max-[585px]:w-full"
          alt="{{ imgAlt }}"          
          type="image/jpeg"/>
      </picture>
      <p class="mt-3 text-2xl">{{ name }}</p>
      <p class="mb-3 font-bold">{{ profession }}</p>
      <p>{{ description }}</p>
    </div>
  `,
  styles: ``
})
export class AboutUsCardComponent {
  @Input() name = ""
  @Input() profession = ""
  @Input() description = ""    
  @Input() imgAlt = ""  
  
  @Input() avifSrc512x = ""
  @Input() webpSrc512x = ""
  @Input() jpgSrc512x = ""

  @Input() avifSrc768x = ""
  @Input() webpSrc768x = ""
  @Input() jpgSrc768x = ""
}
