export const CurriculumData = {
  photo: {
    description: 'Profile Photo on LinkedIn',
    url: 'https://media-exp1.licdn.com/dms/image/C4E03AQERm1vOud2Veg/profile-displayphoto-shrink_800_800/0/1603899574852?e=1628121600&v=beta&t=2J-ppMPKpZibfPQ5-0jj0PMztIRRc04fwaMLynfE_xE',
  },
  name: 'Kássio Venícios Alves Carvalho',
  contact: {
    phone: '+55 (86) 99828-6400',
    email: 'kassio_venicios@hotmail.com',
  },
  address: {
    district: 'Promorar',
    city: 'Teresina',
    state: 'Piauí',
    country: 'Brasil',
  },
  professionalXP: [
    {
      companyName: 'Celcoin',
      responsability: 'Desenvolvedor Front-end',
      jobDescription: 'Descrição.',
      tools: 'Tecnologias.',
      startDate: {
        month: 6,
        year: 2021,
      },
      endDate: {
        month: 0,
        year: 0,
        current: true,
      },
    },
    {
      companyName: 'Maida.health',
      responsability: 'Desenvolvedor Front-end',
      jobDescription: 'Descrição.',
      tools: 'Tecnologias.',
      startDate: {
        month: 6,
        year: 2020,
      },
      endDate: {
        month: 7,
        year: 2020,
      },
    },
    {
      companyName: 'Sistema CEV',
      responsability: 'Desenvolvedor Front-end',
      jobDescription: 'Descrição.',
      tools: 'Tecnologias.',
      startDate: {
        month: 3,
        year: 2020,
      },
      endDate: {
        month: 8,
        year: 2020,
      },
    },
    {
      companyName: 'Simples Informática',
      responsability: 'Desenvolvedor Front-end',
      jobDescription: 'Descrição.',
      tools: 'Tecnologias.',
      startDate: {
        month: 7,
        year: 2019,
      },
      endDate: {
        month: 2,
        year: 2020,
      },
    },
    {
      companyName: 'GoNuvem',
      responsability: 'Desenvolvedor Web',
      jobDescription: 'Descrição.',
      tools: 'Tecnologias.',
      startDate: {
        month: 5,
        year: 2018,
      },
      endDate: {
        month: 2,
        year: 2019,
      },
    },
    {
      companyName: 'TCE-PI',
      responsability: 'Estagiário de TI',
      jobDescription: 'Descrição.',
      tools: 'Tecnologias.',
      startDate: {
        month: 8,
        year: 2018,
      },
      endDate: {
        month: 7,
        year: 2019,
      },
    },
    {
      companyName: 'NTI-UFPI',
      responsability: 'Estagiário de TI',
      jobDescription: 'Descrição.',
      tools: 'Tecnologias.',
      startDate: {
        month: 3,
        year: 2017,
      },
      endDate: {
        month: 7,
        year: 2018,
      },
    },
  ],
  qualifications: [
    'Qualificação 1.',
    'Qualificação 2.',
    'Qualificação 3.',
    '...',
  ],
  education: [
    {
      title: 'Graduado em Ciência da Computação',
      institution: 'Universidade Federal do Piauí',
      projects: [
        'Projetos na Universidade.',
        '2018 – 2019: ...',
        '2017 – 2018: ...',
        '...',
      ],
      startDate: {
        month: 3,
        year: 2015,
      },
      endDate: {
        month: 6,
        year: 2019,
      },
    },
    {
      title: 'Ensino Médio (2º grau)',
      institution: 'UNESPP, Teresina - PI, Brasil.',
      projects: [],
      startDate: {
        month: 2,
        year: 2012,
      },
      endDate: {
        month: 11,
        year: 2014,
      },
    }
  ],
  extensionCourses: [
    'Minicurso de programação em Django.',
    'HACKATRUCK EAD: Conceitos e Fundamentos: Lógica de Programação, Orientação a Objetos e SWIFT.',
    'HACKATRUCK PRESENCIAL: Fundamentos e Práticas na Linguagem de Programação Swift.',
  ],
  interests: [
    'Meus Interesses.',
    '...',
    'Disponibilidade de trabalhar remotamente.',
  ],
};

const lang = 'pt-br';

const CurriculumTextPtBr = {
  phone: 'Telefone',
  professionalXP: 'Experiência profissional',
  current: 'Atual',
  qualifications: 'Qualificações',
  education: 'Educação',
  extensionCourses: 'Cursos de extensão na área de interesse do curso de Ciência da Computação:',
  interests: 'Interesses',
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
};

const CurriculumTextEnUs = {
  phone: 'Phone',
  professionalXP: 'Professional experience',
  current: 'Current',
  qualifications: 'Qualifications',
  education: 'Education',
  extensionCourses: 'Extension courses in the Computer Science area of interest:',
  interests: 'Interests',
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December', 
  ],
};

const text = {
  'pt-br': CurriculumTextPtBr,
  'en-us': CurriculumTextEnUs,
};

export const CurriculumText = key => text[lang][key];
