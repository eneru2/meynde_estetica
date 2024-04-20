const appointmentHTML = (name:string,email:string,phone:string,date:string,hour:string,treatment:string) => `<p>
  De: ${name} <${email}>
  <br aria-hidden="true">
  Asunto: Contacto estética 
  <br aria-hidden="true">
  <br aria-hidden="true">
  Datos de la cita de aparatologia o estética: 
  <br aria-hidden="true">
  <br aria-hidden="true">
  ${name}
  <br aria-hidden="true">
  <br aria-hidden="true">
  ${email}
  <br aria-hidden="true">
  <br aria-hidden="true">
  ${phone}
  <br aria-hidden="true">
  <br aria-hidden="true">
  Fecha:
  <br aria-hidden="true">
  <br aria-hidden="true">
  ${date}
  <br aria-hidden="true">
  <br aria-hidden="true">
  ${hour}
  <br aria-hidden="true">
  <br aria-hidden="true">
  ${treatment}
  <br aria-hidden="true">
  <br aria-hidden="true">
  Esto es un aviso de que se ha enviado un formulario de contacto en tu web (<a href="https://meynde-estetica.com">https://meynde-estetica.com</a>)
  <br aria-hidden="true">
  <br aria-hidden="true">
</p>`

export default appointmentHTML