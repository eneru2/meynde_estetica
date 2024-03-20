export function borrarTratamiento(i:number, treatment:string){
  const res = confirm(`¿Estas seguro que quieres eliminar el tratamiento: ${treatment} ?`)
    
  if (res){
    TreatmentsList.splice(i, 1)
  } else {
    alert("no")
  }
}


// Sources for treatments images
  // https://www.pexels.com/search/first%20visit/
  // https://www.pexels.com/photo/specialist-doing-laser-treatment-in-spa-salon-5069611/
  // https://www.pexels.com/photo/female-patient-doing-cosmetology-procedure-4207236/

let TreatmentsList = [
  // Cara
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios del tratamiento facial completo que combina radiofrecuencia, Dermapen y luz LED son variados y abarcan aspectos clave de la salud y apariencia de la piel:",
      listElements: [
        {
          title: "Reafirmación Cutánea:",
          text: "La radiofrecuencia estimula la producción de colágeno, mejorando la elasticidad de la piel y reduciendo la flacidez.",
        },
        {
          title: "Reducción de Arrugas y Líneas de Expresión:",
          text: "El Dermapen, mediante microagujas, fomenta la regeneración celular, suavizando las arrugas y líneas finas."
        },
        {
          title: "Mejora de la Textura y Tono de la Piel:",
          text: "El Dermapen también ayuda a reducir manchas y cicatrices, promoviendo una piel más uniforme y suave."
        },
        {
          title: "Estimulación del Flujo Sanguíneo:",
          text: "La radiofrecuencia y la luz LED contribuyen a mejorar la circulación sanguínea, lo que puede favorecer la oxigenación de los tejidos y la eliminación de toxinas."
        },
        {
          title: "Propiedades Antiinflamatorias:",
          text: "La luz LED tiene propiedades antiinflamatorias, lo que puede ayudar a reducir la inflamación y enrojecimiento de la piel."
        },
        {
          title: "Regeneración Celular:",
          text: "El Dermapen y la luz LED trabajan en conjunto para estimular la regeneración celular, promoviendo un proceso natural de renovación de la piel."
        },
        {
          title: "Tratamiento No Invasivo:",
          text: "A diferencia de procedimientos más invasivos, este tratamiento es menos agresivo y suele tener tiempos de recuperación más cortos."
        },         
      ]
    },
    condition: 'Para manchas, arrugas y flacidez',
    description: "Este tratamiento facial completo combina tres avanzadas técnicas para abordar de manera integral las preocupaciones estéticas más comunes, como manchas cutáneas, arrugas y flacidez. La radiofrecuencia se utiliza para estimular la producción de colágeno y mejorar la elasticidad de la piel, mientras que el Dermapen, mediante microagujas, promueve la regeneración celular y la reducción de manchas. La terapia de luz LED complementa el proceso, ofreciendo beneficios antiinflamatorios y estimulando la circulación sanguínea. Este enfoque combinado ofrece resultados notables, logrando una piel más firme, uniforme y rejuvenecida.",
    duration: '1 hora',
    generalType: 'aparatologia',    
    img: 'assets/imgs/thumbnail720.jpg',
    name: 'Facial completo',
    price: 100,
    results: '3 - 6 semanas',
    searchTerm: 'radiofrequencia led dermapen facial completo arrugas manchas flacidez',        
    sessionsAvailable: {
      "1 sesión": 100,              
      "3 sesiones": 200
    },
    shortDescription: "Experimenta la transformación de tu piel con nuestro tratamiento facial completo. La radiofrecuencia reafirma, el Dermapen reduce arrugas y manchas, mientras que la luz LED potencia la regeneración celular. Un enfoque multifacético para una piel radiante, firme y rejuvenecida.",
    slug: 'facial-completo',
    type: 'cara',
    treatmentDay: "",
    treatmentTools: "Radiofrecuencia, dermapen y luz led",
    whiteText: true,
    requiredFaq: [
      {
        title: "s",
        description: "a"
      }
    ],
    optionalFaq: [
      {
        title: "s",
        description: "a"
      }
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios del tratamiento facial completo que combina radiofrecuencia, Dermapen y luz LED son variados y abarcan aspectos clave de la salud y apariencia de la piel:",
      listElements: [
        {
          title: "Reafirmación Cutánea:",
          text: "La radiofrecuencia estimula la producción de colágeno, mejorando la elasticidad de la piel y reduciendo la flacidez.",
        }
      ]
    },
    condition: '',
    description: 'Elimina verrugas, lunares y puntos de rubí. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus fugit dolores expedita qui quibusdam non totam aut maiores quasi, harum deleniti error provident enim quis saepe aspernatur asperiores distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus fugit dolores expedita qui quibusdam non totam aut maiores quasi, harum deleniti error provident enim quis saepe aspernatur asperiores distinctio!',
    duration: '30 minutos',
    generalType: 'aparatologia / estetica',    
    img: 'assets/imgs/thumbnail720.jpg',
    name: 'Limpieza facial',
    price: 30,
    results: '3 - 6 semanas',
    searchTerm: 'microdermoabrasion radiofrequencia led mascarilla masaje',        
    sessionsAvailable: '',    
    shortDescription: 'Elimina verrugas, lunares y puntos de rubí',
    slug: 'limpieza-facial',
    type: 'cara',
    treatmentDay: "",
    treatmentTools: '',
    whiteText: true,
    requiredFaq: [
      {
        title: "s",
        description: "a"
      }
    ],
    optionalFaq: [
      {
        title: "s",
        description: "a"
      }
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: 
      {
        initialText: "Los beneficios del tratamiento facial completo que combina radiofrecuencia, Dermapen y luz LED son variados y abarcan aspectos clave de la salud y apariencia de la piel:",
        listElements: [
          {
            title: "Reafirmación Cutánea:",
            text: "La radiofrecuencia estimula la producción de colágeno, mejorando la elasticidad de la piel y reduciendo la flacidez.",
          },
          {
            title: "Reducción de Arrugas y Líneas de Expresión:",
            text: "El Dermapen, mediante microagujas, fomenta la regeneración celular, suavizando las arrugas y líneas finas."
          },
          {
            title: "Mejora de la Textura y Tono de la Piel:",
            text: "El Dermapen también ayuda a reducir manchas y cicatrices, promoviendo una piel más uniforme y suave."
          },
          {
            title: "Estimulación del Flujo Sanguíneo:",
            text: "La radiofrecuencia y la luz LED contribuyen a mejorar la circulación sanguínea, lo que puede favorecer la oxigenación de los tejidos y la eliminación de toxinas."
          },
          {
            title: "Propiedades Antiinflamatorias:",
            text: "La luz LED tiene propiedades antiinflamatorias, lo que puede ayudar a reducir la inflamación y enrojecimiento de la piel."
          },
          {
            title: "Regeneración Celular:",
            text: "El Dermapen y la luz LED trabajan en conjunto para estimular la regeneración celular, promoviendo un proceso natural de renovación de la piel."
          },
          {
            title: "Tratamiento No Invasivo:",
            text: "A diferencia de procedimientos más invasivos, este tratamiento es menos agresivo y suele tener tiempos de recuperación más cortos."
          },         
        ]
      },
    condition: 'Para manchas, arrugas y flacidez',
    description: "Este tratamiento facial completo combina tres avanzadas técnicas para abordar de manera integral las preocupaciones estéticas más comunes, como manchas cutáneas, arrugas y flacidez. La radiofrecuencia se utiliza para estimular la producción de colágeno y mejorar la elasticidad de la piel, mientras que el Dermapen, mediante microagujas, promueve la regeneración celular y la reducción de manchas. La terapia de luz LED complementa el proceso, ofreciendo beneficios antiinflamatorios y estimulando la circulación sanguínea. Este enfoque combinado ofrece resultados notables, logrando una piel más firme, uniforme y rejuvenecida.",
    duration: '1 hora',
    generalType: 'aparatologia',    
    img: 'assets/imgs/thumbnail720.jpg',
    // Tratamiento para rosácea arañas vasculares y enrojecimiento
    name: "Tratamiento acné y cicatrices",
    price: 60,
    results: '3 - 6 semanas',
    searchTerm: "luz led dermapen facial completo dermapen carbón carbon activo laser láser facial",            
    shortDescription: "Experimenta la transformación de tu piel con nuestro tratamiento facial completo. La radiofrecuencia reafirma, el Dermapen reduce arrugas y manchas, mientras que la luz LED potencia la regeneración celular. Un enfoque multifacético para una piel radiante, firme y rejuvenecida.",
    slug: 'tratamiento-acne-cicatrices',
    type: 'cara',
    treatmentDay: "",
    treatmentTools: "láser facial",
    whiteText: true,
    requiredFaq: [
      {
        title: "s",
        description: "a"
      }
    ],
    optionalFaq: [
      {
        title: "s",
        description: "a"
      }
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios del tratamiento facial completo que combina radiofrecuencia, Dermapen y luz LED son variados y abarcan aspectos clave de la salud y apariencia de la piel:",
      listElements: [
        {
          title: "Reafirmación Cutánea:",
          text: "La radiofrecuencia estimula la producción de colágeno, mejorando la elasticidad de la piel y reduciendo la flacidez.",
        },
        {
          title: "Reducción de Arrugas y Líneas de Expresión:",
          text: "El Dermapen, mediante microagujas, fomenta la regeneración celular, suavizando las arrugas y líneas finas."
        },
        {
          title: "Mejora de la Textura y Tono de la Piel:",
          text: "El Dermapen también ayuda a reducir manchas y cicatrices, promoviendo una piel más uniforme y suave."
        },
        {
          title: "Estimulación del Flujo Sanguíneo:",
          text: "La radiofrecuencia y la luz LED contribuyen a mejorar la circulación sanguínea, lo que puede favorecer la oxigenación de los tejidos y la eliminación de toxinas."
        },
        {
          title: "Propiedades Antiinflamatorias:",
          text: "La luz LED tiene propiedades antiinflamatorias, lo que puede ayudar a reducir la inflamación y enrojecimiento de la piel."
        },
        {
          title: "Regeneración Celular:",
          text: "El Dermapen y la luz LED trabajan en conjunto para estimular la regeneración celular, promoviendo un proceso natural de renovación de la piel."
        },
        {
          title: "Tratamiento No Invasivo:",
          text: "A diferencia de procedimientos más invasivos, este tratamiento es menos agresivo y suele tener tiempos de recuperación más cortos."
        },         
      ]
    },
    condition: 'Para vellos',
    description: "Este tratamiento facial completo combina tres avanzadas técnicas para abordar de manera integral las preocupaciones estéticas más comunes, como manchas cutáneas, arrugas y flacidez. La radiofrecuencia se utiliza para estimular la producción de colágeno y mejorar la elasticidad de la piel, mientras que el Dermapen, mediante microagujas, promueve la regeneración celular y la reducción de manchas. La terapia de luz LED complementa el proceso, ofreciendo beneficios antiinflamatorios y estimulando la circulación sanguínea. Este enfoque combinado ofrece resultados notables, logrando una piel más firme, uniforme y rejuvenecida.",
    duration: '15 minutos',
    generalType: 'aparatologia',    
    img: 'assets/imgs/thumbnail720.jpg',
    name: 'Depilación en cara',
    price: 30,
    results: '3 - 6 semanas',
    searchTerm: "laser láser facial fotodepilación diodo",            
    shortDescription: "Experimenta la transformación de tu piel con nuestro tratamiento facial completo. La radiofrecuencia reafirma, el Dermapen reduce arrugas y manchas, mientras que la luz LED potencia la regeneración celular. Un enfoque multifacético para una piel radiante, firme y rejuvenecida.",
    slug: 'depilación-cara',
    type: 'cara',
    treatmentDay: "",
    treatmentTools: "láser facial, fotodepilación y diodo",
    whiteText: true,
    requiredFaq: [
      {
        title: "s",
        description: "a"
      }
    ],
    optionalFaq: [
      {
        title: "s",
        description: "a"
      }
    ]
  },
  // Columna tratamientos en folleto
  // Cara aun
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios del tratamiento facial completo que combina radiofrecuencia, Dermapen y luz LED son variados y abarcan aspectos clave de la salud y apariencia de la piel:",
      listElements: [
        {
          title: "Reducción de arrugas y líneas de expresión: ",
          text: "Al relajar los músculos faciales responsables de la formación de arrugas, se suavizan y minimizan notablemente las líneas de expresión.",
        },
        {
          title: "Aspecto rejuvenecido: ",
          text: "Proporciona una apariencia más juvenil y descansada al reducir la apariencia de las arrugas y mejorar la firmeza de la piel."
        },
        {
          title: "Sin tiempo de inactividad: ",
          text: "No requiere tiempo de recuperación significativo, lo que permite a los pacientes reanudar sus actividades diarias de inmediato."
        }                  
      ]
    },
    condition: 'arrugas líneas de expresión lineas de expresion',
    description: "Nuestro tratamiento relajante muscular ofrece una solución efectiva para suavizar las líneas de expresión y arrugas faciales, proporcionando una apariencia rejuvenecida y descansada. Mediante la aplicación de una fórmula especializada, este procedimiento relaja los músculos faciales involucrados en la formación de arrugas, brindando resultados naturales y duraderos. Disfrute de una piel más tersa y revitalizada sin la necesidad de intervenciones quirúrgicas invasivas.",
    duration: '30 minutos',
    generalType: 'estetica',    
    img: 'assets/imgs/thumbnail720.jpg',
    name: 'Relajante muscular',
    price: 100,
    results: '3 - 6 semanas',
    searchTerm: "relajante muscular botox entrecejo frente patas de gallo",
    sessionsAvailable: {
      "entrecejo": 100,
      "frente": 150,
      "patas de gallo": 150,
      "frente + entrecejo": 225,
      "patas de gallo + entrecejo": 225,
      "frente + patas de gallo": 255,
      "frente + entrecejo + patas de gallo": 320,
    },
    shortDescription: "tratamiento facial relajante muscular, diseñado para suavizar arrugas y líneas de expresión, brindando una apariencia rejuvenecida y fresca sin cirugía.",
    slug: 'relajante-muscular',
    type: 'cara',
    treatmentDay: "",
    treatmentTools: "jeringuilla",
    whiteText: true,
    requiredFaq: [
      {
        title: "s",
        description: "a"
      }
    ],
    optionalFaq: [
      {
        title: "s",
        description: "a"
      }
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios del tratamiento facial completo que combina radiofrecuencia, Dermapen y luz LED son variados y abarcan aspectos clave de la salud y apariencia de la piel:",
      listElements: [
        {
          title: "Relleno de arrugas y líneas finas: ",
          text: "El ácido hialurónico es eficaz para suavizar y rellenar arrugas y líneas de expresión, proporcionando una apariencia más juvenil.",
        },
        {
          title: "Restauración de volumen facial: ",
          text: "Ayuda a restaurar el volumen perdido en áreas como mejillas, labios y mentón, mejorando la plenitud y contorno facial."
        },
        {
          title: "Sin tiempo de inactividad: ",
          text: "No requiere tiempo de recuperación significativo, lo que permite a los pacientes reanudar sus actividades diarias de inmediato."
        },
        {
          title: "Resultados naturales y duraderos: ",
          text: "Proporciona resultados inmediatos y naturales que pueden durar varios meses, dependiendo del tipo de ácido hialurónico utilizado y la zona tratada."
        }                  
      ]
    },
    condition: 'arrugas líneas de expresión lineas de expresion',
    description: "El ácido hialurónico es un tratamiento cosmético altamente efectivo utilizado para rejuvenecer la piel, rellenar arrugas y restaurar el volumen facial perdido con el tiempo. Este compuesto naturalmente presente en el cuerpo humano se inyecta en áreas específicas para mejorar la hidratación, elasticidad y firmeza de la piel, ofreciendo resultados instantáneos y de larga duración. Además de su capacidad para suavizar arrugas y líneas finas, el ácido hialurónico promueve la producción de colágeno, contribuyendo así a una piel más radiante y saludable.",
    duration: '30 minutos',
    generalType: 'estetica',    
    img: 'assets/imgs/thumbnail720.jpg',
    name: 'Ácido hialurónico',
    price: 150,
    results: '3 - 6 semanas',
    searchTerm: "acido hialuronico ácido hialurónico labios relleno facial",
    sessionsAvailable: {
      "rinomodelación": 200,
      "correción de ojeras": 200,        
    },
    shortDescription: "El ácido hialurónico es un tratamiento cosmético que rejuvenece la piel, rellenando arrugas y restaurando el volumen facial perdido.",
    slug: 'acido-hialuronico',
    type: 'cara',
    treatmentDay: "",
    treatmentTools: "jeringuilla",
    whiteText: true,
    requiredFaq: [
      {
        title: "s",
        description: "a"
      }
    ],
    optionalFaq: [
      {
        title: "s",
        description: "a"
      }
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios del tratamiento facial completo que combina radiofrecuencia, Dermapen y luz LED son variados y abarcan aspectos clave de la salud y apariencia de la piel:",
      listElements: [
        {
          title: "Relleno de arrugas y líneas finas: ",
          text: "El ácido hialurónico es eficaz para suavizar y rellenar arrugas y líneas de expresión, proporcionando una apariencia más juvenil.",
        },
        {
          title: "Restauración de volumen facial: ",
          text: "Ayuda a restaurar el volumen perdido en áreas como mejillas, labios y mentón, mejorando la plenitud y contorno facial."
        },
        {
          title: "Sin tiempo de inactividad: ",
          text: "No requiere tiempo de recuperación significativo, lo que permite a los pacientes reanudar sus actividades diarias de inmediato."
        },
        {
          title: "Resultados naturales y duraderos: ",
          text: "Proporciona resultados inmediatos y naturales que pueden durar varios meses, dependiendo del tipo de ácido hialurónico utilizado y la zona tratada."
        }                  
      ]
    },
    condition: 'arrugas líneas de expresión lineas de expresion',
    description: "El ácido hialurónico es un tratamiento cosmético altamente efectivo utilizado para rejuvenecer la piel, rellenar arrugas y restaurar el volumen facial perdido con el tiempo. Este compuesto naturalmente presente en el cuerpo humano se inyecta en áreas específicas para mejorar la hidratación, elasticidad y firmeza de la piel, ofreciendo resultados instantáneos y de larga duración. Además de su capacidad para suavizar arrugas y líneas finas, el ácido hialurónico promueve la producción de colágeno, contribuyendo así a una piel más radiante y saludable.",
    duration: '30 minutos',
    generalType: 'estetica',    
    img: 'assets/imgs/thumbnail720.jpg',
    name: 'Eliminar verrugas',
    price: 150,
    results: 'Inmediato',
    searchTerm: "verrugas lunares puntos de rubi rubí eliminacion",
    sessionsAvailable: {
      "1": 30,
      "2": 55,        
      "3": 75,
      "6": 100
    },
    shortDescription: "El ácido hialurónico es un tratamiento cosmético que rejuvenece la piel, rellenando arrugas y restaurando el volumen facial perdido.",
    slug: 'eliminacion-verrugas',
    type: 'cuerpo',
    treatmentDay: "",
    treatmentTools: "jeringuilla",
    whiteText: true,
    requiredFaq: [
      {
        title: "s",
        description: "a"
      }
    ],
    optionalFaq: [
      {
        title: "s",
        description: "a"
      }
    ]
  },
  // Finish verrugas and similar above
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios del tratamiento facial completo que combina radiofrecuencia, Dermapen y luz LED son variados y abarcan aspectos clave de la salud y apariencia de la piel:",
      listElements: [
        {
          title: "Reducción del mal olor corporal: ",
          text: "La sudoración excesiva puede contribuir al desarrollo de mal olor corporal. Al controlar el exceso de sudor, se puede minimizar este problema y mejorar la higiene personal.",
        },
        {
          title: "Disminución de manchas en la ropa: ",
          text: "La hiperhidrosis puede provocar manchas de sudor en la ropa, lo que puede ser embarazoso e incómodo. Al reducir la cantidad de sudor producido, se pueden evitar estas manchas y preservar la ropa."
        },                          
      ]
    },
    condition: 'exceso de sudor',
    description: "La hiperhidrosis es un trastorno caracterizado por una producción excesiva de sudor, que puede afectar diversas partes del cuerpo, como las axilas, las manos, los pies y el rostro. Este problema puede causar molestias significativas y afectar la calidad de vida de quienes lo padecen, ya que puede provocar manchas en la ropa, mal olor corporal y dificultades en las interacciones sociales. ",
    duration: '1 hora',
    generalType: 'aparatologia',    
    img: 'assets/imgs/thumbnail720.jpg',
    name: 'Tratamiento hiperhidrosis',
    price: 300,
    results: 'Inmediato',
    searchTerm: "hiperhidrosis sudor exceso",    
    shortDescription: "La hiperhidrosis es un trastorno que causa sudoración excesiva, afectando áreas como las axilas, las manos y los pies. Puede causar incomodidad y afectar la calidad de vida. Se pueden usar antitranspirantes especiales o procedimientos médicos como la toxina botulínica para tratarla.",
    slug: 'tratamiento-hiperhidrosis',
    type: 'piel',
    treatmentDay: "",
    treatmentTools: "",
    whiteText: true,
    requiredFaq: [
      {
        title: "s",
        description: "a"
      }
    ],
    optionalFaq: [
      {
        title: "s",
        description: "a"
      }
    ]
  },
  // tratamiento reductor goes below this
  {
    backToWork: 'Inmediato',
    benefits: {
      initialText: "Los beneficios del tratamiento facial completo que combina radiofrecuencia, Dermapen y luz LED son variados y abarcan aspectos clave de la salud y apariencia de la piel:",
      listElements: [
        {
          title: "Relleno de arrugas y líneas finas: ",
          text: "El ácido hialurónico es eficaz para suavizar y rellenar arrugas y líneas de expresión, proporcionando una apariencia más juvenil.",
        },
        {
          title: "Restauración de volumen facial: ",
          text: "Ayuda a restaurar el volumen perdido en áreas como mejillas, labios y mentón, mejorando la plenitud y contorno facial."
        },
        {
          title: "Sin tiempo de inactividad: ",
          text: "No requiere tiempo de recuperación significativo, lo que permite a los pacientes reanudar sus actividades diarias de inmediato."
        },
        {
          title: "Resultados naturales y duraderos: ",
          text: "Proporciona resultados inmediatos y naturales que pueden durar varios meses, dependiendo del tipo de ácido hialurónico utilizado y la zona tratada."
        }                  
      ]
    },
    condition: 'mordida cruzada, fricción dientes',
    description: "El tratamiento para el bruxismo es un enfoque terapéutico dirigido a reducir o eliminar el hábito involuntario de rechinar o apretar los dientes, conocido como bruxismo. Este trastorno puede provocar diversos problemas dentales, musculares y de articulación temporomandibular. El objetivo es aliviar el dolor y prevenir el daño dental y muscular asociado con el bruxismo.",
    duration: '1 hora',
    generalType: 'estetica',    
    img: 'assets/imgs/thumbnail720.jpg',
    name: 'Tratamiento bruxismo',
    price: 300,
    results: '1 mes',
    searchTerm: "bruxismo dientes apretar",    
    shortDescription: "El tratamiento para el bruxismo busca reducir o eliminar el rechinar y apretar involuntario de los dientes",
    slug: 'tratamiento-hiperhidrosis',
    type: 'cara',
    treatmentDay: "",
    treatmentTools: "",
    whiteText: true,
    requiredFaq: [
      {
        title: "s",
        description: "a"
      }
    ],
    optionalFaq: [
      {
        title: "s",
        description: "a"
      }
    ]
  },
]

