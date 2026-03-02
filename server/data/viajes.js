console.log("✅ DATA VIAJES CARGADA DESDE:", __filename);

const viajes = [
  {
    id: "japon",
    titulo: "Japón",
    imagenes: [
      "/img/japon1.jpeg",
      "/img/japon2.jpeg",
      "/img/japon3.jpeg",
      "/img/japon4.jpeg"
    ],
    duracion: "19 días",
    salida: "8 de Marzo 2026",
    precio: 8500,
    tipo: "",
    descripcion: "Japón es un viaje donde el tiempo se dobla: el silencio de los templos convive con el ritmo eléctrico de las ciudades, los cerezos pintan paisajes efímeros y cada calle cuenta una historia. Una experiencia que se siente, se contempla y se recuerda mucho después de volver.",
    incluye: [
      "Acompañamiento desde MVD",
      "Vuelos internacionales y vuelos internos",
      "Traslados internos y asistencia en español durante todo el recorrido",
      "Alojamiento en hoteles seleccionados",
      "Desayunos diarios",
      "4 almuerzos y una cena tradicional japonesa (Ryokan con onsen)",
      "Excursiones y experiencias destacadas", 
      "Tokyo: Visita guiada por el Santuario Meiji, el templo Senso-ji, barrio de Asakusa, Palacio Imperial y Ginza", 
      "Hakone: paseo en barco por el lago Ashi con vistas al Monte Fuji (sujeto al clima), Valle de Owakudani y Museo al aire libre", "Kyoto: Templo Kinkaku-ji (Pabellón dorado), Santuario Fushimi Inri, Bosque de Bambú de Arashiyama, Barrio de Gion. Nara: Templo Todaji, Buda gigante y Parque de los ciervos", 
      "Kanazawa: Jardín Kenrokuen, Mercado de Omi-cho y barrio de geishas Higashi Chaya",
      "Shirakawago y Takayama: Casas tradicionales gassho-zukuri, barrio histórico y exposición de carrozas",
      "Gero: Alojamiento en Ryokan con baño termal japonés (onsen)",
      "Osaka: Paseo por Dotonbori y visita al Castillo de Osaka", 
      "Transporte: tren bala y trenes express entre ciudades", 
      "Dias libres en Kyoto y Tokyo para explorar por cuenta propia o realizar excursiones opcionales como Hiroshima y Miyajima",
      "4 dias en Dubai."
    ],
    pdf: "/pdfs/itinerario-japon.pdf",
    whatsappText: "Hola! Quiero consultar por el viaje a Japón."
  },
  {
    id: "ruta-iberica",
    titulo: "España y Portugal",
    imagenes: [
      "img/españaportugal1.jpeg",
      "img/españaportugal2.jpeg",
      "img/españaportugal3.jpeg",
      "img/españaportugal4.jpeg"
    ],
    duracion: "17 días",
    salida: "3 de Mayo 2026",
    precio: 4900,
    tipo: "Viaje grupal acompañado",
    descripcion: "España y Portugal es un viaje de alma cálida y ritmo relajado, donde la historia se vive en cada calle y la vida se disfruta sin apuro. Ciudades llenas de carácter, tradiciones vivas y paisajes costeros que invitan a perderse y disfrutar.",
    incluye: [
      "Acompañamiento desde MVD",
      "Aéreos internacionales",
      "Traslados aeropuerto/hotel/aeropuerto",
      "Alojamiento y desayuno buffet",
      "Trasporte en autobús de turismo",
      "Acompañamiento de un guía durante todo el recorrido del autobús",
      "Visitas guiadas de Madrid, Salamanca, Santiago de Compostela, Oporto, Lisboa, Mérida, Sevilla, Córdoba, Granada",
      "Visitas con servicio de audio individual",
      "Entrada bodega Oporto, Entrada teatro y anfiteatro romanos en Mérida",
      "Recorrido nocturno en Madrid",
      "Entrada a la Alhambra en Granada",
      "Entrada Mezquita - Catedral en Córdoba",
      "Seguro de protección y asistencia en viaje",
      "Bolsa de viaje."
    ],
    imagen: "/img/grupal2.jpeg",
    pdf: "/pdfs/itinerario-ruta-iberica.pdf",
    whatsappText: "Hola! Quiero consultar por el viaje España y Portugal."
  },
  {
    id: "colores-de-mi-tierra",
    titulo: "España | Italia | Francia y Suiza",
    imagenes: [
      "img/colores1.jpeg",
      "img/colores2.jpeg",
      "img/colores3.jpeg",
      "img/colores4.jpeg"
    ],
    duracion: "17 días",
    salida: "8 de Marzo 2026",
    precio: 4710,
    tipo: "Viaje grupal acompañado",
    descripcion: "Un viaje por el corazón cultural de Europa, donde el arte, la elegancia y la pasión se combinan con paisajes inolvidables. Ciudades icónicas, gastronomía excepcional y escenarios alpinos de postal hacen de este recorrido una experiencia europea completa.",
    incluye: [
      "Vuelos internacionales",
      "Traslados incluidos",
      "Guia desde MVD",
      "15 noches de alojamiento con desayuno incluido",
      "Transporte en autobús con guía todo el recorrido",
      "Noche de tablao flamenco con cena de tapas en Madrid",
      "El Vaticano: Su museo y Capilla Sixtina",
      "Excursión Roma Antigua o Roma Imprescindible incluye cena",
      "Visita con almuerzo en Florencia",
      "Visita y Cena en Venecia",
      "Visita y Cena en Zurich",
      "Visitas panorámicas con guía local: Madrid, Barcelona, Roma, Venecia, Florencia y París",
      "Paseos incluidos: degustación de tapas en Madrid, paseo en barco en Venecia, visitas exteriores en la Sagrada Familia, entre otros",
      "Tiempo libre en cada ciudad para explorar o realizar excursiones opcionales como Toledo, Capri, Mónaco, Versalles, Brujas."
    ],
    imagen: "/img/grupal2.jpeg",
    pdf: "/pdfs/itinerario-ruta-iberica.pdf",
    whatsappText: "Hola! Quiero consultar por el viaje España, Francia, Italia y Suiza"
  },
  {
    id: "tailandia",
    titulo: "Tailandia",
    imagenes: [
      "/img/tailandia1.jpeg",
      "/img/tailandia2.jpeg",
      "/img/tailandia3.jpeg",
      "/img/tailandia4.jpeg"
    ],
    duracion: "16 días",
    salida: "7 de Abril 2026",
    precio: 6590,
    tipo: "Viaje grupal acompañado",
    descripcion: "Tailandia es un viaje al corazón del Sudeste Asiático, donde la espiritualidad, los colores y los aromas lo envuelven todo. Templos dorados, naturaleza exuberante y sonrisas eternas acompañan un recorrido que invita a descubrir otra forma de vivir, sentir y mirar el mundo.",
    incluye: [
      "Vuelo intercontinental MVD - Tailandia - MVD",
      "Recepción en aeropuerto y traslados aeropuertos - hoteles",
      "Encuentro con guía y asistencia en el aeropuerto",
      "Desayunos diarios - 4 almuerzos",
      "Tour cultural: Buda de Oro, Palacio Real y Buda Esmeralda, Buda Reclinado",
      "Excursión al mercado sobre la vía del tren y mercado flotante de Damnoen Saduak",
      "Visita a las ruinas de Ayutthaya (templos históricos)",
      "Vuelo hacia Chiang Mai",
      "Medio día en Kanta Elephant Sanctuary: alimentación y baño de elefantes",
      "Excursión a Chiang Rai: Templo Azul, Wat Huay Pla Kang, Templo Blanco y aguas termales",
      "Parque Nacional Doi Inthanon: casada Wachirathan, pagodas reales, caminata por bosque y visita a aldeas locales",
      "Vuelo hacia Phuket",
      "Excursión en barco Phi Phi Bamboo Island: playas, snorkel, mirador, cueva vikinga",
      "Vuelo de regreso a Bangkok."
    ],
    imagen: "/img/grupal2.jpeg",
    pdf: "/pdfs/itinerario-ruta-iberica.pdf",
    whatsappText: "Hola! Quiero consultar por el viaje a Tailandia"
  },
  {
    id: "turquia-y-dubai-abril",
    titulo: "Turquia y Dubai",
    imagenes: [
      "/img/turquiaydubai1.jpeg",
      "/img/turquiaydubai2.jpeg",
      "/img/turquiaydubai3.jpeg",
      "/img/turquiaydubai4.jpeg"
    ],
    duracion: "16 días",
    salida: "14 de Abril 2026",
    precio: 4920,
    tipo: "Viaje grupal acompañado",
    descripcion: "Un encuentro entre dos mundos, la historia milenaria que une Oriente y Occidente y la visión futurista que surge del desierto. Mezquitas, bazares y paisajes únicos se combinan con rascacielos, lujo y modernidad en un viaje de contrastes fascinantes.",
    incluye: [
      "Aéreos internacionales",
      "Traslados de llegada y salida en Estambul y Dubai",
      "Traslados internos en autobús y tren según itinerario",
      "14 noches de alojamiento en hoteles seleccionados",
      "Desayunos diarios",
      "6 cenas incluidas",
      "Excursiones y visitas según el programa",
      "Estambul: recorrido histórico con Santa Sofía, Palacio Topkapi, Mezquita Azul, Hipódromo Romano, Gran Bazar, Bazar Egipcio, paseo en barco por el Bósforo, Palacio de Beylerbeyi, Colina de Çamlica y barrios tradicionales",
      "Ankara: Mausoleo de Atatürk, Castillo de Ankara, barrio de Hamamönü",
      "Capadocia: Valle de Göreme, Uchisar, chimeneas de hadas, valles panorámicos y visita a talleres artesanales",
      "Pamukkale: visita de Hierápolis y del Castillo de Algodón",
      "Éfeso: Teatro Romano, Biblioteca de Celso, Calle de Mármol y Casa de la Virgen María",
      "Dubai: Recorrido clásico por la ciudad (Bastakyia, Dubai Creek, Al Fahidi, Museo de Dubai, mercados tradicionales, Burj Al Arab Mezquita de Jumeirah)",
      "Vuelos internos Turquía (Izmir - Estambul) y Turquía - Dubai",
      "Guia acompañante de habla hispana durante el circuito en Turquia y Dubai",
      "Asistencia permanente de nuestro personal en destino."
    ],
    imagen: "/img/grupal2.jpeg",
    pdf: "/pdfs/itinerario-ruta-iberica.pdf",
    whatsappText: "Hola! Quiero consultar por el viaje a Turquia y Dubai en Abril"
  },
  {
    id: "grecia-abril",
    titulo: "Grecia",
    imagenes: [
      "/img/greciaabril1.jpeg",
      "/img/greciaabril2.jpeg",
      "/img/greciaabril3.jpeg",
      "/img/greciaabril4.jpeg"
    ],
    duracion: "15 días",
    salida: "23 de Abril 2026",
    precio: 5500,
    tipo: "Viaje grupal acompañado",
    descripcion: "Un viaje a los orígenes: templos que desafían al tiempo, islas bañadas por el mar Egeo y paisajes donde la historia y la mitología siguen vivas. Grecia se recorre con los sentidos, entre ruinas eternas, pueblos blancos y atardeceres que parecen detenidos en el tiempo.",
    incluye: [
      "Vuelo intercontinental de ida desde América a Grecia y regreso desde Madrid",
      "Vuelos internos incluidos: Heraklion (Creta) a Rodas y Rodas a Atenas",
      "Todos los traslados aeropuerto/hotel/puerto incluidos en cada destino",
      "Ferries incluidos: Atenas a Mykonos, Mykonos a Santorini, Santorini a Heraklion (Creta)",
      "Alojamiento en hoteles seleccionados con desayuno diario",
      "2 noches en Atenas, 2 noches en Mykonos, 2 noches en Santorini, 2 noches en Heraklion (Creta), 2 noches en Rodas, 1 noche adicional en Atenas y 2 noches en Madrid",
      "City tour en Atenas con visita a la Acrópolis",
      "Paseo en velero tradicional en Santorini con visita a las islas volcánicas Nea Kameni y Palea Kameni (aguas termales)", 
      "Tardes libres en Mykonos y Santorini para disfrutar de sus playas, pueblos y gastronomía",
      "Días completos en Creta y Rodas para recorrer libremente, visitar sitios arqueológicos o descansar",
      "Tiempo libre en Fira y Oía, los pueblos más emblemáticos de Santorini", 
      "Posibilidad de realizar un tour por la ciudad de Madrid al final del viaje", 
      "Asistencia local durante todo el recorrido."
    ],
    imagen: "/img/grupal2.jpeg",
    pdf: "/pdfs/itinerario-ruta-iberica.pdf",
    whatsappText: "Hola! Quiero consultar por el viaje a Grecia en Abril"
  },

  {
    id: "alemania-y-europa-del-este",
    titulo: "Alemania y Europa del Este",
    imagenes: [
      "/img/alemania1.jpeg",
      "/img/alemania2.jpeg",
      "/img/alemania3.jpeg",
      "/img/alemania4.jpeg"
    ],
    duracion: "15 días",
    salida: "23 de Abril 2026",
    precio: 4700,
    tipo: "Viaje grupal acompañado",
    descripcion: "Un recorrido por ciudades llenas de carácter, donde la historia se refleja en castillos, plazas medievales y arquitectura imponente. Desde la solidez alemana hasta el encanto romántico de Europa del Este, este viaje conecta tradiciones, cultura y paisajes que cuentan siglos de historias europeas.",
    incluye: [
      "Vuelo intercontinental desde América a Europa",
      "Traslados durante todo el recorrido",
      "10 noches de alojamiento en hoteles seleccionados con desayuno diario",
      "3 noches en Madrid",
      "Transporte en autobus turístico durante todo el circuito, con guía acompañante",
      "Visitas panorámicas con guía local en: Berlín, Praga, Budapest, Viena y Madrid",
      "Paradas libres en ciudades emblemáticas: Erfurt, Dresde, Bratislava",
      "Tiempo libre en todas las ciudades para disfrutar o realizar excursiones opcionales",
      "Asistencia permanente en destino",
      "Seguro de asistencia al viajero 24/7"
    ],
    imagen: "/img/grupal2.jpeg",
    pdf: "/pdfs/itinerario-ruta-iberica.pdf",
    whatsappText: "Hola! Quiero consultar por el viaje a Alemania y Europa del Este"
  },

  {
    id: "grecia-septiembre",
    titulo: "Grecia",
    imagenes: [
      "/img/greciaabril1.jpeg",
      "/img/greciaabril2.jpeg",
      "/img/greciaabril3.jpeg",
      "/img/greciaabril4.jpeg"
    ],
    duracion: "15 días",
    salida: "11 de Setiembre 2026",
    precio: 6500,
    tipo: "Viaje grupal acompañado",
    descripcion: "Un viaje a los orígenes: templos que desafían al tiempo, islas bañadas por el mar Egeo y paisajes donde la historia y la mitología siguen vivas. Grecia se recorre con los sentidos, entre ruinas eternas, pueblos blancos y atardeceres que parecen detenidos en el tiempo.",
    incluye: [
      "Vuelo intercontinental de ida y vuelta desde América a Grecia",
      "Vuelos internos incluidos: Heraklion (Creta) a Rodas y Rodas a Atenas",
      "Todos los traslados aeropuerto/hotel/puerto",
      "Acompañamiento de guía desde Montevideo",
      "Ferries incluidos: Atenas a Mykonos, Mykonos a Santorini, Santorini a Heraklion (Creta)",
      "Alojamiento en hoteles seleccionados con desayuno",
      "3 noches en Atenas, 2 noches en Mykonos, 2 noches en Santorini, 2 noches en Heraklion (Creta), 2 noches en Rodas y 2 noches en Madrid",
      "City tour en Atenas con visita a la Acrópolis",
      "Paseo en velero tradicional en Santorini con visita a las islas volcánicas Nea Kameni y Palea Kameni (aguas termales)",
      "Tardes libres en Mykonos y Santorini para disfrutar de sus playas, pueblos y gastronomía",
      "Días completos en Creta y Rodas para recorrer libremente, visitar sitios arqueológicos o descansar",
      "Tiempo libre en Fira y Oía, los pueblos más emblemáticos de Santorini", 
      "Posibilidad de realizar un tour por la ciudad de Madrid al final del viaje",
      "Asistencia local durante todo el recorrido."
    ],
    imagen: "/img/grupal2.jpeg",
    pdf: "/pdfs/itinerario-ruta-iberica.pdf",
    whatsappText: "Hola! Quiero consultar por el viaje a Grecia en Setiembre"
  },

  {
    id: "turquia-y-dubai-septiembre",
    titulo: "Turquia y Dubai",
    imagenes: [
      "/img/turquiaydubai1.jpeg",
      "/img/turquiaydubai2.jpeg",
      "/img/turquiaydubai3.jpeg",
      "/img/turquiaydubai4.jpeg"
    ],
    duracion: "18 días",
    salida: "19 de Setiembre 2026",
    precio: 4920,
    tipo: "Viaje grupal acompañado",
    descripcion: "Un encuentro entre dos mundos, la historia milenaria que une Oriente y Occidente y la visión futurista que surge del desierto. Mezquitas, bazares y paisajes únicos se combinan con rascacielos, lujo y modernidad en un viaje de contrastes fascinantes.",
    incluye: [
      "Vuelos Montevideo /Turquia y Dubai",
      "1 tarde de alojamiento en San Pablo",
      "Todos los traslados aeropuerto/hotel en Estambul y Dubái",
      "14 noches de alojamiento en hoteles seleccionados con desayuno diario",
      "5 cenas + 2 almuerzos incluidos en Turquia",
      "1 almuerzo + 1 cena incluidos en Dubai",
      "Visitas panorámicas y entradas según itinerario: Santa Sofía, Palacio de Topkapi y harén, Mezquita Azul, barrio Balat, Gran Bazar, Bazar Egipcio, paseo en barco por el Bósforo",
      "Tren de alta velocidad Estambul - Ankara",
      "Recorrido completo por Ankara, Capadocia, Pamukkale, Éfeso e Izmir",
      "Paseo en globo en Capadoccia",
      "Visita clásica de Dubai con crucero en barco tradicional Abra",
      "Excursión de dia completo a Abu Dhabi con almuerzo Buffet",
      "Safari 4x4 por el desierto con cena BBQ",
      "Tiempo libre en Estambul y Dubai para compras",
      "Asistencia permanente en destino y guía de habla hispana",
      "Seguro de asistencia." 
    ],
    imagen: "/img/grupal2.jpeg",
    pdf: "/pdfs/itinerario-ruta-iberica.pdf",
    whatsappText: "Hola! Quiero consultar por el viaje a Turquia y Dubai"
  },

  {
    id: "colores-de-mi-tierra-octubre",
    titulo: "España, Italia, Francia y Suiza",
    imagenes: [
      "/img/colores1.jpeg",
      "/img/colores2.jpeg",
      "/img/colores3.jpeg",
      "/img/colores4.jpeg"
    ],
    duracion: "18 días",
    salida: "18 de Octubre 2026",
    precio: 4710,
    tipo: "Viaje grupal acompañado",
    descripcion: "Un viaje por el corazón cultural de Europa, donde el arte, la elegancia y la pasión se combinan con paisajes inolvidables. Ciudades icónicas, gastronomía excepcional y escenarios alpinos de postal hacen de este recorrido una experiencia europea completa.",
    incluye: [
      "Vuelos internacionales",
      "Traslados incluidos",
      "Guia desde MVD",
      "17 noches de alojamiento con desayuno incluido",
      "Transporte en autobús con guía todo el recorrido",
      "Visitas panorámicas con guía local: Madrid, Barcelona, Roma, Valencia, Florencia, Paris",
      "Paseos incluidos: Degustación de tapas en Madrid, paseo en barco en Venecia, vistas exteriores en la Sagrada Familia, entre otros",
      "Tiempo libre en cada ciudad para explorar o realizar excursiones opcionales como Toledo, Vaticano, Capri, Mónaco, Versalles, etc",
      "Resumen de recorrido: 4 noches en España, 4 noches en Francia, 6 noches en Italia, 1 noche en Suiza."
    ],
    imagen: "/img/grupal2.jpeg",
    pdf: "/pdfs/itinerario-ruta-iberica.pdf",
    whatsappText: "Hola! Quiero consultar por el viaje a España, Italia, Francia y Suiza"
  },

  {
    id: "tesoros-milenarios",
    titulo: "Tesoros Milenarios",
    imagenes: [
      "/img/tesoros1.jpeg",
      "/img/tesoros2.jpeg",
      "/img/tesoros3.jpeg",
      "/img/tesoros4.jpeg"
    ],
    duracion: "26 días",
    salida: "1 de Octubre 2026",
    precio: 8250,
    tipo: "Viaje grupal acompañado",
    descripcion: "Un viaje por el corazón cultural de Europa, donde el arte, la elegancia y la pasión se combinan con paisajes inolvidables. Ciudades icónicas, gastronomía excepcional y escenarios alpinos de postal hacen de este recorrido una experiencia europea completa.",
    incluye: [
      "TODOS LOS VUELOS: Montevideo/ Estambul/ El Cairo/ Atenas/ Montevideo",
      "Asistencia a la llegada y salida en el aeropuerto por personal de habla hispana",
      "Traslados de llegada y salida del aeropuerto principal en las capitales",
      "19 noches de alojamiento en los hoteles indicados",
      "4 noches a bordo del crucero por el Nilo",
      "Régimen alimenticio según itinerario",
      "EN TURQUÍA: 4 noches de Alojamiento y Desayuno en Estambul, 5 noches de Alojamiento durante el circuito. Régimen de Media Pensión durante el circuito",
      "Traslados de llegada y salida",
      "Visita a la Mezquita de Solimán el Magnifico en Estambul",
      "Excursión en Estambul (Paseo en barco por el Bósforo-Bazar Egipcio)",
      "Entradas y visitas según el itinerario",
      "Guía profesional de habla hispana",
      "Asistencia al viajero 24h/7 en español",
      "EN EGIPTO: 3 noches de Alojamiento y desayuno en El Cairo, 4 noches de Crucero por el Nilo en régimen de pensión completa. Vuelos domésticos (Cairo-Luxor-Aswan-Cairo). Medio día de visita a las pirámides, la esfinge, templo del valle. Entradas y visitas según el itinerario. Guía profesional de habla hispana. Traslados de llegada y salida. Asistencia al viajero 24h/7 en español vía (WhatsApp – Teléfono)",
      "EN GRECIA: 3 noches de Alojamiento y Desayuno en Atenas. 2 noches de Alojamiento y Desayuno en Mykonos. 2 noches de Alojamiento y Desayuno en Santorini. Todos los traslados de llegada y salida en las islas y en Atenas. Todos los billetes de ferry entre las islas según itinerario. Medio día de Visita de la ciudad de Atenas. Asistencia al viajero 24h/7 en español. Seguro de Viaje (solo en el circuito)."
    ],
    imagen: "/img/grupal2.jpeg",
    pdf: "/pdfs/itinerario-ruta-iberica.pdf",
    whatsappText: "Hola! Quiero consultar por el viaje a Tesoros Milenarios"
  },
  
  
];

module.exports = viajes;
