export type WellnessProduct = {
  name: string;
  shortDescription: string;
  image: { src: string; alt: string };
  price: number | null;
  currency: "USD";
  priceStatus: "unconfirmed" | "confirmed-current-us";
};

export const landing = {
  header: { home: "Ir al inicio", registration: "Registrarme" },
  hero: {
    headline: "Una forma fresca de descubrir RINGANA.",
    copy: "Conoce los productos, resuelve tus dudas y recibe acompañamiento personal de Elisandra para comenzar paso a paso.",
    registration: "Quiero registrarme",
    contact: "Hablar con Elisandra",
    note: "Acompañamiento personal durante tu registro.",
  },
  // General draft copy: replace only with approved US-market wording.
  ringana: {
    eyebrow: "CONOCE RINGANA",
    headline: "Frescura, cuidado y una forma diferente de descubrir tus productos.",
    copy: "RINGANA es una marca austríaca con una propuesta centrada en productos frescos de cuidado personal y complementos. Elisandra puede ayudarte a conocer sus diferentes categorías y orientarte durante tus primeros pasos.",
    concepts: ["Cuidado personal", "Productos frescos", "Acompañamiento"],
  },
  about: {
    eyebrow: "CONOCE A ELISANDRA",
    headline: "Tu contacto personal para comenzar.",
    copy: "Elisandra te acompaña para conocer RINGANA, resolver tus dudas y entender el proceso de registro paso a paso.",
    contactCopy: "Antes de registrarte, puedes contactar con ella directamente para conversar sobre tus dudas y conocer cómo empezar.",
    contact: "Hablar con Elisandra",
  },
  gettingStarted: {
    eyebrow: "CÓMO EMPEZAR",
    headline: "Comenzar es sencillo.",
    intro: "Elisandra puede acompañarte durante todo el proceso para que sepas qué hacer en cada paso.",
    steps: [
      { title: "Abre el registro oficial", copy: "Accede al enlace oficial de registro cuando quieras comenzar." },
      { title: "Completa tus datos", copy: "Introduce la información solicitada durante el registro." },
      { title: "Indica quién te recomendó RINGANA", copy: "Este es el número de socia que debes indicar.", showMemberNumber: true },
      { title: "Confirma y continúa", copy: "Revisa tus datos y sigue las indicaciones finales del proceso." },
    ],
    memberLabel: "N.º de socia",
    copyLabel: "Copiar número",
    copiedLabel: "Copiado",
    copyError: "No se pudo copiar. Selecciona el número y cópialo manualmente.",
  },
  starterOptions: {
    eyebrow: "ELIGE SEGÚN TU PIEL",
    headline: "Encuentra la rutina para tu tipo de piel.",
    intro: "La rutina mantiene los mismos pasos de cuidado; la diferencia está en la selección de productos según las necesidades de cada piel. Elige tu tipo de piel para encontrar la opción más adecuada para ti.",
    options: [
      { name: "LIGHT", audience: "Piel grasa", copy: "Rutina de cuidado adaptada a piel grasa o con tendencia grasa. Pensada para acompañar las necesidades específicas de este tipo de piel.", price: 351.61, currency: "USD", points: 140.7, pointsDecimals: 1, image: { src: "/images/starter-options/light-hq.png", alt: "Productos del kit RINGANA LIGHT", width: 768, height: 512 } },
      { name: "MEDIUM", audience: "Piel mixta", copy: "Rutina de cuidado adaptada a piel mixta o normal. Una opción equilibrada para las necesidades específicas de este tipo de piel.", price: 356.16, currency: "USD", points: 142.60, pointsDecimals: 2, image: { src: "/images/starter-options/medium-hq.png", alt: "Productos del kit RINGANA MEDIUM", width: 768, height: 512 } },
      { name: "RICH", audience: "Piel seca", copy: "Rutina de cuidado adaptada a piel seca o con tendencia a necesitar mayor nutrición. Pensada para las necesidades específicas de este tipo de piel.", price: 393.26, currency: "USD", points: 158.3, pointsDecimals: 1, image: { src: "/images/starter-options/rich-hq.png", alt: "Productos del kit RINGANA RICH", width: 768, height: 512 } },
      { name: "SUPPLEMENTS", copy: "Una opción enfocada en la categoría de complementos.", price: 280.56, currency: "USD", points: 112.9, pointsDecimals: 1, image: { src: "/images/starter-options/supplements-hq.png", alt: "Productos del kit RINGANA SUPPLEMENTS", width: 768, height: 512 } },
    ],
    note: "Las opciones, disponibilidad y condiciones pueden cambiar. Consulta con Elisandra para conocer la información vigente.",
    contact: "Hablar con Elisandra",
    registration: "Quiero registrarme",
  },
  finalCta: {
    eyebrow: "¿LISTA PARA COMENZAR?",
    headline: "Da el siguiente paso con Elisandra.",
    copy: "Si quieres conocer RINGANA, resolver tus dudas o comenzar tu registro, Elisandra puede acompañarte personalmente.",
    registration: "Quiero registrarme",
    contact: "Hablar con Elisandra",
    memberLabel: "N.º de socia",
  },
  footer: {
    brand: "Elisandra",
    navigationLabel: "Navegación del pie de página",
    navigation: [
      { label: "Inicio", href: "#inicio" },
      { label: "RINGANA", href: "#ringana" },
      { label: "Elisandra", href: "#elisandra" },
      { label: "Cómo empezar", href: "#como-empezar" },
      { label: "Opciones", href: "#opciones" },
      { label: "Productos", href: "#productos" },
    ],
    note: "Presentación informativa de Elisandra Barzaga como RINGANA Ambassador. Precios, disponibilidad y condiciones pueden cambiar.",
    trademarkNote: "RINGANA es una marca de terceros y sus nombres y marcas pertenecen a sus respectivos titulares.",
  },
  wellnessProducts: {
    eyebrow: "DESCUBRE MÁS",
    headline: "Bienestar para distintos momentos de tu día.",
    intro: "Conoce algunas opciones de RINGANA y habla con Elisandra para descubrir cuál puede interesarte según lo que estás buscando.",
    contact: "Consultar con Elisandra",
    note: "Precios, disponibilidad y condiciones pueden cambiar. Consulta con Elisandra para confirmar la información vigente.",
    // Enter only verified current US prices and set priceStatus to confirmed-current-us.
    products: [
      { name: "DEA", shortDescription: "Una opción de la línea RINGANA pensada para complementar tu rutina diaria.", image: { src: "/images/products/dea-hq.png", alt: "RINGANA dea" }, price: null, currency: "USD", priceStatus: "unconfirmed" },
      { name: "BTY", shortDescription: "Una opción orientada a quienes buscan incorporar un producto de la línea beauty a su rutina.", image: { src: "/images/products/bty-hq.png", alt: "RINGANA bty" }, price: null, currency: "USD", priceStatus: "unconfirmed" },
      { name: "CHI", shortDescription: "Una opción de RINGANA para momentos en los que buscas una rutina más activa.", image: { src: "/images/products/chi-hq.png", alt: "RINGANA chi" }, price: null, currency: "USD", priceStatus: "unconfirmed" },
      { name: "ISI", shortDescription: "Una opción pensada para acompañar momentos de pausa y desconexión.", image: { src: "/images/products/isi-hq.png", alt: "RINGANA isi" }, price: null, currency: "USD", priceStatus: "unconfirmed" },
    ] satisfies WellnessProduct[],
  },
} as const;
