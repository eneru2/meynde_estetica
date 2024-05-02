// Sources for treatments images
  // https://www.pexels.com/search/first%20visit/
  // https://www.pexels.com/photo/specialist-doing-laser-treatment-in-spa-salon-5069611/
  // https://www.pexels.com/photo/female-patient-doing-cosmetology-procedure-4207236/
  // https://www.pexels.com/photo/crop-unrecognizable-beautician-applying-clay-mask-to-clients-face-3985349/
  // Gustavo Fring ... pexels

let TreatmentsList = [
  // Cara
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Algunos de los beneficios del ácido hialurónico:",
      listElements: [
        {
          title: "Relleno de arrugas y líneas finas: ",
          text: "El ácido hialurónico es eficaz para suavizar y rellenar arrugas y líneas de expresión, proporcionando una apariencia más juvenil.",
        },
        {
          title: "Restauración de volumen facial: ",
          text: "Ayuda a restaurar el volumen perdido en áreas como mejillas, labios y mentón, mejorando el volumen y contorno facial."
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
    description: "El ácido hialurónico es un producto utilizado para rejuvenecer la piel, rellenar arrugas y restaurar el volumen facial perdido con el tiempo. Este compuesto naturalmente presente en el cuerpo humano se infiltra en áreas específicas para mejorar la hidratación, elasticidad y firmeza de la piel, ofreciendo resultados instantáneos y de larga duración. Además de su capacidad para suavizar arrugas y líneas finas, el ácido hialurónico promueve la producción de colágeno, contribuyendo así a una piel más radiante y saludable.",
    duration: '30 minutos',
    generalType: 'estetica',    
    img: 'imagenes/thumbnail720.jpg',
    name: 'Ácido hialurónico',
    price: 150,
    results: '3 - 4 semanas',
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
        title: "¿Qué es el ácido hialurónico y cómo funciona en tratamientos estéticos?",
        description: "El ácido hialurónico es una sustancia naturalmente presente en el cuerpo humano que tiene la capacidad única de retener el agua. En tratamientos estéticos, se utiliza para rellenar arrugas, restaurar volumen facial perdido y mejorar la hidratación y la elasticidad de la piel."
      }
    ],
    optionalFaq: [
      {
        title: "¿Cuánto tiempo duran los resultados de los tratamientos con ácido hialurónico?",
        description: "La duración de los resultados puede variar según la fórmula utilizada y la zona tratada, pero generalmente los efectos pueden durar entre 6 meses y 1 año. Después de este tiempo, el ácido hialurónico se degrada de forma natural en el cuerpo y es reabsorbido."
      },
      {
        title: "¿Qué es el ácido hialurónico y cómo funciona en tratamientos estéticos?",
        description: "El ácido hialurónico es una sustancia naturalmente presente en el cuerpo humano que tiene la capacidad única de retener el agua. En tratamientos estéticos, se utiliza para rellenar arrugas, restaurar volumen facial perdido y mejorar la hidratación y la elasticidad de la piel."
      },
      {
        title: "¿Para qué áreas del rostro se puede utilizar el ácido hialurónico?",
        description: "El ácido hialurónico se puede utilizar en diversas áreas del rostro, incluyendo los labios, las mejillas, las líneas de expresión alrededor de la boca, así como para definir el contorno facial y corregir la nariz."
      },
      {
        title: "¿Hay algún cuidado especial después de recibir un tratamiento con ácido hialurónico?",
        description: "Es recomendable evitar la exposición excesiva al sol y el ejercicio intenso durante las primeras 24-48 horas después del tratamiento. También se aconseja evitar el maquillaje pesado y los tratamientos faciales intensos durante al menos una semana."
      },
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios de este tratamiento relajante muscular incluyen:",
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
    description: "Nuestro tratamiento relajante muscular ofrece una solución efectiva para suavizar las líneas de expresión y arrugas faciales, proporcionando una apariencia rejuvenecida y descansada. Mediante microinyecciones localizadas de neuromoduladores, este procedimiento relaja los músculos faciales involucrados en la formación de arrugas. Disfrute de una piel más tersa y revitalizada sin la necesidad de intervenciones quirúrgicas invasivas.",
    duration: '30 minutos',
    generalType: 'estetica',    
    img: 'imagenes/thumbnail720.jpg',
    name: 'Relajante muscular',
    price: 100,
    results: '1 - 4 semanas',
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
      },
    ],
    optionalFaq: [
      {
        title: "¿En qué consiste el tratamiento relajante muscular?",
        description: "El tratamiento relajante muscular consiste en la aplicación de una sustancia especializada en áreas específicas del rostro para relajar los músculos responsables de las arrugas y líneas de expresión."
      },
      {
        title: "¿Cuánto tiempo dura el efecto del tratamiento?",
        description: "Los resultados del tratamiento suelen durar entre tres y seis meses, dependiendo de factores individuales como el metabolismo y el estilo de vida del paciente."
      },
      {
        title: "¿Es doloroso el procedimiento?",
        description: "La mayoría de los pacientes experimentan solo una ligera molestia durante el procedimiento. Se puede aplicar un anestésico tópico para minimizar cualquier incomodidad."
      },
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios del tratamiento facial completo que combina radiofrecuencia, Dermapen y luz LED son variados y abarcan aspectos clave de la salud y apariencia de la piel:",
      listElements: [
        {
          title: "Reafirmación Cutánea: ",
          text: "La radiofrecuencia estimula la producción de colágeno, mejorando la elasticidad de la piel y reduciendo la flacidez.",
        },
        {
          title: "Reducción de Arrugas y Líneas de Expresión: ",
          text: "El Dermapen, mediante microagujas, fomenta la regeneración celular, suavizando las arrugas y líneas finas."
        },
        {
          title: "Mejora de la Textura y Tono de la Piel: ",
          text: "El Dermapen también ayuda a reducir manchas y cicatrices, promoviendo una piel más uniforme y suave."
        },
        {
          title: "Estimulación del Flujo Sanguíneo: ",
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
    description: "El facial completo combina tres avanzadas técnicas para abordar de manera integral las preocupaciones estéticas más comunes, como manchas cutáneas, arrugas y flacidez. La radiofrecuencia se utiliza para estimular la producción de colágeno y mejorar la elasticidad de la piel, mientras que el Dermapen, mediante microagujas, promueve la regeneración celular y la reducción de manchas. La terapia de luz LED complementa el proceso, ofreciendo beneficios antiinflamatorios y estimulando la circulación sanguínea. Este enfoque combinado ofrece resultados notables, logrando una piel más firme, uniforme y rejuvenecida.",
    duration: '1 hora',
    generalType: 'aparatologia',    
    img: 'imagenes/thumbnail720.jpg',
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
        title: "¿Hay algún tiempo de recuperación después del tratamiento?",
        description: "Por lo general, no se requiere un tiempo de recuperación prolongado después del tratamiento. Es posible que se experimente enrojecimiento o sensibilidad leve en la piel, pero esto suele ser temporal y desaparece en poco tiempo (1-2 días aprox.). Se recomienda evitar la exposición directa al sol y utilizar protector solar después del tratamiento durante al menos una semana."
      },
      {
        title: "¿Es doloroso el tratamiento?",
        description:"La mayoría de los pacientes experimentan una sensación tolerable durante el tratamiento. Se puede aplicar crema anestésica tópica para minimizar cualquier molestia. Los niveles de incomodidad pueden variar según la sensibilidad individual de la piel y el umbral de dolor."
      },
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "El tratamiento facial ofrece una serie de beneficios para la piel y el bienestar en general:",
      listElements: [
        {
          title: "Rejuvenecimiento de la piel: ",
          text: "Al eliminar las células muertas y estimular la regeneración celular, la piel adquiere un aspecto más joven y fresco.",
        },
        {
          title: "Limpieza profunda: ",
          text: "La exfoliación, microdermoabrasión y extracción eliminan impurezas, puntos negros y células muertas, dejando la piel limpia y libre de obstrucciones.",
        },
        {
          title: "Estimulación del colágeno: ",
          text: "La radiofrecuencia ayuda a tensar la piel y promover la producción de colágeno, lo que contribuye a una apariencia más firme y elástica.",
        },
        {
          title: "Hidratación y nutrición: ",
          text: "La aplicación de mascarillas personalizadas proporciona hidratación profunda y nutrientes esenciales para mantener la piel saludable y radiante.",
        },
      ]
    },
    condition: '',
    description: `El tratamiento facial combina diversas técnicas para rejuvenecer la piel. Inicia con una exfoliación suave, seguida de microdermoabrasión para eliminar células muertas y promover la regeneración celular. Luego, se realiza una extracción para eliminar impurezas y puntos negros. El tratamiento de radiofrecuencia ayuda a tensar la piel y estimular la producción de colágeno. La terapia con LED aborda problemas específicos como el acné o la hiperpigmentación. Se aplica una mascarilla personalizada para hidratar, calmar o purificar la piel, seguida de un relajante masaje facial para mejorar la circulación y obtener una apariencia radiante y saludable.`,
    duration: '1 hora',
    generalType: 'aparatologia / estetica',    
    img: 'imagenes/thumbnail720.jpg',
    name: 'Limpieza facial',
    price: 50,
    results: '3 - 4 semanas',
    searchTerm: 'microdermoabrasion radiofrequencia led mascarilla masaje',        
    sessionsAvailable: '',    
    shortDescription: 'Elimina verrugas, lunares y puntos de rubíLa limpieza facial combina microdermoabrasión, radiofrecuencia, terapia LED, mascarilla y masaje para rejuvenecer y revitalizar la piel, proporcionando una apariencia radiante y saludable.',
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
        title: "¿En qué consiste un tratamiento de limpieza facial?",
        description: "Un tratamiento de limpieza facial combina diversas técnicas para rejuvenecer y revitalizar la piel. Incluye exfoliación, microdermoabrasión, extracción de impurezas, tratamiento de radiofrecuencia, terapia con LED, aplicación de mascarilla y masaje facial."
      },
      {
        title: "¿Cuáles son los beneficios de un tratamiento facial?",
        description: "Los beneficios incluyen rejuvenecimiento de la piel, limpieza profunda, estimulación del colágeno, tratamiento específico para problemas de la piel, hidratación y nutrición, así como relajación y bienestar general."
      },
      {
        title: "¿Hay algún efecto secundario o precaución a tener en cuenta?",
        description: "En general, los tratamientos faciales son seguros, pero pueden producir enrojecimiento temporal o sensibilidad en la piel. Es importante seguir las recomendaciones del profesional y evitar la exposición excesiva al sol después del tratamiento."
      },
      {
        title: "¿Es doloroso un tratamiento facial?",
        description: "En general, los tratamientos faciales no son dolorosos, aunque algunas técnicas como la extracción de impurezas pueden causar molestias leves. Sin embargo, la mayoría de las personas encuentran que el tratamiento es relajante y reconfortante."
      }
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Algunos beneficios de la depilación facial con tres láseres:",
      listElements: [
        {
          title: "Resultados duraderos: ",
          text: "A diferencia de otros métodos de depilación, la depilación con láser ofrece resultados a largo plazo, ya que puede inhibir el crecimiento del vello de manera significativa después de varias sesiones.",
        },
        {
          title: "Comodidad: ",
          text: "A medida que se realizan más sesiones, el vello facial se vuelve más delgado y menos notable, lo que puede reducir la necesidad de tratamientos frecuentes en el futuro."
        },
        {
          title: "Mejora de la apariencia: ",
          text: "Al eliminar el vello no deseado en el rostro, este tratamiento puede mejorar la apariencia general de la piel, dejándola más suave, tersa y uniforme."
        },
        {
          title: "Ahorro de tiempo y dinero a largo plazo: ",
          text: "Aunque puede requerir varias sesiones para obtener resultados óptimos, la depilación facial con láser puede ahorrar tiempo y dinero a largo plazo al reducir la necesidad de tratamientos de depilación más frecuentes."
        },        
      ]
    },
    condition: 'Para vello',
    description: "La depilación facial con tres láseres (láser facial, fotodepilación y diodo) es un tratamiento estético avanzado que utiliza tres tipos de láseres para eliminar el vello no deseado en el rostro. Cada láser está diseñado para atacar diferentes tipos de vello y pigmentación de la piel, lo que garantiza resultados efectivos y duraderos. Este procedimiento es seguro, preciso y proporciona una solución a largo plazo para aquellos que desean una piel facial suave y sin vello.",
    duration: '30 minutos',
    generalType: 'aparatologia',    
    img: '/imagenes/thumbnail720.jpg',
    name: 'Depilación facial',
    price: "A partir de 30",
    results: 'Inmediato',
    searchTerm: "laser láser facial fotodepilación diodo",            
    shortDescription: "La depilación facial con 3 láseres es un tratamiento avanzado que usa diferentes láseres para eliminar el vello no deseado en el rostro de manera segura y efectiva.",
    slug: 'depilacion-facial',
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
        title: "¿Qué es la depilación facial con tres láseres?",
        description: "La depilación facial con tres láseres es un tratamiento estético avanzado que utiliza tres tipos de láseres para eliminar el vello no deseado en el rostro."
      },
      {
        title: "¿Cómo funciona la depilación facial con tres láseres?",
        description: "Cada láser utilizado en el tratamiento está diseñado para atacar diferentes tipos de vello y pigmentación de la piel. Esto permite una eliminación precisa y efectiva del vello facial."
      },
      {
        title: "¿Es doloroso el tratamiento?",
        description: "La mayoría de las personas experimentan una sensación de calor o picazón durante el tratamiento, pero es generalmente tolerable. Algunas áreas del rostro pueden ser más sensibles que otras, pero se pueden aplicar cremas anestésicas para reducir cualquier molestia."
      },
      {
        title: "¿Cuántas sesiones se necesitan para ver resultados?",
        description: "El número de sesiones necesarias puede variar según el tipo de vello y la pigmentación de la piel. Sin embargo, se recomienda un curso de varias sesiones para lograr resultados óptimos."
      },
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Algunos beneficios de la depilación corporal con tres láseres:",
      listElements: [
        {
          title: "Resultados duraderos: ",
          text: "A diferencia de otros métodos de depilación, la depilación con láser ofrece resultados a largo plazo, ya que puede inhibir el crecimiento del vello de manera significativa después de varias sesiones.",
        },
        {
          title: "Comodidad: ",
          text: "A medida que se realizan más sesiones, el vello se vuelve más delgado y menos notable, lo que puede reducir la necesidad de tratamientos frecuentes en el futuro."
        },
        {
          title: "Mejora de la apariencia: ",
          text: "Al eliminar el vello no deseado en el cuerpo, este tratamiento puede mejorar la apariencia general de la piel, dejándola más suave, tersa y uniforme."
        },
        {
          title: "Ahorro de tiempo y dinero a largo plazo: ",
          text: "Aunque puede requerir varias sesiones para obtener resultados óptimos, la depilación facial con láser puede ahorrar tiempo y dinero a largo plazo al reducir la necesidad de tratamientos de depilación más frecuentes."
        },        
      ]
    },
    condition: 'Para vello',
    description: "La depilación corporal con tres láseres (láser facial, fotodepilación y diodo) es un tratamiento estético avanzado que utiliza tres tipos de láseres para eliminar el vello no deseado en el rostro. Cada láser está diseñado para atacar diferentes tipos de vello y pigmentación de la piel, lo que garantiza resultados efectivos y duraderos. Este procedimiento es seguro, preciso y proporciona una solución a largo plazo para aquellos que desean una piel suave y sin vello.",
    duration: '15 minutos',
    generalType: 'aparatologia',    
    img: '/imagenes/thumbnail720.jpg',
    name: 'Depilación corporal',
    price: "A partir de 30",
    results: 'Inmediato',
    searchTerm: "laser láser facial fotodepilación diodo",            
    shortDescription: "La depilación corporal con 3 láseres es un tratamiento avanzado que usa diferentes láseres para eliminar el vello no deseado en el rostro de manera segura y efectiva.",
    slug: 'depilacion-corporal',
    type: 'cuerpo',
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
        title: "¿Qué es la depilación corporal con tres láseres?",
        description: "La depilación corporal con tres láseres es un tratamiento estético avanzado que utiliza tres tipos de láseres para eliminar el vello no deseado en el cuerpo."
      },
      {
        title: "¿Cómo funciona la depilación corporal con tres láseres?",
        description: "Cada láser utilizado en el tratamiento está diseñado para atacar diferentes tipos de vello y pigmentación de la piel. Esto permite una eliminación precisa y efectiva del vello corporal."
      },
      {
        title: "¿Es doloroso el tratamiento?",
        description: "La mayoría de las personas experimentan una sensación de calor o picazón durante el tratamiento, pero es generalmente tolerable. Algunas áreas del rostro pueden ser más sensibles que otras, pero se pueden aplicar cremas anestésicas para reducir cualquier molestia."
      },
      {
        title: "¿Cuántas sesiones se necesitan para ver resultados?",
        description: "El número de sesiones necesarias puede variar según el tipo de vello y la pigmentación de la piel. Sin embargo, se recomienda un curso de varias sesiones para lograr resultados óptimos."
      },
     
    ]
  },
  
  {
    backToWork: 'De inmediato',
    benefits: 
      {
        initialText: "Los beneficios del tratamiento combinado de dermapen y luz LED para marcas de acné y cicatrices incluyen:",
        listElements: [
          {
            title: "Reducción de las marcas de acné: ",
            text: "El dermapen estimula la producción de colágeno, lo que ayuda a rellenar y suavizar las cicatrices causadas por el acné, mejorando la textura general de la piel.",
          },
          {
            title: "Mejora de la textura de la piel: ",
            text: "El proceso de microagujas del dermapen promueve la renovación celular y la regeneración de la piel, lo que resulta en una piel más suave y uniforme."
          },
          {
            title: "Aclaramiento de la piel: ",
            text: "La terapia de luz LED ayuda a reducir la pigmentación y la inflamación asociadas con las marcas de acné y cicatrices, lo que resulta en una apariencia más clara y radiante."
          },
          {
            title: "Estimulación del proceso de curación: ",
            text: "Tanto el dermapen como la terapia de luz LED estimulan la circulación sanguínea y promueven la cicatrización de la piel, lo que acelera el proceso de recuperación y mejora la apariencia de las cicatrices."
          },
          {
            title: "Tratamiento no invasivo y seguro: ",
            text: "Este tratamiento es una alternativa no invasiva a los procedimientos quirúrgicos, con un tiempo de recuperación mínimo y menos riesgos asociados."
          },              
        ]
      },
    condition: 'Para manchas, marcas de acné y cicatrices',
    description: "Este tratamiento combina el uso del dermapen, una herramienta que estimula la producción de colágeno y promueve la regeneración de la piel, con la terapia de luz LED, que ayuda a reducir la inflamación y aclarar las marcas de acné y cicatrices. El dermapen utiliza microagujas para crear microcanales en la piel, estimulando la reparación cutánea. La terapia de luz LED, por otro lado, utiliza diferentes longitudes de onda para abordar diversos problemas de la piel, incluidas las marcas de acné y las cicatrices, promoviendo una piel más uniforme y radiante.",
    duration: '1 hora',
    generalType: 'aparatologia',    
    img: '/imagenes/thumbnail720.jpg',
    // Tratamiento para rosácea arañas vasculares y enrojecimiento
    name: "Marcas de acné y cicatrices",
    price: "80",
    results: '3 - 4 semanas',
    searchTerm: "luz led dermapen facial completo dermapen carbón carbon activo laser láser facial",            
    shortDescription: "Tratamiento combinado de dermapen y luz LED para reducir marcas de acné y cicatrices. El dermapen estimula la producción de colágeno, mientras que la terapia de luz LED reduce la inflamación y aclara la piel.",
    slug: 'marcas-de-acne-y-cicatrices',
    type: 'cara',
    treatmentDay: "",
    treatmentTools: "dermapen luz led",
    whiteText: true,
    requiredFaq: [
      {
        title: "s",
        description: "a"
      }
    ],
    optionalFaq: [
      {
        title: "¿En qué consiste el tratamiento de dermapen y luz LED para marcas de acné y cicatrices?",
        description: "El tratamiento combina el uso de un dispositivo de dermapen, que utiliza microagujas para estimular la producción de colágeno y promover la regeneración de la piel, con la terapia de luz LED, que ayuda a reducir la inflamación y aclarar las marcas de acné y cicatrices."
      },
      {
        title: "¿Cómo funciona el dermapen?",
        description: "El dermapen crea microcanales en la piel con microagujas, lo que estimula la renovación celular y la producción de colágeno. Esto mejora la textura de la piel y reduce la apariencia de las cicatrices."
      },
      {
        title: "¿Qué hace la terapia de luz LED en este tratamiento?",
        description: "La terapia de luz LED utiliza diferentes longitudes de onda para abordar problemas específicos de la piel. En este tratamiento, ayuda a reducir la inflamación y aclara la piel, lo que mejora la apariencia de las marcas de acné y cicatrices."        
      },
      {
        title: "¿Cuáles son los beneficios de este tratamiento?",
        description: "Los beneficios incluyen la reducción de las marcas de acné y cicatrices, mejora en la textura y claridad de la piel, estimulación del proceso de curación, resultados duraderos y un enfoque no invasivo y seguro."
      },
      {
        title: "¿Hay algún tiempo de inactividad después del tratamiento?",
        description: "Es posible experimentar enrojecimiento y sensibilidad leve en la piel después del tratamiento, pero por lo general desaparece en uno o dos días. Se recomienda evitar la exposición directa al sol y seguir las instrucciones del profesional para el cuidado posterior de la piel."
      },
    ]
  },
  // Columna tratamientos en folleto
  // Cara aun
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios de la eliminación de verrugas son:",
      listElements: [
        {
          title: "Efectividad: ",
          text: "Los métodos usados son altamente efectivos para eliminar verrugas, ofreciendo resultados visibles después de una sola sesión en muchos casos.",
        },
        {
          title: "Mínimamente invasivos: ",
          text: "Este procedimiento es mínimamente invasivo, lo que significa que no requieren incisiones quirúrgicas ni puntos de sutura."
        },
        {
          title: "Versatilidad: ",
          text: "Este tratamiento puede utilizarse para tratar una variedad de verrugas en diferentes áreas del cuerpo, ofreciendo una solución versátil para pacientes con diversas necesidades dermatológicas."
        },
      ]
    },
    condition: 'arrugas líneas de expresión lineas de expresion',
    description: "La eliminación de verrugas con medios físicos es un procedimiento dermatológico utilizado para eliminar verrugas de la piel de manera segura y efectiva. Durante este tratamiento, se emplean dispositivos o técnicas que utilizan energía o frío extremo para eliminar la verruga. Estos métodos son ideales para pacientes que desean deshacerse de verrugas sin cirugía ni cicatrices permanentes.",
    duration: '30 minutos',
    generalType: 'estetica',    
    img: 'imagenes/thumbnail720.jpg',
    name: 'Eliminar verrugas',
    price: 30,
    results: '2-3 semanas',
    searchTerm: "verrugas lunares puntos de rubi rubí eliminacion plasma pen crioterapia",
    sessionsAvailable: {
      "1": 30,
      "2": 55,        
      "3": 75,
      "6": 100
    },
    shortDescription: "La eliminación de verrugas con plasma pen o crioterapia es un procedimiento dermatológico no invasivo que utiliza energía de plasma o frío extremo para eliminar verrugas de la piel de manera segura y efectiva, sin dejar cicatrices permanentes.",
    slug: 'eliminacion-verrugas',
    type: 'piel',
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
        title: "¿Qué es la eliminación de verrugas?",
        description: "Es un procedimiento dermatológico que utiliza medios físicos para eliminar verrugas de la piel de manera segura y efectiva."
      },
      {
        title: "¿Cuántas sesiones se necesitan?",
        description: "La cantidad de sesiones necesarias puede variar según el tamaño y la cantidad de verrugas a tratar, pero en muchos casos, una sola sesión es suficiente para obtener resultados satisfactorios."
      },
      {
        title: "¿Cuándo se pueden ver los resultados?",
        description: "Los resultados suelen ser visibles poco después del tratamiento, con una mejora continua a medida que la piel se cura por completo en los días posteriores al procedimiento."
      },      
    ]
  },
  // Finish verrugas and similar above



  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "El tratamiento facial con láser ofrece una serie de beneficios para la piel:",
      listElements: [
        {
          title: "Reducción de manchas cutáneas: ",
          text: "La tecnología láser puede ayudar a reducir la apariencia de manchas oscuras o hiperpigmentación en la piel, proporcionando un tono más uniforme.",
        },
        {
          title: "Mejora de cicatrices del acné: ",
          text: "Las cicatrices causadas por el acné pueden ser tratadas con láser para mejorar su apariencia, suavizando la textura de la piel y reduciendo su visibilidad."
        },   
        {
          title: "Control del exceso de grasa:",
          text: "El láser puede ayudar a controlar el exceso de producción de grasa en la piel, lo que puede contribuir a reducir el acné y mejorar la apariencia general de la piel."
        },
        {
          title: "Tratamiento de lesiones vasculares:",
          text: "Las lesiones vasculares, como las venas varicosas o las arañas vasculares, pueden ser tratadas con láser para reducir su apariencia y mejorar la circulación sanguínea en la piel."
        },
        {
          title: "Hidratación adicional:",
          text: "Algunos tratamientos láser pueden estimular la producción de colágeno en la piel, lo que puede mejorar su hidratación y elasticidad."
        },
        {
          title: "Efecto de levantamiento facial:",
          text: "Al estimular la producción de colágeno y mejorar la elasticidad de la piel, el tratamiento láser puede tener un efecto de \"levantamiento\" facial, reduciendo la apariencia de líneas finas y arrugas y proporcionando una apariencia más juvenil."
        }                       
      ]
    },
    condition: '',
    description: "El tratamiento facial con láser es un procedimiento no invasivo que aborda de manera integral los diversos aspectos de la piel. Esta técnica combina la avanzada tecnología de luz pulsada estética (APL) con el neodimio de Yag y la aplicación de cosmetología de vanguardia. Ofrece beneficios como la reducción de manchas cutáneas, la mejora de cicatrices causadas por el acné y el control del exceso de grasa en la piel. Además, es efectivo en el tratamiento de lesiones vasculares, proporciona una hidratación adicional y tiene un efecto de levantamiento facial.",
    duration: '45 minutos',
    generalType: 'aparatologia',    
    img: 'imagenes/thumbnail720.jpg',
    name: 'Tratamiento láser facial',
    price: 60,
    results: '3-4 semanas',
    searchTerm: "laser facial láser",    
    shortDescription: "La hiperhidrosis es un trastorno que causa sudoración excesiva, afectando áreas como las axilas, las manos y los pies. Puede causar incomodidad y afectar la calidad de vida. Se pueden usar antitranspirantes especiales o procedimientos médicos como la toxina botulínica para tratarla.",
    slug: 'laser-facial',
    type: 'cara',
    treatmentDay: "",
    treatmentTools: "",
    whiteText: true,
    requiredFaq: [
      {
        title: "Reducción de manchas cutáneas: ",
        description: "La tecnología láser puede ayudar a reducir la apariencia de manchas oscuras o hiperpigmentación en la piel, proporcionando un tono más uniforme."
      },
      {
        title: "¿Cómo sé si necesito tratamiento para la hiperhidrosis?",
        description: "Si experimentas sudoración excesiva que afecta tu vida diaria, como dejar manchas en la ropa, dificultades en las interacciones sociales o incomodidad física, es recomendable consultar a un médico para evaluar si necesitas tratamiento."
      },
      
    ],
    optionalFaq: [
      {
        title: "¿Qué es el tratamiento facial con láser?",
        description: "El tratamiento facial con láser es un procedimiento no invasivo que utiliza tecnología láser para abordar diversos aspectos de la piel, como la reducción de manchas cutáneas, la mejora de cicatrices del acné y el control del exceso de grasa, entre otros."
      },
      {
        title: "¿Cómo funciona el tratamiento facial con láser?",
        description: "El tratamiento facial con láser utiliza diferentes tipos de láser, como el láser de luz pulsada estética (APL) y el láser de neodimio YAG, para dirigirse a diferentes problemas de la piel. Estos láseres pueden penetrar en las capas de la piel y estimular la producción de colágeno, reducir la pigmentación no deseada y mejorar la textura de la piel."
      },
      {
        title: "¿Cuáles son los beneficios del tratamiento facial con láser?",
        description: "Los beneficios del tratamiento facial con láser incluyen la reducción de manchas cutáneas, la mejora de cicatrices causadas por el acné, el control del exceso de grasa en la piel, el tratamiento de lesiones vasculares, la hidratación adicional y el efecto de levantamiento facial."
      },
      {
        title: "¿Es doloroso el tratamiento facial con láser?",
        description: "El nivel de molestias durante el tratamiento facial con láser puede variar según la sensibilidad individual de la piel y el tipo de láser utilizado. Sin embargo, muchos pacientes experimentan solo una molestia leve durante el procedimiento, que generalmente es bien tolerada."
      },
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios del tratamiento para la hiperhidrosis pueden incluir:",
      listElements: [
        {
          title: "Reducción de la apariencia de la celulitis",
          text: "La combinación de la mesoterapia con Alidya ayuda a reducir la apariencia de la celulitis, lo que puede resultar en una piel más suave y uniforme."
        },
        {
          title: "Mejora de la textura de la piel",
          text: "Al reducir la acumulación de grasa y mejorar la circulación en las áreas tratadas, el tratamiento puede mejorar la textura de la piel, haciéndola más suave y tonificada."
        },
        {
          title: "Resultados visibles",
          text: "Con el uso regular del tratamiento, los pacientes pueden experimentar resultados visibles en términos de reducción de celulitis y mejora de la apariencia de la piel."
        },
        {
          title: "Técnica sencilla y no invasiva",
          text: "La aplicación del tratamiento mediante la técnica de mesoterapia es relativamente sencilla y no invasiva, lo que significa que los pacientes pueden experimentar beneficios estéticos sin necesidad de someterse a procedimientos quirúrgicos."
        },
        {
          title: "Compatibilidad con el estilo de vida ocupado",
          text: "Dado que la técnica de mesoterapia no requiere tiempos prolongados de recuperación, el tratamiento es compatible con un estilo de vida ocupado, permitiendo a los pacientes continuar con sus actividades diarias normales."
        }                       
      ]
    },
    condition: '',
    description: "Nuestro tratamiento para la celulitis combina la eficacia de la mesoterapia con el innovador producto Alidya. Diseñado para el tratamiento de la celulitis, esta se aplica mediante una sencilla técnica de mesoterapia. Trabajamos para abordar las preocupaciones estéticas relacionadas con la celulitis, ofreciendo resultados visibles y una piel más suave y tonificada.",
    duration: '30 minutos',
    generalType: 'aparatologia',    
    img: 'imagenes/thumbnail720.jpg',
    name: 'Tratamiento para celulitis',
    price: 80,
    results: '3-4 semanas',
    searchTerm: "laser facial láser",    
    shortDescription: "La hiperhidrosis es un trastorno que causa sudoración excesiva, afectando áreas como las axilas, las manos y los pies. Puede causar incomodidad y afectar la calidad de vida. Se pueden usar antitranspirantes especiales o procedimientos médicos como la toxina botulínica para tratarla.",
    slug: 'celulitis',
    type: 'cuerpo',
    treatmentDay: "",
    treatmentTools: "",
    whiteText: true,
    requiredFaq: [
      {
        title: "¿Qué es la hiperhidrosis?",
        description: "La hiperhidrosis es un trastorno caracterizado por una producción excesiva de sudor, que puede afectar áreas como las axilas, las manos, los pies y el rostro."
      },
      {
        title: "¿Cómo sé si necesito tratamiento para la hiperhidrosis?",
        description: "Si experimentas sudoración excesiva que afecta tu vida diaria, como dejar manchas en la ropa, dificultades en las interacciones sociales o incomodidad física, es recomendable consultar a un médico para evaluar si necesitas tratamiento."
      },
    ],
    optionalFaq: [
      {
        title: "¿Cuáles son los beneficios del tratamiento para la celulitis?",
        description: "El tratamiento para la celulitis ofrece una serie de beneficios, incluyendo la reducción de la apariencia de la celulitis, mejora de la textura de la piel, resultados visibles, técnica sencilla y no invasiva, y compatibilidad con el estilo de vida ocupado."
      },
      {
        title: "¿En qué consiste la mesoterapia combinada con Alidya para tratar la celulitis?",
        description: "La mesoterapia combinada con Alidya es un tratamiento que se aplica mediante una técnica sencilla de mesoterapia para abordar la celulitis. Alidya es un producto diseñado específicamente para el tratamiento de la celulitis, y su combinación con la mesoterapia ayuda a mejorar la apariencia de la piel afectada."
      },
      {
        title: "¿Es doloroso el tratamiento para la celulitis?",
        description: "El tratamiento para la celulitis mediante mesoterapia con Alidya generalmente no es doloroso. La técnica de mesoterapia implica la aplicación de pequeñas inyecciones superficiales en la piel, que pueden causar una ligera molestia, pero en general es bien tolerada por la mayoría de los pacientes."
      },
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "La presoterapia ofrece una serie de beneficios, tanto para la salud como para la estética:",
      listElements: [
        {
          title: "Mejora de la circulación sanguínea y linfática: ",
          text: "La presión controlada aplicada durante la presoterapia ayuda a mejorar el flujo sanguíneo y el drenaje linfático, lo que puede reducir la hinchazón y la retención de líquidos en el cuerpo.",
        },
        {
          title: "Eliminación de toxinas: ",
          text: "Al mejorar la circulación, la presoterapia facilita la eliminación de toxinas del cuerpo, lo que puede contribuir a una sensación general de bienestar y mejorar la función del sistema inmunológico."
        },                          
        {
          title: "Reducción de la celulitis: ",
          text: "La presoterapia puede ayudar a reducir la apariencia de la celulitis al estimular la circulación y el drenaje linfático, lo que puede mejorar la textura de la piel y su aspecto general."
        },
        {
          title: "Tonificación de la piel: ",
          text: "Al promover una mejor circulación y eliminar líquidos retenidos, la presoterapia puede ayudar a tonificar la piel, especialmente en áreas como las piernas, el abdomen y los brazos."
        },
      ]
    },
    condition: 'piernas cansadas',
    description: "La presoterapia es un tratamiento no invasivo que utiliza la presión controlada para mejorar la circulación sanguínea y linfática en el cuerpo. Durante una sesión, se aplica compresión intermitente en diferentes partes del cuerpo, lo que ayuda a reducir la retención de líquidos, eliminar toxinas y mejorar la apariencia de la piel, especialmente en áreas como las piernas y el abdomen. Ampliamente utilizada en tratamientos estéticos y terapias de rehabilitación",
    duration: '30 minutos',
    generalType: 'aparatologia',    
    img: 'imagenes/thumbnail720.jpg',
    name: 'Tratamiento presoterapia',
    price: "10 sesiones por 120",
    results: '3-4 semanas',
    searchTerm: "presoterapia piernas cansadas retención de líquidos circulación liquidos",    
    shortDescription: "La hiperhidrosis es un trastorno que causa sudoración excesiva, afectando áreas como las axilas, las manos y los pies. Puede causar incomodidad y afectar la calidad de vida. Se pueden usar antitranspirantes especiales o procedimientos médicos como la toxina botulínica para tratarla.",
    slug: 'presoterapia',
    type: 'cuerpo',
    treatmentDay: "",
    treatmentTools: "",
    whiteText: true,
    requiredFaq: [
      {
        title: "¿Qué es la hiperhidrosis?",
        description: "La hiperhidrosis es un trastorno caracterizado por una producción excesiva de sudor, que puede afectar áreas como las axilas, las manos, los pies y el rostro."
      },
      {
        title: "¿Cómo sé si necesito tratamiento para la hiperhidrosis?",
        description: "Si experimentas sudoración excesiva que afecta tu vida diaria, como dejar manchas en la ropa, dificultades en las interacciones sociales o incomodidad física, es recomendable consultar a un médico para evaluar si necesitas tratamiento."
      },
    ],
    optionalFaq: [
      {
        title: "¿Cómo funciona la presoterapia?",
        description: "Durante una sesión de presoterapia, se aplican compresiones intermitentes en diferentes partes del cuerpo, lo que ayuda a estimular la circulación y el drenaje linfático."
      },
      {
        title: "¿Cuáles son los beneficios de la presoterapia?",
        description: "Los beneficios incluyen mejoría en la circulación sanguínea y linfática, reducción de la retención de líquidos, eliminación de toxinas, reducción de la celulitis, tonificación de la piel y alivio de la pesadez en las piernas, entre otros."
      },
      {
        title: "¿Es la presoterapia dolorosa?",
        description: "No, la presoterapia es generalmente indolora y puede incluso resultar relajante para muchas personas."
      },
    ]
  },
  {
    backToWork: 'De inmediato',
    benefits: {
      initialText: "Los beneficios del tratamiento para la hiperhidrosis pueden incluir:",
      listElements: [
        {
          title: "Reducción de la celulitis: ",
          text: "La cavitación ayuda a descomponer las células grasas y la grasa localizada, lo que puede reducir la apariencia de la celulitis en áreas problemáticas del cuerpo.",
        },
        {
          title: "Mejora de la circulación: ",
          text: "La presoterapia, al aplicar presión controlada sobre diferentes partes del cuerpo, puede mejorar la circulación sanguínea y linfática, lo que ayuda a eliminar toxinas y a reducir la retención de líquidos."
        },
        {
          title: "Reafirmación de la piel: ",
          text: "La radiofrecuencia estimula la producción de colágeno y elastina en la piel, lo que puede conducir a una piel más firme y tersa, reduciendo la flacidez y mejorando su aspecto general."
        },
        {
          title: "Tratamiento integral: ",
          text: "Al combinar estos tres tratamientos en uno, se aborda de manera integral la celulitis y otros problemas estéticos, lo que puede proporcionar resultados más completos y satisfactorios en comparación con el uso individual de cada técnica."
        },
      ]
    },
    condition: 'piernas cansadas',
    description: "Transforma tu cuerpo con nuestro tratamiento que combina cavitación, presoterapia y radiofrecuencia para abordar de manera integral la celulitis, al mismo tiempo que reafirma la piel y mejora la circulación. La cavitación descompone las células grasas y la grasa localizada, la presoterapia reduce la retención de líquidos y la radiofrecuencia estimula la producción de colágeno para una piel más firme y tersa.",
    duration: '1 hora',
    generalType: 'aparatologia',    
    img: 'imagenes/thumbnail720.jpg',
    name: 'Cavitación, presoterapia y radiofrequencia',
    price: "5 sesiónes por 150",
    results: '3 meses',
    searchTerm: "presoterapia piernas cansadas retención de líquidos circulación liquidos",    
    shortDescription: "La hiperhidrosis es un trastorno que causa sudoración excesiva, afectando áreas como las axilas, las manos y los pies. Puede causar incomodidad y afectar la calidad de vida. Se pueden usar antitranspirantes especiales o procedimientos médicos como la toxina botulínica para tratarla.",
    slug: 'cavitacion-presoterapia-radiofrequencia',
    type: 'cuerpo',
    treatmentDay: "",
    treatmentTools: "",
    whiteText: true,
    requiredFaq: [
      {
        title: "¿Qué es la hiperhidrosis?",
        description: "La hiperhidrosis es un trastorno caracterizado por una producción excesiva de sudor, que puede afectar áreas como las axilas, las manos, los pies y el rostro."
      },
      {
        title: "¿Cómo sé si necesito tratamiento para la hiperhidrosis?",
        description: "Si experimentas sudoración excesiva que afecta tu vida diaria, como dejar manchas en la ropa, dificultades en las interacciones sociales o incomodidad física, es recomendable consultar a un médico para evaluar si necesitas tratamiento."
      },
    ],
    optionalFaq: [
      {
        title: "¿En qué consiste este tratamiento?",
        description: "Este tratamiento combina tres técnicas no invasivas: cavitación, presoterapia y radiofrecuencia. La cavitación descompone las células grasas y la grasa localizada, la presoterapia reduce la retención de líquidos y la radiofrecuencia estimula la producción de colágeno para una piel más firme y tersa."
      },
      {
        title: "¿Cuáles son los beneficios de este tratamiento?",
        description: "Los beneficios incluyen la reducción de la celulitis, mejora de la circulación, reafirmación de la piel, tratamiento integral de múltiples problemas estéticos y el hecho de ser un procedimiento no invasivo."
      },
      {
        title: "¿Se requiere algún tipo de cuidado especial antes o después de las sesiones?",
        description: "Es posible que se recomienden ciertos cuidados antes y después de las sesiones para maximizar los resultados y minimizar los efectos secundarios. Esto puede incluir mantenerse hidratado, evitar la exposición al sol, usar prendas de compresión después de la presoterapia, y seguir una dieta saludable y un régimen de ejercicio regular. Se debe seguir cualquier recomendación específica proporcionada por el profesional."
      },
    ]
  },
  // tratamiento reductor goes below this
  //castigados
  // {
  //   backToWork: 'Inmediato',
  //   benefits: {
  //     initialText: "Algunos de los beneficios del tratamiento para el bruxismo son:",
  //     listElements: [
  //       {
  //         title: "Prevención de Daños Dentales: ",
  //         text: "El tratamiento ayuda a prevenir el desgaste excesivo de los dientes y la posible fractura dental causada por el rechinar y apretar involuntario.",
  //       },
  //       {
  //         title: "Alivio del Dolor: ",
  //         text: "Reduce el dolor facial, de cabeza y mandibular asociado con el bruxismo, mejorando la calidad de vida del paciente."
  //       },
  //       {
  //         title: "Mejora de la Calidad del Sueño: ",
  //         text: "Al reducir el bruxismo nocturno, el tratamiento puede mejorar la calidad del sueño y reducir los despertares nocturnos involuntarios."
  //       },
  //       {
  //         title: "Prevención de problemas musculares: ",
  //         text: "Ayuda a prevenir complicaciones más graves a largo plazo, como la pérdida de dientes o el deterioro de la articulación temporomandibular."
  //       }                  
  //     ]
  //   },
  //   condition: 'mordida cruzada, fricción dientes',
  //   description: "El tratamiento para el bruxismo es un enfoque terapéutico dirigido a reducir o eliminar el hábito involuntario de rechinar o apretar los dientes, conocido como bruxismo. Este trastorno puede provocar diversos problemas dentales, musculares y de articulación temporomandibular. El objetivo es aliviar el dolor y prevenir el daño dental y muscular asociado con el bruxismo.",
  //   duration: '1 hora',
  //   generalType: 'estetica',    
  //   img: 'imagenes/thumbnail720.jpg',
  //   name: 'Tratamiento bruxismo',
  //   price: 300,
  //   results: '1 mes',
  //   searchTerm: "bruxismo dientes apretar",    
  //   shortDescription: "El tratamiento para el bruxismo busca reducir o eliminar el rechinar y apretar involuntario de los dientes",
  //   slug: 'tratamiento-bruxismo',
  //   type: 'cara',
  //   treatmentDay: "",
  //   treatmentTools: "",
  //   whiteText: true,
  //   requiredFaq: [
  //     {
  //       title: "s",
  //       description: "a"
  //     }
  //   ],
  //   optionalFaq: [
  //     {
  //       title: "¿Qué es el bruxismo y cómo afecta a mi salud bucal?",
  //       description: "El bruxismo es un trastorno caracterizado por el rechinar o apretar involuntario de los dientes, generalmente durante el sueño. Esto puede provocar desgaste dental, fracturas, dolor facial, mandibular y de cabeza, así como problemas musculares y de articulación temporomandibular."
  //     },      
  //     {
  //       title: "¿Cuáles son los síntomas comunes del bruxismo?",
  //       description: "Los síntomas comunes incluyen dolor de cabeza, dolor facial, mandibular o en el cuello, desgaste dental, sensibilidad dental, dolor de oído, y dificultad para abrir o cerrar la boca."
  //     },
  //   ]
  // },
  // {
  //   backToWork: 'De inmediato',
  //   benefits: {
  //     initialText: "Los beneficios del tratamiento para la hiperhidrosis pueden incluir:",
  //     listElements: [
  //       {
  //         title: "Reducción del mal olor corporal: ",
  //         text: "La sudoración excesiva puede contribuir al desarrollo de mal olor corporal. Al controlar el exceso de sudor, se puede minimizar este problema y mejorar la higiene personal.",
  //       },
  //       {
  //         title: "Disminución de manchas en la ropa: ",
  //         text: "La hiperhidrosis puede provocar manchas de sudor en la ropa, lo que puede ser embarazoso e incómodo. Al reducir la cantidad de sudor producido, se pueden evitar estas manchas y preservar la ropa."
  //       },                          
  //     ]
  //   },
  //   condition: 'exceso de sudor',
  //   description: "La hiperhidrosis es un trastorno caracterizado por una producción excesiva de sudor, que puede afectar diversas partes del cuerpo, como las axilas, las manos, los pies y el rostro. Este problema puede causar molestias significativas y afectar la calidad de vida de quienes lo padecen, ya que puede provocar manchas en la ropa, mal olor corporal y dificultades en las interacciones sociales. ",
  //   duration: '1 hora',
  //   generalType: 'aparatologia',    
  //   img: 'imagenes/thumbnail720.jpg',
  //   name: 'Tratamiento hiperhidrosis',
  //   price: 300,
  //   results: 'Inmediato',
  //   searchTerm: "hiperhidrosis sudor exceso",    
  //   shortDescription: "La hiperhidrosis es un trastorno que causa sudoración excesiva, afectando áreas como las axilas, las manos y los pies. Puede causar incomodidad y afectar la calidad de vida. Se pueden usar antitranspirantes especiales o procedimientos médicos como la toxina botulínica para tratarla.",
  //   slug: 'tratamiento-hiperhidrosis',
  //   type: 'piel',
  //   treatmentDay: "",
  //   treatmentTools: "",
  //   whiteText: true,
  //   requiredFaq: [
  //     {
  //       title: "¿Qué es la hiperhidrosis?",
  //       description: "La hiperhidrosis es un trastorno caracterizado por una producción excesiva de sudor, que puede afectar áreas como las axilas, las manos, los pies y el rostro."
  //     },
  //     {
  //       title: "¿Cómo sé si necesito tratamiento para la hiperhidrosis?",
  //       description: "Si experimentas sudoración excesiva que afecta tu vida diaria, como dejar manchas en la ropa, dificultades en las interacciones sociales o incomodidad física, es recomendable consultar a un médico para evaluar si necesitas tratamiento."
  //     },
  //   ],
  //   optionalFaq: [
  //     {
  //       title: "¿Qué es la hiperhidrosis?",
  //       description: "La hiperhidrosis es un trastorno caracterizado por una producción excesiva de sudor, que puede afectar áreas como las axilas, las manos, los pies y el rostro."
  //     },
  //     {
  //       title: "¿Cómo sé si necesito tratamiento para la hiperhidrosis?",
  //       description: "Si experimentas sudoración excesiva que afecta tu vida diaria, como dejar manchas en la ropa, dificultades en las interacciones sociales o incomodidad física, es recomendable consultar a un médico para evaluar si necesitas tratamiento."
  //     },
  //   ]
  // },
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