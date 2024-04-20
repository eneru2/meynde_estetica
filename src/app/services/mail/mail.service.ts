import { Injectable } from '@angular/core';
import nodemailer from 'nodemailer'
import contactFormHTML from './contactForm';
import appointmentHTML from './appointmentHTML';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MailService {
  transporter = nodemailer.createTransport(({
    host:'localhost',
    secure: false,
    tls: {
      rejectUnauthorized: false
    },
    port: 25,
  }));

  async sendContactForm(name:string|undefined,email:string|undefined,phone:string|undefined,message:string|undefined) {
    const info = await this.transporter.sendMail({
      from: `${name} <${email}>`,
      to: "contacto@meynde.com",
      html: contactFormHTML(name,email,phone,message),
      subject: "Contacto estética",
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Mensaje: %s", contactFormHTML);    
  }

  async sendAppointment(name:string,email:string,phone:string,date:string,hour:string,treatment:string) {
    const info = await this.transporter.sendMail({
      from: `${name} <${email}>`,
      to: "contacto@meynde.com",
      html: appointmentHTML(name,email,phone,date,hour,treatment),
      subject: treatment,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Tratamiento: %s", treatment);
    console.log("Mensaje: %s", appointmentHTML(name,email,phone,date,hour,treatment));    
  }

}