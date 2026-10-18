const es = {
  language: {
    label: 'Idioma',
    choose: 'Elige un idioma',
    current: 'Español',
    options: {
      en: 'English',
      es: 'Español'
    }
  },
  card: {
    search: 'Buscar'
  },
  nav: {
    thisPC: 'Este equipo',
    projects: 'Proyectos',
    specs: 'Specs',
    contact: 'Contacto',
    blog: 'Blog',
    music: 'Música',
    themes: 'Temas',
    language: 'Idioma'
  },
  desktopIcons: {
    thisPCTitle: 'Este equipo',
    projectsTitle: 'Proyectos',
    specsTitle: 'Especificaciones',
    contactTitle: 'Contacto',
    blogTitle: 'Blog',
    musicTitle: 'Reproductor de música',
    themesTitle: 'Temas',
    languageTitle: 'Idioma'
  },
  paths: {
    welcome: '/home/bienvenida',
    about: '/home/especificaciones/acerca-de',
    projects: '/home/proyectos/pues...',
    contactChoose: '/home/contacto/elegir',
    contactSuccess: '/home/contacto/contacto-exitoso',
    contactFailed: '/home/contacto/contacto-fallido',
    blog: '/home/blog/entradas',
    mediaPlayer: '/home/reproductor',
    themes: '/home/ajustes/temas',
    language: '/home/ajustes/idioma',
    thankYou: '/home/gracias'
  },
  welcomeCard: {
    title: '¡Bienvenido!',
    role: 'Desarrollador Full Stack',
    name: 'Soy Fernando Ouviña',
    intro: `Aquí encontrarás mi trabajo más reciente, algo sobre mí y mis redes sociales. Mira mi `,
    github: 'Github',
    introAfterGithub: ` para ver en qué estoy trabajando ahora mismo.`,
    alsoCheck: `También mira mi `,
    linkedIn: 'LinkedIn',
    i: ' donde ',
    sometimes: 'a veces',
    postAbout: ' escribo sobre lo que hago.',
    andDontForget: `Y no olvides visitar mi blog también `,
    maybeOneDay: 'algún día',
    blogClosing: `, allí publicaré cosas interesantes.`,
    githubProfile: 'Perfil de Github',
    linkedInProfile: 'Perfil de LinkedIn',
    personalBlog: 'Blog personal'
  },
  about: {
    title: 'Sobre mí',
    description: `Soy Desarrollador Web Full Stack con más de 3 años de experiencia creando sitios y aplicaciones web modernas, funcionales y con fuerte atención al detalle. Trabajo con React, Next.js, Vue.js, Node.js y PHP, tanto en proyectos personales como para clientes reales.`,
    descriptionAfter: `Actualmente busco nuevos desafíos donde pueda aportar valor, seguir aprendiendo y crecer profesionalmente.`,
    stack: 'Este es mi stack actual'
  },
  projects: {
    title: 'Mi trabajo más reciente',
    heading: 'Cuatro proyectos de los que estoy orgulloso.',
    subheading: 'Haz clic en cualquiera para abrir la versión live.',
    openLiveVersion: 'Abrir versión live',
    items: {
      ishinoguro: {
        summary:
          'Portfolio y PWA de gestión de encargos que construí desde cero para una artista digital — atraía entre 30 y 50 visitas al día.'
      },
      grandFantasia: {
        summary:
          'Sitio web oficial del juego con registro, descargas y noticias. También mantuve el VPS con Ubuntu que lo alojaba.'
      },
      xkcd: {
        summary:
          'El archivo de cómics de xkcd reconstruido en Next.js: extraje los cómics de la fuente y los serví con generación estática.'
      },
      giphy: {
        summary:
          'Buscador de GIFs con scroll infinito y carga diferida — el proyecto donde mejoré mis hooks de React y mis custom hooks.'
      }
    }
  },
  contact: {
    warning: 'ADVERTENCIA',
    hackingDetected: 'HACKEO DETECTADO',
    question: '¿Quieres contactar con el administrador de esta página?',
    yes: 'Sí',
    no: 'No'
  },
  contactYes: {
    nicelyDone: '¡Bien hecho!',
    fillForm: 'Ahora rellena este formulario',
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensaje',
    send: 'Enviar',
    alternatively:
      'También puedes contactarme a través de mis redes sociales o mi correo'
  },
  contactNo: {
    compromised: 'Sistema comprometido',
    selfDestruct:
      'Este dispositivo se autodestruirá a menos que pulses el botón rojo de abajo'
  },
  blog: {
    wip: 'Cuidado ⛔ gente trabajando 👷'
  },
  audioPlayer: {
    previousSong: 'Canción anterior',
    nextSong: 'Canción siguiente',
    play: 'Reproducir',
    pause: 'Pausar',
    mute: 'Silenciar',
    unmute: 'Activar sonido',
    seek: 'Posición',
    volume: 'Volumen'
  },
  themeCard: {
    appearance: 'Apariencia',
    chooseTheme: 'Elige un tema',
    themes: {
      light: 'Clásico',
      dark: 'Medianoche',
      ocean: 'Océano',
      forest: 'Bosque',
      sunset: 'Atardecer',
      yellow: 'Miel'
    }
  },
  thankYou: {
    title: '¡Gracias por tu mensaje!',
    subtitle: 'Me pondré en contacto contigo lo antes posible.',
    redirecting: 'Redirigiéndote a la página de inicio en',
    seconds: 'segundos...'
  }
};

export default es;
