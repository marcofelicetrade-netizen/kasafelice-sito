import { ServiceItem, PropertyListing } from '../types';

export const BRAND_INFO = {
  name: 'KasaFelice',
  founder: 'Felice Marco',
  title: 'Agente Immobiliare & Mediatore Marittimo',
  slogan: 'Le persone prima degli immobili.',
  heroSubtitle:
    'Mediazione immobiliare, marittima e consulenza. Un rapporto diretto e trasparente, dalla prima valutazione fino alla conclusione dell\'operazione.',

  // Telefono principale
  phone: '+39 377 381 3986',
  phoneDisplay: '+39 377 381 3986',

  // WhatsApp
  whatsappPhone: '+39 324 876 3190',
  whatsappMessage:
    'Ciao Felice, ti contatto dal sito KasaFelice.it e vorrei ricevere maggiori informazioni.',

  email: 'info@kasafelice.it',
  location: 'Lago di Garda & Territorio Nazionale',
  operatingArea: 'Lago di Garda e territorio nazionale',
  hours: 'Su appuntamento'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'vendita-acquisizione',
    title: 'Vendita e Acquisizione Immobiliare',
    shortDescription:
      'Gestione completa della compravendita di immobili residenziali e di pregio con cura e riservatezza.',
    fullDescription:
      'Accompagnamento dedicato nella vendita o nell\'acquisto di immobili. Dalla valorizzazione iniziale alla ricerca mirata dell\'acquirente o dell\'immobile ideale, garantendo discrezione e tutela in ogni fase.',
    iconName: 'Home',
    category: 'immobiliare',
    features: [
      'Valutazione e posizionamento sul mercato',
      'Selezione e qualificazione degli acquirenti',
      'Gestione delle visite e trattativa riservata',
      'Assistenza continua fino alla conclusione'
    ]
  },
  {
    id: 'valutazione-immobile',
    title: 'Valutazione dell\'Immobile',
    shortDescription:
      'Stima accurata e motivata del reale valore di mercato del tuo immobile.',
    fullDescription:
      'Un\'analisi attenta delle caratteristiche dell\'immobile e del mercato di riferimento per definire il valore corretto e massimizzare il risultato della vendita, senza sovrastime illusorie.',
    iconName: 'TrendingUp',
    category: 'consulenza',
    features: [
      'Analisi comparativa di mercato',
      'Valutazione delle peculiarità dell\'immobile',
      'Stima chiara e motivata',
      'Consulenza preliminare personalizzata'
    ]
  },
  {
    id: 'mediazione-immobiliare',
    title: 'Mediazione Immobiliare',
    shortDescription:
      'Presenza costante e imparziale a garanzia dell\'accordo tra venditore e acquirente.',
    fullDescription:
      'La mediazione fondata sul dialogo, sulla chiarezza e sull\'equilibrio tra le parti. Felice Marco segue personalmente ogni passaggio della trattativa a tutela della serenità di entrambe le parti.',
    iconName: 'Users',
    category: 'immobiliare',
    features: [
      'Raccordo equilibrato e trasparente tra le parti',
      'Predisposizione e gestione della proposta di acquisto',
      'Trattativa economica chiara',
      'Gestione preventiva di ogni aspetto contrattuale'
    ]
  },
  {
    id: 'consulenza-assistenza',
    title: 'Consulenza e Assistenza alla Compravendita',
    shortDescription:
      'Supporto tecnico, documentale e contrattuale fino al rogito notarile.',
    fullDescription:
      'Verifica meticolosa della documentazione, conformità urbanistica e catastale, e coordinamento con i professionisti coinvolti per arrivare al rogito notarile in totale sicurezza.',
    iconName: 'ShieldCheck',
    category: 'consulenza',
    features: [
      'Verifica della documentazione catastale e urbanistica',
      'Redazione e registrazione del contratto preliminare',
      'Coordinamento con notaio e tecnici',
      'Assistenza fino alla stipula definitiva'
    ]
  },
  {
    id: 'cessione-attivita',
    title: 'Cessione di Attività Commerciali',
    shortDescription:
      'Mediazione riservata per la vendita o acquisizione di attività e locali commerciali.',
    fullDescription:
      'Supporto specializzato per il passaggio generazionale, la cessione d\'azienda o il subentro in attività commerciali, gestito con la massima riservatezza e attenzione agli aspetti contrattuali.',
    iconName: 'Briefcase',
    category: 'commerciale',
    features: [
      'Trattativa condotta con riservatezza',
      'Incontro tra domanda e offerta qualificata',
      'Supporto per la cessione o rinegoziazione della locazione',
      'Assistenza lungo tutte le fasi del subentro'
    ]
  },
  {
    id: 'mediazione-marittima',
    title: 'Mediazione Marittima e Imbarcazioni',
    shortDescription:
      'Consulenza e intermediazione dedicata per la compravendita di imbarcazioni e yacht.',
    fullDescription:
      'Un servizio dedicato al settore nautico condotto da Felice Marco: compravendita di imbarcazioni da diporto, gestione documentale marittima e consulenza per armatori.',
    iconName: 'Anchor',
    category: 'nautica',
    features: [
      'Compravendita di imbarcazioni e yacht',
      'Supporto per perizie tecniche e prove in mare',
      'Gestione documentale e passaggi di proprietà navali',
      'Consulenza personalizzata per armatori'
    ]
  }
];

export const METHOD_PILLARS = [
  {
    icon: 'HeartHandshake',
    title: 'Le Persone Prima di Tutto',
    description:
      'Ascolto autentico, attenzione alle tue esigenze reali e un rapporto umano e diretto in ogni fase.'
  },
  {
    icon: 'Award',
    title: 'Competenza e Professionalità',
    description:
      'Dedizione diretta di Felice Marco nei settori immobiliare e marittimo per offrirti sicurezza e precisione.'
  },
  {
    icon: 'Compass',
    title: 'Consulenza su Misura',
    description:
      'Soluzioni modellate sulle tue necessità specifiche, evitando risposte standardizzate.'
  },
  {
    icon: 'Shield',
    title: 'Trasparenza e Riservatezza',
    description:
      'Chiarezza totale in ogni passaggio, onestà e massima discrezione a tutela della tua privacy.'
  }
];

// Struttura predisposta per gli annunci reali che verranno inseriti successivamente
export const SHOWCASE_LISTINGS: PropertyListing[] = [];
