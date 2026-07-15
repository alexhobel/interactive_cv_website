export default {
  meta: {
    title: "Alexander Hobelsberger — Softwareentwickler",
    description:
      "Interaktiver Lebenslauf von Alexander Hobelsberger — Softwareentwickler mit Fokus auf Webentwicklung und produktionsreife JavaScript-Systeme.",
  },

  nav: {
    process: "Arbeitsweise",
    experience: "Erfahrung",
    skills: "Skills",
    education: "Bildung",
    creative: "Kreativ",
    contact: "Kontakt",
  },

  ui: {
    skipToContent: "Zum Inhalt springen",
    downloadCv: "PDF Lebenslauf",
    viewGithub: "GitHub",
    getInTouch: "Kontakt aufnehmen",
    scrollHint: "Weiter",
    language: "Sprache",
    retroLink: "Retro Experience",
    retroHint: "Für Neugierige: ein Blick in die Vergangenheit",
    available: "Verfügbar für Projekte",
    location: "Stuttgart, DE",
    backToTop: "Nach oben",
    expand: "Details anzeigen",
    collapse: "Details ausblenden",
  },

  hero: {
    role: "Softwareentwickler",
    tagline: "Webdevelopment · Produktionssysteme",
    summary:
      "Softwareentwickler mit Schwerpunkt auf Webentwicklung und durchdachter digitaler Produktumsetzung. Im Fokus steht für mich nicht nur die technische Implementierung, sondern zuerst das Verständnis für Anforderungen, Zielsetzung und Nutzungskontext. Auf dieser Basis entwickle ich – je nach Projekt mit Prototyping, Testing und passenden Prozessen – Lösungen, die klar strukturiert, wartbar und fachlich sinnvoll sind.",
  },

  process: {
    label: "Arbeitsweise",
    title: "Vom Verständnis zur Umsetzung",
    subtitle:
      "Strukturiert, iterativ und mit klarem Blick auf Anforderungen, Qualität und sinnvolle Umsetzung. Ich denke zuerst über das Problem, die fachlichen Anforderungen und die Zielsetzung der Software nach — und programmiere nicht einfach blind los. Wenn es das Projekt sinnvoll hergibt, beziehe ich Stakeholder ein und orientiere mich am Human Centered Design Process. Je nach Kontext arbeite ich dabei pragmatisch und lösungsorientiert, statt einem festen Prozess dogmatisch zu folgen.",
    steps: [
      {
        id: "requirements",
        title: "Anforderungsanalyse",
        items: [
          "User Stories & Use Cases",
          "Stakeholder-Interviews",
          "Funktionale & nicht-funktionale Anforderungen",
        ],
      },
      {
        id: "design",
        title: "Design & Prototyping",
        items: [
          "Figma-Konzepte & Wireframes",
          "Click-Dummies",
          "Feedback & Testing mit Stakeholdern",
        ],
      },
      {
        id: "implementation",
        title: "Implementierung",
        items: [
          "Strukturierte technische Umsetzung",
          "Frontend, Backend & APIs",
          "Clean Code & wartbare Architektur",
        ],
      },
      {
        id: "testing",
        title: "Testing & Iteration",
        items: [
          "Validierung & Qualitätssicherung",
          "Feedback-Schleifen",
          "Feinschliff bis zum Rollout",
        ],
      },
    ],
  },

  experience: {
    label: "Berufserfahrung",
    title: "Beruflicher Werdegang",
    roles: [
      {
        id: "ectool",
        company: "ectool EckStack Technologies GmbH",
        location: "Hybrid · Waiblingen",
        title: "Softwareentwickler",
        period: "Seit 02/2025",
        stack: ["React", "REST", "CRUD"],
        bullets: [
          "Modernisierung einer monolithischen PVX-Plus Anwendung auf Basis eines BASIC-Frameworks.",
          "Migration der GUI in ein React-Frontend mit struktureller Trennung von UI und Backend-Logik.",
          "Überführung bestehender Server-Skripte aus WindX/NTHost in ein REST-basiertes Backend.",
          "Umsetzung zentraler CRUD-Funktionen und Mitarbeit an wartbarer Architektur für zukünftige Erweiterungen.",
          "Verbesserung von Wartbarkeit und Usability durch klare Komponentengrenzen und modernisierte Systemstruktur.",
        ],
      },
      {
        id: "experteam-dev",
        company: "Experteam GmbH",
        location: "Remote",
        title: "Softwareentwickler",
        period: "03/2024 – 02/2025",
        stack: ["Node.js", "MongoDB", "Docker", "React", "GTM"],
        bullets: [
          "Entwicklung und Rollout einer TCF-zertifizierten Consent-Management-Plattform — produktiv auf über 120 Webshops und Websites.",
          "Backend mit Node.js und MongoDB; Betrieb in Docker-Infrastruktur auf zwei Hetzner-Servern in Deutschland mit Replica Set.",
          "Datenschutzorientierte Tracking- und Consent-Prozesse im Rahmen von DSGVO- und TCF-Anforderungen.",
          "End-to-End-Umsetzung von Figma-Konzepten über REST-APIs bis zur Einbindung in Google Tag Manager.",
          "Integration von Tracking-Pixeln und Unterstützung bei Conversion-Tracking für Kundenprojekte.",
          "Privacy-first Tracking-Setup ohne Verarbeitung personenbezogener Daten innerhalb des Systems.",
        ],
      },
      {
        id: "experteam-student",
        company: "Experteam GmbH",
        location: "Remote",
        title: "Werkstudent",
        period: "09/2021 – 02/2024",
        stack: ["Node.js", "React", "Tracking", "GTM"],
        bullets: [
          "Konzeption und Entwicklung eines frühen CMP-Prototyps als Grundlage für den produktiven Rollout auf über 120 Websites.",
          "Conversion- und Analyse-Tracking für Webshops in mehr als 20 Kundenprojekten.",
          "Technische Unterstützung interner und externer Teams bei Tracking-, Webshop- und Implementierungsfragen.",
          "Schrittweise Entwicklung vom Support in technische Projektumsetzung und Full-Stack-nahe Aufgaben.",
        ],
      },
      {
        id: "soundland",
        company: "Soundland GmbH",
        location: "Fellbach",
        title: "Kaufmännischer Angestellter",
        period: "06/2017 – 02/2019",
        stack: [],
        bullets: ["Fachverkäufer für Musikinstrumente im Fachhandel."],
      },
    ],
  },

  skills: {
    label: "Kernkompetenzen",
    groups: [
      {
        name: "Frontend",
        items: ["React", "Vue", "JavaScript", "TypeScript", "HTML", "CSS"],
      },
      {
        name: "Backend",
        items: [
          "Node.js",
          "REST-APIs",
          "Business-Logik",
          "Datenzugriff",
          "CRUD-Services",
        ],
      },
      {
        name: "Datenbanken",
        items: ["MongoDB", "MySQL"],
      },
      {
        name: "Deployment",
        items: ["Docker", "Replica Set", "Hetzner", "Produktive Deployments"],
      },
      {
        name: "Tools & Workflow",
        items: ["Figma", "Google Tag Manager", "Cursor AI"],
      },
      {
        name: "Fachlich",
        items: [
          "Schnelle Einarbeitung",
          "Anforderungsanalyse",
          "Strukturiertes Denken",
          "Human-Centered Design",
          "Web-Tracking",
          "Code Reviews",
          "Clean Code",
          "AI-Tools im Dev-Alltag",
          "Fachübergreifendes Arbeiten",
        ],
      },
    ],
  },

  education: {
    label: "Bildungsweg",
    title: "Ausbildung & Studium",
    items: [
      {
        institution: "Hochschule Reutlingen",
        degree: "B. Sc. Medien- und Kommunikationsinformatik",
        period: "03/2019 – 02/2024",
        description:
          "Interdisziplinärer Studiengang an der Schnittstelle von Medien, Design, UX und Softwareentwicklung — mit praxisnaher Projektarbeit und breitem technischem Fundament.",
        areas: [
          "Medien, Design & UX",
          "Softwareentwicklung",
          "Objektorientierte Programmierung",
          "Java · Python · C · C++",
          "Scrum & agile Methoden",
          "Netzwerktechnik",
          "Deployment & Cloud Computing",
          "Datenbanken · SQL · NoSQL",
          "Schnelle Einarbeitung in neue Systeme & Sprachen",
        ],
      },
      {
        institution: "Gewerbliche Berufsschule Waiblingen",
        degree: "Ausbildung Kaufmann Einzelhandel bei Soundland GmbH",
        period: "08/2016 – 07/2018",
        description:
          "Kaufmännische Berufsausbildung im Fachhandel für Musikinstrumente.",
        areas: [],
      },
      {
        institution: "Popcollege Stuttgart",
        degree: "Staatlich anerkannter Musik- und Sounddesigner",
        period: "08/2013 – 07/2015",
        description:
          "Berufliche Ausbildung in Musikproduktion, Filmtönung und Sounddesign — Grundlage für mein technisches und kreatives Profil.",
        areas: ["Filmton", "Musikproduktion", "Sounddesign", "Studiotechnik"],
      },
    ],
  },

  creative: {
    label: "Kreativ",
    title: "Technologie trifft Musik",
    intro:
      "Neben der Softwareentwicklung produziere ich aktiv Musik — ein kreativer Gegenpol, der mein Verständnis für Gestaltung, Klang und technische Systeme schärft.",
    items: [
      {
        title: "Eigenes Studio in Stuttgart",
        text: "Aufgebautes Homestudio für Produktion, Recording und Mixing — von der Akustik bis zum Signalweg.",
      },
      {
        title: "Band & Gitarre",
        text: "Aktives Musizieren in einer Band — Live-Erfahrung, Arrangement und Zusammenspiel.",
      },
      {
        title: "Produktion & Postproduktion",
        text: "Musikproduktion, Mixing und Mastering mit professionellen Workflows und Tools.",
      },
      {
        title: "Synthesizer & Sounddesign",
        text: "Begeisterung für analoge und softwarebasierte Synthesizer — aktuell erste Experimente mit Max for Live für Visualisierung und Synth-Programmierung.",
      },
    ],
    tools: ["Ableton Live", "Logic Pro X", "Pro Tools", "Max for Live"],
    goal: "Nächstes Ziel: Synthesizer programmieren und Sounddesign weiter vertiefen.",
  },

  contact: {
    label: "Kontakt",
    title: "Lassen Sie uns sprechen",
    subtitle:
      "Offen für Festanstellungen, Freelance-Projekte und technische Gespräche.",
    email: "hobelsbergeralex@gmail.com",
    phone: "+49 159 01996831",
    github: "github.com/alexhobel",
    address: "Seyfferstr. 80, 70197 Stuttgart",
  },

  footer: {
    copyright: "Alexander Hobelsberger",
    built: "Interaktiver Lebenslauf",
  },
};
