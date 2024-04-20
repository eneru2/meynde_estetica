import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { TreatmentsComponent } from './modules/treatments/treatments.component';
import { BookAppointmentComponent } from './modules/book-appointment/book-appointment.component';
import { IndividualTreatmentComponent } from './modules/treatments/individual-treatment/individual-treatment.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ContactComponent } from './modules/contact/contact.component';
import { WhereAreWeComponent } from './modules/where-are-we/where-are-we.component';
import { BookingTreatmentComponent } from './modules/booking-treatment/booking-treatment.component';
import { PrivacyPolicyComponent } from './modules/privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './modules/cookies-policy/cookies-policy.component';
import { LegalPolicyComponent } from './modules/legal-policy/legal-policy.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,    
  },
  {
    path: "pide-cita",
    component: BookAppointmentComponent
  },
  {
    path: "tratamientos",
    component: TreatmentsComponent
  },
  {
    path: "tratamientos/:slug",
    component: IndividualTreatmentComponent,
  },
  {
    path: "sobre-nosotros", title: "Sobre nosotros",
    component: AboutUsComponent
  },
  {
    path: "contacto", title: "Contacto",
    component: ContactComponent
  },
  {
    path: "donde-estamos",
    component: WhereAreWeComponent
  },
  {
    path: "cita-previa",
    component: BookingTreatmentComponent
  },
  {
    path: "cita-previa/:slug",
    component: BookingTreatmentComponent
  },
  {
    path: "politica-de-privacidad",
    component: PrivacyPolicyComponent
  },
  {
    path: "politica-de-cookies",
    component: CookiesPolicyComponent
  },
  {
    path: "aviso-legal",
    component: LegalPolicyComponent
  },
  {
    path: "**", title: "Página no encontrada",
    component: NotFoundComponent
  },
];
