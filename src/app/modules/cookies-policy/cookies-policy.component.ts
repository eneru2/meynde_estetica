import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies-policy',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl font-semibold text-light-main">Política de cookies</h1>
      <p>Centro Medico Meynde, S.L informa acerca del uso de las cookies en su página web: <a href="https://meynde-estetica.com/">https://meynde-estetica.com/</a></p>
    <h2 class="text-2xl font-medium text-light-main">¿Qué son las cookies?</h2>
      <p>Las cookies son archivos que se pueden descargar en su equipo a través de las páginas web. Son herramientas que tienen un papel esencial para la prestación de numerosos servicios de la sociedad de la información. Entre otros, permiten a una página web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio ofrecido.</p>
    <h2 class="text-2xl font-medium text-light-main">Tipos de cookies</h2>
    <p>Según quien sea la entidad que gestione el dominio desde donde se envían las cookies y trate los datos que se obtengan se pueden distinguir dos tipos:</p>
      <ul>
        <li>Cookies propias: Aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</li>
        <li>Cookies de terceros: Aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.</li>
      </ul>
    <br>
    <p>En el caso de que las cookies sean instaladas desde un equipo o dominio gestionado por el propio editor pero la información que se recoja mediante éstas sea gestionada por un tercero, no pueden ser consideradas como cookies propias.</p>
    <p>Existe también una segunda clasificación según el plazo de tiempo que permanecen almacenadas en el navegador del cliente, pudiendo tratarse de:</p>  
      <ul>
        <li>Cookies de sesión: Diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión (p.e. una lista de productos adquiridos).</li>
        <li>Cookies persistentes: Los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</li>
      </ul>
    <p>Por último, existe otra clasificación con seis tipos de cookies según la finalidad para la que se traten los datos obtenidos:</p>
      <ul>
        <li>Cookies técnicas: Aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido o compartir contenidos a través de redes sociales.</li>
        <li>Cookies de personalización: Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.</li>
        <li>Cookies de análisis: Permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</li>
        <li>Cookies publicitarias: Permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios.</li>
        <li>Cookies de publicidad comportamental: Almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</li>
        <li>Cookies de redes sociales externas: Se utilizan para que los visitantes puedan interactuar con el contenido de diferentes plataformas sociales (facebook, youtube, twitter, linkedIn, etc..) y que se generen únicamente para los usuarios de dichas redes sociales. Las condiciones de utilización de estas cookies y la información recopilada se regula por la política de privacidad de la plataforma social correspondiente.</li>
      </ul>
    <h2 class="text-2xl font-medium text-light-main">Desactivación y eliminación de cookies</h2>
    <p>Tienes la opción de permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en su equipo. Al desactivar cookies, algunos de los servicios disponibles podrían dejar de estar operativos. La forma de deshabilitar las cookies es diferente para cada navegador, pero normalmente puede hacerse desde el menú Herramientas u Opciones. También puede consultarse el menú de Ayuda del navegador dónde puedes encontrar instrucciones. El usuario podrá en cualquier momento elegir qué cookies quiere que funcionen en este sitio web.</p>
    <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p>
    <ul>
      <li>Microsoft Internet Explorer o Microsoft Edge: <a href="http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies">http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies</a></li>
      <li>Mozilla Firefox: <a href="http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia">http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia</a></li>
      <li>Chrome: <a href="https://support.google.com/accounts/answer/61416?hl=es">https://support.google.com/accounts/answer/61416?hl=es</a></li>
      <li>Safari: <a href="http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/">http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/</a></li>
      <li>Opera: <a href="http://help.opera.com/Linux/10.60/es-ES/cookies.html">http://help.opera.com/Linux/10.60/es-ES/cookies.html</a></li>
    </ul>
    <p>Además, también puede gestionar el almacén de cookies en su navegador a través de herramientas como las siguientes:</p>
    <ul>
      <li>Ghostery: <a href="https://www.ghostery.com">www.ghostery.com</a></li>
      <li>Your Online Choices: <a href="https://www.youronlinechoices.com/es/">www.youronlinechoices.com/es/</a></li>
    </ul>
    <p>Cookies utilizadas en <a href="https://meynde-estetica.com/">https://meynde-estetica.com/</a></p>
    <p>A continuación se identifican las cookies que están siendo utilizadas en este portal así como su tipología y función:</p> 
  `,
  styles: `
    a {
    text-decoration: underline;
  }

  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  ul {
   padding-left: 4rem;
  }

  li{
    list-style: disc;
    margin-bottom: 1ch;
  }

  p {
    margin-bottom: 1rem;
  }
  `
})
export class CookiesPolicyComponent {

}
