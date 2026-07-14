export default {
  meta: {
    title: 'Alexander Hobelsberger — Software Developer',
    description:
      'Interactive CV of Alexander Hobelsberger — Software developer focused on web development and production-grade JavaScript systems.',
  },

  nav: {
    process: 'Approach',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    creative: 'Creative',
    contact: 'Contact',
  },

  ui: {
    skipToContent: 'Skip to content',
    downloadCv: 'Download PDF CV',
    viewGithub: 'GitHub',
    getInTouch: 'Get in touch',
    scrollHint: 'Continue',
    language: 'Language',
    retroLink: 'Discover the retro version',
    retroHint: 'For the curious: a glimpse into the past',
    available: 'Open to opportunities',
    location: 'Stuttgart, DE',
    backToTop: 'Back to top',
  },

  hero: {
    role: 'Software Developer',
    tagline: 'Web · JavaScript · Production Systems',
    summary:
      'Software developer focused on web development and thoughtful digital product delivery. For me, the priority is not just technical implementation, but first understanding requirements, goals, and the context of use. On that basis, I develop solutions — using prototyping, testing, and appropriate processes depending on the project — that are clearly structured, maintainable, and make sense from a domain perspective.',
  },

  process: {
    label: 'Approach',
    title: 'From understanding to delivery',
    subtitle:
      'Structured, iterative, and with a clear focus on requirements, quality, and meaningful implementation. I start by thinking through the problem, the domain requirements, and what the software is meant to achieve — rather than coding blindly. When the project calls for it, I involve stakeholders and follow a human-centered design process. Depending on context, I work pragmatically and solution-oriented instead of dogmatically following a fixed process.',
    steps: [
      {
        id: 'requirements',
        title: 'Requirements analysis',
        items: [
          'User stories & use cases',
          'Stakeholder interviews',
          'Functional & non-functional requirements',
        ],
      },
      {
        id: 'design',
        title: 'Design & prototyping',
        items: [
          'Figma concepts & wireframes',
          'Click dummies',
          'Stakeholder feedback & testing',
        ],
      },
      {
        id: 'implementation',
        title: 'Implementation',
        items: [
          'Structured technical execution',
          'Frontend, backend & APIs',
          'Clean code & maintainable architecture',
        ],
      },
      {
        id: 'testing',
        title: 'Testing & iteration',
        items: [
          'Validation & quality assurance',
          'Feedback loops',
          'Refinement through to rollout',
        ],
      },
    ],
    kanban: {
      title: 'Project management',
      text: 'Requirements are captured as tickets, structured in a Kanban board, and implemented step by step — transparent and traceable.',
      columns: [
        {
          name: 'Backlog',
          tickets: ['Capture requirements', 'Define scope', 'Technical concept'],
        },
        {
          name: 'In Progress',
          tickets: ['API development', 'UI components', 'Integration'],
        },
        {
          name: 'Done',
          tickets: ['Review', 'Deployment', 'Documentation'],
        },
      ],
    },
  },

  experience: {
    label: 'Experience',
    title: 'Professional background',
    roles: [
      {
        id: 'ectool',
        company: 'ectool EckStack Technologies GmbH',
        location: 'Hybrid · Waiblingen',
        title: 'Software Developer',
        period: 'Since 02/2025',
        stack: ['Node.js', 'MongoDB', 'Docker', 'React', 'GTM'],
        bullets: [
          'Development and rollout of a TCF-certified consent management platform — in production on 120+ webshops and websites.',
          'Backend with Node.js and MongoDB; operation on Docker infrastructure across two Hetzner servers in Germany with a replica set.',
          'Privacy-oriented tracking and consent processes under GDPR and TCF requirements.',
          'End-to-end delivery from Figma concepts through REST APIs to Google Tag Manager integration.',
          'Tracking pixel integration and support for conversion tracking in client projects.',
          'Privacy-first tracking setup without processing personal data within the system.',
        ],
      },
      {
        id: 'experteam-dev',
        company: 'Experteam GmbH',
        location: 'Remote',
        title: 'Software Developer',
        period: '03/2024 – 02/2025',
        stack: ['Node.js', 'React', 'Tracking', 'GTM'],
        bullets: [
          'Concept and development of an early CMP prototype as the foundation for production rollout on 120+ websites.',
          'Conversion and analytics tracking for webshops across 20+ client projects.',
          'Technical support for internal and external teams on tracking, webshop, and implementation questions.',
          'Progressive development from support into technical project delivery and near full-stack tasks.',
        ],
      },
      {
        id: 'experteam-student',
        company: 'Experteam GmbH',
        location: 'Remote',
        title: 'Working Student',
        period: '09/2021 – 02/2024',
        stack: ['React', 'REST', 'CRUD'],
        bullets: [
          'Modernization of a monolithic PVX-Plus application based on a BASIC framework.',
          'Migration of the GUI to a React frontend with structural separation of UI and backend logic.',
          'Migration of existing server scripts from WindX/NTHost to a REST-based backend.',
          'Implementation of core CRUD functions and contribution to maintainable architecture for future extensions.',
          'Improved maintainability and usability through clear component boundaries and a modernized system structure.',
        ],
      },
      {
        id: 'soundland',
        company: 'Soundland GmbH',
        location: 'Fellbach',
        title: 'Commercial Employee',
        period: '06/2017 – 02/2019',
        stack: [],
        bullets: ['Sales of musical instruments in specialized retail.'],
      },
    ],
  },

  skills: {
    label: 'Core Skills',
    title: 'Technical stack & working style',
    groups: [
      {
        name: 'Frontend',
        items: ['React', 'Vue', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
      },
      {
        name: 'Backend',
        items: ['Node.js', 'REST APIs', 'Business Logic', 'Data Access', 'CRUD Services'],
      },
      {
        name: 'Databases',
        items: ['MongoDB', 'MySQL'],
      },
      {
        name: 'Deployment',
        items: ['Docker', 'Replica Set', 'Hetzner', 'Production Deployments'],
      },
      {
        name: 'Tools & Workflow',
        items: ['GitHub', 'Figma', 'Google Tag Manager', 'Cursor AI'],
      },
      {
        name: 'Professional',
        items: [
          'Quick onboarding',
          'Requirements analysis',
          'Structured thinking',
          'Human-Centered Design',
          'Web tracking',
          'Code reviews',
          'Clean code',
          'AI tools in daily dev',
          'Cross-disciplinary work',
        ],
      },
    ],
  },

  education: {
    label: 'Education',
    title: 'Academic & vocational background',
    items: [
      {
        institution: 'Hochschule Reutlingen',
        degree: 'B.Sc. Media and Communication Informatics',
        period: '03/2019 – 02/2024',
        description:
          'Interdisciplinary program at the intersection of media, design, UX, and software development — with practical project work and a broad technical foundation.',
        areas: [
          'Media, design & UX',
          'Software development',
          'Object-oriented programming',
          'Java · Python · C · C++',
          'Scrum & agile methods',
          'Network technology',
          'Deployment & cloud computing',
          'Databases · SQL · NoSQL',
          'Quick onboarding into new systems & languages',
        ],
      },
      {
        institution: 'Gewerbliche Berufsschule Waiblingen',
        degree: 'Commercial apprenticeship at Soundland GmbH',
        period: '08/2016 – 07/2018',
        description: 'Commercial training in retail for musical instruments.',
        areas: [],
      },
      {
        institution: 'Popcollege Stuttgart',
        degree: 'State-certified music and sound designer',
        period: '08/2013 – 07/2015',
        description:
          'Vocational training in music production, film sound, and sound design — the foundation for my technical and creative profile.',
        areas: ['Film sound', 'Music production', 'Sound design', 'Studio work'],
      },
    ],
  },

  creative: {
    label: 'Creative',
    title: 'Where technology meets music',
    intro:
      'Alongside software development, I actively produce music — a creative counterpart that sharpens my understanding of design, sound, and technical systems.',
    items: [
      {
        title: 'Home studio in Stuttgart',
        text: 'Built my own studio for production, recording, and mixing — from acoustics to signal flow.',
      },
      {
        title: 'Band & guitar',
        text: 'Active musician in a band — live experience, arrangement, and collaboration.',
      },
      {
        title: 'Production & post-production',
        text: 'Music production, mixing, and mastering with professional workflows and tools.',
      },
      {
        title: 'Synthesizers & sound design',
        text: 'Passion for analog and software synthesizers — currently first experiments with Max for Live for visualization and synth programming.',
      },
    ],
    tools: ['Ableton Live', 'Logic Pro X', 'Pro Tools', 'Max for Live'],
    goal: 'Next goal: programming synthesizers and deepening sound design.',
  },

  contact: {
    label: 'Contact',
    title: 'Let\'s talk',
    subtitle: 'Open to full-time roles, freelance projects, and technical conversations.',
    email: 'hobelsbergeralex@gmail.com',
    phone: '+49 159 01996831',
    github: 'github.com/alexhobel',
    address: 'Seyfferstr. 80, 70197 Stuttgart',
  },

  footer: {
    copyright: 'Alexander Hobelsberger',
    built: 'Interactive CV',
  },
};