export default TreatmentsList







// {
//   image: '',
//   description: 'Tratamiento completo para pieles maduras, manchas, acné o cicatrices, proporcionando resultados efectivos y rejuvenecimiento cutáneo.',
//   shortDescription: 'Tratamiento completo para pieles maduras, manchas, acné o cicatrices',
//   duration: '1 hora',
//   name: 'Tratamiento manchas, acné o cicatrices',
//   price: 100,
//   results: '',
//   slug: 'tratamiento-completo-pieles-maduras',
//   searchTerm: 'radiofrecuencia dermapen luz led',
//   type: 'cara',
//   generalType: 'aparatologia / estetica',
//   backToWork: '',
//   treatmentTools: 'radiofrecuencia dermapen luz led',
//   condition: '',//   
// },
// {
//   image: '',
//   description: 'Tratamiento facial combinado de radiofrecuencia y luz LED, diseñado para rejuvenecer la piel, mejorar la elasticidad y reducir los signos del envejecimiento.',
//   shortDescription: 'Radiofrecuencia facial + luz LED',
//   duration: '1 hora',
//   name: 'Radiofrecuencia facial + luz LED',
//   price: 45,
//   results: '',
//   slug: 'radiofrecuencia-facial-luz-led',
//   searchTerm: 'radiofrecuencia luz led combate flacidez',
//   type: 'cara',
//   generalType: 'aparatologia / estetica',
//   backToWork: '',
//   treatmentTools: 'radiofrecuencia luz led',
//   condition: '',//   
// },
// {
//   image: '',
//   description: 'Combina la tecnología de micropunción con la iluminación LED para mejorar la textura de la piel, estimular la producción de colágeno y promover la regeneración celular, logrando una piel más rejuvenecida y luminosa.',
//   shortDescription: 'Dermapen + luz LED',
//   duration: '1 hora',
//   name: 'Dermapen + luz LED',
//   price: 80,
//   results: '',
//   slug: 'dermapen-luz-led',
//   searchTerm: 'dermapen luz led',
//   type: 'cara',
//   generalType: 'aparatologia / estetica',
//   backToWork: '',
//   treatmentTools: 'dermapen luz led',
//   condition: '',//   
// },
// {
//   image: '',
//   description: 'Tratamiento para la eliminación de verrugas, lunares o angiomas mediante procedimientos especializados y seguros.',
//   shortDescription: 'Eliminar verrugas, lunares o puntos rubí',
//   duration: '30 min',
//   name: 'Eliminar verrugas, lunares o puntos rubí',
//   price: 30,
//   results: '',
//   slug: 'eliminar-verrugas-lunares-puntos-rubi',
//   searchTerm: '',
//   type: '',
//   generalType: '',
//   backToWork: '',
//   treatmentTools: '',
//   condition: '',//   
// },
// {
//   image: '',
//   description: 'Tratamiento con PlasmaPen para corregir el exceso de piel y las arrugas en la cara y el cuello, ofreciendo resultados rejuvenecedores y naturales.',
//   shortDescription: 'Tratamiento exceso de piel y arrugas cara y cuello con PlasmaPen',
//   duration: '1 hora',
//   name: 'Tratamiento exceso de piel y arrugas',
//   price: 1000,
//   results: '',
//   slug: 'tratamiento-exceso-piel-arrugas-plasmapen',
//   searchTerm: '',
//   type: '',
//   generalType: '',
//   backToWork: '',
//   treatmentTools: '',
//   condition: '',//   
// },
// {
//   image: '',
//   description: 'Tratamiento facial con láser para eliminar arañas vasculares, cuperosis/rosácea y telangiectasias, mejorando la apariencia de la piel de manera eficaz y no invasiva.',
//   shortDescription: 'Laser facial arañas vasculares, cuperosis/rosácea, telangiectasia',
//   duration: '45 min',
//   name: 'Laser facial arañas vasculares, cuperosis/rosácea, telangiectasia',     
//   price: 80,
//   results: '',
//   slug: 'laser-facial-aranas-vasculares',
//   searchTerm: 'laser facial arañas vasculares cuperosis rosacea telangiectasia', 
//   type: 'cara',
//   generalType: 'estetica',
//   backToWork: '',
//   treatmentTools: 'laser',
//   condition: '',//   
// },
// {
//   image: '',
//   description: 'Rejuvenecimiento facial con láser para mejorar la textura de la piel, reducir arrugas y promover un aspecto más joven y luminoso.',
//   shortDescription: 'Laser facial rejuvenecimiento',
//   duration: '45 min',
//   name: 'Laser facial rejuvenecimiento',
//   price: 50,
//   results: '',
//   slug: 'laser-facial-rejuvenecimiento',
//   searchTerm: 'laser facial rejuvenecimiento',
//   type: 'cara',
//   generalType: 'estetica',
//   backToWork: '',
//   treatmentTools: 'laser',
//   condition: '',//   
// },
// {
//   image: '',
//   description: 'Depilación Triphase en la cara, un tratamiento eficaz para la eliminación del vello en cualquier área facial mediante un método trifásico de última generación.',
//   shortDescription: 'Depilación Triphase en cara',
//   duration: '30 min',
//   name: 'Depilación Triphase',
//   price: 30,
//   results: '',
//   slug: 'depilacion-triphase-cara',
//   searchTerm: 'depilacion triphase cara',
//   type: 'cara',
//   generalType: 'depilacion',
//   backToWork: '',
//   treatmentTools: 'triphase',
//   condition: '',//   
// },
// {
//   image: '',
//   description: 'Micropigmentación desde (requiere evaluación), un procedimiento estético para realzar y definir los rasgos faciales mediante la aplicación precisa de pigmentos.',
//   shortDescription: 'Micropigmentación desde (Necesaria valoración)',
//   duration: '?',
//   name: 'Micropigmentación',
//   price: 150,
//   results: '',
//   slug: 'micropigmentacion',
//   searchTerm: 'micropigmentacion',
//   type: 'cara',
//   generalType: 'estetica',
//   backToWork: '',
//   treatmentTools: '',
//   condition: 'Necesaria valoración',//   
// },
// {
//   image: '',
//   description: 'Ayuda con las piernas cansadas, relaja y es antiestres',
//   duration: '30 minutos',
//   name: 'Presoterapia',
//   price: 16,
//   results: '3 - 6 semanas',
//   slug: 'presoterapia',
//   searchTerm: 'piernas cansadas relajante antiestres presoterapia',
//   type: 'cuerpo',
//   backToWork: 'De inmediato',//   
// },
// {
//   image: '/imgs/thumbnail720.jpg',
//   description: 'Depilación Triphase en la cara, un tratamiento eficaz para la eliminación del vello en cualquier área facial mediante un método trifásico de última generación.',
//   duration: '30 minutos',
//   name: 'Depilación laser',
//   price: 40,
//   results: '3 - 6 semanas',
//   slug: 'depilacion-laser',
//   searchTerm: 'microdermoabrasion radiofrequencia led mascarilla masaje',        
//   type: 'cuerpo',
//   backToWork: 'De inmediato',//   
// },
// {
//   image: '/imgs/bin/bgnew.jpg',
//   duration: '30 minutos',
//   name: 'Depilación laser',
//   price: 40,
//   results: '3 - 6 semanas',
//   slug: 'depilacion-laser',
//   searchTerm: 'microdermoabrasion radiofrequencia led mascarilla masaje',        
//   type: 'cuerpo',
//   backToWork: 'De inmediato',//   
// }
// = [
//   {
//     image: "/imgs/bin/bgnew.jpg",
//     description: "Elimina verrugas, lunares y puntos de rubí. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus fugit dolores expedita qui quibusdam non totam aut maiores quasi, harum deleniti error provident enim quis saepe aspernatur asperiores distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus fugit dolores expedita qui quibusdam non totam aut maiores quasi, harum deleniti error provident enim quis saepe aspernatur asperiores distinctio!",
//     shortDescription:"Elimina verrugas, lunares y puntos de rubí",
//     duration: "30 minutos",
//     name: "Limpieza facial",
//     price: 30,
//     results: "3 - 6 semanas",
//     slug: "limpieza-facial",
//     searchTerm: "microdermoabrasion radiofrequencia led mascarilla masaje",
//     type: "cara",
//     generalType: "aparatologia / estetica",
//     backToWork: "De inmediato",
//     treatmentTools: "",
//     condition: "",
//     sessionsAvailable: "",
//     transparentBg: false,
//   },
//   //aparatologia face
//   {
//     "image": "",
//     "description": "Tratamiento de limpieza facial completa que revitaliza y purifica la piel, eliminando impurezas y promoviendo una apariencia saludable y luminosa.",
//     "shortDescription": "Limpieza facial completa",
//     "duration": "1 hora",
//     "name": "Limpieza facial completa",
//     "price": 50,
//     "results": "",
//     "slug": "limpieza-facial-completa",
//     "searchTerm": "microdermoabrasion extraccion radiofrecuencia mascarilla masaje luz led",
//     "type": "cara",
//     "generalType": "aparatologia / estetica",
//     "backToWork": "",
//     "treatmentTools": "microdermoabrasion extraccion radiofrecuencia mascarilla masaje luz led",
//     "condition": ""
//   },
//   {
//     "image": "",
//     "description": "Tratamiento completo para pieles maduras, manchas, acné o cicatrices, proporcionando resultados efectivos y rejuvenecimiento cutáneo.",
//     "shortDescription": "Tratamiento completo para pieles maduras, manchas, acné o cicatrices",
//     "duration": "1 hora",
//     "name": "Tratamiento manchas, acné o cicatrices",
//     "price": 100,
//     "results": "",
//     "slug": "tratamiento-completo-pieles-maduras",
//     "searchTerm": "radiofrecuencia dermapen luz led",
//     "type": "cara",
//     "generalType": "aparatologia / estetica",
//     "backToWork": "",
//     "treatmentTools": "radiofrecuencia dermapen luz led",
//     "condition": ""
//   },
//   {
//     "image": "",
//     "description": "Tratamiento facial combinado de radiofrecuencia y luz LED, diseñado para rejuvenecer la piel, mejorar la elasticidad y reducir los signos del envejecimiento.",
//     "shortDescription": "Radiofrecuencia facial + luz LED",
//     "duration": "1 hora",
//     "name": "Radiofrecuencia facial + luz LED",
//     "price": 45,
//     "results": "",
//     "slug": "radiofrecuencia-facial-luz-led",
//     "searchTerm": "radiofrecuencia luz led combate flacidez",
//     "type": "cara",
//     "generalType": "aparatologia / estetica",
//     "backToWork": "",
//     "treatmentTools": "radiofrecuencia luz led",
//     "condition": ""
//   },
//   {
//     "image": "",
//     "description": "Combina la tecnología de micropunción con la iluminación LED para mejorar la textura de la piel, estimular la producción de colágeno y promover la regeneración celular, logrando una piel más rejuvenecida y luminosa.",
//     "shortDescription": "Dermapen + luz LED",
//     "duration": "1 hora",
//     "name": "Dermapen + luz LED",
//     "price": 80,
//     "results": "",
//     "slug": "dermapen-luz-led",
//     "searchTerm": "dermapen luz led",
//     "type": "cara",
//     "generalType": "aparatologia / estetica",
//     "backToWork": "",
//     "treatmentTools": "dermapen luz led",
//     "condition": ""
//   },
//   {
//     "image": "",
//     "description": "Tratamiento para la eliminación de verrugas, lunares o angiomas mediante procedimientos especializados y seguros.",
//     "shortDescription": "Eliminar verrugas, lunares o puntos rubí",
//     "duration": "30 min",
//     "name": "Eliminar verrugas, lunares o puntos rubí",
//     "price": 30,
//     "results": "",
//     "slug": "eliminar-verrugas-lunares-puntos-rubi",
//     "searchTerm": "",
//     "type": "",
//     "generalType": "",
//     "backToWork": "",
//     "treatmentTools": "",
//     "condition": ""
//   },
//   {
//     "image": "",
//     "description": "Tratamiento con PlasmaPen para corregir el exceso de piel y las arrugas en la cara y el cuello, ofreciendo resultados rejuvenecedores y naturales.",
//     "shortDescription": "Tratamiento exceso de piel y arrugas cara y cuello con PlasmaPen",
//     "duration": "1 hora",
//     "name": "Tratamiento exceso de piel y arrugas",
//     "price": 1000,
//     "results": "",
//     "slug": "tratamiento-exceso-piel-arrugas-plasmapen",
//     "searchTerm": "",
//     "type": "",
//     "generalType": "",
//     "backToWork": "",
//     "treatmentTools": "",
//     "condition": ""
//   },
//   {
//     "image": "",
//     "description": "Tratamiento facial con láser para eliminar arañas vasculares, cuperosis/rosácea y telangiectasias, mejorando la apariencia de la piel de manera eficaz y no invasiva.",
//     "shortDescription": "Laser facial arañas vasculares, cuperosis/rosácea, telangiectasia",
//     "duration": "45 min",
//     "name": "Laser facial arañas vasculares, cuperosis/rosácea, telangiectasia",
//     "price": 80,
//     "results": "",
//     "slug": "laser-facial-aranas-vasculares",
//     "searchTerm": "laser facial arañas vasculares cuperosis rosacea telangiectasia",
//     "type": "cara",
//     "generalType": "estetica",
//     "backToWork": "",
//     "treatmentTools": "laser",
//     "condition": ""
//   },
//   {
//     "image": "",
//     "description": "Rejuvenecimiento facial con láser para mejorar la textura de la piel, reducir arrugas y promover un aspecto más joven y luminoso.",
//     "shortDescription": "Laser facial rejuvenecimiento",
//     "duration": "45 min",
//     "name": "Laser facial rejuvenecimiento",
//     "price": 50,
//     "results": "",
//     "slug": "laser-facial-rejuvenecimiento",
//     "searchTerm": "laser facial rejuvenecimiento",
//     "type": "cara",
//     "generalType": "estetica",
//     "backToWork": "",
//     "treatmentTools": "laser",
//     "condition": ""
//   },
//   // {
//   //   "image": "",
//   //   "description": "Tratamiento de rejuvenecimiento facial intensivo con láser, diseñado para mejorar la textura y apariencia de la piel, estimulando la producción de colágeno y reduciendo los signos del envejecimiento.",
//   //   "shortDescription": "Laser facial",
//   //   "duration": "1 hora",
//   //   "name": "Laser facial rejuvenecimiento intensivo",
//   //   "price": 80,
//   //   "results": "",
//   //   "slug": "laser-facial-rejuvenecimiento-intensivo",
//   //   "searchTerm": "laser facial rejuvenecimiento intensivo",
//   //   "type": "cara",
//   //   "generalType": "estetica",
//   //   "backToWork": "",
//   //   "treatmentTools": "laser",
//   //   "condition": ""
//   // },
//   {
//     "image": "",
//     "description": "Depilación Triphase en la cara, un tratamiento eficaz para la eliminación del vello en cualquier área facial mediante un método trifásico de última generación.",
//     "shortDescription": "Depilación Triphase en cara",
//     "duration": "30 min",
//     "name": "Depilación Triphase",
//     "price": 30,
//     "results": "",
//     "slug": "depilacion-triphase-cara",
//     "searchTerm": "depilacion triphase cara",
//     "type": "cara",
//     "generalType": "depilacion",
//     "backToWork": "",
//     "treatmentTools": "triphase",
//     "condition": ""
//   },
//   {
//     "image": "",
//     "description": "Micropigmentación desde (requiere evaluación), un procedimiento estético para realzar y definir los rasgos faciales mediante la aplicación precisa de pigmentos.",
//     "shortDescription": "Micropigmentación desde (Necesaria valoración)",
//     "duration": "?",
//     "name": "Micropigmentación",
//     "price": 150,
//     "results": "",
//     "slug": "micropigmentacion",
//     "searchTerm": "micropigmentacion",
//     "type": "cara",
//     "generalType": "estetica",
//     "backToWork": "",
//     "treatmentTools": "",
//     "condition": "Necesaria valoración"
//   },
  

