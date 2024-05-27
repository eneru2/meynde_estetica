import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CanonicalLinkService {

  constructor(private meta: Meta) {}

  updateCanonicalLink(newCanonicalUrl: string) {
  const canonicalTag = this.meta.getTag('rel="canonical"');
    if (canonicalTag) {
      this.meta.updateTag({ rel: 'canonical', href: newCanonicalUrl });
    } else {
      this.meta.addTag({ rel: 'canonical', href: newCanonicalUrl });
    }
  }
}
