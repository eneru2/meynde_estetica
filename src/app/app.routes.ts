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

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,    
  },
  {
    path: "cita-previa",
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
    path: "tu-cita",
    component: BookingTreatmentComponent
  },
  {
    path: "**", title: "Página no encontrada",
    component: NotFoundComponent
  },
];
