import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() {}

  cookiesAccepted:boolean = true;

  acceptCookies(){
    this.cookiesAccepted = true;
    localStorage.setItem('cookiesAccepted', 'true');    
  }

  onPageLoad(){    
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === "true") {
      this.cookiesAccepted = true;
    } else if (cookiesAccepted === null){
      localStorage.setItem('cookiesAccepted', 'false');
      this.cookiesAccepted = false;
    } else {
      this.cookiesAccepted = false;
    }
  }

  ngOnInit(): void {
    
    
  }
}
