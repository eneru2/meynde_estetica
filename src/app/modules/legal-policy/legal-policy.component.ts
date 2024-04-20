import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-policy',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl font-semibold text-light-main">Aviso legal</h1>
    <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de la web , le informa de lo siguiente:</p>
    <ul>
      <li>Denominación social: Centro Medico Meynde, S.L</li>
      <li>NIF: B67320952</li>
      <li>Domicilio: C/ Mare de Déu de la Salut 78, 3-D, 08024 - Barcelona (Barcelona)</li>
    </ul>
    <p>Inscrita en el Registro Mercantil de Barcelona al Tomo 46658, folio 73, sección 8, hoja número 526878, inscripción 1</p>
    <ul>
      <li>Autorización administrativa: Nº E08629906</li>
    </ul>
    <p>Con los límites establecidos en la ley, Centro Medico Meynde, S.L no asume ninguna responsabilidad derivada de la falta de veracidad, integridad, actualización y precisión de los datos o informaciones que contienen sus páginas web.</p>

    <p>Los contenidos e información no vinculan a Centro Medico Meynde, S.L ni constituyen opiniones, consejos o asesoramiento legal de ningún tipo pues se trata meramente de un servicio ofrecido con carácter informativo y divulgativo.</p>

    <p>Las páginas de Internet de Centro Medico Meynde, S.L pueden contener enlaces (links) a otras páginas de terceras partes que Centro Medico Meynde, S.L no puede controlar. Por lo tanto, Centro Medico Meynde, S.L no puede asumir responsabilidades por el contenido que pueda aparecer en páginas de terceros.</p>

    <p>Los textos, imágenes, sonidos, animaciones, software y el resto de contenidos incluidos en este website son propiedad exclusiva de Centro Medico Meynde, S.L o sus licenciantes. Cualquier acto de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación pública total o parcial, deberá contar con el consentimiento expreso de Centro Medico Meynde, S.L.</p>

    <p>Asimismo, para acceder a algunos de los servicios que Centro Medico Meynde, S.L ofrece a través del sitio web, deberá proporcionar algunos datos de carácter personal. En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos le informamos que, mediante la cumplimentación de los presentes formularios, sus datos personales quedarán incorporados y serán tratados en los ficheros de Centro Medico Meynde, S.L con el fin de poderle prestar y ofrecer nuestros servicios así como para informarle de las mejoras del sitio Web.</p>

    <p>Le informamos también de que tendrá la posibilidad en todo momento de ejercer los derechos de acceso, rectificación, cancelación, oposición, limitación y portabilidad de sus datos de carácter personal, de manera gratuita mediante email a: gestion&#64;meynde.com o en la dirección: C/ Mare de Déu de la Salut 78, 3-D, 08024 - Barcelona (Barcelona).</p>
  `,
  styles: `
    p {
      margin-bottom: 1rem;
    }

    ul {
      padding-left: 2rem;
      margin-bottom: 1rem;
      list-style: disc;
    }
  `
})
export class LegalPolicyComponent {

}
