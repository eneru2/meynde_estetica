const contactFormHTML = (name:string|undefined,email:string|undefined,phone:string|undefined,message:string|undefined) => `<p>
  De: ${name} <${email}>
  <br aria-hidden="true">
  Asunto: Contacto estética 
  <br aria-hidden="true">
  <br aria-hidden="true">
  Datos: 
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
  Mensaje:
  <br aria-hidden="true">
  <br aria-hidden="true">
  ${message}
  <br aria-hidden="true">
  <br aria-hidden="true">
  Esto es un aviso de que se ha enviado un formulario de contacto en tu web (<a href="https://meynde-estetica.com">https://meynde-estetica.com</a>)
  <br aria-hidden="true">
  <br aria-hidden="true">
</p>`

export default contactFormHTML