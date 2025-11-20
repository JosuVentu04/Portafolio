const about = {
  name: 'Brandon',
  fullName: 'Brandon Josue Rodriguez Ventura',
  role: 'Desarrollador de Software',
  company: '',
  description: [
    `Desarrollador Fullstack con formación en JavaScript, Python, React y Flask, orientado a la creación de soluciones web dinámicas, 
     seguras y escalables. Poseo experiencia desarrollando interfaces intuitivas y APIs robustas, aplicando buenas prácticas de desarrollo y 
     control de versiones con Git. Destaco por mi capacidad de aprendizaje autónomo, pensamiento analítico y enfoque en la experiencia 
     del usuario. He trabajado en equipos ágiles, desarrollando proyectos completos desde el frontend hasta la lógica del backend, 
     integrando bases de datos relacionales y autenticación con JWT. Busco oportunidades para crecer profesionalmente y aportar valor en 
     proyectos tecnológicos con impacto real. 
     `,
  ],
  resume: '/documents/CVJosue.pdf',
  social: {
    github: 'https://github.com/JosuVentu04',
  },
  greetingEmoji: '👋',
}

const projects = [
  {
    thumbnail: '/images/MarcelPay.png',
    name: 'Marcel Pay',
    description: [
      `Estoy desarrollando una plataforma integral para la venta de dispositivos móviles a crédito, que conecta procesos de identidad, finanzas y soporte técnico en un solo sistema.
       La aplicación permite registrar clientes, validar su identidad biométrica, consultar su historial crediticio, generar y firmar contratos digitales, administrar dispositivos, registrar pagos, realizar cortes de caja y gestionar solicitudes de soporte.
       El objetivo principal es automatizar y controlar todo el proceso de venta a crédito, garantizando seguridad, trazabilidad y una operación más rápida tanto para vendedores como para administradores.`,
    ],
    stack: ['Python', 'Flask', 'SQLAlchemy', 'React.js', 'HTML', 'CSS', 'Bootstrap'],
    livePreview: 'Pendiente',
    sourceCode: 'https://github.com/JosuVentu04/dashboard-react',
  },
  {
    thumbnail: '/images/GastroClick.png',
    name: 'GastroClick',
    description: [
      ` Aplicación web full stack desarrollada para restaurantes, que permite gestionar reservas de mesas, órdenes para recolección,
      administración de productos y seguimiento en cocina. Ofrece roles diferenciados para administradores, mesoneros,  cocineros, y
      clientes con funcionalidades como envío de correos de confirmación, vistas informativas y localización mediante Google Maps.`,
    ],
    stack: ['Python', 'Flask', 'SQLAlchemy', 'React.js', 'HTML', 'CSS', 'Bootstrap'],
    livePreview: 'pendiente',
    sourceCode: 'https://github.com/JosuVentu04/GastroClick-Project',
  },
  {
    thumbnail: '/images/Star-Wars-Blog.png',
    name: 'Blog de StarWars',
    description: [
      `interfaz interactiva con React, HTML y Bootstrap que permite a los usuarios explorar información detallada sobre 
      personajes, planetas y vehículos del universo Star Wars, consumiendo datos dinámicamente desde la API pública SWAPI.`,
    ],
    stack: ['React.js', 'HTML', 'CSS', 'Bootstrap'],
    livePreview: 'https://iroko-group.com/',
    sourceCode: 'https://github.com/JosuVentu04/StarWarsBlog-Project',
  },
]

const skills = [
  'Node JS',
  'React JS',
  'HTML',
  'CSS',
  'Git',
  'CI/CD',
  'PostgreSQL',
  'MySQL',
  'Flask',
  'BootStrap',
  'Postman',
  'Linux',
  'Bash',
]

const contact = {
  email: 'venturajosue711@gmail.com',
}

const contacts = [
  {
    name: 'Email',
    link: 'mailto:venturajosue711@gmail.com',
    icon: 'fas fa-envelope',
  },
  {
    name: 'WhatsApp',
    link: 'https://wa.link/zmmypd',
    icon: 'fab fa-whatsapp',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/JosuVentu04',
    icon: 'fab fa-github',
  },
  // {
  //   name: 'Upwork',
  //   link: 'https://www.upwork.com/freelancers/~01a9b6b0b0c0c7f0b8',
  //   icon: 'fab fa-upwork',
  // },
  {
    name: 'Discord',
    link: 'https://discordapp.com/users/cuervochino23#4375',
    icon: 'fab fa-discord',
  }
]

export { about, projects, skills, contact, contacts }