//   //aparatologia body
//   { 
//     image: "",
//     description: "Ayuda con las piernas cansadas, relaja y es antiestres",
//     duration: "30 minutos",
//     name: "Presoterapia",
//     price: 16,
//     results: "3 - 6 semanas",
//     slug: "presoterapia",
//     searchTerm: "piernas cansadas relajante antiestres presoterapia",
//     type: "cuerpo",
//     backToWork: "De inmediato",
//   },
//   { 
//     image: "/imgs/thumbnail720.jpg",
//     description: "Depilación Triphase en la cara, un tratamiento eficaz para la eliminación del vello en cualquier área facial mediante un método trifásico de última generación.",
//     duration: "30 minutos",
//     name: "Depilación laser",
//     price: 40,
//     results: "3 - 6 semanas",
//     slug: "depilacion-laser",
//     searchTerm: "microdermoabrasion radiofrequencia led mascarilla masaje",
//     type: "cuerpo",
//     backToWork: "De inmediato",
//   },
//   { 
//     image: "/imgs/bin/bgnew.jpg",
//     duration: "30 minutos",
//     name: "Depilación laser",
//     price: 40,
//     results: "3 - 6 semanas",
//     slug: "depilacion-laser",
//     searchTerm: "microdermoabrasion radiofrequencia led mascarilla masaje",
//     type: "cuerpo",
//     backToWork: "De inmediato",
//   },
// ]